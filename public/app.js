var app = angular.module('plannerApp', []);

app.directive('planner',function (plannerFactory){
	return{
		restrict:'E',
		scope: false,
		link:function(scope, elem, attrs){
			
			scope.addHeading = function(index){
				if(scope.headingName !== ''){
					var heading= {};
					heading.name = scope.headingName;
					heading.id = plannerFactory.getCount();
					plannerFactory.put(heading);
				}
				scope.restore();
				scope.headings = plannerFactory.getAll();
			};
		
			scope.removeHeading = function(index){
				plannerFactory.delete(index);
				scope.restore();
				scope.headings = plannerFactory.getAll();

			};

			scope.restore =function(){
				scope.headingName = '';
			};


			scope.addTask = function(index,taskName){
				if(taskName == undefined){
					return;
				}
				if(taskName != ''){
					var heading = plannerFactory.get(index);
					if(heading.taskCount == 0 || heading.taskCount == undefined)
					{
						heading.taskCount = 0;
					}

					if (heading.tasks == undefined)
					{
						heading.tasks = [];
					}
					
					var task = {};
					task.id = heading.taskCount++;
					task.name = taskName;
					task.content = 'Enter task details here';

					heading.tasks.push(task);
					plannerFactory.put(heading, 'task');
				}
				scope.restore();
				scope.headings = plannerFactory.getAll();
			};

			scope.removeTask = function(headingIndex, taskIndex){
				var heading = plannerFactory.get(headingIndex);
				heading.tasks = plannerFactory.taskRemover(heading.tasks, taskIndex)
				plannerFactory.put(heading, 'task');
				scope.headings = plannerFactory.getAll();
			};

			scope.editTask = function(task){
				task.editMode = true;
			};

			scope.saveTask = function(headingIndex, taskIndex, newName, newContent){
				var heading = plannerFactory.get(headingIndex);
				heading.tasks = plannerFactory.taskEditer(heading.tasks, taskIndex, newName, newContent)
				plannerFactory.put(heading, 'task');
				scope.restore();
				scope.headings = plannerFactory.getAll();
			};

			scope.restore();
			scope.headings = plannerFactory.getAll();

		},
		templateUrl: 'heading-view.html'
	};
});


/*app.directive('tasks',function (plannerFactory){
	return{
		restrict:'AE',
		scope: {},
		link:function(scope, elem, attrs){
			
			scope.addTask = function(index){
				if(scope.taskName !== ''){
					var task= {};
					task.name = scope.taskName;
					task.id = plannerFactory.getCount();
					scope.tasks = plannerFactory.put(task);
				}

				scope.restore();
				scope.tasks = plannerFactory.getAll();
			};

			scope.removetask = function(index){
				console.log('Index: ' + index);
				if(index !== '-1'){
					plannerFactory.delete(index);
				}

				scope.restore();
				scope.tasks = plannerFactory.getAll();

			};

			scope.restore =function(){
				scope.index = -1;
				scope.taskName = '';
			};

			scope.restore();
			scope.tasks = plannerFactory.getAll();
		},
		templateUrl: 'task-view.html'
	};
});
*/

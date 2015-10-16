app.factory('plannerFactory', function(){
	return{
		put:function(heading,task){
			localStorage.setItem('heading' + heading.id, JSON.stringify(heading));
			if (heading.task == undefined){
				var headCount = localStorage.getItem(localStorage.key('headCount'));
				headCount++;
				localStorage.setItem('headCount', headCount);
			}
			return this.getAll;
		},
		get:function(id){
			return JSON.parse(localStorage.getItem('heading' + id));
		},
		getAll: function(){
			var headings = [];
			for(var i =0; i<localStorage.length; i++){
				if(localStorage.key(i).indexOf('heading') !== -1){
					var heading = localStorage.getItem(localStorage.key(i));
					headings.push(JSON.parse(heading));
				}
			}
			return headings;
		},
		delete: function(id){
			localStorage.removeItem('heading' + id);
			return this.getAll;
		},
		getCount:function(){
			return localStorage.getItem(localStorage.key('headCount')) || 0;
		},
		taskRemover:function(tasks, indexToRemove){
			var newTasks = [];
			for (var i=0, len=tasks.length; i<len;i++){
				if (tasks[i].id != indexToRemove){
					newTasks.push(tasks[i]);	
				}
        	}
        	return newTasks;
		},
		taskEditer:function(tasks, indexToEdit, taskName, taskContent){
			for (var i=0, len=tasks.length; i<len;i++){
				if (tasks[i].id == indexToEdit){
					tasks[i].name = taskName;
					tasks[i].content = taskContent;	
				}
        	}
        	return tasks;
		}
	};
});
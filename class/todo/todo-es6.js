class TodoClass {
	constructor (options) {
		this.tasks = ["a","b"];
	}

	add(task){
		this.tasks.push(task);
	}

	remove(task) {
		let idx = this.tasks.indexOf(task);
		if(idx !== -1){
			this.tasks.splice(idx, 1);
		}
	}

	toString(){
		let output = "";
		this.tasks.forEach(val => {
			output += `${val} `;
		})
		console.log(output);
	}
}

class TodoView {
	constructor(el){
		this.el = document.querySelector(el);
		this.model = new TodoClass();
	}

	registerEvents(){
		document.getElementById("addTask").onclick = this.handleAdd.bind(this);
		let delTasks = document.querySelectorAll(".deleteTask");
		for(var i = 0; i < delTasks.length; i++){
			delTasks[i].onclick = this.handleDelete.bind(this);
		}
	}

	handleAdd(){
		let el = document.querySelector('#task'),
				inputVal = el.value;
		this.model.add(inputVal);
		el.value = "";
		this.render();
	}

	handleDelete(e){
		let taskEl = e.currentTarget.previousElementSibling.textContent;
		this.model.remove(taskEl);
		this.render();
	}

	render() {
		let view = '<ul>';
		this.model.tasks.forEach(val => {
			view += `<li><span class="taskVal">${val}</span> <span class="deleteTask">X Delete</span></li>`;
		});
		view += '</ul>';
		this.el.innerHTML	= view;
		this.registerEvents();
		document.getElementById('task').focus();
	}
}

document.onreadystatechange = function(){
	if (document.readyState === "complete") {
		var todoView = new TodoView('.todo-list');
		todoView.render();
	}
}
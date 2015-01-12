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

	render() {
		let view = '<ul>';
		this.model.tasks.forEach(val => {
			view += `<li>${val}</li>`;
		});
		view += '</ul>';
		this.el.innerHTML	= view;
	}
}

document.onreadystatechange = function(){
	if (document.readyState === "complete") {
		var todoView = new TodoView('.todo-list');
		todoView.render();
	}
}
class TodoList {
    constructor(list = [], root) {
        this.todos = list;
        this.root = root
    }
    add(text) {
        let todo = new Todo(text);
        this.todos.push(todo)
        this.createUI()
        return this.todos.length;
    }
    delete(id) {
        let index = this.todos.findIndex((todo) => todo.id === id);
        this.todos.splice(index, 1);
        this.createUI();
        return this.todos.length;
    }
    createUI() {
        this.root.innerHTML = "";
        this.todos.forEach((todo) => {
            let ui = todo.createUI();
            ui.querySelector("span").addEventListener(
                "click",
                this.handleDelete.bind(this, todo.id)
            );
            this.root.append();
        });

    }
}

class Todo {
    constructor(text) {
        this.text = text;
        this.isDone = false;
        this.id = `id-${Date.now()}`;
    }
    handleCheck() {
        this.isDone = !this.isDone;
        this.createUI();
    }
    createUI() {
        let li = document.createElement("li");
        let input = document.createElement("input");
        input.type = "checkbox";
        input.checked = this.isDone;
        input.addEventListener("click", this.handleCheck);
        let p = document.createElement("p");
        p.innerText = this.text;
        let span = document.createElement("span");
        span.innerText = "X";
        // span.addEventListener("click", handleDelete);
        li.append(input, p, span);
        return li;
    }
}


let first = new TodoList(docume.querySelector(".todos"));
myTodo.add("play")
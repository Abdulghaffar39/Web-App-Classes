const prompt = require("prompt-sync")();
const sqlite = require("sqlite3").verbose();


const db = new sqlite.Database("new_Database", (err) => {
    if (err) {
        console.log("Error Opeing Database: ", err.message);
    } else {
        console.log("Connected to the users database.");
    }
});


db.serialize(() => {
    db.run(
        `CREATE TABLE IF NOT EXISTS todo(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title VARCHAR(50) NOT NULL,
            des VARCHAR(50) NOT NULL
        )`,
        (err) => {
            if (err) {
                console.log("Error Creating Table: ", err.message);
            } else {
                console.log("Table is ready");
            }
        }
    )
})

function addTodo() {

    const title = prompt("Enter your title: ");
    const des = prompt("Enter your description: ");

    db.run(`INSERT INTO todo (title, des) VALUES(?,?)`, [title, des], (err) => {
        if (err) {
            console.log("Error Adding Todo: ", err.message);
        } else {
            console.log(`Todo Added with ID: ${this.lastID}`);
        }
    })
}

function listTodos() {
    db.all(`SELECT * FROM todo`, (err, rows) => {
        if (err) {
            console.log("Error fetching todos: ", err.message);
        } else {
            console.log(rows);
        }
    })
}

function deletetodo(id) {
    db.run(`DELETE FROM todo WHERE id = ?`, [id], (err) => {
        if (err) {
            console.log("Error deleting todo: ", err.message);
        } else {
            console.log("Todo Deleted");
        }
    }
    )
}

function updateTodo() {

    const id = prompt("Enter todo id to updated ");
    const title = prompt("Enter new todo title: ");
    const des = prompt("Enter new todo description: ");

    db.run(`UPDATE todo SET title = ?, des = ? WHERE id = ?`, [title, des, id], (err) => {
        if (err) {
            console.log("Error Updating Todo: ", err.message);
        } else {
            console.log(`Todo Updated: ${this.lastID}`);
        }
    })
}

// export { addTodo, listTodos, deletetodo, updateTodo }

// addTodo()
// listTodos()


// deletetodo(2)
// listTodos()


updateTodo()
listTodos()


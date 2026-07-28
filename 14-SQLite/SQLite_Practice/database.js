import sqlite from "sqlite3";
const sqlite3 = sqlite.verbose()

const db = new sqlite3.Database("Master_Loom", (err) => {
    if (err) {
        console.log("Error Opening database " + err.message);
    } else {
        console.log("Connected to the database.");
    }
})

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS loop1(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(50) NOT NULL, 
        age INT NOT NULL
        )`, (err) => {
        if (err) {
            console.log("Error Creating Table " + err.message);
        } else {
            console.log("Table Create or already exists.");
        }
    })
    db.run(`CREATE TABLE IF NOT EXISTS loop2(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(50) NOT NULL, 
        age INT NOT NULL,
        age2 INT NOT NULL
        )`, (err) => {
        if (err) {
            console.log("Error Creating Table " + err.message);
        } else {
            console.log("Table Create or already exists.");
        }
    })
})

function insertdata(name, age) {
    db.run("INSERT INTO loop1 (name, age) VALUES(?,?)", [name, age], (err) => {
        if (err) {
            console.log("Error Inserting Data " + err.message);
        } else {
            console.log("Data Inserting Successfuly");
        }
    })

}
function insertdata2(name, age, age2) {
    db.run("INSERT INTO loop2 (name, age, age2) VALUES(?,?, ?)", [name, age, age2], (err) => {
        if (err) {
            console.log("Error Inserting Data " + err.message);
        } else {
            console.log("Data Inserting Successfuly");
        }
    })

}

// function getdata() {
//     db.all("SELECT * FROM loop2", (err, rows) => {
//         if(err){
//             console.log("Error Retriving Data " + err.message);
//         }else{
//             console.log(rows);
//         }
//     })
// }

function getall() {
    db.all("SELECT * FROM loop1", (err, rows) => {
        if (err) {
            console.log("Error Retriving Data " + err.message);
        } else {
            console.log(rows);
        }
    })
}

function getdata(obj) {

    let startid = obj.startid || null;
    let endid = obj.endid || null;

    db.all("SELECT * FROM loop1 WHERE id BETWEEN ? AND ?", [startid, endid], (err, rows) => {
        if (err) {
            console.log("Error Retriving Data " + err.message);
        } else {
            console.log(rows);
        }
    })
}


function Updatedata(obj) {

    let name = obj.name || null;
    let age = obj.age || null;

    let query;
    let parameter = []

    if (name && age == null) {
        query = "UPDATE loop1 SET name = ? WHERE id == ?";
        parameter = [name, obj.id];
    } else if (age && name == null) {
        query = "UPDATE loop1 SET age = ? WHERE id == ?";
        parameter = [age, obj.id];
    } else {
        query = "UPDATE loop1 SET name = ?, age = ? WHERE id == ?";
        parameter = [name, age, obj.id];
    }

    db.run(query, parameter, (err) => {
        if (err) {
            console.log("Error Retriving Data " + err.message);
        } else {
            console.log("Data Updated Successfuly");
        }
    })
}


function deletedata(id) {
    db.run("DELETE FROM loop1 WHERE id = ?", [id],
        (err) => {
            if (err) {
                console.log("Error deleting Data " + err.message);
            } else {
                console.log("Data deleted Successfuly");
            }
        })
}

export { insertdata, getdata, insertdata2, Updatedata, getall, deletedata };
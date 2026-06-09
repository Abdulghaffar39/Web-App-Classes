# MySQL Basics & Code Explanation

## Core Components

### MySQL Community Server
MySQL Community Server background me chalne wala woh asal system hai jo aapke saare data ko hamesha ke liye mehfooz (store) rakhta hai aur aapke SQL orders par amal karta hai.

### MySQL Workbench
MySQL Workbench woh visual window (software) hai jahan aap apna SQL code likhte hain aur databases ko ba-aasaani design ya manage karte hain.

### MySQL Installer for Windows
MySQL Installer for Windows ek aisi single wizard line (software) hai jo aapke computer par MySQL ke tamam zaroori tools—jaise MySQL Server aur Workbench—ko ek hi jagah se ba-aasaani install, update, ya reconfigure (setting badalna) karne ke kaam aati hai.


CREATE DATABASE Collage;

USE Collage;

CREATE TABLE student(
	id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT NOT NULL
);

INSERT INTO student VALUES(1, "AbdulGhaffar", 22);
INSERT INTO student VALUES(2, "AbdulGhaffar", 12);

SELECT * FROM student;


## Code Explanation: 

Yeh rahe in basic SQL keywords ke aasan aur short kaam:

* **`CREATE DATABASE`:** Yeh server ke andar ek naya aur khali database (folder) banane ke liye **sabse pehle** use hota hai.
* **`USE`:** Yeh pehle se bane hue kisi makhsoos database ko active karne ke liye use hota hai taake aage ka sara kaam uske andar ho.
* **`CREATE TABLE`:** Yeh database ke andar rows aur columns wali ek nayi table (sheet) ka structure design karne ke liye use hota hai.
* **`INSERT INTO`:** Yeh pehle se bani hui table ke andar naya data ya records dakhil (add) karne ke liye use hota hai.
* **`VALUES`:** Yeh `INSERT INTO` ke sath lagta hai jo yeh batata hai ke columns ke mutabiq asal data (jaise id, name, age) kya daalna hai.
* **`SELECT`:** Yeh table ke andar se save kiya hua data nikal kar screen par dekhne ya parhne ke liye use hota hai.
* **`FROM`:** Yeh `SELECT` query ke sath lagta hai jo yeh batata hai ke data **kis** makhsoos table ke andar se nikalna hai.



## MySQL Datatypes Quick Reference

Database me alag-alag tarah ka data (jaise text, numbers, ya dates) store karne ke liye sahi Data Type ka select zaroori hota hai. Niche iska ek aasan reference table diya gaya hai:

| Datatype | Category | Usage Example |
| :--- | :--- | :--- |
| **`CHAR`** | Text / String | Yeh fix length (pakki lambai) ka text store karta hai aur khali jagah ko spaces se bhar deta hai. | `CHAR(50)` |
| **`VARCHAR`** | Text / String | Yeh variable length ka text store karta hai aur sirf utni hi memory leta hai jitna bara text ho. | `VARCHAR(50)` |
| **`BLOB`** | Text / String | Yeh bohot bada binary data jaise images, audio, ya video files ko store karne ke liye use hota hai. | `BLOB(1000)` |
| **`TINYINT`** | Number (Integer) | Yeh bohot chote numbers ($-128$ se $127$ tak, jaise kisi ki umar) ko store karne ke liye best hai. | `TINYINT` |
| **`INT`** | Number (Integer) | Yeh aam aur darmiyanay size ke poore numbers (bina point wale, jaise Roll ID) ko store karta hai. | `INT` |
| **`BIGINT`** | Number (Integer) | Yeh bohot hi bade numbers (jaise bank account balance ya abadi) ko store karne ke liye hota hai. | `BIGINT` |
| **`BIT`** | Special | Yeh computer ki zuban me sirf binary values (0s aur 1s) ko store karne ke kaam aata hai. | `BIT(2)` |
| **`FLOAT`** | Decimal | Yeh point wale (decimal) numbers ko kam accuracy/precision ke sath store karne ke liye hota hai. | `FLOAT` |
| **`DOUBLE`** | Decimal | Yeh point wale bade numbers ko zyada accuracy aur bari precision ke sath store karne ke liye hota hai. | `DOUBLE` |
| **`BOOLEAN`** | Special | Yeh sirf do hi values store karta hai: True (1) ya False (0), jaise Pass/Fail ya Yes/No. | `BOOLEAN` |
| **`DATE`** | Date & Time | Yeh tareekh ko `YYYY-MM-DD` (Saal-Mahina-Din) ke standard format me store karta hai. | `DATE` |
| **`YEAR`** | Date & Time | Yeh sirf aur sirf saal (year) ko 4 digits ke format me (jaise 2026) store karne ke liye hota hai. | `YEAR` |


## SIGNED vs UNSIGNED in MySQL

Jab hum koi Number/Integer datatype (jaise `INT` ya `TINYINT`) istemal karte hain, to hum yeh tay kar sakte hain ke usme negative (manfi) numbers aane hain ya nahi. Is maqsad ke liye **SIGNED** aur **UNSIGNED** ka istemal hota hai.

| Property | SIGNED (Default) | UNSIGNED |
| :--- | :--- | :--- |
| **Concept** | Isme Negative (-) aur Positive (+) dono tarah ke numbers store ho sakte hain. | Isme sirf zero (0) aur Positive (+) yani non-negative numbers store ho sakte hain. |
| **Range** | Range aadhi negative me aur aadhi positive me banti hai. | Negative range khatam ho kar positive side me double (dugni) ho jati hai. |
| **TINYINT Example** | $-128$ se le kar $127$ tak | $0$ se le kar $255$ tak |
| **Best Used For** | Bank balance, temperature, ya jahan minus (-) me value aa sakti ho. | ID, Roll Number, Age, ya Quantity jo kabhi minus me nahi ho sakti. |

---

### Aik Aasan Misaal (`TINYINT`)

Farz karein aapke paas total **256** numbers store karne ki jagah hai:

* **SIGNED:** Agar aap nishaan (sign) lagane ki ijazat dete hain, to computer darmiyan me khara ho jata hai. Wo $-128$ kadam peeche (negative) ja sakta hai aur $127$ kadam aage (positive) ja sakta hai.
* **UNSIGNED:** Jab aap nishaan (+) ya (-) ki tension khatam kar dete hain, to computer zero (0) se shuru karta hai aur poore **255** kadam aage (positive) tak chala jata hai.

### Code me kaise likhte hain?

```sql
CREATE TABLE inventory (
    product_id INT UNSIGNED PRIMARY KEY,  -- ID kabhi minus me nahi ho sakti
    quantity INT UNSIGNED,                -- Stock minus me nahi ja sakta
    temperature INT SIGNED                -- Temperature minus me ho sakta hai
);

```

## Types of SQL Commands

SQL commands ko unke makhsoos kaam ke mutabiq 5 baray groups me divide kiya gaya hai:

| Category | Full Form | Main Purpose | Core Commands |
| :--- | :--- | :--- | :--- |
| **`DDL`** | Data Definition Language | Database aur tables ka **Structure / Design** banane ya badalne ke liye. | `CREATE`, `DROP`, `ALTER`, `TRUNCATE` |
| **`DQL`** | Data Query Language | Database ke andar save kiye huay data ko **Dhoondne ya Dekhne** ke liye. | `SELECT` |
| **`DML`** | Data Manipulation Language | Tables ke andar maujood **Asal Data** me tabdeeli karne ke liye. | `INSERT`, `UPDATE`, `DELETE` |
| **`DCL`** | Data Control Language | Database ki **Security aur Permissions** ko manage karne ke liye. | `GRANT`, `REVOKE` |
| **`TCL`** | Transaction Control Language | Database me chalne wali **Transactions** ko permanent save ya cancel karne ke liye. | `COMMIT`, `ROLLBACK`, `SAVEPOINT` |



-- CREATE DATABASE IF NOT EXISTS College;
-- DROP DATABASE IF EXISTS College;
-- SHOW DATABASES;
-- SHOW TABLES;


INSERT INTO student
(rollno, name)
VALUES
(101, "ali"),
(102, "ali"),
(103, "ali");


primary key 
foregn key
constraints

cust_id int,
    FOREIGN KEY (cust_id) REFERENCES customer(id)

CONSTRAINT age_city_check CHECK (age >= 18 AND city="karachi")
distinct
where clause
OPERATORS
LIMIT CLAUSE
order by clause
AGGREGATE FUNCTION
group by clause

CREATE DATABASE CREATE DATABASE college;

USE college;

CREATE TABLE students(
	rollno INT PRIMARY KEY,
    name VARCHAR(50),
    marks INT NOT NULL,
    grade VARCHAR(1),
    city VARCHAR(20)
);

INSERT INTO students
(rollno, name, marks, grade, city)
VALUES
(1, "azeem", 96, "C", "karachi"),
(2, "asjad", 76, "C", "islamabad"),
(3, "zohaib", 56, "C", "quetta"),
(4, "sudais", 66, "C", "larkhana"),
(5, "sudais", 66, "C", "larkhana"),
(6, "sudais", 66, "C", "larkhana"),
(7, "sudais", 66, "C", "larkhana");

-- SELECT name, marks FROM students
-- SELECT * FROM students
-- SELECT DISTINCT city FROM students;

-- SELECT * FROM students WHERE marks > 80;
-- SELECT * FROM students WHERE city="larkhana";
-- SELECT * FROM students WHERE marks > 60 AND city="larkhana";
-- SELECT * FROM students WHERE marks BETWEEN 70 AND 90;
-- SELECT * FROM students WHERE city IN ("karachi" , "larkhana");
-- SELECT * FROM students WHERE city NOT IN ("karachi" , "larkhana");

-- SELECT * FROM students LIMIT 3;
-- SELECT * FROM students WHERE marks > 65 LIMIT 3;

-- SELECT * FROM students ORDER BY city ASC;
-- SELECT * FROM students ORDER BY marks ASC;
-- SELECT * FROM students ORDER BY marks ASC LIMIT 3;

-- SELECT * FROM students ORDER BY marks DESC;
-- SELECT * FROM students ORDER BY marks DESC LIMIT 3;
;

USE college;

CREATE TABLE students(
	rollno INT PRIMARY KEY,
    name VARCHAR(50),
    marks INT NOT NULL,
    grade VARCHAR(1),
    city VARCHAR(20)
);

INSERT INTO students
(rollno, name, marks, grade, city)
VALUES
(1, "azeem", 96, "C", "karachi"),
(2, "asjad", 76, "C", "islamabad"),
(3, "zohaib", 56, "C", "quetta"),
(4, "sudais", 66, "C", "larkhana"),
(5, "sudais", 66, "C", "larkhana"),
(6, "sudais", 66, "C", "larkhana"),
(7, "sudais", 66, "C", "larkhana");

-- SELECT name, marks FROM students
-- SELECT * FROM students
-- SELECT DISTINCT city FROM students;

-- SELECT * FROM students WHERE marks > 80;
-- SELECT * FROM students WHERE city="larkhana";
-- SELECT * FROM students WHERE marks > 60 AND city="larkhana";
-- SELECT * FROM students WHERE marks BETWEEN 70 AND 90;
-- SELECT * FROM students WHERE city IN ("karachi" , "larkhana");
-- SELECT * FROM students WHERE city NOT IN ("karachi" , "larkhana");

-- SELECT * FROM students LIMIT 3;
-- SELECT * FROM students WHERE marks > 65 LIMIT 3;

-- SELECT * FROM students ORDER BY city ASC;
-- SELECT * FROM students ORDER BY marks ASC;
-- SELECT * FROM students ORDER BY marks ASC LIMIT 3;

-- SELECT * FROM students ORDER BY marks DESC;
-- SELECT * FROM students ORDER BY marks DESC LIMIT 3;

SELECT MAX(marks) FROM students;
SELECT MIN(marks) FROM students;
SELECT AVG(marks) FROM students;
SELECT COUNT(name) FROM students;

SELECT city FROM students GROUP BY city;
SELECT city, COUNT(rollno) FROM students GROUP BY city;
SELECT city, name, COUNT(rollno) FROM students GROUP BY city, name;
SELECT city, name, COUNT(rollno) FROM students GROUP BY city, name order by city;
SELECT city, avg(marks) FROM students GROUP BY city ORDER BY avg(marks) DESC;




CREATE DATABASE customer;

USE customer;

CREATE TABLE payment(
	customer_id INT PRIMARY KEY,
    customer VARCHAR(50),
    mode VARCHAR(50),
    city VARCHAR(20)
);

INSERT INTO payment
(sno, customer, mode, city)
VALUES
(101, "Olivia Barrett", "Netbanking", "Portland"),
(102, "Ethan Sinclair", "Credit Card", "Miami"),
(103, "Maya Hernandez", "Credit Card", "Seattle"),
(104, "Liam Donovan", "Netbanking", "Denver"),
(105, "Sophia Nguyen", "Credit Card ", "New Orleans"),
(106, "Caleb Foster", "Debit Card", "Minneapolis"),
(107, "Ava Patel", "Debit Card", "Phoenix"),
(108, "Lucas Carter", "Netbanking", "Boston"),
(109, "Isabella Martinez", "Netbanking", "Nashville"),
(110, "Jackson Brooks", "Credit Card", "Boston");

SELECT mode, COUNT(customer) FROM payment GROUP BY mode;


having clause
SELECT city, COUNT(rollno) FROM students GROUP BY city HAVING MAX(marks) > 90;


Gernal order

select (column)
from (tables)
where (condition)
group by (column)
having (condition)
order by (column) ASC
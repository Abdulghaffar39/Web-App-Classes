# MySQL Basics & Code Explanation

## Core Components

### MySQL Community Server
MySQL Community Server background me chalne wala woh asal system hai jo aapke saare data ko hamesha ke liye mehfooz (store) rakhta hai aur aapke SQL orders par amal karta hai.

### MySQL Workbench
MySQL Workbench woh visual window (software) hai jahan aap apna SQL code likhte hain aur databases ko ba-aasaani design ya manage karte hain.

### MySQL Installer for Windows
MySQL Installer for Windows ek aisi single wizard line (software) hai jo aapke computer par MySQL ke tamam zaroori tools—jaise MySQL Server aur Workbench—ko ek hi jagah se ba-aasaani install, update, ya reconfigure (setting badalna) karne ke kaam aati hai.

---

## 1. Database aur Table Banana (Basics)

```sql
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
```

### Code Explanation

Yeh rahe in basic SQL keywords ke aasan aur short kaam:

* **`CREATE DATABASE`:** Yeh server ke andar ek naya aur khali database (folder) banane ke liye **sabse pehle** use hota hai.
* **`USE`:** Yeh pehle se bane hue kisi makhsoos database ko active karne ke liye use hota hai taake aage ka sara kaam uske andar ho.
* **`CREATE TABLE`:** Yeh database ke andar rows aur columns wali ek nayi table (sheet) ka structure design karne ke liye use hota hai.
* **`INSERT INTO`:** Yeh pehle se bani hui table ke andar naya data ya records dakhil (add) karne ke liye use hota hai.
* **`VALUES`:** Yeh `INSERT INTO` ke sath lagta hai jo yeh batata hai ke columns ke mutabiq asal data (jaise id, name, age) kya daalna hai.
* **`SELECT`:** Yeh table ke andar se save kiya hua data nikal kar screen par dekhne ya parhne ke liye use hota hai.
* **`FROM`:** Yeh `SELECT` query ke sath lagta hai jo yeh batata hai ke data **kis** makhsoos table ke andar se nikalna hai.

Useful helper commands:

```sql
CREATE DATABASE IF NOT EXISTS College;
DROP DATABASE IF EXISTS College;
SHOW DATABASES;
SHOW TABLES;
```

Specific columns ke sath insert karna (jab har column ki value na deni ho):

```sql
INSERT INTO student
(rollno, name)
VALUES
(101, "ali"),
(102, "ali"),
(103, "ali");
```

---

## 2. MySQL Datatypes Quick Reference

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

---

## 3. SIGNED vs UNSIGNED in MySQL

Jab hum koi Number/Integer datatype (jaise `INT` ya `TINYINT`) istemal karte hain, to hum yeh tay kar sakte hain ke usme negative (manfi) numbers aane hain ya nahi. Is maqsad ke liye **SIGNED** aur **UNSIGNED** ka istemal hota hai.

| Property | SIGNED (Default) | UNSIGNED |
| :--- | :--- | :--- |
| **Concept** | Isme Negative (-) aur Positive (+) dono tarah ke numbers store ho sakte hain. | Isme sirf zero (0) aur Positive (+) yani non-negative numbers store ho sakte hain. |
| **Range** | Range aadhi negative me aur aadhi positive me banti hai. | Negative range khatam ho kar positive side me double (dugni) ho jati hai. |
| **TINYINT Example** | $-128$ se le kar $127$ tak | $0$ se le kar $255$ tak |
| **Best Used For** | Bank balance, temperature, ya jahan minus (-) me value aa sakti ho. | ID, Roll Number, Age, ya Quantity jo kabhi minus me nahi ho sakti. |

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

---

## 4. Types of SQL Commands

SQL commands ko unke makhsoos kaam ke mutabiq 5 baray groups me divide kiya gaya hai:

| Category | Full Form | Main Purpose | Core Commands |
| :--- | :--- | :--- | :--- |
| **`DDL`** | Data Definition Language | Database aur tables ka **Structure / Design** banane ya badalne ke liye. | `CREATE`, `DROP`, `ALTER`, `TRUNCATE` |
| **`DQL`** | Data Query Language | Database ke andar save kiye huay data ko **Dhoondne ya Dekhne** ke liye. | `SELECT` |
| **`DML`** | Data Manipulation Language | Tables ke andar maujood **Asal Data** me tabdeeli karne ke liye. | `INSERT`, `UPDATE`, `DELETE` |
| **`DCL`** | Data Control Language | Database ki **Security aur Permissions** ko manage karne ke liye. | `GRANT`, `REVOKE` |
| **`TCL`** | Transaction Control Language | Database me chalne wali **Transactions** ko permanent save ya cancel karne ke liye. | `COMMIT`, `ROLLBACK`, `SAVEPOINT` |

---

## 5. Practice Table: `students`

```sql
CREATE DATABASE college;

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
```

### `SELECT`, `DISTINCT` aur `WHERE`

```sql
SELECT name, marks FROM students;
SELECT * FROM students;
SELECT DISTINCT city FROM students;

SELECT * FROM students WHERE marks > 80;
SELECT * FROM students WHERE city = "larkhana";
SELECT * FROM students WHERE marks > 60 AND city = "larkhana";
SELECT * FROM students WHERE marks BETWEEN 70 AND 90;
SELECT * FROM students WHERE city IN ("karachi", "larkhana");
SELECT * FROM students WHERE city NOT IN ("karachi", "larkhana");
```

* **`DISTINCT`:** Column ki sirf unique (alag-alag) values dikhata hai, duplicate values hata deta hai.
* **`WHERE`:** Data ko filter karne ke liye condition lagata hai.
* **Operators:** `>`, `<`, `=`, `AND`, `BETWEEN`, `IN`, `NOT IN` jaise operators conditions ko aur tafseeli (specific) banane ke liye use hotay hain.

### `LIMIT` Clause

```sql
SELECT * FROM students LIMIT 3;
SELECT * FROM students WHERE marks > 65 LIMIT 3;
```

* **`LIMIT`:** Result me se sirf shuru ki itni rows dikhata hai jitna number diya jaye.

### `ORDER BY` Clause

```sql
SELECT * FROM students ORDER BY city ASC;
SELECT * FROM students ORDER BY marks ASC;
SELECT * FROM students ORDER BY marks ASC LIMIT 3;

SELECT * FROM students ORDER BY marks DESC;
SELECT * FROM students ORDER BY marks DESC LIMIT 3;
```

* **`ORDER BY`:** Result ko kisi column ke mutabiq sort karta hai. `ASC` (Ascending = chota se bara) default hota hai, `DESC` (Descending = bara se chota) explicitly likhna parta hai.

### Aggregate Functions

```sql
SELECT MAX(marks) FROM students;
SELECT MIN(marks) FROM students;
SELECT AVG(marks) FROM students;
SELECT COUNT(name) FROM students;
```

* **`MAX`/`MIN`:** Column ki sabse bari/chooti value nikalta hai.
* **`AVG`:** Column ki average (oosat) value nikalta hai.
* **`COUNT`:** Rows ka total number batata hai.

### `GROUP BY` Clause

```sql
SELECT city FROM students GROUP BY city;
SELECT city, COUNT(rollno) FROM students GROUP BY city;
SELECT city, name, COUNT(rollno) FROM students GROUP BY city, name;
SELECT city, name, COUNT(rollno) FROM students GROUP BY city, name ORDER BY city;
SELECT city, AVG(marks) FROM students GROUP BY city ORDER BY AVG(marks) DESC;
```

* **`GROUP BY`:** Rows ko ek ya zyada columns ki common (mushtarka) value ke mutabiq groups me jama karta hai, taake har group par aggregate function (`COUNT`, `AVG`, etc.) lagaya ja sake.

### `HAVING` Clause

```sql
SELECT city, COUNT(rollno) FROM students GROUP BY city HAVING MAX(marks) > 90;
```

* **`HAVING`:** `WHERE` ki tarah hi condition lagata hai, lekin yeh **`GROUP BY`** ke result (groups) par condition lagane ke liye use hota hai — jabke `WHERE` grouping se pehle individual rows par condition lagata hai.

### Query ka General Order

```text
SELECT   (column)
FROM     (tables)
WHERE    (condition)
GROUP BY (column)
HAVING   (condition)
ORDER BY (column) ASC
```

### `UPDATE` Statement

```sql
SET SQL_SAFE_UPDATES = 0;

UPDATE students SET grade = "D" WHERE marks BETWEEN 50 AND 59;

UPDATE students SET marks = 10 WHERE rollno = 7;
```

* **`UPDATE ... SET ... WHERE`:** Pehle se maujood rows ki values ko change karne ke liye use hota hai. `SQL_SAFE_UPDATES = 0` MySQL Workbench ki safe mode restriction ko hata deta hai taake `WHERE` me primary/unique key na hone par bhi update chal sake.

---

## 6. `payment` Table — `GROUP BY` Practice

```sql
CREATE DATABASE customer;

USE customer;

CREATE TABLE payment(
    customer_id INT PRIMARY KEY,
    customer VARCHAR(50),
    mode VARCHAR(50),
    city VARCHAR(20)
);

INSERT INTO payment
(customer_id, customer, mode, city)
VALUES
(101, "Olivia Barrett", "Netbanking", "Portland"),
(102, "Ethan Sinclair", "Credit Card", "Miami"),
(103, "Maya Hernandez", "Credit Card", "Seattle"),
(104, "Liam Donovan", "Netbanking", "Denver"),
(105, "Sophia Nguyen", "Credit Card", "New Orleans"),
(106, "Caleb Foster", "Debit Card", "Minneapolis"),
(107, "Ava Patel", "Debit Card", "Phoenix"),
(108, "Lucas Carter", "Netbanking", "Boston"),
(109, "Isabella Martinez", "Netbanking", "Nashville"),
(110, "Jackson Brooks", "Credit Card", "Boston");

SELECT mode, COUNT(customer) FROM payment GROUP BY mode;
```

---

## 7. `ALTER TABLE` — Table Structure Badalna

```sql
ALTER TABLE student
ADD COLUMN age INT NOT NULL DEFAULT 20;

ALTER TABLE student
DROP COLUMN age;

ALTER TABLE students
RENAME TO student;

ALTER TABLE student
CHANGE age stu_age INT;

ALTER TABLE student
MODIFY COLUMN age VARCHAR(2);

INSERT INTO student
(rollno, name, marks, grade, city, stu_age)
VALUES
(7, "Skarik", 98, "A", "KARACHI", 100);
```

* **`ADD COLUMN`:** Table me naya column add karta hai.
* **`DROP COLUMN`:** Table se koi column hata deta hai.
* **`RENAME TO`:** Table ka naam badalta hai.
* **`CHANGE`:** Column ka naam aur datatype dono badal sakta hai (`CHANGE old_name new_name new_datatype`).
* **`MODIFY COLUMN`:** Column ka sirf datatype/constraint badalta hai, naam wahi rehta hai.

### `TRUNCATE`

* **`TRUNCATE`:** Table ka structure rakh kar uska saara data ek saath (fast) khali kar deta hai — `DELETE` se faster hota hai kyunke row-by-row delete nahi karta.

---

## 8. Primary Key, Foreign Key aur Constraints

```sql
cust_id INT,
FOREIGN KEY (cust_id) REFERENCES customer(id)
```

* **Primary Key:** Table ki har row ko uniquely identify karta hai (duplicate ya NULL nahi ho sakta).
* **Foreign Key:** Ek table ke column ko doosri table ki primary key se link karta hai, taake relational data consistent rahe.

```sql
CONSTRAINT age_city_check CHECK (age >= 18 AND city = "karachi")
```

* **`CHECK` Constraint:** Column me jaane wali value par koi shart (condition) lagata hai — agar condition false ho to row insert/update nahi hoti.

### Foreign Key Cascading

```sql
FOREIGN KEY (cust_id) REFERENCES customer(id)
ON DELETE CASCADE
ON UPDATE CASCADE
```

* **`ON DELETE CASCADE`:** Agar parent table (`customer`) se row delete ho to us se linked child table ki rows bhi khud-ba-khud delete ho jati hain.
* **`ON UPDATE CASCADE`:** Agar parent table ki key update ho to child table me bhi wahi value automatically update ho jati hai.

---

## 9. Joins in SQL

Joins ka maqsad do ya zyada tables ka data unke common column ke zariye combine karna hai.

* **`INNER JOIN`:** Sirf wahi rows dikhata hai jin ka match dono tables me maujood ho.
* **`LEFT JOIN`:** Left table ki **saari** rows + right table se match wala data (na milne par `NULL`).
* **`RIGHT JOIN`:** Right table ki **saari** rows + left table se match wala data (na milne par `NULL`).
* **`FULL JOIN`:** Dono tables ki saari rows (MySQL me direct support nahi, isliye `LEFT JOIN UNION RIGHT JOIN` se banaya jata hai).
* **`SELF JOIN`:** Ek hi table ko khud ke sath join karna (jaise employee-manager relation).

```sql
CREATE TABLE employee(
    id INT PRIMARY KEY,
    name VARCHAR(20),
    manager_id INT
);

INSERT INTO employee
(id, name, manager_id)
VALUES
(1, "arsala", 3),
(2, "zeeshar", 4),
(3, "yeseen", NULL),
(4, "kamran", 3);
```

### `INNER JOIN`

```sql
SELECT * FROM student AS s
INNER JOIN course AS c
ON s.id = c.id;
```

### `RIGHT JOIN`

```sql
SELECT * FROM student AS s
RIGHT JOIN course AS c
ON s.id = c.id;
```

### `LEFT JOIN`

```sql
SELECT * FROM student AS s
LEFT JOIN course AS c
ON s.id = c.id;
```

### `FULL JOIN` (LEFT + RIGHT via `UNION`)

```sql
SELECT * FROM student AS s
LEFT JOIN course AS c
ON s.id = c.id
UNION
SELECT * FROM student AS s
RIGHT JOIN course AS c
ON s.id = c.id;
```

### Sirf Unmatched Rows Nikalna

```sql
-- Sirf woh students jinka koi course match nahi (right side NULL)
SELECT * FROM student AS s
LEFT JOIN course AS c
ON s.id = c.id
WHERE c.id IS NOT NULL;

SELECT * FROM student AS s
LEFT JOIN course AS c
ON s.id = c.id
WHERE c.id IS NULL;

SELECT * FROM student AS s
RIGHT JOIN course AS c
ON s.id = c.id
WHERE s.id IS NULL;

SELECT * FROM student AS s
RIGHT JOIN course AS c
ON s.id = c.id
WHERE s.id IS NOT NULL;
```

### `SELF JOIN` (Employee–Manager Example)

```sql
SELECT * FROM employee;

-- Har manager ke sath uske employees match karna
SELECT *
FROM employee AS a
JOIN employee AS b
ON a.id = b.manager_id;

SELECT a.name, b.name
FROM employee AS a
JOIN employee AS b
ON a.id = b.manager_id;

SELECT a.name AS manager_name, b.name
FROM employee AS a
JOIN employee AS b
ON a.id = b.manager_id;
```

* **`SELF JOIN`:** Yahan `employee` table ko `a` (manager ke roop me) aur `b` (employee ke roop me) do alias diye gaye hain, taake `a.id = b.manager_id` ke zariye har manager ke neeche kaam karne wale employees nikale ja sakein.

---

## 10. `UNION` aur `UNION ALL`

```sql
SELECT name FROM employee
UNION
SELECT name FROM employee;

SELECT name FROM employee
UNION ALL
SELECT name FROM employee;
```

* **`UNION`:** Do `SELECT` queries ke result ko combine karta hai aur duplicate rows ko automatically hata deta hai.
* **`UNION ALL`:** Bhi result combine karta hai, lekin duplicate rows ko **hatata nahi** — isliye `UNION` se fast hota hai.

---

## 11. SQL Subqueries

Subquery ek aisi `SELECT` query hoti hai jo doosri (outer) query ke andar likhi jati hai, taake uska result outer query ke `WHERE`, `FROM` ya `SELECT` me condition/value ke taur par use ho sake.

> Yeh topic abhi shuru kiya gaya hai — practice examples aage add honge.

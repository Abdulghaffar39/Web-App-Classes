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


## 🔢 SIGNED vs UNSIGNED in MySQL

Jab hum koi Number/Integer datatype (jaise `INT` ya `TINYINT`) istemal karte hain, to hum yeh tay kar sakte hain ke usme negative (manfi) numbers aane hain ya nahi. Is maqsad ke liye **SIGNED** aur **UNSIGNED** ka istemal hota hai.

| Property | SIGNED (Default) | UNSIGNED |
| :--- | :--- | :--- |
| **Concept** | Isme Negative (-) aur Positive (+) dono tarah ke numbers store ho sakte hain. | Isme sirf zero (0) aur Positive (+) yani non-negative numbers store ho sakte hain. |
| **Range** | Range aadhi negative me aur aadhi positive me banti hai. | Negative range khatam ho kar positive side me double (dugni) ho jati hai. |
| **TINYINT Example** | $-128$ se le kar $127$ tak | $0$ se le kar $255$ tak |
| **Best Used For** | Bank balance, temperature, ya jahan minus (-) me value aa sakti ho. | ID, Roll Number, Umar (Age), ya Quantity jo kabhi minus me nahi ho sakti. |

---

### 💡 Aik Aasan Misaal (`TINYINT`)

Farz karein aapke paas total **256** numbers store karne ki jagah hai:

* **SIGNED:** Agar aap nishaan (sign) lagane ki ijazat dete hain, to computer darmiyan me khara ho jata hai. Wo $-128$ kadam peeche (negative) ja sakta hai aur $127$ kadam aage (positive) ja sakta hai.
* **UNSIGNED:** Jab aap nishaan (+) ya (-) ki tension khatam kar dete hain, to computer zero (0) se shuru karta hai aur poore **255** kadam aage (positive) tak chala jata hai.

### 💻 Code me kaise likhte hain?

```sql
CREATE TABLE inventory (
    product_id INT UNSIGNED PRIMARY KEY,  -- ID kabhi minus me nahi ho sakti
    quantity INT UNSIGNED,                -- Stock minus me nahi ja sakta
    temperature INT SIGNED                -- Temperature minus me ho sakta hai
);
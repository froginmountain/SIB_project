const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// React 애플리케이션 라우트
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// 서버 시작
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// DB 연결
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1024',
    database: 'sib',
    port: 3306,
});

connection.connect((err) => {
    if (err) {
        console.error('Failed to connect to MySQL server:', err);
        return;
    }
    console.log('Connected to MySQL server');
});

app.post("/insert", (req, res) => {
    const user_id = req.body.inText;
    console.log(user_id);
    connection
        .promise()
        .query("INSERT INTO new_table (user_id) VALUES (?)", [user_id])
        .then(() => {
            console.log("DB 저장 성공");
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log("DB 저장 실패:", err);
            res.sendStatus(500);
        });
});

app.post("/select", (req, res) => {
    const user_id = req.body.id;
    const user_password = req.body.pw;
    console.log(user_id);
    console.log(user_password);

    connection
        .promise()
        .query("SELECT COUNT(*) FROM userdata WHERE id = ? AND pw = ?", [user_id, user_password])
        .then(([rows]) => {
            console.log("SELECT 결과:", rows);
            const count = rows[0]["COUNT(*)"]
            res.json({ data: count });
        })
        .catch((err) => {
            console.log("SELECT 오류:", err);
            res.sendStatus(500);
        });
});
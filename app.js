import express from 'express';

const app = express();
const port = 3000; // 서버 포트 번호

// client에서 'host:port'으로 GET 요청을 보내면 실행.
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// app.listen() 함수를 이용해 서버를 실행.
// client는 'host:port'로 노드 서버에 요청을 보낼 수 있음.
app.listen(port, () => {
  console.log(`서버 실행. http://localhost:${port}`);
});

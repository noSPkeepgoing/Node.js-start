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

// route()를 이용하면 같은 라우트 메소드를 한 곳에서 작성 가능.
app
  .route('/customer')
  .get(function (req, res) {
    // HTTP 메소드 GET 요청에 대한 조회 처리
    res.send('고객 정보 조회');
  })
  .post(function (req, res) {
    // HTTP 메소드 POST 요청에 대한 조회 처리
    res.send('신규 고객 추가');
  })
  .put(function (req, res) {
    // HTTP 메소드 PUT 요청에 대한 조회 처리
    res.send('고객 정보 수정');
  })
  .delete(function (req, res) {
    // HTTP 메소드 DELETE 요청에 대한 조회 처리
    res.send('고객 정보 삭제');
  });

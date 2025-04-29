import express from 'express';
const app = express();

// 웹 서버 실행
app.listen(3001, () => {
  console.log('Server started. port 3001.');
});

// 메소드 종류
app.get('/customer', function (req, res) {
  res.send('get 요청에 의한 응답');
});

app.post('/customer', function (req, res) {
  res.send('post 요청에 의한 응답');
});

app.all('/customer', function (req, res) {
  res.send('HTTP 요청 메소드 종류에 상관없이 응답');
});

// 라우트 경로
// 문자열
app.get('/', function (req, res) {
  res.send('root');
});

app.get('/about', function (req, res) {
  res.send('about');
});

app.get('/etc', function (req, res) {
  res.send('etc');
});

// 문자열 패턴
// express 5.x 버전 이후 잘 안되는 듯?
app.get('/ab*cd', function (req, res) {
  res.send('"ab"와 "cd" 사이에 문자가 없거나 혹은 어떤 문자도 올 수 있음');
});

// 정규식 기반
app.get(/z/, function (req, res) {
  res.send('z가 포함!');
});

// 라우트 핸들러
// req : Request
// res : Response
// next : 다음 미들웨어 함수를 가리키는 오브젝트

// 하나의 라우트에서 next 오브젝트를 이용해 2개 이상의 콜백함수를 실행할 수 있음
app.get(
  '/example',
  function (req, res, next) {
    console.log('첫 번째 콜백 함수');
    next();
  },
  function (req, res, next) {
    console.log('두 번째 콜백 함수');
    res.send('next!');
  }
);

// 콜백 함수를 배열로 라우트 처리
const ex0 = function (req, res, next) {
  console.log('첫 번째 콜백 함수');
  next();
};
const ex1 = function (req, res, next) {
  console.log('두 번째 콜백 함수');
  next();
};
const ex2 = function (req, res, next) {
  console.log('세 번째 콜백 함수');
  res.send('final✨'); // client로 응답
};

app.get('/examples', [ex0, ex1, ex2]);

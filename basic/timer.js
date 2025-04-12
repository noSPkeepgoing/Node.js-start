const timeout = setTimeout(() => {
  console.log('setTimeout : 1초 후 실행');
}, 1000);

const interval = setInterval(() => {
  console.log('setInterval : 1초마다 실행');
}, 1000);

const immediate = setImmediate(() => {
  console.log(
    'setImmediate() 함수 호출 뒤 오는 코드 먼저 실행 후 바로 다음 실행'
  );
});
console.log('setImmediate 바로 뒤 콘솔');
// clearImmediate(immediate);

setTimeout(() => {
  clearInterval(interval); // interval로 정의된 setInterval 함수를 종료
}, 5000);

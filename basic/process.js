import process from 'process';

process.on('beforeExit', (code) => {
  console.log(
    '이벤트 루프에 등록딘 작업이 모두 종료된 후 노드 프로세스를 종료하기 직전 : ',
    code
  );
});

process.on('exit', (code) => [
  console.log('노드 프로세스가 종료될 때 : ', code),
]);

console.log('콘솔로그');

// console.log(process.env); // 사용자 환경을 포함하는 객체

// const { nextTick } = require('process');
import { nextTick } from 'process';

console.log('start');

setTimeout(() => {
  console.log('timeout callback');
}, 0);

// nextTick을 통해 가한 콜백 함수는 'next tick queue'에 추가!
// 이벤트 루프는 다른 콜백함수보다 우선적으로 처리
nextTick(() => {
  console.log('nextTick callback');
});

console.log('end');

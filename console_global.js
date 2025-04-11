console.log('hello world'); // 일반적인 로그
console.log('hello %s', 'world'); // 일반적인 로그, %s를 사용해서 문자열 데이터를 파라미터로 전달

const world = 'world';
console.log(`hello ${world}`); // 템플릿 리터럴 문법 사용

console.error(new Error('🐞')); // 에러 로그 출력

const arr = [
  { name: 'sunpa', email: 'sunpaaaa@email.com' },
  { name: 'choi', email: 'choiiii@email.com' },
];
console.table(arr); // 테이블 형태로 배열 or 오브젝트 데이터 출력

const obj = {
  students: {
    grade1: { class1: { math: 100 }, class2: { english: 50, korean: 60 } },
    grade2: { class1: { math: 90 }, class2: { english: 70, korean: 90 } },
    teachers: ['Sunpa', 'Choi'],
  },
};
console.dir(obj, { depth: 3, colors: true }); // 출력할 오브젝트의 깊이와 콘솔 메시지 텍스트에 색상을 적용

console.time('time for for-loop');
for (let i = 0; i < 999999; i++) {}
console.timeEnd('time for for-loop');

const defaultNum = 1;

function add(num1, num2) {
  return num1 + num2;
}

function minus(num1, num2) {
  return num1 - num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

// 재사용을 위한 모듈화
// 여러 파일에서 사용되는 함수나 변수를 모듈로 만들면 편리함
module.exports = {
  defaultNum,
  add,
  minus,
  mul,
  divide,
};

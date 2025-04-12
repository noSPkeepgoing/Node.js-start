// Console 클래스
// 파일 쓰기와 같은 스트림에 사용
// 디버깅을 위한 콘솔메세지 출력 -> console.log(), console.error(), console.warn()
// 실무에서는 디버깅을 위해 터미널에 메시지 출력, 운영상에서는 로그 파일을 만들어 관리

const fs = require('fs'); // 파일시스템 모듈로 파일 읽기, 쓰기 등을 할 수 있는 내장 모듈
const { Console } = require('console');

const output = fs.createWriteStream('./stdout.log'); // 파일 쓰기 가능하도록 스트림 생성
const errorOutput = fs.createWriteStream('./stderr.log');

const logger = new Console({ stdout: output, stderr: errorOutput }); // 콘솔 객체 생성

for (let i = 1; i < 5; i++) {
  logger.log('count: %d', i); // stdout.log 파일에 count: 5 기록
  logger.error('count: ' + i); // stderr.log 파일에 count: 5 기록
}

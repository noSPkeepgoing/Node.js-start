// 응답 메소드
// client로부터 요청이 오면 라우트에서는 메소드 중 한 가지 방법으로 응답을 전송하고 요청-응답 주기를 종료
// 1. res.download() : 파일을 다운로드하도록 프롬프트
// 2. res.end() : 응답 프로세스를 종료
// 3. res.json() : JSON 응답을 전송
// 4. res.jsonp() : JSONP 지원을 통해 JSON 응답을 전송
// 5. res.redirect() : 요청의 경로를 재지정
// 6. res.render() : view 템플릿을 렌더링
// 7. res.send() : 다양한 유평의 응답을 전송
// 8. res.sendFile() : 파일을 octet 스트림(8비트로 된 데이터)으로 전송
// 9. res.sendStatus() : 응답 상태 코드를 설정한 후 해당 코드를 응단 body에 담아서 전송

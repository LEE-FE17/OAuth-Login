🔐 OAuth Login Practice
✔️ 구현 기능

카카오 로그인

네이버 로그인

사용자 정보 (닉네임, 프로필 이미지) 표시

로그인 상태 유지 (localStorage)

로그아웃 기능

🛠 사용 기술

HTML / CSS / JavaScript

Node.js (Express)

OAuth 2.0

⚙️ 실행 방법

.env 파일 생성 후 API 키 입력

서버 실행

node server.js

Live Server 실행 후 로그인 테스트

🔒 보안

API Key는 .env 파일로 관리

.gitignore에 .env 포함

📌 느낀 점

OAuth 인증 흐름(인가 코드 → 토큰 → 사용자 정보)을 직접 구현하며 인증 과정의 구조를 이해할 수 있었습니다.

🚨 트러블 슈팅
1. 카카오 로그인 KOE002 에러

문제: 카카오 로그인 시 KOE002 에러 발생

원인: Redirect URI 또는 Client ID 설정 오류로 인해 인증 요청이 올바르게 전달되지 않음

해결:

카카오 개발자 사이트에 등록된 Redirect URI와 코드의 값을 동일하게 수정

Client ID가 정확한지 재확인

2. 서버 실행 시 "서버 열림!" 출력 안됨

문제: node server.js 실행 시 콘솔에 "서버 열림!"이 출력되지 않음

원인: app.listen() 코드가 API 내부에 작성되어 서버가 정상적으로 실행되지 않음

해결:

app.listen()을 파일 최하단(라우터 밖)으로 이동

서버 실행 시 정상적으로 로그 출력 확인
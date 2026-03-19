Kakao OAuth Login

카카오 OAuth 2.0을 활용한 로그인 기능 구현 프로젝트입니다.

📌 프로젝트 소개

카카오 계정을 이용하여 로그인하고, 사용자 정보를 가져와 화면에 표시하는 기능을 구현했습니다.

🛠️ 사용 기술

JavaScript (Vanilla)

Node.js

Express

Axios

Kakao OAuth API

🔑 주요 기능

카카오 로그인 인증 (OAuth 2.0)

인가 코드(Authorization Code) 기반 토큰 요청

사용자 정보 조회 (닉네임, 프로필 이미지)

로그인 상태 유지 (localStorage)

로그아웃 기능 구현

🔄 로그인 흐름

카카오 로그인 버튼 클릭

카카오 인증 서버로 이동

로그인 후 인가 코드(code) 발급

프론트에서 서버로 code 전달

서버에서 access token 요청

사용자 정보 API 호출

프론트에서 사용자 정보 화면 출력

⚠️ 보안 처리

Client Secret 및 민감 정보는 .env 파일로 관리

토큰 요청 및 사용자 정보 요청은 서버에서 처리

🚀 실행 방법
npm install
node server.js

프론트: Live Server 실행 (http://127.0.0.1:5500)

서버: http://localhost:3000

📷 결과

로그인 시 사용자 닉네임 및 프로필 이미지 표시

새로고침 시 로그인 상태 유지

로그아웃 시 상태 초기화

📌 느낀 점

OAuth 인증 흐름(인가 코드 → 토큰 → 사용자 정보)을 직접 구현하며 인증 과정의 구조를 이해할 수 있었습니다.

🚨 트러블 슈팅
1. 카카오 로그인 에러 (KOE006)

문제: 로그인 시 KOE006 에러 발생

원인: 카카오 개발자 사이트에 등록된 Redirect URI와 코드에서 사용하는 URI 불일치

해결: Redirect URI를 http://127.0.0.1:5500로 통일하여 해결

2. Git push 충돌 문제

문제: git push 시 "rejected (fetch first)" 에러 발생

원인: 원격 저장소에 README가 먼저 생성되어 로컬과 히스토리 충돌 발생

해결:

git pull origin main --no-rebase --allow-unrelated-histories

이후 다시 push하여 해결

3. .gitignore 적용 안 되는 문제

문제: node_modules가 GitHub에 포함됨

원인: 이미 Git에 추가된 파일은 .gitignore로 제외되지 않음

해결:

git rm -r --cached node_modules

이후 .gitignore 적용

4. 로그인 버튼 클릭 시 반응 없음

문제: 버튼 클릭 시 아무 동작도 하지 않음

원인: kakaoClientId 변수 선언 누락으로 JavaScript 에러 발생

해결: 변수 선언 추가 후 정상 동작 확인

5. 서버 실행 시 응답 없음

문제: 서버 실행 시 "서버 열림!" 로그가 출력되지 않음

원인: 잘못된 실행 명령어 또는 코드 위치 문제

해결: node server.js로 실행하고 app.listen 위치를 파일 하단으로 이동하여 해결

6. OAuth 흐름 이해 부족

문제: 프론트/백엔드 역할 구분이 명확하지 않음

해결:

프론트: 인가 코드 요청

백엔드: 토큰 요청 및 사용자 정보 처리
→ 역할 분리 구조로 개선
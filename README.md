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
const kakaoLoginButton = document.querySelector('#kakao')
const naverLoginButton = document.querySelector('#naver')
const userImage = document.querySelector('img')
const userName = document.querySelector('#user_name')
const logoutButton = document.querySelector('#logout_button')

const kakaoClientId = 'f313cc887f6fc3a0b2936dbd22818abf'
const redirectURI = 'http://127.0.0.1:5500'

kakaoLoginButton.onclick = () => {
    location.href = ` https://kauth.kakao.com/oauth/authorize?client_id=${kakaoClientId}&redirect_uri=${redirectURI}&response_type=code`
}

window.onload = () => {
    const url = new URL(location.href)
    const urlParams = url.searchParams
    const authorizationcode = urlParams.get('code')
    
    axios.post('http://localhost:3000/kakao/login', {authorizationcode})
}
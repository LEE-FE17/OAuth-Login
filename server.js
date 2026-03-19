const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()

const kakaoClientId = 'f313cc887f6fc3a0b2936dbd22818abf'
const redirectURI = 'http://127.0.0.1:5500'

app.use(cors({
    origin: ['http://localhost:5500', 'http://127.0.0.1:5500'],
    methods: ["OPTIONS", "POST", "DELETE"],
}))

app.use(express.json())

app.post('/kakao/login', (req, res) => {
    const authorizationcode = req.body.authorizationcode;

axios.post(
  'https://kauth.kakao.com/oauth/token',
  null,
  {
    params: {
      grant_type: 'authorization_code',
      client_id: kakaoClientId,
      redirect_uri: redirectURI,
      code: authorizationcode
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  }
)
.then(res => console.log(res.data))
.catch(err => console.error(err.response.data));

app.listen(3000, () => console.log('서버 열림!'))})
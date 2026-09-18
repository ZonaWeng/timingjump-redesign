<script setup>
import { ref } from "vue"
import facebookIcon from "../assets/images/icon/facebook.svg"
import lineIcon from "../assets/images/icon/line.png"

const account = ref("")
const password = ref("")
const message = ref("")

function showComingSoon(provider) {
  message.value = `${provider} 登入功能準備中，敬請期待。`
}

function submitLogin() {
  if (!account.value || !password.value) {
    message.value = "請輸入手機號碼／電子郵件及密碼。"
    return
  }
  message.value = "登入驗證功能準備中，敬請期待。"
}
</script>

<template>
  <section class="login-page">
    <div class="login-container">
      <nav class="breadcrumb" aria-label="麵包屑"><RouterLink to="/invite">首頁</RouterLink><span>／</span><span>會員登入</span></nav>
      <article class="login-card">
        <aside class="welcome-panel">
          <p class="eyebrow">TAIWAN GLASS GALLERY</p>
          <h1>歡迎回來</h1>
          <p>登入會員，收藏玻璃之美，<br>享受專屬購物與活動服務。</p>
          <i class="orb orb-one"></i><i class="orb orb-two"></i><i class="spark">✦</i>
        </aside>
        <form class="login-form" @submit.prevent="submitLogin">
          <header><p>MEMBER LOGIN</p><h2>會員登入</h2><span>請輸入您的帳號與密碼</span></header>
          <div class="social-logins">
            <button class="social-button facebook" type="button" @click="showComingSoon('Facebook')"><img :src="facebookIcon" alt=""><span>使用 Facebook 登入</span></button>
            <button class="social-button line" type="button" @click="showComingSoon('LINE')"><img :src="lineIcon" alt=""><span>使用 LINE 登入</span></button>
          </div>
          <div class="divider"><span>或使用帳號登入</span></div>
          <label for="account">手機號碼或電子郵件</label>
          <input id="account" v-model="account" autocomplete="username" inputmode="email" type="text" placeholder="請輸入手機號碼或電子郵件">
          <div class="password-label"><label for="password">密碼</label><RouterLink to="/login">忘記密碼？</RouterLink></div>
          <input id="password" v-model="password" autocomplete="current-password" type="password" placeholder="請輸入密碼">
          <button class="primary-button" type="submit">登入 <span aria-hidden="true">→</span></button>
          <p v-if="message" class="form-message" role="status">{{ message }}</p>
          <p class="registration">還沒有帳號？<RouterLink to="/member-terms">立即註冊會員 <span aria-hidden="true">→</span></RouterLink></p>
        </form>
      </article>
    </div>
  </section>
</template>

<style scoped>
.login-page{min-height:100vh;padding:132px 24px 85px;background:linear-gradient(135deg,#f7f8f2 0%,#edf7f7 50%,#f8f4e8 100%);color:#273334}.login-container{width:min(100%,960px);margin:auto}.breadcrumb{display:flex;gap:10px;margin:0 0 22px;color:#758082;font-size:14px}.breadcrumb a:hover,.password-label a:hover,.registration a:hover{color:#4e9198}.login-card{display:grid;grid-template-columns:40% 60%;overflow:hidden;border-radius:28px;background:#fff;box-shadow:0 24px 70px rgb(49 101 105 / .15)}.welcome-panel{position:relative;min-height:585px;padding:70px 48px;overflow:hidden;background:linear-gradient(150deg,#40848c,#70bdc4);color:#fff}.eyebrow{margin:0 0 24px;font-size:11px;font-weight:800;letter-spacing:.15em}.welcome-panel h1{max-width:none;margin:0 0 22px;font-size:clamp(38px,4vw,52px);line-height:1.1;letter-spacing:.08em}.welcome-panel>p:not(.eyebrow){position:relative;z-index:1;margin:0;font-size:17px;line-height:1.9}.orb{position:absolute;display:block;border:1px solid rgb(255 255 255 / .4);border-radius:50%}.orb-one{right:-100px;bottom:-74px;width:310px;height:310px}.orb-two{top:150px;left:-110px;width:220px;height:220px}.spark{position:absolute;right:62px;bottom:170px;color:#f4dd72;font-size:37px;font-style:normal}.login-form{padding:54px 62px 42px}.login-form header{margin-bottom:27px}.login-form header p{margin:0 0 8px;color:#c6a92e;font-size:11px;font-weight:800;letter-spacing:.16em}.login-form h2{margin:0 0 8px;font-size:29px;letter-spacing:.06em}.login-form header span{color:#7b8585;font-size:14px}.social-logins{display:grid;grid-template-columns:1fr 1fr;gap:10px}.social-button{display:flex;align-items:center;justify-content:center;gap:8px;min-height:43px;border:1px solid #d9dedb;border-radius:6px;background:#fff;color:#3e494a;font:inherit;font-size:13px;font-weight:700;cursor:pointer;transition:border-color .18s,box-shadow .18s,transform .18s}.social-button:hover{border-color:#75afb5;box-shadow:0 5px 13px rgb(61 132 140 / .15);transform:translateY(-1px)}.social-button img{width:21px;height:21px;object-fit:contain}.divider{display:flex;align-items:center;gap:13px;margin:25px 0;color:#9aa1a0;font-size:12px}.divider::before,.divider::after{flex:1;height:1px;background:#e2e5e3;content:""}.login-form label{display:block;margin:0 0 8px;font-size:13px;font-weight:800}.login-form input{width:100%;height:45px;margin:0 0 19px;padding:0 14px;border:1px solid #d7dcda;border-radius:5px;background:#fbfcfb;color:#263536;font:inherit;font-size:14px;outline:0;transition:border-color .18s,box-shadow .18s}.login-form input:focus{border-color:#65aab2;box-shadow:0 0 0 3px rgb(101 170 178 / .13)}.password-label{display:flex;align-items:baseline;justify-content:space-between}.password-label a{color:#778686;font-size:12px;text-decoration:underline}.primary-button{display:flex;align-items:center;justify-content:center;gap:15px;width:100%;height:48px;border:0;border-radius:5px;background:#3e858d;color:#fff;font:inherit;font-size:15px;font-weight:800;letter-spacing:.1em;cursor:pointer;box-shadow:0 9px 18px rgb(53 128 137 / .23);transition:background .18s,transform .18s}.primary-button:hover{background:#32767e;transform:translateY(-1px)}.primary-button span,.registration span{font-size:20px;line-height:1}.form-message{margin:14px 0 0;color:#39848d;font-size:13px;text-align:center}.registration{margin:24px 0 0;color:#7b8585;font-size:13px;text-align:center}.registration a{margin-left:4px;color:#3c858d;font-weight:800;text-decoration:none}@media(max-width:720px){.login-page{padding:104px 16px 55px}.login-card{grid-template-columns:1fr;border-radius:20px}.welcome-panel{min-height:210px;padding:37px 32px}.welcome-panel h1{font-size:36px}.welcome-panel>p:not(.eyebrow){font-size:14px;line-height:1.7}.eyebrow{margin-bottom:13px}.orb-one{right:-74px;bottom:-150px;width:260px;height:260px}.orb-two{display:none}.spark{right:35px;bottom:38px}.login-form{padding:36px 28px 32px}.social-logins{grid-template-columns:1fr}.breadcrumb{margin-bottom:15px;font-size:12px}.login-form h2{font-size:26px}} 
:global(body:has(.login-page) .site-footer){border-top-width:0}
</style>

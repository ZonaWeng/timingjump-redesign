<script setup>
import { reactive, ref } from "vue";
import headingIcon from "../../assets/images/invite/icon/icon-black.png";
import contactBlue from "../../assets/images/invite/contact/bg01.png";
import contactGold from "../../assets/images/invite/contact/bg02.png";

const form = reactive({ name:"", gender:"", phone:"", email:"", category:"", note:"" });
const submitted = ref(false);
const genders = ["男生", "女生", "不透露"];
const categories = ["交通", "購物", "餐飲", "DIY", "會員"];
function submitForm(){
  if(!form.name || !form.phone || !form.email || !form.category) return;
  submitted.value = true;
}
</script>

<template>
  <main class="contact-page">
    <img class="contact-deco contact-deco-blue" :src="contactBlue" alt="" aria-hidden="true" />
    <img class="contact-deco contact-deco-gold" :src="contactGold" alt="" aria-hidden="true" />
    <div class="contact-layout">
      <section class="contact-info">
        <h1><img :src="headingIcon" alt="" />聯絡我們</h1>
        <dl>
          <div><dt>地址</dt><dd>彰化縣鹿港鎮鹿工南四路30號</dd></div>
          <div><dt>電話</dt><dd>(04)7811299 分機266<br />(04)7811299<br />0911-661055</dd></div>
          <div><dt>傳真</dt><dd>(04)7811303</dd></div>
          <div><dt>EMAIL</dt><dd>service@tmg.com.tw</dd></div>
        </dl>
      </section>
      <form class="contact-form" @submit.prevent="submitForm">
        <div class="form-field">
          <label for="contact-name">聯絡人 <em>*</em></label>
          <div class="name-gender"><input id="contact-name" v-model.trim="form.name" required /><button v-for="item in genders" :key="item" type="button" :class="{selected:form.gender===item}" @click="form.gender=item">{{ item }}</button></div>
        </div>
        <div class="form-field"><label for="contact-phone">手機號碼 <em>*</em></label><input id="contact-phone" v-model.trim="form.phone" type="tel" required /></div>
        <div class="form-field"><label for="contact-email">電子信箱 <em>*</em></label><input id="contact-email" v-model.trim="form.email" type="email" required /></div>
        <div class="form-field"><span>問題類別 <em>*</em></span><div class="category-options"><button v-for="item in categories" :key="item" type="button" :class="{selected:form.category===item}" @click="form.category=item">{{ item }}</button></div></div>
        <div class="form-field"><label for="contact-note">備註資訊</label><textarea id="contact-note" v-model.trim="form.note"></textarea></div>
        <div class="form-actions"><p>您提供的所有資料僅供台灣玻璃館使用！</p><button type="submit">送出 →</button></div>
      </form>
    </div>
    <div v-if="submitted" class="contact-modal" role="presentation"><section role="dialog" aria-modal="true"><button aria-label="關閉" @click="submitted=false">×</button><img :src="headingIcon" alt="" /><h2>已送出！</h2><p>感謝您的聯絡，我們將在 24 小時內由專人回覆。</p></section></div>
  </main>
</template>

<style scoped>
.contact-page{position:relative;isolation:isolate;min-height:850px;overflow:hidden;padding:80px 0 130px;background:#e5f4f6}.contact-layout{position:relative;z-index:1;display:grid;grid-template-columns:minmax(300px,500px) minmax(0,760px);justify-content:space-between;gap:clamp(55px,8vw,150px);width:min(calc(100% - 144px),1460px);margin:0 auto}.contact-info h1{display:flex;align-items:center;gap:14px;margin:0 0 88px;color:#202020;font-size:clamp(2rem,2.4vw,3rem);font-weight:800;line-height:1}.contact-info h1 img{width:42px;height:auto}.contact-info dl{margin:0}.contact-info dl div{display:grid;grid-template-columns:112px 1fr;gap:20px;padding:18px 0;border-top:2px solid #202020}.contact-info dt,.contact-info dd{margin:0;font-size:clamp(1.05rem,1.5vw,1.45rem);font-weight:700;line-height:1.65}.contact-info dd{font-weight:500}.contact-form{margin-top:142px}.form-field{display:grid;grid-template-columns:120px minmax(0,1fr);align-items:start;gap:18px;margin-bottom:20px;color:#202020;font-size:1.15rem;font-weight:700}.contact-form input,.contact-form textarea{width:100%;border:1px solid #729aa0;background:#fff;padding:12px 14px;font:inherit;outline-offset:3px}.contact-form input{height:48px}.contact-form textarea{height:150px;resize:vertical}.contact-form em{color:#d7bb45;font-style:normal}.name-gender{display:flex;align-items:center;gap:9px;min-width:0}.name-gender input{flex:1;min-width:120px}.contact-form button{border:1px solid #202020;background:#fff;padding:11px 15px;color:#202020;font:inherit;font-weight:700;white-space:nowrap;cursor:pointer}.contact-form button.selected{border-color:#82c4ce;background:#82c4ce;color:#fff}.category-options{display:flex;flex-wrap:wrap;gap:10px}.form-actions{display:flex;align-items:center;justify-content:space-between;gap:20px;margin-left:138px}.form-actions p{margin:0;font-size:.92rem;font-weight:600}.form-actions button{min-width:130px;border:0;background:#82c4ce;color:#fff}.contact-deco{position:absolute;z-index:0;pointer-events:none}.contact-deco-blue{top:-100px;right:-310px;width:min(61vw,920px)}.contact-deco-gold{bottom:-510px;left:-230px;width:min(58vw,900px)}.contact-modal{position:fixed;z-index:20;inset:0;display:grid;place-items:center;padding:20px;background:rgb(26 49 52 / .22)}.contact-modal section{position:relative;width:min(90vw,500px);padding:48px 50px;background:#fff;border-radius:36px;text-align:center;box-shadow:0 20px 45px rgb(0 0 0 / .16)}.contact-modal button{position:absolute;top:16px;right:20px;border:0;background:transparent;font-size:2rem;cursor:pointer}.contact-modal img{width:55px}.contact-modal h2{margin:18px 0;font-size:2rem}.contact-modal p{margin:0;line-height:1.8}@media(min-width:801px){.contact-page{padding-top:145px}}@media(max-width:800px){.contact-page{padding:52px 0 88px}.contact-layout{display:block;width:calc(100% - 40px)}.contact-info h1{margin-bottom:50px;font-size:clamp(2rem,8vw,2.7rem)}.contact-info h1 img{width:36px}.contact-info dl div{grid-template-columns:82px 1fr;gap:12px}.contact-form{margin-top:65px}.form-field{grid-template-columns:1fr;gap:8px}.name-gender{flex-wrap:wrap}.name-gender input{flex-basis:100%}.form-actions{margin-left:0;align-items:flex-start;flex-direction:column}.contact-deco-blue{top:460px;right:-380px}.contact-deco-gold{bottom:-300px;left:-350px}}
</style>

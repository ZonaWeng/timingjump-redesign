<script setup>
import { ref } from "vue";
import headingIcon from "../../assets/images/invite/icon/icon-black.png";
import backgroundGold from "../../assets/images/invite/question/bg02.png";
import backgroundWhite from "../../assets/images/invite/question/bg04.png";
import backgroundRing from "../../assets/images/invite/question/bg05.png";

const openFaq = ref(0);
const faqs = [
  ["國定假日有休館嗎？", "本館全年無休；如遇天災或其他不可抗力因素需調整營業時間，將於「最新消息」公告。"],
  ["參觀需要購買門票嗎？", "一般參觀免門票；黃金隧道體驗費為每人 150 元，費用包含參觀拖鞋。DIY 體驗活動請參考「體驗活動」資訊。"],
  ["臺玻館有停車場嗎？", "館外設有小客車停車場、大客車停車場及無障礙停車格，方便遊客使用。"],
  ["館內有用餐區嗎？", "二樓展場禁止飲食。館內 C 區設有古早味美食區，您可在此用餐，並可將使用過的特色杯盤帶回家留念。"],
  ["參觀需要預約嗎？", "僅限 20 人以上團體，需於參觀日前 3 天完成線上預約。"],
];

function toggleFaq(index) {
  openFaq.value = openFaq.value === index ? -1 : index;
}
</script>

<template>
  <main class="question-page">
    <img class="question-deco question-deco-white question-deco-white-top" :src="backgroundWhite" alt="" aria-hidden="true" />
    <img class="question-deco question-deco-white question-deco-white-bottom" :src="backgroundWhite" alt="" aria-hidden="true" />
    <img class="question-deco question-deco-gold question-deco-gold-top" :src="backgroundGold" alt="" aria-hidden="true" />
    <img class="question-deco question-deco-ring" :src="backgroundRing" alt="" aria-hidden="true" />
    <img class="question-deco question-deco-gold question-deco-gold-right" :src="backgroundGold" alt="" aria-hidden="true" />
    <div class="question-layout">
      <section class="question-intro">
        <h1><img :src="headingIcon" alt="" />常見問題</h1>
      </section>

      <section class="faq-panel" aria-label="常見問題與答案">
        <ol class="faq-list">
          <li v-for="([question, answer], index) in faqs" :key="question" class="faq-item">
            <button class="faq-question" type="button" :aria-expanded="openFaq === index" @click="toggleFaq(index)">
              <span>{{ question }}</span><span class="faq-symbol" aria-hidden="true"></span>
            </button>
            <div class="faq-answer" :class="{ 'is-open': openFaq === index }">
              <div><p>{{ answer }}</p></div>
            </div>
          </li>
        </ol>
      </section>
    </div>
  </main>
</template>

<style scoped>
.question-page{position:relative;isolation:isolate;min-height:820px;overflow:hidden;padding:151px 0 0;background:#c3e7eb}.question-layout{position:relative;z-index:1;display:grid;grid-template-columns:minmax(250px,1fr) minmax(0,570px) minmax(130px,1fr);gap:26px;width:min(calc(100% - 144px),1460px);min-height:731px;margin:0 auto}.question-intro{grid-column:1}.question-intro h1{display:flex;align-items:center;gap:15px;margin:10px 0 0;color:#202020;font-size:clamp(1.3rem,2vw,2rem);font-weight:900;line-height:1;white-space:nowrap}.question-intro h1 img{width:38px;height:32px}.faq-panel{grid-column:2;align-self:start;margin-top:112px}.faq-list{margin:0;padding:0;list-style:none}.faq-item{border-bottom:2px solid #222}.faq-question{display:grid;grid-template-columns:1fr 34px;align-items:center;gap:20px;width:100%;min-height:61px;padding:0;border:0;background:transparent;color:#222;font:inherit;font-size:clamp(1.1rem,1.5vw,1.45rem);font-weight:700;text-align:left;cursor:pointer;transition:color .2s ease}.faq-question:hover{color:#246f77}.faq-symbol{position:relative;width:24px;height:24px}.faq-symbol::before,.faq-symbol::after{position:absolute;top:50%;left:50%;width:100%;height:2px;background:currentColor;content:"";transform:translate(-50%,-50%);transition:opacity .2s ease}.faq-symbol::after{transform:translate(-50%,-50%) rotate(90deg)}.faq-question[aria-expanded="true"] .faq-symbol::after{opacity:0}.faq-answer{display:grid;grid-template-rows:0fr;opacity:0;transition:grid-template-rows .28s ease,opacity .22s ease}.faq-answer>div{min-height:0;overflow:hidden}.faq-answer.is-open{grid-template-rows:1fr;opacity:1}.faq-answer p{margin:0;padding:10px 25px 24px 0;font-size:clamp(1rem,1.2vw,1.12rem);font-weight:500;line-height:1.75}.question-deco{position:absolute;z-index:0;pointer-events:none}.question-deco-white-top{top:-520px;right:-310px;width:min(76vw,1180px);transform:rotate(-8deg)}.question-deco-white-bottom{bottom:-500px;left:-270px;width:min(76vw,1080px);transform:rotate(8deg)}.question-deco-gold-top{top:296px;left:13%;width:170px;opacity:.72}.question-deco-ring{bottom:28px;left:4.5%;width:180px;opacity:.72}.question-deco-gold-right{right:16%;bottom:105px;width:195px;opacity:.72;transform:rotate(16deg)}@media(max-width:800px){.question-page{min-height:720px;padding:125px 0 0}.question-layout{display:block;min-height:595px;width:calc(100% - 40px)}.question-intro h1{margin:0;font-size:1.3rem}.question-intro h1 img{width:31px;height:26px}.faq-panel{margin-top:68px}.faq-question{grid-template-columns:1fr 30px;min-height:60px;font-size:1.08rem}.faq-symbol{width:23px;height:23px}.faq-answer p{padding-right:18px;font-size:.98rem}.question-deco-white-top{top:-345px;right:-410px;width:720px}.question-deco-white-bottom{bottom:-250px;left:-250px;width:680px}.question-deco-gold-top{top:230px;left:6%;width:110px}.question-deco-ring{bottom:18px;left:6%;width:115px}.question-deco-gold-right{right:5%;bottom:110px;width:120px}}
</style>

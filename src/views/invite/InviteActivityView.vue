<script setup>
import headingIcon from '../../assets/images/invite/icon/icon-black.png'
import bg01 from '../../assets/images/invite/experience/bg01.png'
import bg02 from '../../assets/images/invite/experience/bg02.png'
import bg03 from '../../assets/images/invite/experience/bg03.png'
import bg04 from '../../assets/images/invite/experience/bg04.png'
import bg05 from '../../assets/images/invite/experience/bg05.png'
import ex01 from '../../assets/images/invite/experience/ex01.png'
import ex02 from '../../assets/images/invite/experience/ex02.png'
import ex03 from '../../assets/images/invite/experience/ex03.png'
import ex04 from '../../assets/images/invite/experience/ex04.png'
import ex05 from '../../assets/images/invite/experience/ex05.png'
import activity01 from '../../assets/images/invite/homepage/activity01.png'
import activity02 from '../../assets/images/invite/homepage/activity02.png'
import activity03 from '../../assets/images/invite/homepage/activity03.png'
import activity04 from '../../assets/images/invite/homepage/activity04.png'

const activities = [
  ['吹製玻璃', '吹製玻璃體驗DIY', activity01],
  ['吹製玻璃', '循環再生玻璃吹製體驗', activity02],
  ['吹製玻璃', '小小玻璃工藝師', activity03],
  ['彩繪玻璃', '彩繪玻璃小夜燈DIY', activity04],
]
</script>

<template>
  <main class="activity-page">
    <section class="blowing" aria-labelledby="blowing-title">
      <img class="blowing-bg bg-one" :src="bg01" alt="" aria-hidden="true">
      <img class="blowing-bg bg-two" :src="bg02" alt="" aria-hidden="true">
      <img class="blowing-bg bg-four" :src="bg04" alt="" aria-hidden="true">
      <div class="activity-wrap blowing-layout">
        <img class="blowing-photo photo-one" :src="ex01" alt="玻璃吹製教學">
        <img class="blowing-photo photo-two" :src="ex02" alt="孩童體驗玻璃吹製">
        <img class="blowing-photo photo-three" :src="ex03" alt="玻璃吹製塑形過程">
        <p class="english-title">Blowing</p>
        <div class="intro blowing-intro">
          <h1 id="blowing-title">吹製玻璃</h1>
          <p>體驗最有溫度的玻璃手作時光<br>從挑選色彩，加熱塑形完成作品<br>即使沒有經驗，也能完成專屬你的玻璃創作</p>
        </div>
      </div>
    </section>

    <section class="painting" aria-labelledby="painting-title">
      <div class="activity-wrap painting-layout">
        <img class="painting-photo paint-one" :src="ex04" alt="彩繪玻璃夜燈作品">
        <img class="painting-photo paint-two" :src="ex05" alt="孩童進行玻璃彩繪">
        <img class="painting-blue-bg" :src="bg03" alt="" aria-hidden="true">
        <img class="painting-bg" :src="bg05" alt="" aria-hidden="true">
        <p class="english-title">Painting</p>
        <div class="intro painting-intro">
          <h2 id="painting-title">彩繪玻璃</h2>
          <p>環保原木燈座與節能 USB 供電設計<br>步驟簡單、老少咸宜<br>親手創作夜燈的同時，<br>也為地球奉獻一份永續心意！</p>
        </div>
      </div>
    </section>

    <section class="activity-list" aria-labelledby="activity-list-title">
      <div class="activity-wrap">
        <header class="list-heading">
          <h2 id="activity-list-title"><img :src="headingIcon" alt="">體驗活動</h2>
          <RouterLink to="/shop/products">VIEW ALL &#8599;&#65038;</RouterLink>
        </header>
        <div class="activity-grid">
          <article v-for="([category, title, image]) in activities" :key="title" class="activity-card">
            <img :src="image" :alt="title">
            <p>{{ category }}</p>
            <h3>{{ title }}</h3>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.activity-page{overflow:hidden;color:#1e1e1e;background:#fff}.activity-wrap{position:relative;width:min(calc(100% - 128px),1200px);margin:auto}.blowing{position:relative;min-height:730px;overflow:hidden;background:#e5f4f6;clip-path:polygon(0 0,100% 0,100% 96%,70% 99%,37% 97%,0 100%)}.blowing-layout{height:730px}.blowing-bg{position:absolute;pointer-events:none}.bg-one{top:6%;left:-8%;width:29vw;max-width:440px}.bg-two{right:-6%;bottom:14%;width:22vw;max-width:350px}.bg-four{bottom:-8%;left:40%;width:17vw;max-width:260px}.blowing-photo,.painting-photo{position:absolute;display:block;object-fit:cover}.photo-one{top:132px;left:0;width:31%;height:355px}.photo-two{top:72px;left:33%;width:26%;height:298px}.photo-three{right:3%;bottom:113px;width:28%;height:304px}.english-title{position:absolute;margin:0;color:#decc67;font-family:Georgia,serif;font-size:clamp(3.8rem,8vw,7.5rem);line-height:.9}.blowing .english-title{top:168px;right:7%}.intro{position:absolute}.intro h1,.intro h2{margin:0 0 20px;font-size:clamp(2rem,3.6vw,3.4rem);font-weight:900}.intro p{margin:0;font-size:clamp(1rem,1.35vw,1.25rem);font-weight:600;line-height:2}.blowing-intro{top:445px;left:34%}.painting{position:relative;min-height:660px;background:#fff}.painting-layout{height:660px}.painting-photo{z-index:1}.paint-one{top:104px;left:4%;width:31%;height:338px}.paint-two{right:4%;bottom:93px;width:28%;height:288px}.painting-bg{position:absolute;right:28%;bottom:19%;width:20%;max-width:250px;opacity:.85}.painting .english-title{top:170px;left:39%;color:#6ac3cc}.painting-intro{top:312px;left:40%;z-index:2}.activity-list{padding:90px 0 125px;background:#e5f4f6}.list-heading{display:flex;align-items:center;justify-content:space-between;gap:30px;margin-bottom:52px}.list-heading h2{display:flex;align-items:center;gap:14px;margin:0;font-size:clamp(1.5rem,2.5vw,2.25rem);font-weight:900}.list-heading h2 img{width:32px;height:27px;object-fit:contain}.list-heading a{padding-bottom:5px;border-bottom:2px solid currentColor;font-weight:800;text-decoration:none}.activity-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:22px}.activity-card img{width:100%;aspect-ratio:1/.92;object-fit:cover}.activity-card p{margin:18px 0 7px;color:#6a9ea4;font-size:.95rem;font-weight:700}.activity-card h3{margin:0;font-size:1.15rem;line-height:1.45}:global(body:has(.activity-page) .site-header){position:absolute;top:0;right:0;left:0;margin:14px auto 0}@media(max-width:900px){.activity-wrap{width:calc(100% - 64px)}.blowing{min-height:640px}.blowing-layout{height:640px}.photo-one{top:115px;height:290px}.photo-two{top:70px;height:245px}.photo-three{bottom:85px;height:255px}.blowing-intro{top:402px}.painting{min-height:580px}.painting-layout{height:580px}.paint-one{height:285px}.paint-two{height:240px}.painting-intro{top:274px}.activity-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:42px 28px}}@media(max-width:640px){.activity-wrap{width:calc(100% - 32px)}.blowing{min-height:830px;clip-path:polygon(0 0,100% 0,100% 98%,62% 100%,0 98%)}.blowing-layout{height:830px}.bg-one{width:64vw}.bg-two{width:42vw}.bg-four{width:35vw;left:42%}.photo-one{top:120px;left:0;width:52%;height:220px}.photo-two{top:70px;left:auto;right:0;width:44%;height:190px}.photo-three{right:3%;bottom:255px;width:55%;height:200px}.blowing .english-title{top:350px;right:auto;left:0;font-size:4.5rem}.blowing-intro{top:auto;bottom:72px;left:0}.intro p{font-size:.95rem;line-height:1.8}.painting{min-height:680px}.painting-layout{height:680px}.paint-one{top:75px;left:0;width:57%;height:232px}.paint-two{right:0;bottom:226px;width:49%;height:192px}.painting-bg{right:8%;bottom:8%;width:44%}.painting .english-title{top:292px;left:0;font-size:4rem}.painting-intro{top:auto;bottom:66px;left:0}.activity-list{padding:70px 0 90px}.list-heading{margin-bottom:34px}.list-heading a{font-size:.82rem}.activity-grid{gap:32px 16px}.activity-card p{margin-top:12px;font-size:.85rem}.activity-card h3{font-size:1rem}}
@media (min-width: 901px) {
  .blowing { min-height: 850px; clip-path: polygon(0 0, 100% 0, 100% 85%, 83.5% 92%, 57.5% 87%, 15.5% 100%, 0 93%); }
  .blowing-layout { height: 850px; }
  .photo-one { top: 255px; left: calc(50% - 50vw); width: clamp(190px, 18.75vw, 232px); height: clamp(230px, 22.5vw, 278px); }
  .photo-two { top: 394px; left: 18.5%; width: clamp(205px, 20vw, 248px); height: clamp(250px, 24.3vw, 301px); }
  .photo-three { top: 177px; right: 0; bottom: auto; width: clamp(400px, 45vw, 560px); height: clamp(250px, 27.1vw, 336px); }
  .blowing .english-title { top: 255px; right: auto; left: 18.5%; color: #7fc7d0; font-size: clamp(4.5rem, 7.7vw, 6rem); }
  .blowing-intro { top: 566px; left: 44.5%; }
  .blowing-intro h1 { margin-bottom: 22px; font-size: clamp(1.7rem, 2.55vw, 2rem); }
  .blowing-intro p { font-size: clamp(.9rem, 1.2vw, 1rem); line-height: 1.6; }
  .bg-one { top: auto; bottom: -8%; left: -8%; width: 27vw; max-width: 335px; }
  .bg-two { top: -16%; right: -4%; bottom: auto; left: auto; width: 48vw; max-width: 670px; }
  .bg-four { z-index: 5; top: 55%; right: 3%; bottom: auto; left: auto; width: 17vw; max-width: 215px; }
  .painting { min-height: 850px; padding: 80px 0 120px; }
  .painting .activity-wrap { width: min(calc(100% - 152px), 1500px); height: 650px; }
  .painting-layout { height: 650px; }
  .paint-one { top: 80px; left: 0; width: 38%; height: 392px; }
  .paint-two { top: 150px; right: auto; bottom: auto; left: 43.5%; width: 20.5%; height: 288px; }
  .painting .english-title { top: 14px; right: 10.5%; left: auto; color: #dfca65; font-size: clamp(4.5rem, 7.7vw, 6rem); }
  .painting-intro { top: 254px; right: 9%; bottom: auto; left: auto; }
  .painting-intro h2 { margin-bottom: 18px; font-size: clamp(1.7rem, 2.55vw, 2rem); }
  .painting-intro p { font-size: clamp(.9rem, 1.2vw, 1rem); line-height: 1.62; }
  .painting-bg { z-index: 5; top: 400px; right: auto; bottom: auto; left: 27%; width: clamp(120px, 12vw, 155px); max-width: none; opacity: 1; }
  .painting-blue-bg { position: absolute; right: -5%; bottom: -5%; width: 49%; max-width: 620px; opacity: .82; pointer-events: none; }
}

.activity-list { background: #fff; }
.list-heading h2 { font-size: clamp(1.3rem, 2vw, 2rem); }
</style>

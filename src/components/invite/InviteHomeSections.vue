<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue"
import knowledge from "../../assets/images/invite/feature/展覽特色01.png"
import life from "../../assets/images/invite/feature/展覽特色02.png"
import art from "../../assets/images/invite/feature/展覽特色03.png"
import venue01 from "../../assets/images/invite/homepage/venue01.jpg"
import venue02 from "../../assets/images/invite/homepage/venue02.jpg"
import venue03 from "../../assets/images/invite/homepage/venue03.jpg"
import venue04 from "../../assets/images/invite/homepage/venue04.jpg"
import activity01 from "../../assets/images/invite/homepage/activity01.png"
import activity02 from "../../assets/images/invite/homepage/activity02.png"
import titleIcon from "../../assets/images/invite/icon/icon-black.png"

const features = [{ title: "知識", image: knowledge }, { title: "生活", image: life }, { title: "藝術", image: art }]
const venues = [
  { title: "玻璃資訊館", text: "一站看懂玻璃的十八般武藝，玻璃結合鹿港元素，展現玻璃的無限可能。", image: venue01 },
  { title: "玻璃媽祖廟", text: "全臺首座、全球華人第一座玻璃媽祖廟，展現藝術與信仰交織之美，是兼具文化、信仰與美學的特色地標。", image: venue02 },
  { title: "生活商品館", text: "生活商品館用滿滿的玻璃好物迎接您——從精緻餐具、療癒小物到質感禮品，開開心心地帶回家。", image: venue03 },
  { title: "煉功屋", text: "創立於2017年，煉功屋擁有全台專業的吹玻璃設備與教學團隊，帶領遊客親身體驗玻璃吹製的樂趣。", image: venue04 },
]
const activities = [
  { title: "吹製玻璃", text: "體驗最有溫度的玻璃手作時光。從挑選色彩，加熱塑形完成作品。", image: activity01 },
  { title: "彩繪玻璃", text: "導入ESG永續理念，採用環保原木燈座與節能USB供電設計，減少碳排放。", image: activity02 },
]
const routes = [
  {
    name: "自行開車",
    text: "國道1號－彰化交流道下 ＞ 臺19線 ＞ 鄉道彰30 ＞ 鹿安橋 ＞ 工業東一路 ＞ 工業西三路 ＞ 鹿工南四路 ＞ 抵達台灣玻璃館。",
    buttonText: "導航路線",
    url: "https://www.google.com/maps/dir/%E5%BD%B0%E5%8C%96%E4%BA%A4%E6%B5%81%E9%81%93+500%E5%BD%B0%E5%8C%96%E7%B8%A3%E5%BD%B0%E5%8C%96%E5%B8%82/%E8%87%BA%E7%81%A3%E7%8E%BB%E7%92%83%E9%A4%A8(%E7%85%89%E5%8A%9F%E5%9D%8A%E5%8F%A3%E5%90%B9%E7%8E%BB%E7%92%83%E9%AB%94%E9%A9%97%E7%82%BA%E5%81%87%E6%97%A5%E9%99%90%E5%AE%9A)+505%E5%BD%B0%E5%8C%96%E7%B8%A3%E9%B9%BF%E6%B8%AF%E9%8E%AE%E6%9D%B1%E7%9F%B3%E9%87%8C%E9%B9%BF%E5%B7%A5%E5%8D%97%E5%9B%9B%E8%B7%AF30%E8%99%9F1F/@24.0654757,120.379028,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x346938801ff9ae05:0x2696eb864b47be4f!2m2!1d120.527923!2d24.069784!1m5!1m1!1s0x3469459c05aa216d:0x6b9cead7b0b10332!2m2!1d120.3949106!2d24.0686745",
  },
  { name: "高鐵", text: "搭乘台灣高鐵至台中站，然後轉搭台灣好行 6936A 鹿港祈福線，至台明將台灣玻璃館站下車。", buttonText: "高鐵時刻表", url: "https://www.thsrc.com.tw/ArticleContent/a3b630bb-1066-4352-a1ef-58c7b4e8ef7c" },
  { name: "台鐵", text: "搭乘臺鐵至彰化站，然後轉搭台灣好行 6936A 鹿港祈福線，至台明將台灣玻璃館站下車。", buttonText: "台鐵時刻表", url: "https://www.railway.gov.tw/tra-tip-web/tip/tip001/tip112/gobytime" },
  { name: "客運", text: "彰化客運可於彰化車站轉乘；台灣好行站點包含彰化站、文化中心（大佛風景區）等地，再轉搭台灣好行 6936A 鹿港祈福線，至台明將台灣玻璃館站下車。", buttonText: "客運時刻表", url: "https://www.changhuabus.com.tw/service_info.asp?id=1151" },
]
const activeRoute = ref(0)
const currentRoute = computed(() => routes[activeRoute.value])
const mapUrl = "https://www.google.com/maps/search/?api=1&query=台灣玻璃館"

const featureVenue = ref(null)
let featureResizeObserver

function alignEdgeWords() {
  const element = featureVenue.value
  if (!element) return

  // 這四個頂點與 .feature-venue::before 的上緣 clip-path 完全一致。
  const width = Math.min(element.clientWidth, 2300)
  const height = Math.max(element.clientHeight - 50, 1) // ::before 上 30px、下 20px
  const points = [
    [0, .06],
    [.35, .02],
    [.65, .09],
    [1, .04],
  ]

  const pointOnEdge = (start, end, x) => {
    const progress = (x - start[0]) / (end[0] - start[0])
    return start[1] + (end[1] - start[1]) * progress
  }

  const angleOfEdge = (start, end) => Math.atan2(
    (end[1] - start[1]) * height,
    (end[0] - start[0]) * width,
  ) * 180 / Math.PI

  const words = [
    { name: "one", x: .25, edge: 0 },
    { name: "two", x: .50, edge: 1 },
    { name: "three", x: .77, edge: 2 },
  ]

  words.forEach(({ name, x, edge }) => {
    const y = pointOnEdge(points[edge], points[edge + 1], x) * height
    const angle = angleOfEdge(points[edge], points[edge + 1])
    element.style.setProperty(`--edge-word-${name}-y`, `${y}px`)
    element.style.setProperty(`--edge-word-${name}-angle`, `${angle}deg`)
  })
}

onMounted(() => {
  alignEdgeWords()
  featureResizeObserver = new ResizeObserver(alignEdgeWords)
  if (featureVenue.value) featureResizeObserver.observe(featureVenue.value)
})

onBeforeUnmount(() => featureResizeObserver?.disconnect())
</script>

<template>
  <section id="about" class="about-section">
    <div class="wrap about-grid">
      <h2 class="section-title"><img :src="titleIcon" alt="">關於我們</h2>
      <div class="about-copy">
        <p class="lead">全台唯一以「玻璃」為主題，<br>集知識、藝術與生活於一體的觀光工廠。</p>
        <p class="about-body">由台明將公司創立的台灣玻璃館，是全台最大的玻璃展示中心。我們秉持「四面亮麗、八方驚奇」的理念，以生動有趣的方式帶領每一位到訪的您，走進晶瑩剔透的玻璃世界。</p>
      </div>
    </div>
  </section>

  <div ref="featureVenue" class="feature-venue">
    <p class="edge-words" aria-hidden="true"><span>ART.</span><span>KNOWLEDGE.</span><span>LIFESTYLE.</span></p>
    <section id="features" class="features-section">
      <div class="wrap">
        <h2 class="section-title"><img :src="titleIcon" alt="">展覽特色</h2>
        <p class="intro">從一粒沙到一件藝術品，從實用生活器皿到令人屏息的裝置藝術，館內以寓教於樂的方式，打破您對玻璃產業的既定印象，讓您與玻璃展開一場前所未有的「零距離的另類接觸」。</p>
        <div class="feature-collage"><article v-for="item in features" :key="item.title" class="feature-card"><div class="feature-img"><img :src="item.image" :alt="item.title"></div><h3 class="feature-label"># {{ item.title }}</h3></article></div>
      </div>
    </section>
    <section id="venue" class="wrap venue">
      <div class="topline"><h2 class="section-title"><img :src="titleIcon" alt="">場館導覽</h2><RouterLink to="/invite/venue" class="view-all">VIEW ALL &#8599;&#65038;</RouterLink></div>
      <div class="venue-grid"><RouterLink v-for="item in venues" :key="item.title" to="/invite/venue" class="venue-card"><div class="venue-img"><img :src="item.image" :alt="item.title"></div><div><h3>{{ item.title }}</h3><p>{{ item.text }}</p></div></RouterLink></div>
    </section>
  </div>

  <section id="activities" class="activities"><div class="wrap"><div class="topline"><h2 class="section-title"><img :src="titleIcon" alt="">體驗活動</h2><RouterLink to="/invite/activity" class="view-all">VIEW ALL &#8599;&#65038;</RouterLink></div><div class="activity-track"><RouterLink v-for="item in activities" :key="item.title" to="/invite/activity" class="activity-card"><img :src="item.image" :alt="item.title"><div class="activity-content"><h3>{{ item.title }}</h3><p>{{ item.text }}</p></div></RouterLink></div></div></section>
  <section id="transport" class="transport"><div class="wrap"><h2 class="section-title"><img :src="titleIcon" alt="">交通資訊</h2><div class="transport-grid"><div class="transport-panel"><div class="tabs" role="tablist"><button v-for="(item, index) in routes" :key="item.name" :class="{ active: index === activeRoute }" type="button" @click="activeRoute = index">{{ item.name }}</button></div><div class="route-copy">{{ currentRoute.text }}</div><a :href="currentRoute.url" target="_blank" rel="noopener noreferrer" class="route-button">{{ currentRoute.buttonText }} <span aria-hidden="true">↗</span></a></div><a :href="mapUrl" target="_blank" rel="noopener" class="map"><iframe title="臺灣玻璃館 Google 地圖" src="https://www.google.com/maps?q=台灣玻璃館&output=embed" loading="lazy" /></a></div></div></section>
</template>

<style scoped>
.wrap{width:min(100% - 64px,1600px);margin:auto}.about-section,.activities,.transport{padding:120px 0}.about-section{background:#fff}.about-grid{display:grid;grid-template-columns:.8fr 1.2fr;gap:64px}.about-grid h2,.feature-venue h2,.activities h2,.transport h2{margin:0;font-size:clamp(1.8rem,3vw,3rem)}.about-grid p{line-height:1.9}.lead{margin-top:0;font-size:clamp(1.4rem,2.4vw,2.25rem);font-weight:700;line-height:1.55!important}.view-all{display:inline-block;margin-top:24px;padding-bottom:7px;border-bottom:2px solid;color:inherit;font-weight:700;text-decoration:none}.feature-venue{padding:92px 0 120px;background:#e5dfd9}.edge-words{overflow:hidden;margin:0 0 72px;color:#1e1e1e40;font-size:clamp(2rem,7vw,8rem);font-weight:800;white-space:nowrap}.intro{max-width:850px;margin:32px 0 0;line-height:1.9}.feature-grid{display:grid;grid-template-columns:1.1fr .9fr .9fr;gap:24px;margin-top:40px}.feature-grid img{display:block;width:100%;aspect-ratio:1/1.1;object-fit:cover}.feature-grid h3{margin:14px 0}.venue{margin-top:120px}.topline{display:flex;justify-content:space-between;gap:24px}.topline .view-all{margin-top:0}.venue-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;margin-top:40px}.venue-card{display:grid;grid-template-columns:42% 1fr;gap:22px;color:inherit;text-decoration:none}.venue-card img{width:100%;height:210px;object-fit:cover}.venue-card h3{margin:4px 0 10px}.venue-card p,.activity-card p{margin:0;color:#59534d;line-height:1.75}.activities{background:#fff}.activity-track{display:grid;grid-auto-columns:minmax(270px,1fr);grid-auto-flow:column;gap:22px;margin-top:40px;overflow-x:auto;padding-bottom:12px;scroll-snap-type:x mandatory}.activity-card{overflow:hidden;border-radius:20px;background:#f5f1ed;color:inherit;text-decoration:none;scroll-snap-align:start}.activity-card img{display:block;width:100%;aspect-ratio:1/.8;object-fit:cover}.activity-card div{padding:22px}.activity-card h3{margin:0 0 10px}.transport{background:#dff1f3}.transport-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:36px;margin-top:40px}.route-panel{padding:40px;background:#fff}.tabs{display:flex;flex-wrap:wrap;gap:10px}.tabs button{border:1px solid #1e1e1e;padding:10px 16px;background:transparent;font:inherit;cursor:pointer}.tabs button.active{color:#fff;background:#1e1e1e}.route-panel p{margin:32px 0;line-height:1.9}.route-button{display:inline-block;padding:13px 18px;color:#fff;background:#1e1e1e;font-weight:700;text-decoration:none}.map,.map iframe{display:block;width:100%;min-height:360px;border:0}@media(max-width:768px){.wrap{width:min(100% - 32px,1600px)}.about-section,.activities,.transport{padding:72px 0}.feature-venue{padding:64px 0 72px}.about-grid,.transport-grid{grid-template-columns:1fr;gap:32px}.edge-words{margin-bottom:48px;font-size:3rem}.feature-grid,.venue-grid{grid-template-columns:1fr}.venue{margin-top:72px}.venue-card{grid-template-columns:38% 1fr;gap:16px}.venue-card img{height:150px}.route-panel{padding:28px}}
.lead { color: #81c6cf; }

/* 桌機版保留清楚的左右留白，避免內容撐滿整個螢幕。 */
.wrap {
  width: min(calc(100% - 128px), 1200px);
}

.about-section,
.activities,
.transport {
  padding-block: 96px;
}

.about-grid {
  grid-template-columns: .95fr 1.05fr;
}

/* 首頁各區塊共用的標題與內文字級 */
h2.section-title {
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 0;
  font-size: clamp(1.3rem, 2vw, 2rem);
  line-height: 1.2;
}

.section-title img {
  width: 34px;
  height: 28px;
  object-fit: contain;
}

.feature-venue { background: #fff; }

.about-copy { min-width: 0; }

.about-copy p {
  margin-left: 0;
  margin-right: 0;
}

.about-copy .lead {
  margin: 0 0 clamp(52px, 5vw, 88px);
  line-height: 1.6 !important;
  font-size: clamp(1.3rem, 2vw, 1.9rem);
}

.about-body,
.intro,
.venue-card p,
.activity-card p,
.route-panel p {
  font-size: clamp(1rem, 1.1vw, 1.15rem);
  line-height: 1.9;
}

@media (max-width: 768px) {
  .wrap { width: min(calc(100% - 32px), 1200px); }

  .about-section,
  .activities,
  .transport { padding-block: 72px; }

  h2.section-title { font-size: 1.3rem; }
  .section-title img { width: 30px; height: 25px; }

  .about-copy .lead { margin-bottom: 48px; }

  .about-body,
  .intro,
  .venue-card p,
  .activity-card p,
  .route-panel p { font-size: 1.05rem; }
}

/* 與舊首頁相同的「展覽特色＋場館導覽」不規則玻璃背景。 */
.feature-venue {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding-bottom: 96px;
  background: #fff;
}

.feature-venue::before {
  position: absolute;
  z-index: 0;
  top: 30px;
  right: 50%;
  bottom: 20px;
  width: min(100%, 2300px);
  content: "";
  background: #e2f2f4;
  clip-path: polygon(0 6%, 35% 2%, 65% 9%, 100% 4%, 100% 94%, 62% 100%, 40% 96%, 10% 99%, 0 94%);
  transform: translateX(50%);
}

.feature-venue > *:not(.edge-words) {
  position: relative;
  z-index: 1;
}

.edge-words {
  position: absolute;
  z-index: 2;
  top: 30px;
  left: 50%;
  width: min(100%, 1640px);
  /* 文字只相對於背景上緣定位，不能跟著整個區塊高度一起變動。 */
  height: 0;
  margin: 0;
  overflow: visible;
  color: #decc67;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(1.8rem, 3.2vw, 3.7rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: .02em;
  pointer-events: none;
  transform: translateX(-50%);
}

.edge-words span { position: absolute; display: block; white-space: nowrap; }
.edge-words span:nth-child(1) { top: var(--edge-word-one-y, 54px); left: 25%; transform: translate(-50%, -100%) rotate(var(--edge-word-one-angle, -8deg)); }
.edge-words span:nth-child(2) { top: var(--edge-word-two-y, 100px); left: 50%; transform: translate(-50%, -115%) rotate(var(--edge-word-two-angle, 15deg)); }
.edge-words span:nth-child(3) { top: var(--edge-word-three-y, 126px); left: 77%; transform: translate(-50%, -115%) rotate(var(--edge-word-three-angle, -9deg)); }

.features-section { position: relative; z-index: 1; padding: 150px 0 70px; }
.features-section .intro { max-width: 730px; margin: 26px 0 44px; }

.feature-collage { position: relative; min-height: 510px; margin-top: 24px; }
.feature-card { position: absolute; width: min(40%, 440px); margin: 0; }
.feature-card:nth-child(1) { top: 72px; left: 0; transform: rotate(-2deg); }
.feature-card:nth-child(2) { top: 145px; left: 38%; transform: rotate(2deg); }
.feature-card:nth-child(3) { top: 4px; left: 68%; transform: rotate(3deg); }
.feature-img img { display: block; width: 100%; height: auto; transition: transform .5s ease; }
.feature-card:hover .feature-img img { transform: scale(1.04); }
.feature-label { position: absolute; z-index: 2; margin: 0; font-size: clamp(1.15rem, 1.55vw, 1.6rem); font-weight: 800; line-height: 1; white-space: nowrap; pointer-events: none; }
.feature-card:nth-child(1) .feature-label { top: 10%; right: 8%; transform: rotate(20deg); }
.feature-card:nth-child(2) .feature-label { right: 40%; bottom: 2%; transform: rotate(-22deg); }
.feature-card:nth-child(3) .feature-label { top: 10%; right: 24%; transform: rotate(27deg); }

.feature-venue .venue { position: relative; z-index: 1; margin-top: 0; padding: 48px 0 130px; }
.feature-venue .venue-grid { column-gap: 40px; row-gap: 0; margin-top: 30px; }
.feature-venue .venue-card { grid-template-columns: 1fr .95fr; gap: 26px; min-height: 210px; padding: 20px 0 28px; border-top: 2px solid rgb(30 30 30 / 80%); }
.feature-venue .venue-img { width: 100%; height: 170px; overflow: hidden; background: #c6e2e5; }
.feature-venue .venue-img img { display: block; width: 100%; height: 100%; object-fit: cover; }
.feature-venue .venue-card h3 { margin: 2px 0 14px; font-size: clamp(1.15rem, 1.35vw, 1.4rem); }
.feature-venue .venue-card p { font-size: clamp(.95rem, 1vw, 1.05rem); line-height: 1.7; }

@media (max-width: 768px) {
  .feature-venue { padding-bottom: 72px; }
  .feature-venue::before { top: 16px; bottom: 12px; clip-path: polygon(0 2.5%, 28% 1%, 65% 3%, 100% 1%, 100% 98%, 67% 100%, 31% 98%, 0 100%); }
  .edge-words {
    top: 0;
    right: auto;
    bottom: 24px;
    left: 50%;
    width: calc(100% - 48px);
    height: auto;
    font-size: clamp(22px, 3vw, 31px);
    transform: translateX(-50%);
  }

  /* 舊網站平板版的原始構圖。 */
  .edge-words span:nth-child(1) { top: 2%; left: 17%; transform: translate(-50%, -100%) rotate(-13deg); }
  .edge-words span:nth-child(2) { top: 2.6%; left: 50%; transform: translate(-50%, -100%) rotate(10deg); }
  .edge-words span:nth-child(3) { top: 2.3%; right: auto; left: 88%; transform: translate(-50%, -100%) rotate(-11deg); }
  .features-section { padding: 106px 0 42px; }
  .feature-collage { display: grid; min-height: 0; gap: 28px; margin-top: 32px; }
  .feature-card, .feature-card:nth-child(n) { position: relative; top: auto; left: auto; width: min(100%, 360px); margin: auto; transform: none; }
  .feature-label { font-size: 1.1rem; }
  .feature-venue .venue { padding: 42px 0 84px; }
  .feature-venue .venue-grid { grid-template-columns: 1fr; gap: 0; }
  .feature-venue .venue-card { grid-template-columns: 40% 1fr; min-height: 0; }
  .feature-venue .venue-img { height: 130px; }
}

/* 舊網站 430px 以下的原始手機版角度與位置。 */
@media (max-width: 430px) {
  .edge-words {
    top: 0;
    right: auto;
    bottom: 24px;
    left: 50%;
    width: calc(100% - 48px);
    height: auto;
    font-size: clamp(16px, 3vw, 26px);
    transform: translateX(-50%);
  }
  .edge-words span:nth-child(1) { top: 36px; left: 6%; transform: rotate(-20deg); }
  .edge-words span:nth-child(2) { top: 44px; left: 26%; transform: rotate(17deg); }
  .edge-words span:nth-child(3) { top: 43px; right: -16px; left: auto; transform: rotate(-19deg); }
}

/* 768px 以下：三張展覽圖維持交錯拼貼，而非直向清單。 */
@media (max-width: 768px) {
  .feature-collage {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: auto auto;
    align-items: start;
    min-height: clamp(540px, 116vw, 720px);
    gap: 0;
    margin-top: 28px;
    overflow: visible;
  }

  .feature-card,
  .feature-card:nth-child(n) {
    position: relative;
    width: auto;
    max-width: none;
    margin: 0;
    transform: none;
  }

  /* 知識：上方主圖 */
  .feature-card:nth-child(1) {
    grid-column: 1 / -1;
    grid-row: 1;
    width: 72%;
    justify-self: start;
  }

  /* 生活：右下 */
  .feature-card:nth-child(2) {
    grid-column: 2;
    grid-row: 2;
    width: 128%;
    justify-self: start;
    margin-top: -45%;
  }

  /* 藝術：左下，略低於生活 */
  .feature-card:nth-child(3) {
    grid-column: 1;
    grid-row: 2;
    width: 135%;
    justify-self: start;
    margin-top: 10%;
  }

  .feature-card:nth-child(1) .feature-label { top: 10%; right: 8%; transform: rotate(20deg); }
  .feature-card:nth-child(2) .feature-label { right: 40%; bottom: 2%; transform: rotate(-22deg); }
  .feature-card:nth-child(3) .feature-label { top: 10%; right: 24%; transform: rotate(27deg); }
}
/* 體驗活動首頁只呈現兩張展示卡；卡片本身不具連結。 */
.activity-track {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 38px;
  margin-top: 40px;
  overflow: visible;
  padding-bottom: 0;
}

.activity-card {
  display: block;
  overflow: visible;
  border-radius: 0;
  background: transparent;
}

.activity-card img {
  width: 100%;
  max-height: 360px;
  aspect-ratio: 1.9 / 1;
  object-fit: cover;
}

.activity-content {
  display: grid;
  grid-template-columns: minmax(120px, .75fr) minmax(0, 1.25fr);
  gap: 28px;
  padding: 24px 0 0;
}

.activity-card h3 {
  margin: 0;
  font-size: clamp(1.3rem, 1.7vw, 1.8rem);
}

.activity-card p {
  margin: 0;
  color: #1e1e1e;
}

@media (max-width: 768px) {
  .activity-track { grid-template-columns: 1fr; gap: 44px; }
  .activity-card img { max-height: none; }
  .activity-content { grid-template-columns: minmax(105px, .7fr) minmax(0, 1.3fr); gap: 18px; padding-top: 16px; }
}

/* 平板起 About 改成標題、主句、內文依序向下。 */
@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

/* 手機活動區改為橫向捲動預覽，第二張卡會露出一部分提示可滑動。 */
@media (max-width: 768px) {
  .activity-track {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 88%;
    grid-template-columns: none;
    gap: 22px;
    overflow-x: auto;
    padding: 0 0 16px;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
  }

  .activity-track::-webkit-scrollbar { display: none; }
  .activity-card { scroll-snap-align: start; }
  .activity-content { grid-template-columns: 1fr; gap: 12px; }
}

/* 交通資訊：依原網站的頁籤、凹角說明框與地圖配置。 */
.transport { padding-bottom: 0; background: #fff; }
.transport-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 80px; }
.transport-panel { position: relative; min-height: 440px; }
.tabs { display: flex; flex-wrap: wrap; gap: 12px; }
.tabs button {
  padding: 14px 26px;
  border: 0;
  border-radius: 25px 25px 0 0;
  background: transparent;
  color: #1e1e1e;
  font: inherit;
  font-size: clamp(1rem, 1.3vw, 1.35rem);
  font-weight: 500;
  cursor: pointer;
}
.tabs button.active { color: #1e1e1e; background: #e7f4f6; }
.route-copy {
  position: relative;
  min-height: 350px;
  margin: 0;
  padding: 30px 34px 80px;
  border-radius: 0 28px 28px;
  color: #1e1e1e;
  background: #e7f4f6;
  font-size: clamp(1rem, 1.25vw, 1.3rem);
  line-height: 1.72;
  overflow: hidden;
}
.route-copy::after {
  position: absolute;
  right: -1px;
  bottom: -1px;
  width: 230px;
  height: 73px;
  border-radius: 28px 0 0;
  background: #fff;
  content: "";
}
.route-button {
  position: absolute;
  z-index: 2;
  right: 16px;
  bottom: 40px;
  display: inline-flex;
  gap: 8px;
  padding: 0 0 6px;
  border: 0;
  border-bottom: 2px solid currentColor;
  color: #1e1e1e;
  background: transparent;
  font-size: clamp(1.25rem, 2vw, 2rem);
  font-weight: 800;
  line-height: 1.2;
  text-decoration: none;
  white-space: nowrap;
}
.transport .map { min-height: 440px; border-radius: 28px; box-shadow: 0 18px 45px rgb(36 99 105 / 8%); }
.transport .map iframe { width: 100%; min-height: 440px; height: 440px; }

@media (max-width: 768px) {
  .transport-grid { grid-template-columns: 1fr; gap: 36px; }
  .transport-panel { min-height: 370px; }
  .tabs { gap: 6px; }
  .tabs button { padding: 10px 14px; font-size: .95rem; }
  .route-copy { min-height: 290px; padding: 24px 22px 70px; }
  .route-copy::after { width: 180px; height: 58px; }
  .route-button { right: 14px; bottom: 28px; font-size: 1.25rem; }
  .transport .map, .transport .map iframe { min-height: 300px; height: 300px; }
}

/* 約 1015px 的平板橫向尺寸：先將交通路線與地圖改為上下排列。 */
@media (max-width: 1024px) {
  .transport-grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 50px;
  }

  .transport-panel,
  .transport .map {
    width: min(100%, 780px);
  }
}
</style>

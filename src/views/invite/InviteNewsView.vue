<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue"
import headingIcon from "../../assets/images/invite/icon/icon-black.png"
import newsBg01 from "../../assets/images/invite/news-bg01.png"
import newsBg02 from "../../assets/images/invite/news-bg02.png"
import newsBg03 from "../../assets/images/invite/news-bg03.png"
import newsBg04 from "../../assets/images/invite/news-bg04.png"
import newsBg05 from "../../assets/images/invite/news-bg05.png"

const tabs = [
  { label: "所有消息", value: "all" },
  { label: "場館公告", value: "場館公告" },
  { label: "展覽資訊", value: "展覽資訊" },
  { label: "媒體報導", value: "媒體報導" },
]
const fallingObjects = [newsBg01, newsBg02, newsBg03, newsBg04, newsBg05]
const fallingStage = ref(null)
let fallingAnimationId = 0

const news = [
  { id: 1, category: "場館公告", title: "因颱風調整7/10營業時間", date: "2026.07.09" },
  { id: 2, category: "場館公告", title: "2026新春吹玻璃體驗開放時間特別公告", date: "2026.01.30" },
  { id: 3, category: "展覽資訊", title: "光影流轉—當代玻璃藝術特展", date: "2026.01.22" },
  { id: 4, category: "媒體報導", title: "在火與光之間，看見臺灣玻璃工藝新風景", date: "2026.01.16" },
  { id: 5, category: "媒體報導", title: "親子旅行推薦：走進透明夢工場", date: "2026.01.09" },
  { id: 6, category: "展覽資訊", title: "晶彩四季玻璃創作聯展正式開幕", date: "2025.12.28" },
  { id: 7, category: "場館公告", title: "元旦連假營業時間公告", date: "2025.12.24" },
  { id: 8, category: "展覽資訊", title: "玻璃裡的島嶼記憶—工藝典藏展", date: "2025.12.12" },
  { id: 9, category: "媒體報導", title: "職人專訪：一千度熔爐前的日常", date: "2025.12.05" },
]

const activeCategory = ref("all")
const page = ref(1)
const perPage = 6
const filteredNews = computed(() => activeCategory.value === "all" ? news : news.filter(item => item.category === activeCategory.value))
const pageCount = computed(() => Math.max(1, Math.ceil(filteredNews.value.length / perPage)))
const paginatedNews = computed(() => filteredNews.value.slice((page.value - 1) * perPage, page.value * perPage))
const selectCategory = value => { activeCategory.value = value; page.value = 1 }
const changePage = direction => { page.value = Math.min(pageCount.value, Math.max(1, page.value + direction)) }

const startFallingAnimation = () => {
  const stage = fallingStage.value
  const objects = [...(stage?.querySelectorAll('.falling-object') ?? [])]
  if (!stage || !objects.length) return

  if (objects[0] && objects[1] && objects[2]) {
    const seamCenter = (objects[0].offsetLeft + objects[0].offsetWidth + objects[2].offsetLeft) / 2
    objects[1].style.left = `${Math.max(0, Math.min(stage.offsetWidth - objects[1].offsetWidth, seamCenter - objects[1].offsetWidth / 2))}px`
    objects[1].style.right = 'auto'
  }

  const bottomTransparentRatios = [82 / 555, 36 / 245, 159 / 726, 53 / 297, 131 / 783]
  const getLandingY = (element, index) => index === 1 ? -element.offsetHeight * 0.9 : element.offsetHeight * bottomTransparentRatios[index]
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion) {
    objects.forEach((element, index) => { element.style.opacity = '1'; element.style.transform = `translate3d(0, ${getLandingY(element, index)}px, 0)` })
    return
  }

  const gravity = 2300
  const startTime = performance.now()
  let previousTime = startTime
  const states = objects.map((element, index) => ({
    element, index, delay: [0, 2700, 900, 1800, 3600][index],
    y: -(window.innerHeight + element.offsetHeight * 0.35),
    centerX: element.offsetLeft + element.offsetWidth / 2,
    radius: Math.min(element.offsetWidth, element.offsetHeight) * [0.34, 0.44, 0.38, 0.42, 0.38][index],
    floorY: getLandingY(element, index), velocityY: 0, rebound: [0.52, 0.48, 0.55, 0.5, 0.51][index],
    angle: [-9, 7, -6, 10, -8][index], angularVelocity: [15, -12, 10, -14, 12][index], started: false, settled: false,
  }))
  const draw = state => { state.element.style.transform = `translate3d(0, ${state.y}px, 0) rotate(${state.angle}deg)` }
  states.forEach(draw)

  const animate = time => {
    const elapsed = time - startTime
    const deltaTime = Math.min((time - previousTime) / 1000, 0.032)
    previousTime = time
    states.forEach(state => {
      if (elapsed < state.delay || state.settled) return
      if (!state.started) { state.started = true; state.element.style.opacity = '1' }
      state.velocityY += gravity * deltaTime
      state.y += state.velocityY * deltaTime
      state.angle += state.angularVelocity * deltaTime
      state.angularVelocity *= Math.exp(-1.15 * deltaTime)
      if (state.y >= state.floorY) {
        state.y = state.floorY
        if (state.velocityY < 95) { state.velocityY = 0; state.angle = 0; state.settled = true }
        else { state.velocityY = -state.velocityY * state.rebound; state.angularVelocity *= -0.45; state.rebound *= 0.94 }
      }
    })
    for (let pass = 0; pass < 6; pass += 1) {
      for (let i = 0; i < states.length; i += 1) for (let j = i + 1; j < states.length; j += 1) {
        const first = states[i], second = states[j]
        if (!first.started || !second.started || first.index === 1 || second.index === 1 || first.index === 2 || second.index === 2 || first.index === 4 || second.index === 4) continue
        const horizontalDistance = Math.abs(first.centerX - second.centerX)
        const radiusSum = first.radius + second.radius + 12
        if (horizontalDistance >= radiusSum) continue
        const firstCenterY = stage.offsetHeight - first.element.offsetHeight / 2 + first.y
        const secondCenterY = stage.offsetHeight - second.element.offsetHeight / 2 + second.y
        const requiredDistance = Math.sqrt(radiusSum ** 2 - horizontalDistance ** 2)
        const verticalDistance = Math.abs(firstCenterY - secondCenterY)
        if (verticalDistance >= requiredDistance) continue
        const upper = firstCenterY <= secondCenterY ? first : second
        const separation = requiredDistance - verticalDistance + 1
        upper.y -= separation
        upper.velocityY = Math.abs(upper.velocityY) < 90 ? 0 : -Math.abs(upper.velocityY) * 0.28
        upper.angularVelocity *= -0.35
        upper.angle *= 0.82
        upper.settled = false
      }
    }
    states.filter(state => state.started).forEach(draw)
    if (!states.every(state => state.started && state.settled)) fallingAnimationId = requestAnimationFrame(animate)
  }
  fallingAnimationId = requestAnimationFrame(animate)
}

onMounted(startFallingAnimation)
onBeforeUnmount(() => cancelAnimationFrame(fallingAnimationId))
</script>

<template>
  <main class="news-page">
    <section class="news-layout">
      <h1><img :src="headingIcon" alt="" />最新消息</h1>
      <div class="news-content">
        <div class="news-toolbar">
          <div class="category-tabs" role="tablist" aria-label="消息分類">
            <button v-for="tab in tabs" :key="tab.value" :class="{ active: activeCategory === tab.value }" type="button" @click="selectCategory(tab.value)">{{ tab.label }}</button>
          </div>
          <div class="toolbar-arrows" aria-label="消息分頁">
            <button type="button" :disabled="page === 1" aria-label="上一頁" @click="changePage(-1)">‹</button>
            <button type="button" :disabled="page === pageCount" aria-label="下一頁" @click="changePage(1)">›</button>
          </div>
        </div>
        <ul class="news-list">
          <li v-for="item in paginatedNews" :key="item.id">
            <RouterLink :to="`/invite/news-detail?id=${item.id}`">
              <span class="news-type">{{ item.category }}</span>
              <span class="news-title">{{ item.title }}</span>
              <time>{{ item.date }}</time>
            </RouterLink>
          </li>
        </ul>
      </div>
    </section>
    <div ref="fallingStage" class="falling-stage" aria-hidden="true"><img v-for="(image, index) in fallingObjects" :key="image" class="falling-object" :class="`object-${index + 1}`" :src="image" alt="" /></div>
  </main>
</template>

<style scoped>
.news-page{position:relative;min-height:760px;padding:55px 0 150px;overflow:hidden;background:#fff}.news-layout{display:grid;grid-template-columns:250px minmax(0,1fr);gap:72px;width:min(calc(100% - 96px),1500px);margin:auto}.news-layout h1{display:flex;align-items:center;gap:15px;margin:10px 0 0;font-size:clamp(2rem,3vw,2.6rem);font-weight:900;white-space:nowrap}.news-layout h1 img{width:38px;height:32px}.category-tabs{display:grid;grid-template-columns:repeat(4,1fr);width:min(100%,850px);margin-bottom:48px;border-bottom:5px solid #e8e2dc}.category-tabs button{position:relative;margin-bottom:-5px;padding:10px 10px 17px;border:0;background:transparent;color:#cfc8c3;font:inherit;font-size:1.4rem;font-weight:800;cursor:pointer}.category-tabs button::after{position:absolute;right:0;bottom:0;left:0;height:5px;background:#1e1e1e;content:"";transform:scaleX(0);transition:transform .25s}.category-tabs button.active{color:#1e1e1e}.category-tabs button.active::after{transform:scaleX(1)}.news-list{min-height:492px;margin:0;padding:0;list-style:none}.news-list li{border-bottom:2px solid #e8e2dc}.news-list a{display:grid;grid-template-columns:160px minmax(0,1fr) 170px;gap:26px;align-items:center;min-height:82px;padding:10px 0;color:inherit;text-decoration:none;transition:transform .2s}.news-list a:hover{transform:translateX(7px)}.news-type{justify-self:start;padding:8px 16px;border:2px solid #1e1e1e;border-radius:999px;font-size:1.2rem;white-space:nowrap}.news-title{font-size:1.35rem;line-height:1.35}.news-list time{font-size:1.1rem;text-align:right}.pagination{display:flex;justify-content:center;align-items:center;gap:16px;margin-top:38px}.pagination button{display:grid;width:42px;height:42px;place-items:center;border:1px solid #1e1e1e;border-radius:50%;background:#fff;font-size:1.75rem;cursor:pointer}.pagination button:disabled{opacity:.25;cursor:default}@media(max-width:768px){.news-page{padding:55px 0 95px}.news-layout{grid-template-columns:1fr;gap:35px;width:calc(100% - 32px)}.news-layout h1{margin:0;font-size:1.7rem}.news-layout h1 img{width:31px;height:26px}.category-tabs{margin-bottom:28px}.category-tabs button{padding:8px 3px 12px;font-size:.95rem}.news-list{min-height:0}.news-list a{grid-template-columns:1fr auto;gap:8px;min-height:0;padding:18px 0}.news-type{grid-column:1/-1;padding:5px 11px;font-size:.9rem}.news-title{font-size:1rem}.news-list time{font-size:.9rem}.pagination{margin-top:28px}}
.news-layout h1{font-size:clamp(1.3rem,2vw,2rem)}.category-tabs button{font-size:1.125rem}.news-type,.news-title,.news-list time{font-size:1.125rem}@media(max-width:768px){.news-layout h1{font-size:1.3rem}.category-tabs button{font-size:.95rem}.news-type,.news-title,.news-list time{font-size:1rem}}
.news-layout{position:relative;display:block;width:calc(100% - 80px);max-width:none}.news-layout h1{position:absolute;top:10px;left:0}.news-content{width:72%;margin-left:28%}.news-toolbar{display:flex;align-items:start;gap:38px;margin-bottom:48px}.category-tabs{width:100%;margin:0}.toolbar-arrows{display:flex;gap:18px}.toolbar-arrows button{display:grid;width:62px;height:62px;place-items:center;border:2px solid #1e1e1e;border-radius:50%;background:#fff;font-size:3rem;font-weight:300;line-height:1;cursor:pointer}.toolbar-arrows button:first-child{border-color:#d7d2ce;color:#d7d2ce}.toolbar-arrows button:disabled{opacity:.75;cursor:default}.news-list{min-height:0}.news-list a{grid-template-columns:160px minmax(0,1fr) 170px;min-height:82px}.pagination{display:none}@media(max-width:768px){.news-layout{width:calc(100% - 32px)}.news-layout h1{position:static;margin-bottom:35px}.news-content{width:100%;margin:0}.news-toolbar{gap:14px;margin-bottom:28px}.toolbar-arrows{gap:8px}.toolbar-arrows button{width:38px;height:38px;font-size:2rem}.news-list a{grid-template-columns:1fr auto}}
:global(body:has(.news-page)){background:#fff}
.news-layout{width:min(calc(100% - 96px),1500px)}.news-content{width:64%;margin-right:0;margin-left:28%}.news-toolbar{gap:24px;margin-bottom:30px}.category-tabs button{padding:7px 8px 13px;font-size:1rem}.toolbar-arrows{gap:12px}.toolbar-arrows button{width:46px;height:46px;font-size:2.25rem}.news-list a{grid-template-columns:120px minmax(0,1fr) 125px;gap:18px;min-height:64px;padding:8px 0}.news-type{padding:6px 12px;border-width:1.5px;font-size:1rem}.news-title,.news-list time{font-size:1rem}@media(max-width:768px){.news-layout{width:calc(100% - 32px)}.news-content{width:100%;margin:0}.news-toolbar{gap:12px}.toolbar-arrows button{width:36px;height:36px;font-size:1.8rem}.news-list a{grid-template-columns:1fr auto;gap:7px}.news-type,.news-title,.news-list time{font-size:.9rem}}
.news-layout h1{top:-22px;left:38px}@media(max-width:768px){.news-layout h1{top:auto;left:auto}}
.news-layout{z-index:1}.falling-stage{position:absolute;z-index:0;bottom:0;left:50%;width:min(calc(100% - 48px),1500px);height:315px;container-type:inline-size;pointer-events:none;transform:translateX(-50%)}.falling-object{position:absolute;bottom:0;width:auto;opacity:0;transform:translate3d(0,-120vh,0);transform-origin:center bottom;animation:fall-and-bounce 1.35s cubic-bezier(.25,.7,.25,1) forwards}.object-1{left:0;height:clamp(185px,36.667cqw,400px);z-index:1;animation-delay:.05s}.object-2{left:10%;height:clamp(130px,13.333cqw,200px);z-index:4;animation-delay:.2s}.object-3{right:35%;height:clamp(110px,50cqw,600px);z-index:1;animation-delay:.35s}.object-4{right:20%;height:clamp(170px,22cqw,330px);z-index:2;animation-delay:.5s}.object-5{right:-7%;height:clamp(145px,46.667cqw,500px);z-index:2;animation-delay:.65s}@keyframes fall-and-bounce{0%{opacity:0;transform:translate3d(0,-120vh,0) rotate(-6deg)}12%{opacity:1}68%{opacity:1;transform:translate3d(0,0,0) rotate(2deg)}81%{transform:translate3d(0,-34px,0) rotate(-1deg)}92%{transform:translate3d(0,0,0) rotate(0)}100%{opacity:1;transform:translate3d(0,0,0)}}@media(max-width:768px){.falling-stage{width:100%;height:210px}.object-1{height:210px}.object-2{height:105px}.object-3{height:280px}.object-4{height:165px}.object-5{height:220px}}
.falling-object{animation:none!important}
.falling-stage{bottom:-20px}:global(body:has(.news-page) .site-footer){border-top-width:0}
</style>

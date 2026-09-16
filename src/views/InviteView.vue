<script setup>
import bannerBg01 from "../assets/images/invite-home/hero/bg01.png"
import bannerBg02 from "../assets/images/invite-home/hero/bg02.png"
import bannerBg03 from "../assets/images/invite-home/hero/bg03.png"
import glass01 from "../assets/images/invite-home/hero/glass01.png"
import glass02 from "../assets/images/invite-home/hero/glass02.png"
import newsMark from "../assets/images/invite/icon/icon-white.png"
import { computed, onBeforeUnmount, onMounted, ref } from "vue"
import InviteHomeSections from "../components/invite/InviteHomeSections.vue"
const heroElement = ref(null)
const yellowOne = ref(null)
const yellowTwo = ref(null)
const newsSection = ref(null)
const newsCursor = ref(null)
const newsIndex = ref(0)
const newsItems = [
  {
    date: "2026.08.28",
    category: "館內公告",
    title: "臺灣玻璃館最新展覽與活動資訊",
    to: "/invite/news",
  },
  {
    date: "2026.08.20",
    category: "活動消息",
    title: "玻璃工藝體驗活動開放報名中",
    to: "/invite/news",
  },
  {
    date: "2026.08.12",
    category: "參觀資訊",
    title: "場館參觀與營業時間調整說明",
    to: "/invite/news",
  },
]

const currentNews = computed(() => newsItems[newsIndex.value])

let stopYellowFloating = () => {}
let stopNewsInteraction = () => {}
let newsTimer = null

onMounted(() => {
  const hero = heroElement.value

  if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return
  }

  const items = [
    { element: yellowOne.value, x: 0, y: 0, rotate: 6 },
    { element: yellowTwo.value, x: 0, y: 0, rotate: -14 },
  ].filter((item) => item.element)

  let stopped = false
  const animations = new Set()
  const timers = new Set()

  const random = (min, max) => Math.random() * (max - min) + min

  function moveRandomly(item) {
    if (stopped) return

    const element = item.element
    const safeSpace = 24

    const minX = safeSpace - element.offsetLeft
    const maxX = hero.clientWidth - safeSpace - element.offsetLeft - element.offsetWidth
    const minY = safeSpace - element.offsetTop
    const maxY = hero.clientHeight - safeSpace - element.offsetTop - element.offsetHeight

    const targetX = random(minX, maxX)
    const targetY = random(minY, maxY)
    const targetRotate = item.rotate + random(100, 260) * (Math.random() > 0.5 ? 1 : -1)
    const duration = random(8000, 13000)

    const startTransform = `translate3d(${item.x}px, ${item.y}px, 0) rotate(${item.rotate}deg)`
    const endTransform = `translate3d(${targetX}px, ${targetY}px, 0) rotate(${targetRotate}deg)`

    const animation = element.animate(
      [
        { transform: startTransform },
        { transform: endTransform },
      ],
      {
        duration,
        easing: "cubic-bezier(0.45, 0.05, 0.55, 0.95)",
        fill: "forwards",
      },
    )

    animations.add(animation)

    animation.addEventListener("finish", () => {
      animations.delete(animation)

      item.x = targetX
      item.y = targetY
      item.rotate = targetRotate
      element.style.transform = endTransform
      animation.cancel()

      if (!stopped) {
        const timer = window.setTimeout(() => {
          timers.delete(timer)
          moveRandomly(item)
        }, random(200, 900))

        timers.add(timer)
      }
    }, { once: true })
  }

  items.forEach((item, index) => {
    item.element.style.transform = `translate3d(0, 0, 0) rotate(${item.rotate}deg)`

    const timer = window.setTimeout(() => {
      timers.delete(timer)
      moveRandomly(item)
    }, index * 700)

    timers.add(timer)
  })

  stopYellowFloating = () => {
    stopped = true
    animations.forEach((animation) => animation.cancel())
    timers.forEach((timer) => window.clearTimeout(timer))
  }

  newsTimer = window.setInterval(() => {
    newsIndex.value = (newsIndex.value + 1) % newsItems.length
  }, 4200)

  const section = newsSection.value
  const cursor = newsCursor.value

  if (!section || !cursor || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    return
  }

  const moveCursor = (event) => {
    cursor.style.left = `${event.clientX}px`
    cursor.style.top = `${event.clientY}px`
  }

  const showCursor = () => cursor.classList.add("is-visible")
  const hideCursor = () => cursor.classList.remove("is-visible")

  section.addEventListener("pointermove", moveCursor)
  section.addEventListener("pointerenter", showCursor)
  section.addEventListener("pointerleave", hideCursor)

  stopNewsInteraction = () => {
    section.removeEventListener("pointermove", moveCursor)
    section.removeEventListener("pointerenter", showCursor)
    section.removeEventListener("pointerleave", hideCursor)
  }
})

onBeforeUnmount(() => {
  stopYellowFloating()
  stopNewsInteraction()
  window.clearInterval(newsTimer)
})
</script>

<template>
  <article class="invite-home">
    <header ref="heroElement" class="hero">
      <div class="hero-decorations" aria-hidden="true">
        <div class="hero-decoration glass-hover decoration-one">
  <img class="glass-base" :src="bannerBg01" alt="">
  <img class="glass-shine" :src="bannerBg01" alt="">
</div>

<div class="hero-decoration glass-hover decoration-two">
  <img class="glass-base" :src="bannerBg02" alt="">
  <img class="glass-shine" :src="bannerBg02" alt="">
</div>

<div class="hero-decoration glass-hover decoration-three">
  <img class="glass-base" :src="bannerBg03" alt="">
  <img class="glass-shine" :src="bannerBg03" alt="">
</div>

        <img
  ref="yellowOne"
  class="hero-decoration decoration-four"
  :src="glass01"
  alt=""
>

        <img
  ref="yellowTwo"
  class="hero-decoration decoration-five"
  :src="glass02"
  alt=""
>
      </div>

      <div class="hero-copy">
        <p class="hero-en">
          Reflecting Endless Imagination<br>
          in a Transparent World.
        </p>

        <h1 class="hero-zh">
          在透明的維度裡，折射無限想像。
        </h1>
      </div>

      <a class="scroll" href="#news">
        SCROLL
        <span>↓</span>
      </a>
    </header>
    <section id="news" class="news">
      <div ref="newsCursor" class="news-glass-cursor" aria-hidden="true">
        <span>MORE ↗</span>
      </div>
      <div class="news-inner">
        <h2 class="news-heading">
      <img class="news-mark" :src="newsMark" alt="">
      最新消息
    </h2>

    <div ref="newsSection" class="news-carousel">
    <Transition name="news-fade" mode="out-in">
    <div :key="currentNews.date" class="news-item">
      <span class="news-badge">
        {{ currentNews.category }}
      </span>

      <RouterLink class="news-text" :to="currentNews.to">
        {{ currentNews.title }}
      </RouterLink>
    </div>
    </Transition>
    </div>

    <RouterLink class="news-view-all" to="/invite/news">
      VIEW ALL &#8599;&#65038;
    </RouterLink>
  </div>
</section>
    <InviteHomeSections />
  </article>
</template>

<style scoped>
.invite-home {
  width: 100vw;
  max-width: 100vw;
  margin-top: -110px;
  margin-left: calc(50% - 50vw);
}

.hero {
  position: relative;
  height: min(88vh, 900px);
  min-height: 620px;
  overflow: hidden;
  background: #a6dbe0;
}

.hero-copy {
  position: absolute;
  z-index: 3;
  top: 51%;
  left: 50%;
  display: grid;
  width: min(90%, 920px);
  justify-items: center;
  text-align: center;
  transform: translate(-50%, -50%);
}

.hero-en {
  width: 100%;
  text-align: center;
  margin: 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(1.7rem, 2.4vw, 2.5rem);
    line-height: 1.4;
}

.hero-zh {
  width: 100%;
  text-align: center;
   margin-top: 28px;
  font-size: clamp(1.9rem, 2.5vw, 2.75rem);
  letter-spacing: 0.04em;
  line-height: 1.3;
}

.scroll {
  position: absolute;
  z-index: 3;
  bottom: 54px;
  left: 50%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 8px;
  border-bottom: 3px solid currentColor;
  color: #1e1e1e;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.3rem;
  font-style: italic;
  font-weight: 700;
  text-decoration: none;
  transform: translateX(-50%);
}

.scroll span {
  display: grid;
  width: 32px;
  aspect-ratio: 1;
  place-items: center;
  color: #fff;
  background: #1e1e1e;
  clip-path: polygon(22% 0, 78% 5%, 100% 33%, 91% 80%, 50% 100%, 8% 78%, 0 31%);
}

.hero-decorations {
  position: absolute;
  inset: 0;
  z-index: 1;
  overflow: hidden;
  pointer-events: none;
}

.hero-decoration {
  position: absolute;
  display: block;
  height: auto;
  user-select: none;
}

.hero-decoration img {
  display: block;
  width: 100%;
  height: auto;
}

.decoration-one {
  top: -11%;
  left: -30%;
  width: clamp(200px, 80vw, 1500px);
  transform: rotate(-8deg);
}

.decoration-two {
  bottom: -20%;
  left: 50%;
  width: clamp(110px, 60vw, 350px);
}

.decoration-three {
  top: -15%;
  right: -10%;
  width: clamp(90px, 50vw, 700px);
  transform: rotate(9deg);
}

.decoration-four {
  right: 5%;
  bottom: 12%;
  width: clamp(180px, 30vw, 420px);
 
}

.decoration-five {
  bottom: 3%;
  left: 38%;
  width: clamp(90px, 20vw, 350px);
  
}
.glass-hover {
  isolation: isolate;
  pointer-events: auto;
  cursor: pointer;
}

.glass-hover .glass-base {
  position: relative;
  z-index: 1;
  transition: filter 450ms ease, transform 450ms ease;
}

.glass-hover .glass-shine {
  position: absolute;
  z-index: 2;
  inset: 0;
  width: 100%;
  opacity: 0;
  filter: brightness(2.4) contrast(0.8) saturate(0.25);
  mix-blend-mode: screen;
  pointer-events: none;

  -webkit-mask-image: linear-gradient(
    115deg,
    transparent 25%,
    rgb(0 0 0 / 15%) 38%,
    #000 48%,
    #000 54%,
    rgb(0 0 0 / 15%) 65%,
    transparent 76%
  );

  mask-image: linear-gradient(
    115deg,
    transparent 25%,
    rgb(0 0 0 / 15%) 38%,
    #000 48%,
    #000 54%,
    rgb(0 0 0 / 15%) 65%,
    transparent 76%
  );

  -webkit-mask-size: 260% 100%;
  mask-size: 260% 100%;
  -webkit-mask-position: 170% 0;
  mask-position: 170% 0;
}

.glass-hover:hover .glass-base {
  filter: brightness(1.18) contrast(0.9) saturate(0.72)
    drop-shadow(0 4px 5px rgb(255 255 255 / 65%))
    drop-shadow(0 16px 20px rgb(30 30 30 / 12%));
  transform: scale(1.035);
}

.glass-hover:hover .glass-shine {
  opacity: 0.9;
  animation: glass-shine-move 1100ms ease forwards;
}

@keyframes glass-shine-move {
  from {
    -webkit-mask-position: 170% 0;
    mask-position: 170% 0;
  }

  to {
    -webkit-mask-position: -80% 0;
    mask-position: -80% 0;
  }
}




@media (max-width: 1024px) {
  .invite-home {
    margin-top: -96px;
  }

  .hero {
    min-height: 680px;
  }

  .hero-copy {
    top: 50%;
  }

  .hero-zh {
    margin-top: 26px;
  }

  .scroll {
    bottom: 36px;
  }

  .decoration-one {
    top: 14%;
    left: -58%;
    width: 130vw;
  }

  .decoration-two {
    left: 20%;
    width: 100vw;
  }

  .decoration-three {
    top: -6%;
    right: -42%;
    width: 92vw;
  }

  .decoration-four {
    right: -4%;
    bottom: 16%;
    width: 48vw;
  }

  .decoration-five {
    bottom: 8%;
    left: 20%;
    width: 34vw;
  }
}

@media (max-width: 520px) {
  .hero {
    min-height: 620px;
  }

  .hero-en {
    font-size: 1.55rem;
  }

  .hero-zh {
    font-size: 2rem;
  }

  .scroll {
    font-size: 1rem;
  }
}
.news {
  position: relative;
  min-height: 225px;
  color: #fff;
  background: #81c6cf;
}

.news-inner {
  width: calc(100% - 128px);
  max-width: 1200px;
  min-height: 190px;
  display: grid;
  grid-template-columns: 0.8fr 1.6fr 0.6fr;
  align-items: center;
  gap: 40px;
  margin-inline: auto;
}

.news-heading {
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 0;
  font-size: clamp(1.3rem, 2vw, 2rem);
}

.news-mark {
  width: 30px;
  height: 25px;
  object-fit: contain;
}

.news-item {
  display: flex;
  align-items: center;
  gap: 20px;
  min-width: 0;
}

.news-badge {
  flex-shrink: 0;
  padding: 8px 15px;
  border-radius: 999px;
  color: #55acb5;
  background: #fff;
  font-weight: 700;
  white-space: nowrap;
}

.news-text {
  overflow: hidden;
  color: inherit;
  font-size: clamp(1rem, 1.25vw, 1.35rem);
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.news-view-all {
  justify-self: end;
  padding-bottom: 7px;
  border-bottom: 3px solid currentColor;
  color: inherit;
  font-size: clamp(1rem, 1.3vw, 1.4rem);
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
}

.news-carousel {
  min-width: 0;
}

.news-fade-enter-active,
.news-fade-leave-active {
  transition: opacity 240ms ease, transform 240ms ease;
}

.news-fade-enter-from,
.news-fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

.news-glass-cursor {
  position: fixed;
  z-index: 200;
  display: none;
  width: 126px;
  height: 112px;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(255 255 255 / 80%);
  border-radius: 38% 62% 44% 56% / 34% 47% 53% 66%;
  color: #1e1e1e;
  background: linear-gradient(135deg, rgb(255 255 255 / 32%), rgb(218 239 241 / 18%));
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 85%), 0 12px 30px rgb(26 79 84 / 20%);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: .08em;
  opacity: 0;
  pointer-events: none;
  transform: translate3d(-50%, -50%, 0) scale(.84) rotate(-2deg);
  transition: opacity 160ms ease, transform 180ms ease;
}

.news-glass-cursor.is-visible {
  display: flex;
  opacity: 1;
  transform: translate3d(-50%, -50%, 0) scale(1) rotate(-2deg);
}

@media (hover: hover) and (pointer: fine) {
  .news-carousel,
  .news-carousel a {
    cursor: none;
  }
}

@media (max-width: 768px) {
  .news-inner {
    width: calc(100% - 32px);
    max-width: 1200px;
    min-height: auto;
    grid-template-columns: minmax(0, 1fr) auto;
    grid-template-areas:
      "heading heading"
      "content view-all";
    gap: 28px 16px;
    padding-block: 30px;
  }

  .news-heading {
    grid-area: heading;
  }

  .news-item {
    grid-area: content;
  }

  .news-carousel {
    grid-area: content;
  }

  .news-view-all {
    grid-area: view-all;
    font-size: 1rem;
  }

  .news-badge {
    display: none;
  }
}

/* 平板消息列：維持標題、消息與 VIEW ALL 同一列。 */
@media (min-width: 641px) and (max-width: 900px) {
  .news-inner {
    width: calc(100% - 48px);
    max-width: 1200px;
    min-height: 196px;
    grid-template-columns: auto minmax(0, 1fr) auto;
    grid-template-areas: "heading content view-all";
    gap: 24px;
    padding-block: 24px;
  }

  .news-heading { grid-area: heading; }
  .news-carousel { grid-area: content; }
  .news-view-all { grid-area: view-all; }
  .news-badge { display: inline-flex; }
}

/* 手機消息列：三列置中，符合窄版閱讀順序。 */
@media (max-width: 640px) {
  .news-inner {
    width: calc(100% - 32px);
    max-width: 1200px;
    min-height: auto;
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas:
      "heading"
      "content"
      "view-all";
    justify-items: center;
    gap: 22px;
    padding-block: 36px;
    text-align: center;
  }

  .news-heading,
  .news-carousel,
  .news-view-all { justify-self: center; }
  .news-item { flex-wrap: wrap; justify-content: center; gap: 10px 12px; }
  .news-text { max-width: 100%; text-align: center; white-space: normal; }
  .news-badge { display: inline-flex; }
}
</style>

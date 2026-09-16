<script setup>
import { computed } from "vue"
import { useRoute } from "vue-router"
import headingIcon from "../../assets/images/invite/icon/icon-black.png"

const route = useRoute()
const articles = {
  1: ["場館公告", "因颱風調整7/10營業時間", "2026.07.09", ["因應颱風影響及配合安全防護作業，臺灣玻璃館將調整 7 月 10 日營業時間。造成不便，敬請見諒。", "最新開館與活動資訊將同步公告於本網站及官方社群平台，敬請旅客出發前再次確認。"]],
  2: ["場館公告", "2026新春吹玻璃體驗開放時間特別公告", "2026.01.30", ["新春期間吹玻璃體驗將依現場人流採分梯次開放，建議旅客預先安排參觀時間。", "體驗名額有限，實際場次與報到方式以現場公告為準；感謝您的耐心等候與配合。"]],
  3: ["展覽資訊", "光影流轉—當代玻璃藝術特展", "2026.01.22", ["「光影流轉」邀集多位創作者，以透明、色彩與光線為媒介，呈現當代玻璃藝術的多元樣貌。", "展覽於館內特展空間展出，歡迎走進作品之間，感受光線、材質與時間交織的細緻變化。"]],
  4: ["媒體報導", "在火與光之間，看見臺灣玻璃工藝新風景", "2026.01.16", ["玻璃工藝從熔爐中的高溫開始，在職人專注的吹製、塑形與冷卻間，形塑出獨有的生命力。", "本次報導帶領讀者走進工坊，認識臺灣玻璃館持續推廣玻璃工藝、教育體驗與永續創作的日常。"]],
  5: ["媒體報導", "親子旅行推薦：走進透明夢工場", "2026.01.09", ["臺灣玻璃館是適合親子同行的探索場域；從展覽導覽到手作體驗，每個年齡都能找到與玻璃互動的方式。", "邀請您安排一趟透明之旅，在觀賞、學習與創作中留下屬於家人的美好回憶。"]],
  6: ["展覽資訊", "晶彩四季玻璃創作聯展正式開幕", "2025.12.28", ["晶彩四季玻璃創作聯展正式開幕，作品以季節更迭為靈感，展現玻璃在色彩與質地上的無限可能。", "展期內歡迎蒞臨參觀，與創作者一同感受四季光景凝結於玻璃中的璀璨片刻。"]],
  7: ["場館公告", "元旦連假營業時間公告", "2025.12.24", ["元旦連假期間本館照常服務，部分體驗及餐飲服務時間將依現場狀況調整。", "敬請旅客於出發前查閱最新公告，並預留充足的參觀與停車時間。"]],
  8: ["展覽資訊", "玻璃裡的島嶼記憶—工藝典藏展", "2025.12.12", ["本展以島嶼生活記憶為題，透過典藏玻璃作品，回望不同時期的工藝技術與文化脈絡。", "每件作品都保存了創作者的觀察與時代故事，邀請您細看玻璃中蘊藏的溫度。"]],
  9: ["媒體報導", "職人專訪：一千度熔爐前的日常", "2025.12.05", ["在一千度熔爐前，職人以經驗掌握玻璃的流動與節奏，將短暫的高溫瞬間轉化為長久的作品。", "本篇專訪記錄工坊的日常，也分享職人對傳承、創新及手作溫度的堅持。"]],
}
const article = computed(() => articles[Number(route.query.id)] || articles[1])
</script>

<template>
  <main class="news-detail-page"><article class="news-article">
    <RouterLink class="back-link" to="/invite/news">&#8249;&#65038; 返回最新消息</RouterLink>
    <header><img :src="headingIcon" alt=""><div><span>{{ article[0] }}</span><time>{{ article[2] }}</time><h1>{{ article[1] }}</h1></div></header>
    <div class="article-body"><p v-for="paragraph in article[3]" :key="paragraph">{{ paragraph }}</p></div>
  </article></main>
</template>

<style scoped>
.news-detail-page{min-height:100vh;padding:155px 24px 110px;background:#fff;color:#1e1e1e}.news-article{width:min(100%,900px);margin:auto}.back-link,.bottom-back{color:#1e1e1e;font-size:15px;text-decoration:none}.back-link:hover,.bottom-back:hover{color:#4e9ba4}.news-article header{display:flex;gap:18px;margin:30px 0 42px;padding-bottom:25px;border-bottom:2px solid #1e1e1e}.news-article header>img{width:42px;height:34px;object-fit:contain}.news-article header div{flex:1}.news-article header span{display:inline-block;padding:5px 13px;border:1.5px solid #1e1e1e;border-radius:999px;font-size:14px}.news-article time{float:right;color:#6ac3cc;font-size:16px}.news-article h1{margin:16px 0 0;font-size:clamp(28px,3.2vw,46px);line-height:1.28}.article-body{max-width:760px;margin:auto}.article-body p{margin:0 0 24px;font-size:18px;line-height:2;text-align:justify}.bottom-back{display:inline-block;margin-top:35px;padding-bottom:5px;border-bottom:1px solid currentColor}@media(max-width:640px){.news-detail-page{padding:105px 18px 65px}.news-article header{gap:12px;margin:22px 0 30px;padding-bottom:20px}.news-article header>img{width:31px;height:26px}.news-article time{display:block;float:none;margin-top:8px;font-size:14px}.news-article h1{margin-top:12px;font-size:27px}.article-body p{font-size:16px;line-height:1.9}}
</style>

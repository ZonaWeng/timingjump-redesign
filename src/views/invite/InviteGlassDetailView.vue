<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import heroImage from '../../assets/images/invite/glass-detail/glass1.png'

const route = useRoute()

const p = text => ({ type: 'paragraph', text })
const h = text => ({ type: 'heading', text })
const l = items => ({ type: 'list', items })
const q = text => ({ type: 'quote', text })

// 內容依原網站 glass-detail.html 的文章資料保留；新增文章時只需在此新增一筆。
const articles = {
  1: { title: '一塊玻璃是怎麼誕生的呢？', date: '2026-07-28', blocks: [h('一塊玻璃，是怎麼誕生的？'), p('玻璃，是生活中最常見的材料之一。從每天使用的玻璃杯、窗戶，到精緻的藝術品，都來自同一段製作旅程。'), p('看似簡單透明的玻璃，其實需要經過多道工序，才能從天然原料蛻變成各式各樣的產品。整個製程大致可分為以下五個步驟：'), h('1. 原料混合'), p('玻璃的主要原料包含石英砂、純鹼、石灰石等天然礦物，依照不同產品需求，以適當比例混合。有些製程也會加入回收玻璃，不僅能降低能源消耗，也讓玻璃製造更加環保。'), h('2. 高溫熔化'), p('混合完成的原料會送入高溫熔爐，以約 1,300°C 的高溫加熱，讓原本的固體原料完全熔化，形成具有流動性的玻璃熔液，為後續加工做好準備。'), h('3. 熱加工塑形'), p('當玻璃仍處於高溫且柔軟的狀態時，便可透過吹製、壓製、熱熔等工藝進行塑形，將玻璃製作成不同的外觀與造型。'), h('4. 冷加工修飾'), p('玻璃冷卻成型後，會再進行切割、磨邊、雕刻、噴砂、拋光等加工，提升產品的精緻度、安全性與實用性。'), h('5. 成為生活中的玻璃製品'), p('經過層層製程後，玻璃便化身為玻璃杯、花瓶、建築玻璃、藝術品及各式生活用品。')] },
  2: { title: '台灣玻璃館煉功屋玻璃工藝師介紹', date: '2026-06-24', blocks: [h('煉功屋玻璃工藝師'), q('火焰淬鍊的溫度・吹製流動的藝術'), p('在千度高溫的火焰之中，玻璃從固態化為流動的藝術。煉功屋工藝師以雙手與經驗掌握每一次吹氣、旋轉與塑形，將熔融玻璃轉化為獨一無二的作品。'), h('林慶玟 Tess Lin'), p('現任臺灣玻璃館煉功屋吹製玻璃工藝師。熱衷於教學與傳達玻璃藝術技法，創作以柔和暖色調、晶透質感與細膩線條為特色。'), q('將藝術融入生活，讓每件作品都保有溫度與故事。'), h('陳仁川 Chuan Chen'), p('長期投入玻璃吹製創作與教學推廣，喜歡在拉扯與塑形過程中，呈現猶如書法筆觸般自由奔放的線條效果。'), h('郭建松 Chien Sung Kuo'), p('平日專注企業流程改善，假日投入玻璃工藝創作與體驗服務，分享玻璃藝術的魅力。'), q('工藝如同人生，掌握火候與節奏，才能成就最好的模樣。'), h('探索玻璃工藝的溫度'), p('誠摯邀請您走進煉功屋，近距離欣賞吹製玻璃的魅力。')] },
  3: { title: '甕藏時光', date: '2026-05-25', blocks: [p('「甕藏時光」透過循環設計，將原本被視為廢棄物的材料與工具，轉化為具有深度文化價值的資產。'), h('1. 物質層面的「循環再生」'), l(['廢棄玻璃回收：收集加工廠的平板邊角料玻璃作為核心原料，實現回收再製。', '低碳製程：以低碳循環製程，將廢棄玻璃轉化為再生器皿。']), h('2. 工具與技術層面的「資產活化」'), l(['舊模具新生：重新啟動因產業機械化而退役、塵封多年的厚重鐵模。', '職人工藝傳承：以高溫熔融與手工吹製技法，讓傳統工藝在現代產品中得以續存。']), h('3. 文化與意象層面的「記憶轉譯」'), l(['建築記憶的縮影：將鹿港甕牆的地理意象轉譯為在地器物。', '承載記憶的容器：讓產品盛裝美好事物與歲月記憶。']), p('透過技術、文化與市場的結合，讓廢棄物升級為具備歷史厚度與永續價值的文化循環商品。')] },
  4: { title: '玻璃知識小學堂－氣泡', date: '2026-01-07', blocks: [h('快速重點先看'), l(['玻璃與琉璃中的氣泡，不是瑕疵。', '為高溫手工製作過程中自然形成。', '每件作品的氣泡樣貌皆不相同。', '是手工工藝的重要特色之一。']), h('氣泡是怎麼形成的？'), p('玻璃與琉璃在高溫窯爐中熔融製作時，原料中的空氣與礦物自然包覆於玻璃液內，隨著冷卻成形，形成大小不一的氣泡。'), h('氣泡是瑕疵嗎？'), q('當然不是的喔！'), p('氣泡並非裂痕或品質不良，而是手工製作時自然產生的工藝印記；在不影響結構與使用安全的前提下，屬於作品特色的一部分。'), h('氣泡與瑕疵的差別'), l(['工藝特色的氣泡：形狀圓潤、自然，分布不規則，不影響結構與安全性。', '真正的瑕疵：裂痕、破洞、表面剝落或結構受損。']), h('氣泡的工藝價值'), p('氣泡是火與時間留下的自然印記，象徵手工玻璃的不可複製性。')] },
  5: { title: '煉功屋－玻璃百萬小學堂知識篇1', date: '2022-11-08', blocks: [h('吹製玻璃的小秘密'), p('原來師傅手上的秘密武器，竟然是每天都看得到的「它」！'), q('答案就是：報紙 Newspaper'), h('報紙為什麼對玻璃工藝這麼重要呢？'), p('報紙上的油墨碰到火紅玻璃時，會形成一層碳化保護層，有效隔絕高溫，並幫助師傅塑造玻璃造型，讓作品更加圓潤與細緻。')] },
  6: { title: '玻璃創造技法～冷工法', date: '2021-12-13', blocks: [h('玻璃冷工藝術'), p('冷工製作法不需使用高溫火焰，而是透過噴砂、磨刻、切割、拋光、描繪、鑲嵌與堆疊等技巧，讓玻璃呈現不同的紋理與藝術風貌。'), h('噴砂玻璃'), p('利用高壓空氣噴射，直接撞擊玻璃表面形成霧化效果，還能進一步彩繪上色。'), h('鑽雕玻璃'), p('利用高速鑽刀在玻璃與鏡面進行雕刻加工，將線條與圖案細緻刻畫於表面。'), h('雷射雕刻'), p('運用電腦控制雷射，在玻璃或水晶內部形成細緻氣泡與立體圖像。'), h('鑲嵌與堆疊玻璃'), p('將不同形狀與色彩的玻璃拼接、裁切與重新堆疊，形成富有層次感的玻璃藝術。')] },
  7: { title: '玻璃熱工藝術', date: '2021-12-03', blocks: [h('玻璃熱工藝術'), p('熱工技法在玻璃融熔點與徐冷點之間進行塑形，讓高溫玻璃在火焰與職人手中化為各種造型。'), h('壓模法'), p('將高溫玻璃膏注入雌模，再利用雄模壓印成型。'), h('吹製玻璃'), p('以吹管沾取融熔玻璃膏，透過吹氣、剪刀、木模與報紙等工具輔助塑形。'), h('拉製玻璃'), p('將玻璃棒於火炬加熱融熔，再利用拉絲、纏繞等技巧成型。'), h('窯燒與脫蠟鑄造'), p('透過窯爐加熱進行鑄造與黏結，或以蠟膜製作模型後鑄造，呈現豐富色彩與細節。')] },
  8: { title: '超夯的魷魚遊戲～強化玻璃的秘密', date: '2021-10-13', blocks: [p('最近超夯的魷魚遊戲，你看了嗎？小編來解答玻璃橋了！'), h('怎麼辨別一般玻璃及強化玻璃呢？'), l(['強化玻璃一定會有「強化標」，每家標示皆不同。', '強化過程中的冷熱交替，會使表面在特定角度呈現些微波紋。', '一般玻璃聲音較清脆，強化玻璃聲音較沉。', '敲破後，強化玻璃呈顆粒狀；一般玻璃則可能形成尖銳角。'])] },
}

const article = computed(() => articles[Number(route.query.id)] || articles[1])
</script>

<template>
  <main class="glass-detail-page">
    <article class="article-shell">
      <RouterLink class="back-link" :to="{ name: 'invite-about', hash: '#glass-notes' }">← 返回玻璃筆記</RouterLink>
      <hr class="top-rule">
      <div class="article-grid">
        <div class="article-main">
          <h1>{{ article.title }}</h1>
          <img class="hero-image" :src="heroImage" :alt="article.title">
          <div class="article-copy">
            <template v-for="(block, index) in article.blocks" :key="index">
              <h2 v-if="block.type === 'heading'">{{ block.text }}</h2>
              <p v-else-if="block.type === 'paragraph'">{{ block.text }}</p>
              <blockquote v-else-if="block.type === 'quote'">{{ block.text }}</blockquote>
              <ul v-else><li v-for="item in block.items" :key="item">{{ item }}</li></ul>
            </template>
          </div>
          <section class="contact"><h2>聯絡資訊</h2><p><b>服務專線</b><span>(04) 781-1299</span></p><p><b>Email</b><span>service@tmg.com.tw</span></p></section>
        </div>
        <aside class="article-meta"><time :datetime="article.date">{{ article.date.replaceAll('-', '.') }}</time></aside>
      </div>
    </article>
  </main>
</template>

<style scoped>
.glass-detail-page { background: #fff; color: #1e1e1e; padding: 72px 48px 130px; }
.article-shell { width: min(100%, 1200px); margin: 0 auto; }
.back-link { display: inline-flex; min-height: 48px; align-items: center; margin-bottom: 28px; color: inherit; font-size: 18px; font-weight: 700; text-decoration: none; }
.back-link:hover { color: #4f9ba4; }
.top-rule { height: 3px; margin: 0; border: 0; background: #1e1e1e; }
.article-grid { display: grid; grid-template-columns: minmax(0, 1fr) 130px; gap: clamp(32px, 5vw, 72px); padding-top: 34px; }
h1 { margin: 0 0 38px; font-size: clamp(2rem, 4vw, 3rem); font-weight: 900; line-height: 1.3; }
.hero-image { display: block; width: 100%; max-width: 920px; aspect-ratio: 1; object-fit: cover; }
.article-copy { max-width: 920px; padding-top: 46px; }
.article-copy p, .article-copy ul, blockquote { margin: 0 0 26px; font-size: 18px; line-height: 1.85; }
.article-copy h2 { margin: 54px 0 18px; padding-bottom: 12px; border-bottom: 3px solid #6ac3cc; color: #4d9ba4; font-size: clamp(1.35rem, 2.2vw, 2rem); }
.article-copy ul { padding-left: 1.4em; }
.article-copy li + li { margin-top: 8px; }
blockquote { padding: 8px 0 8px 20px; border-left: 5px solid #6ac3cc; font-weight: 700; }
.article-meta { text-align: right; }
.article-meta time { font-size: 17px; color: #1e1e1e; }
.contact { width: min(100%, 560px); margin-top: 84px; }
.contact h2 { margin: 0; font-size: 26px; }
.contact p { display: grid; grid-template-columns: 130px 1fr; gap: 14px; margin: 0; padding: 12px 0; border-bottom: 2px solid #1e1e1e; font-size: 17px; }
@media (max-width: 700px) { .glass-detail-page { padding: 44px 20px 80px; } .article-grid { display: flex; flex-direction: column; gap: 20px; } .article-meta { order: -1; text-align: left; } h1 { margin-bottom: 26px; } .article-copy { padding-top: 32px; } .article-copy p, .article-copy ul, blockquote { font-size: 16px; } .article-copy h2 { margin-top: 42px; } }
</style>

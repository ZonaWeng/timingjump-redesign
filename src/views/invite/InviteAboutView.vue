<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import headingIcon from '../../assets/images/invite/icon/icon-black.png'
import banner01 from '../../assets/images/invite/about/banner-01.png'
import banner02 from '../../assets/images/invite/about/banner-02.png'
import banner03 from '../../assets/images/invite/about/banner-03.png'
import banner04 from '../../assets/images/invite/about/banner-04.png'
import banner05 from '../../assets/images/invite/about/banner-05.png'
import bannerBg01 from '../../assets/images/invite/about/banner-bg01.png'
import bannerBg02 from '../../assets/images/invite/about/banner-bg02.png'
import map1F from '../../assets/images/invite/about/1F.png'
import map2F from '../../assets/images/invite/about/2F.png'
import one01 from '../../assets/images/invite/about/1F01.png'
import one02 from '../../assets/images/invite/about/1F02.png'
import one03 from '../../assets/images/invite/about/1F03.png'
import one04 from '../../assets/images/invite/about/1F04.png'
import two01 from '../../assets/images/invite/about/2F01.png'
import two02 from '../../assets/images/invite/about/2F02.png'
import two03 from '../../assets/images/invite/about/2F03.png'
import two04 from '../../assets/images/invite/about/2F04.png'
import note01 from '../../assets/images/invite/about/note01.png'
import note02 from '../../assets/images/invite/about/note02.png'
import note03 from '../../assets/images/invite/about/note03.png'
import note04 from '../../assets/images/invite/about/note04.png'
import note05 from '../../assets/images/invite/about/note05.png'
import note06 from '../../assets/images/invite/about/note06.png'
import note07 from '../../assets/images/invite/about/note07.png'
import note08 from '../../assets/images/invite/about/note08.png'
import sdg01 from '../../assets/images/invite/about/sdgs-01.png'
import sdg02 from '../../assets/images/invite/about/sdgs-02.png'
import sdg03 from '../../assets/images/invite/about/sdgs-03.png'
import sdg04 from '../../assets/images/invite/about/sdgs-04.png'
import sus01 from '../../assets/images/invite/about/永續-01.png'
import sus02 from '../../assets/images/invite/about/永續-02.png'
import sus03 from '../../assets/images/invite/about/永續-03.png'
import sus04 from '../../assets/images/invite/about/永續-04.png'
import product01 from '../../assets/images/invite/about/product01.png'
import product02 from '../../assets/images/invite/about/product02.png'
import product03 from '../../assets/images/invite/about/product03.png'
import decoration01 from '../../assets/images/invite/about/bg01.png'
import decoration02 from '../../assets/images/invite/about/bg02.png'
import decoration03 from '../../assets/images/invite/about/bg03.png'
import decoration04 from '../../assets/images/invite/about/bg04.png'

const heroSlides = [banner01, banner02, banner03, banner04, banner05]
const timelineItems = [
  ['2006', ['臺灣玻璃館開幕']], ['2011', ['榮獲－經濟部工業局觀光工廠認證通過']], ['2012', ['臺灣護聖宮開幕', '榮獲－2012台灣OTOP企業大賞']], ['2013', ['臺灣護聖宮獲頒－內政部宗教百景活動選拔「全民宗教百景」第九名']], ['2015', ['榮獲－2015台灣OTOP企業大賞', '榮獲－經濟部工業局觀光工廠續評通過']], ['2016', ['於桃園臺灣燈會打造科技燈區主燈「宇宙塔」', '通過－BSI ISO9001認證、神秘客服務品質認證']], ['2017', ['建置吹製玻璃工坊「煉功屋」', '榮獲－經濟部工業局觀光工廠續評通過']], ['2018', ['於嘉義臺灣燈會打造玻璃花燈「通天柱」']], ['2021', ['榮獲－經濟部商業司優良臺灣老店認證']], ['2022', ['榮獲－2022彰化百大商品之金質獎殊榮']], ['2023', ['榮獲－經濟部工業局觀光工廠續評通過', '榮獲－112年度觀光工廠職人手作殊榮', '榮獲－2023年彰化一甲子老店殊榮']],
]
const timelineIndex = ref(0)
const timelineMaxIndex = () => {
  // 桌機保留最後三筆，讓 2023 停在右側；手機一次顯示一筆。
  const visibleItems = window.matchMedia('(max-width: 640px)').matches ? 1 : 3
  return Math.max(0, timelineItems.length - visibleItems)
}
const moveTimeline = direction => {
  timelineIndex.value = Math.max(0, Math.min(timelineMaxIndex(), timelineIndex.value + direction))
}
const venueFloors = [
  { id:'1f', label:'1F', map:map1F, default:'mazu', locations:[
    {id:'glass',title:'煉功屋',text:'創立於2017年，煉功屋擁有全台專業的吹玻璃設備與教學團隊，帶領遊客親身體驗玻璃吹製的樂趣，感受高溫玻璃流動成形的魅力，親手創作獨一無二的玻璃作品。',image:one01,x:59,y:11},
    {id:'tunnel',title:'黃金隧道',text:'結合玻璃、LED燈光、音效與視覺設計，營造彷彿懸空漫步的沉浸體驗。高低起伏的步道搭配光影變化，帶來充滿層次的空間幻象。',image:one02,x:51,y:32},
    {id:'food',title:'美食廣場',text:'以「填飽肚子．帶走盤子」為特色，提供古早味餐點、飲品與冰品，結合玻璃工藝與環保理念。',image:one03,x:80,y:48},
    {id:'mazu',title:'玻璃媽祖廟 / 臺灣護聖宮',text:'全臺首座、全球華人第一座玻璃媽祖廟，融合玻璃工藝、宗教文化、傳統工藝與現代科技，展現藝術與信仰交織之美。',image:one04,x:46,y:85},
  ]},
  { id:'2f',label:'2F',map:map2F,default:'gallery',locations:[
    {id:'bridge',title:'楊橋勝景',text:'運用玻璃藝術打造河岸與橋樑景觀，重現鹿港八景「楊橋踏月」的優美意境。',image:two01,x:24,y:40},
    {id:'gallery',title:'藝術迴廊',text:'展示各式玻璃與琉璃藝術作品，融合傳統工藝與現代美學，展現玻璃藝術的豐富樣貌與獨特魅力。',image:two02,x:50,y:48},
    {id:'youth',title:'滾動青春',text:'以大型玻璃萬花筒打造互動體驗，遊客可親手轉動萬花筒，欣賞千變萬化的光影與圖案。',image:two03,x:25,y:76},
    {id:'message',title:'時空寄語',text:'結合鏡面與光影設計，打造充滿變化的鏡子迷宮，帶來探索空間與方向感的趣味體驗。',image:two04,x:43,y:80},
  ]},
]
const activeFloorId=ref('1f'), activeLocationId=ref('mazu')
const activeFloor=computed(()=>venueFloors.find(f=>f.id===activeFloorId.value))
const activeLocation=computed(()=>activeFloor.value.locations.find(l=>l.id===activeLocationId.value)||activeFloor.value.locations[0])
function selectFloor(id){const floor=venueFloors.find(f=>f.id===id);activeFloorId.value=id;activeLocationId.value=floor.default}
const notePages=[
  [['一塊玻璃是怎麼誕生的呢？','2026.07.28','從原料混合、高溫熔化到加工塑形，一起認識一塊玻璃從天然原料蛻變為生活用品的完整旅程。',note01],['台灣玻璃館煉功屋玻璃工藝師介紹','2026.06.24','走進煉功屋，認識三位吹製玻璃工藝師的創作風格、職人經歷，以及他們與高溫玻璃之間的故事。',note02],['甕藏時光','2026.05.25','透過循環設計，讓廢棄玻璃、退役模具與傳統技藝重新成為具有歷史厚度與永續價值的文化商品。',note03],['玻璃知識小學堂－氣泡','2026.01.07','玻璃與琉璃中的氣泡並非瑕疵，而是高溫手工製作時自然形成、無法被完全複製的工藝印記。',note04]],
  [['煉功屋－玻璃百萬小學堂知識篇1','2022.11.08','吹製玻璃師傅手中的報紙，會形成碳化保護層，隔絕高溫並協助塑造圓潤細緻的玻璃造型。',note05],['玻璃創造技法～冷工法','2021.12.13','從噴砂、鑽雕、雷射雕刻到鑲嵌與堆疊，認識不需高溫火焰也能展現豐富層次的玻璃冷工技法。',note06],['玻璃熱工藝術','2021.12.03','認識壓模、吹製、拉製、窯燒與脫蠟鑄造等玻璃熱工技法。',note07],['超夯的魷魚遊戲～強化玻璃的秘密','2021.10.13','了解一般玻璃和強化玻璃之間的差異。',note08]],
]
const notePage=ref(0)
const sustainabilityCards=[['產業創新與基礎設施',sdg01],['永續城市與社區',sdg02],['負責任的消費與生產',sdg03],['氣候行動',sdg04]]
const sustainabilitySteps=[['01','回收玻璃',sus01],['02','再製工藝',sus02],['03','全新價值',sus03],['04','永續未來',sus04]]
const sustainabilityIndex=ref(0), activeSustainability=computed(()=>sustainabilitySteps[sustainabilityIndex.value]);let timer
onMounted(()=>{timer=window.setInterval(()=>sustainabilityIndex.value=(sustainabilityIndex.value+1)%sustainabilitySteps.length,3200)})
onBeforeUnmount(()=>window.clearInterval(timer))
const courses=[['循環再生玻璃吹製體驗','從回收、熔融、塑形到新生，親手感受玻璃重獲生命的過程。',product01],['甕藏時光','將回收玻璃經高溫熔融、手工吹製，重塑為融合實用美感的再生玻璃甕。',product02],['島嶼時光','將台灣的綿延山巒與海岸記憶，凝結於千度高溫的流動之中。',product03]]
</script>

<template><main class="about-page">
  <section class="about-hero" aria-label="關於我們場館特色"><img class="hero-bg one" :src="bannerBg01" alt=""><img class="hero-bg two" :src="bannerBg02" alt=""><div class="hero-track"><div v-for="repeat in 2" :key="repeat" class="hero-group"><img v-for="(slide,index) in heroSlides" :key="`${repeat}-${index}`" :src="slide" alt="臺灣玻璃館場館特色"></div></div><p>A Window on Taiwan</p></section>
  <section class="history section-wrap"><header class="section-header"><h1><img :src="headingIcon" alt="">歷史沿革</h1><div class="arrows"><button :disabled="timelineIndex===0" @click="moveTimeline(-1)">&#8592;&#65038;</button><button :disabled="timelineIndex===timelineItems.length-1" @click="moveTimeline(1)">&#8594;&#65038;</button></div></header><div class="timeline-window"><div class="timeline" :style="{transform:`translateX(-${timelineIndex*310}px)`}"><article v-for="([year,lines],index) in timelineItems" :key="year" :class="['timeline-item',{bottom:index%2}]"><div><strong>{{ year }}</strong><p v-for="line in lines" :key="line">{{ line }}</p></div></article></div></div></section>
  <section class="venue section-wrap"><h2><img :src="headingIcon" alt="">場館導覽</h2><div class="floor-tabs"><button v-for="floor in venueFloors" :key="floor.id" :class="{active:activeFloorId===floor.id}" @click="selectFloor(floor.id)">{{floor.label}}</button></div><div class="venue-layout"><div class="venue-map"><img :src="activeFloor.map" :alt="`${activeFloor.label} 場館導覽圖`"><button v-for="location in activeFloor.locations" :key="location.id" :style="{left:`${location.x}%`,top:`${location.y}%`}" :class="{active:location.id===activeLocationId}" :aria-label="location.title" @click="activeLocationId=location.id"></button></div><article class="venue-card"><h3>{{activeLocation.title}}</h3><p>{{activeLocation.text}}</p><img :src="activeLocation.image" :alt="activeLocation.title"></article></div></section>
  <div class="soft-area"><div class="about-decorations" aria-hidden="true"><img class="about-decoration decoration-01" :src="decoration01" alt=""><img class="about-decoration decoration-02" :src="decoration02" alt=""><img class="about-decoration decoration-03" :src="decoration03" alt=""><img class="about-decoration decoration-04" :src="decoration04" alt=""></div><section id="glass-notes" class="notes section-wrap"><div class="notes-top"><h2><img :src="headingIcon" alt="">玻璃筆記</h2><div class="arrows"><button :disabled="notePage===0" @click="notePage--">&#8592;&#65038;</button><button :disabled="notePage===notePages.length-1" @click="notePage++">&#8594;&#65038;</button></div></div><div class="note-grid"><RouterLink v-for="([title,date,text,image], index) in notePages[notePage]" :key="title" class="note-card" :to="{ name: 'invite-glass-detail', query: { id: notePage * 4 + index + 1 } }"><img :src="image" :alt="title"><div><time>{{date}}</time><h3>{{title}}</h3><p>{{text}}</p></div></RouterLink></div></section>
  <section class="sustainability section-wrap"><h2><img :src="headingIcon" alt="">永續專區</h2><p class="slogan">讓時間延續，讓未來永續。</p><div class="sdg-grid"><article v-for="([title,image]) in sustainabilityCards" :key="title"><img :src="image" :alt="title"><h3>{{title}}</h3></article></div><div class="sustainability-flow"><div class="steps"><button v-for="([num,title],index) in sustainabilitySteps" :key="num" :class="{active:index===sustainabilityIndex}" @click="sustainabilityIndex=index"><b>{{num}}</b><span>{{title}}</span></button></div><Transition name="sustainability-fade" mode="out-in"><img :key="sustainabilityIndex" :src="activeSustainability[2]" :alt="activeSustainability[1]"></Transition></div></section>
  <section class="courses section-wrap"><h2><img :src="headingIcon" alt="">永續課程</h2><div><article v-for="([title,text,image]) in courses" :key="title"><img :src="image" :alt="title"><h3>{{title}}</h3><p>{{text}}</p></article></div></section></div>
</main></template>

<style scoped>
.about-page{overflow:hidden;color:#1e1e1e}.section-wrap{width:min(calc(100% - 128px),1500px);margin-inline:auto;padding:clamp(72px,9vw,150px) 0}.about-hero{height:clamp(410px,43vw,680px);position:relative;display:grid;place-items:center;overflow:hidden;background:#e5f4f6}.hero-bg{position:absolute;width:36vw;max-width:520px;opacity:.85}.one{left:-5%;top:6%}.two{right:-7%;bottom:-5%}.hero-track{display:flex;width:max-content;animation:scroll 32s linear infinite;gap:34px;z-index:1}.hero-group{display:flex;align-items:center;gap:34px}.hero-group img{width:clamp(160px,17vw,260px);aspect-ratio:4/5;object-fit:cover;border-radius:55% 45% 48% 52%/42% 56% 44% 58%;box-shadow:0 12px 25px #587d8030}.hero-group img:nth-child(even){width:clamp(185px,20vw,320px);transform:translateY(35px)}.about-hero p{position:absolute;bottom:34px;left:50%;transform:translateX(-50%);z-index:2;margin:0;color:#d9c45c;font-family:Georgia,serif;font-size:clamp(1.3rem,2.7vw,3rem);white-space:nowrap}@keyframes scroll{to{transform:translateX(calc(-50% - 17px))}}h1,h2{font-size:clamp(2rem,3.6vw,4rem);margin:0;font-weight:800;letter-spacing:.04em}h1 img,h2 img{width:.82em;margin-right:.28em;vertical-align:-.02em}.section-header,.notes-top{display:flex;justify-content:space-between;align-items:center;gap:24px}.arrows{display:flex;gap:10px}.arrows button{width:46px;height:46px;border:1px solid #1e1e1e;border-radius:50%;background:#fff;font-size:1.3rem;cursor:pointer}.arrows button:disabled{opacity:.3}.timeline-window{margin-top:80px;overflow:hidden}.timeline{display:flex;width:max-content;position:relative;transition:transform .45s ease;padding:0 0 80px}.timeline:before{content:"";position:absolute;left:0;right:0;top:50%;height:2px;background:#1e1e1e}.timeline-item{width:310px;height:260px;position:relative;display:flex;align-items:flex-start;padding-right:30px}.timeline-item:before{content:"";width:16px;height:16px;border-radius:50%;background:#1e1e1e;position:absolute;top:calc(50% - 7px);left:0}.timeline-item>div{padding:0 0 0 28px}.timeline-item strong{font-size:2.3rem}.timeline-item p{font-size:.96rem;line-height:1.7}.timeline-item.bottom{align-items:flex-end}.venue{background:#fff}.floor-tabs{display:flex;gap:12px;margin:54px 0 40px}.floor-tabs button{font:inherit;font-weight:800;border:0;padding:15px 34px;background:#eee9e3;cursor:pointer}.floor-tabs .active{background:#dff1f3}.venue-layout{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(280px,.75fr);gap:clamp(30px,5vw,90px);align-items:center}.venue-map{position:relative}.venue-map>img{display:block;width:100%;height:auto}.venue-map button{position:absolute;width:20px;height:20px;padding:0;border:3px solid #fff;border-radius:50%;background:#e5c83f;box-shadow:0 0 0 1px #222;cursor:pointer}.venue-map button.active{transform:scale(1.45);background:#1e1e1e}.venue-card h3{font-size:clamp(1.5rem,2.3vw,2.4rem);margin:0 0 18px}.venue-card p{line-height:1.9;margin:0 0 25px}.venue-card img{width:100%;display:block}.soft-area{background:#e5f4f6}.notes-top{margin-bottom:55px}.note-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:32px}.note-grid article{background:#fff;display:grid;grid-template-columns:43% 1fr}.note-grid img{width:100%;height:100%;min-height:190px;object-fit:cover}.note-grid div{padding:24px}.note-grid time{font-size:.8rem;color:#727272}.note-grid h3{font-size:1.3rem;margin:9px 0}.note-grid p{font-size:.92rem;line-height:1.75;margin:0}.slogan{font-size:clamp(1.15rem,2vw,1.70rem);margin:22px 0 55px}.sdg-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}.sdg-grid article{position:relative;aspect-ratio:1;overflow:hidden}.sdg-grid img{width:100%;height:100%;object-fit:cover}.sdg-grid h3{position:absolute;inset:auto 14px 14px;margin:0;color:#fff;font-size:clamp(.8rem,1.3vw,1.2rem)}.sustainability-flow{display:grid;grid-template-columns:.9fr 1.1fr;gap:5vw;align-items:center;margin-top:85px}.steps{display:grid;gap:8px}.steps button{font:inherit;text-align:left;display:flex;gap:20px;align-items:center;border:0;border-bottom:1px solid #1e1e1e;background:transparent;padding:17px 0;cursor:pointer}.steps b{font-size:1.2rem}.steps .active{color:#4e99a6}.sustainability-flow>img{width:100%;aspect-ratio:1.3;object-fit:cover}.courses>div{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;margin-top:55px}.courses img{width:100%;aspect-ratio:1.3;object-fit:cover}.courses h3{font-size:1.35rem;margin:17px 0 8px}.courses p{line-height:1.7;margin:0}@media(max-width:900px){.section-wrap{width:min(calc(100% - 64px),1500px)}.venue-layout,.sustainability-flow{grid-template-columns:1fr}.venue-card{max-width:600px}.sdg-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:640px){.section-wrap{width:calc(100% - 32px);padding:68px 0}.about-hero{height:300px}.hero-group img{width:120px}.hero-group img:nth-child(even){width:145px}.about-hero p{bottom:18px}.timeline-window{margin-top:50px}.timeline-item{width:250px}.timeline-item strong{font-size:1.8rem}.floor-tabs{margin:32px 0 28px}.floor-tabs button{padding:12px 20px}.note-grid,.courses>div{grid-template-columns:1fr}.note-grid article{grid-template-columns:42% 1fr}.sdg-grid{gap:10px}.sustainability-flow{margin-top:52px}.arrows button{width:40px;height:40px}}
.about-hero{margin-top:0;min-height:640px;padding:104px 0 72px}.about-hero p{color:#fff;font-size:clamp(48px,6vw,74px)}.section-wrap,.history .section-header{width:min(calc(100% - 128px),1200px)}.history,.venue,.notes,.sustainability,.courses{padding-block:88px}.history h1,.venue h2,.notes h2,.sustainability h2,.courses h2{font-size:clamp(1.8rem,3vw,3rem)}.history h1 img,.venue h2 img,.notes h2 img,.sustainability h2 img,.courses h2 img{width:34px;height:27px;object-fit:contain}.timeline{height:620px}.timeline-window:after{top:295px}.timeline-item{width:360px;height:620px}.timeline-item:before{top:287px}.timeline-item:not(.bottom):after{top:42px;height:253px}.timeline-item.bottom:after{top:295px;height:128px}.timeline-item>div{top:36px;left:42px;width:305px}.timeline-item.bottom>div{top:343px}.timeline-item strong{font-size:42px}.timeline-item p{font-size:16px}.venue-layout{grid-template-columns:minmax(0,1fr) minmax(260px,360px);gap:48px}.venue-map{max-width:700px}.venue-card{max-width:360px}.venue-card h3{font-size:24px}.venue-card p{font-size:16px}.floor-tabs button{font-size:25px;min-width:88px;padding-inline:18px}.notes{grid-template-columns:230px minmax(0,1fr);gap:48px}.note-grid{grid-template-columns:1fr}.note-grid article{grid-template-columns:210px minmax(0,1fr);gap:28px}.note-grid img{height:120px}.note-grid h3{font-size:20px}.note-grid time{font-size:15px}.note-grid p{margin-top:12px;font-size:15px;line-height:1.65}.sdg-grid{gap:16px}.sdg-grid article,.sdg-grid img{min-height:0;height:auto}.sdg-grid h3{font-size:15px}.slogan{margin:28px 0 50px;font-size:clamp(1.25rem,2.6vw,2.2rem)}.sustainability-flow{grid-template-columns:250px minmax(0,1fr);gap:72px;margin-top:72px}.steps{gap:58px}.steps:before{left:70px}.steps button{grid-template-columns:48px 20px minmax(0,1fr);gap:12px;font-size:24px}.steps button:after{width:14px;height:14px}.sustainability-flow>img{height:auto;aspect-ratio:1.45;object-fit:cover}.courses>div{gap:32px;margin-top:38px}.courses>div img{height:auto;aspect-ratio:1.35;object-fit:cover}.courses>h2>img{width:34px;height:27px}.courses h3{font-size:21px;margin:16px 0 8px}.courses p{font-size:15px}.courses>h2+div img{display:block}@media(max-width:900px){.section-wrap,.history .section-header{width:min(calc(100% - 64px),1200px)}.notes{grid-template-columns:1fr}.note-grid{grid-column:auto}.venue-layout,.sustainability-flow{grid-template-columns:1fr}.venue-card{max-width:560px}.sustainability-flow{gap:42px}}@media(max-width:640px){.about-hero{min-height:430px;padding:70px 0 58px}.section-wrap,.history .section-header{width:calc(100% - 32px)}.history,.venue,.notes,.sustainability,.courses{padding-block:64px}.timeline-item{width:290px}.timeline-item>div{width:235px}.note-grid article{grid-template-columns:132px minmax(0,1fr);gap:16px}.note-grid img{height:86px}.note-grid h3{font-size:17px}.note-grid p{display:none}.sdg-grid{grid-template-columns:repeat(2,1fr)}}
/* 僅保留使用者指定的修正，其餘恢復上一版源網站比例。 */
@media (min-width: 901px) {
  .history, .venue, .notes, .sustainability, .courses { padding-block: initial; }
  .history { padding: 110px 0 120px; }
  .venue { padding: 130px 0 150px; }
  .notes { padding: 120px 0 150px; }
  .sustainability { padding: 120px 0 140px; }
  .courses { padding: 150px 0 170px; }

  .sustainability-flow { grid-template-columns: 390px minmax(0, 1fr); gap: clamp(60px, 9vw, 145px); margin-top: 100px; }
  .steps { gap: 105px; }
  .steps:before { left: 104px; }
  .steps button { grid-template-columns: 70px 28px minmax(0, 1fr); gap: 20px; font-size: 36px; }
  .steps button:after { width: 20px; height: 20px; }
  .sustainability-flow > img { height: 590px; aspect-ratio: auto; }

  .sdg-grid { gap: 24px; }
  .sdg-grid article { min-height: 245px; }
  .sdg-grid img { height: 245px; }
  .sdg-grid h3 { font-size: 20px; }

  .courses > div { gap: 54px; margin-top: 55px; }
  .courses > div img { height: 300px; aspect-ratio: auto; }
  .courses h3 { font-size: 30px; margin: 24px 0 12px; }
  .courses p { font-size: 20px; }
}

/* 使用者指定保留：無上方空白、白色標語、首頁字級、較小地圖、筆記單列、正常 icon。 */
.about-hero { margin-top: 0; }
.about-hero p { color: #fff; }
.history h1, .venue h2, .notes h2, .sustainability h2, .courses h2 { font-size: clamp(1.8rem, 3vw, 3rem); }
.history h1 img, .venue h2 img, .notes h2 img, .sustainability h2 img, .courses h2 img { width: 34px; height: 27px; object-fit: contain; }
.venue-map { max-width: 700px; }
.note-grid { grid-template-columns: 1fr; }
.courses > div img { display: block; }
/* 回復至「依源網站 CSS 排版」的版本：撤回後續所有縮小與局部重排。 */
.about-page{width:100%;background:#fff}.section-wrap{width:min(calc(100% - 96px),1500px);padding:0}.about-hero{width:100%;min-height:780px;height:auto;margin-top:-156px;padding:228px 0 120px;background:#c3e7eb}.hero-bg{z-index:0;width:auto;max-width:none}.hero-bg.one{left:-16%;top:auto;bottom:-68%;width:min(78vw,1160px)}.hero-bg.two{right:-14%;top:auto;bottom:-58%;width:min(62vw,914px)}.hero-track{z-index:2;width:max-content;gap:0;animation:source-marquee 25s linear infinite}.hero-group{display:flex;align-items:flex-start;flex:0 0 auto;gap:28px;padding-right:28px}.hero-group img{display:block;flex:0 0 auto;width:430px;height:528px;aspect-ratio:auto;border-radius:0;box-shadow:none;object-fit:cover;transform:none}.hero-group img:nth-child(1),.hero-group img:nth-child(3),.hero-group img:nth-child(4){margin-top:clamp(48px,6vw,96px)}.hero-group img:nth-child(2){width:520px;height:560px;transform:none}.hero-group img:nth-child(3),.hero-group img:nth-child(5){width:320px;height:393px}.about-hero p{right:10px;bottom:-3px;left:auto;transform:none;color:#fff;font-family:"Noto Serif TC",Georgia,serif;font-size:clamp(78px,9.5vw,100px);font-weight:600;line-height:.82}.history{width:100%;padding:110px 0 120px;overflow:hidden}.history .section-header{width:min(calc(100% - 96px),1500px);margin:0 auto 22px}.history h1,.venue h2,.notes h2,.sustainability h2,.courses h2{font-size:42px}.timeline-window:after{top:360px}.timeline{height:760px}.timeline-item{width:460px;height:760px}.timeline-item:before{top:352px}.timeline-item:not(.bottom):after{top:48px;height:312px}.timeline-item.bottom:after{top:360px;height:150px}.timeline-item>div{top:42px;left:50px;width:400px}.timeline-item.bottom>div{top:410px}.timeline-item strong{font-size:56px}.timeline-item p{font-size:22px}.venue{padding:130px 0 150px}.venue-layout{grid-template-columns:minmax(0,1fr) minmax(360px,460px);gap:clamp(44px,5vw,82px)}.venue-map{max-width:none}.venue-card{max-width:460px}.venue-card h3{font-size:28px}.venue-card p{font-size:20px}.floor-tabs button{font-size:34px;min-width:114px;padding-inline:26px}.notes{grid-template-columns:280px minmax(0,1fr);gap:clamp(48px,7vw,110px);padding:120px 0 150px}.note-grid{grid-column:2;grid-template-columns:repeat(2,minmax(0,1fr));gap:28px}.note-grid article{grid-template-columns:260px minmax(0,1fr);gap:36px}.note-grid img{height:148px}.note-grid h3{font-size:28px}.note-grid time{font-size:21px}.note-grid p{font-size:18px}.sustainability{padding:120px 0 140px}.slogan{margin:56px 0 86px;font-size:clamp(24px,3.6vw,50px)}.sdg-grid{gap:24px}.sdg-grid article{min-height:245px}.sdg-grid img{height:245px}.sdg-grid h3{font-size:20px}.sustainability-flow{grid-template-columns:390px minmax(0,1fr);gap:clamp(60px,9vw,145px);margin-top:100px}.steps{gap:105px}.steps:before{left:104px}.steps button{grid-template-columns:70px 28px minmax(0,1fr);gap:20px;font-size:36px}.steps button:after{width:20px;height:20px}.sustainability-flow>img{height:590px;aspect-ratio:auto}.courses{padding:150px 0 170px}.courses>div{gap:54px;margin-top:55px}.courses img{height:300px;aspect-ratio:auto}.courses h3{font-size:30px;margin:24px 0 12px}.courses p{font-size:20px}@media(max-width:900px){.section-wrap,.history .section-header{width:min(calc(100% - 64px),1500px)}.notes{grid-template-columns:1fr}.note-grid{grid-column:auto}.venue-layout,.sustainability-flow{grid-template-columns:1fr}}@media(max-width:640px){.section-wrap,.history .section-header{width:calc(100% - 32px)}.about-hero{min-height:560px;margin-top:-100px;padding:160px 0 80px}.history,.venue,.sustainability,.courses{padding:72px 0}.timeline-item{width:400px}.timeline-item>div{width:325px}.timeline-item strong{font-size:48px}.timeline-item p{font-size:17px}.note-grid article{grid-template-columns:1fr;gap:14px}.note-grid img{height:auto;aspect-ratio:16/9}.courses>div{gap:36px}.courses article:nth-child(2){transform:none}.courses img{height:auto;aspect-ratio:4/3}}
/* 關於我們所有區塊標題沿用首頁的 section-title 尺度。 */
.history h1,
.venue h2,
.notes h2,
.sustainability h2,
.courses h2 {
  font-size: clamp(1.3rem, 2vw, 2rem);
  line-height: 1.2;
}

.history h1 img,
.venue h2 img,
.notes h2 img,
.sustainability h2 img,
.courses h2 img {
  width: 34px;
  height: 28px;
  margin-right: 14px;
  object-fit: contain;
}
.about-hero {
  min-height: 620px;
  padding: 184px 0 86px;
}

.hero-group img {
  width: 340px;
  height: 418px;
}

.hero-group img:nth-child(2) {
  width: 410px;
  height: 442px;
}

.hero-group img:nth-child(3),
.hero-group img:nth-child(5) {
  width: 255px;
  height: 313px;
}

.hero-track {
  animation: about-banner-marquee 36s linear infinite !important;
}

.about-hero p {
  font-size: clamp(2.4rem, 4.2vw, 3.75rem);
}

.about-hero {
  min-height: 540px;
  padding: 200px 0 80px;
}

.hero-group img {
  width: 285px;
  height: 350px;
}

.hero-group img:nth-child(2) {
  width: 350px;
  height: 378px;
}

.hero-group img:nth-child(3),
.hero-group img:nth-child(5) {
  width: 215px;
  height: 265px;
}

@media (max-width: 640px) {
  .about-hero { min-height: 370px; padding: 90px 0 50px; }
  .hero-group img { width: 180px; height: 230px; }
  .hero-group img:nth-child(2) { width: 220px; height: 250px; }
  .hero-group img:nth-child(3), .hero-group img:nth-child(5) { width: 160px; height: 195px; }
  .about-hero p { font-size: 2rem; }
}

@keyframes about-banner-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

/* 歷史沿革：年份與水平時間軸的連接線。 */
.timeline-item::after {
  position: absolute;
  z-index: 2;
  left: 26px;
  width: 3px;
  background: #1e1e1e;
  content: "";
}

.timeline-item:not(.bottom)::after {
  top: 48px;
  height: 312px;
}

.timeline-item.bottom::after {
  top: 360px;
  height: 150px;
}

/* 直接對應源網站歷史沿革的定位數值。 */
.history { padding: 110px 0 120px; overflow: hidden; background: #fff; }
.history .section-header { width: min(calc(100% - 96px), 1500px); margin: 0 auto 22px; }
.timeline-window { position: relative; width: 100%; margin-top: 0; overflow: hidden; }
.timeline-window::after { position: absolute; z-index: 1; top: 360px; right: 0; left: 0; height: 3px; background: #1e1e1e; content: ""; }
.timeline::before { display: none; }
.timeline { position: relative; z-index: 2; display: flex; width: max-content; min-width: 100%; height: 760px; padding: 0 max(48px, calc((100vw - 1500px) / 2)); transition: transform 600ms cubic-bezier(.22, 1, .36, 1); }
.timeline-item { position: relative; flex: 0 0 460px; width: auto; height: 100%; padding: 0; }
.timeline-item::before { position: absolute; z-index: 3; top: 352px; left: 18px; width: 18px; height: 18px; border-radius: 50%; background: #1e1e1e; content: ""; }
.timeline-item::after { z-index: 2; left: 26px; width: 3px; background: #1e1e1e; content: ""; }
.timeline-item:not(.bottom)::after { top: 48px; height: 312px; }
.timeline-item.bottom::after { top: 360px; height: 150px; }
.timeline-item > div { position: absolute; top: 42px; left: 50px; width: 400px; padding: 0; }
.timeline-item.bottom > div { top: 410px; }
.timeline-item strong { margin: 0 0 8px; color: #6ac3cc; font-size: 56px; font-weight: 800; line-height: 1; }
.timeline-item p { margin: 0; font-size: 28px; font-weight: 500; line-height: 1.48; }

/* 歷史沿革縮小版：保留源網站的上下交錯比例。 */
.timeline-window::after { top: 270px; }
.timeline { height: 560px; }
.timeline-item { flex-basis: 330px; }
.timeline-item::before { top: 262px; left: 14px; width: 14px; height: 14px; }
.timeline-item::after { left: 20px; width: 2px; }
.timeline-item:not(.bottom)::after { top: 36px; height: 234px; }
.timeline-item.bottom::after { top: 270px; height: 116px; }
.timeline-item > div { top: 31px; left: 38px; width: 275px; }
.timeline-item.bottom > div { top: 310px; }
.timeline-item strong { margin-bottom: 6px; font-size: 42px; }
.timeline-item p { font-size: 18px; line-height: 1.5; }

@media (max-width: 640px) {
  .timeline-window::after { top: 225px; }
  .timeline { height: 470px; }
  .timeline-item { flex-basis: 270px; }
  .timeline-item::before { top: 218px; }
  .timeline-item:not(.bottom)::after { top: 28px; height: 197px; }
  .timeline-item.bottom::after { top: 225px; height: 95px; }
  .timeline-item > div { top: 24px; left: 34px; width: 225px; }
  .timeline-item.bottom > div { top: 260px; }
  .timeline-item strong { font-size: 34px; }
  .timeline-item p { font-size: 15px; }
}

/* 場館導覽：源網站的樓層 Tab 與圖釘樣式。 */
.floor-tabs { display: flex; gap: 0; margin: 42px 0 28px 50px; }
.floor-tabs button { min-width: 114px; padding: 0 26px 10px; border: 0; border-bottom: 3px solid #dedad6; color: #d8d3cf; background: transparent; font-size: 34px; font-weight: 700; }
.floor-tabs .active { border-color: #1e1e1e; color: #1e1e1e; background: transparent; }
.venue-map button { width: 28px; height: 49px; padding: 0; border: 0; border-radius: 0; background: transparent; box-shadow: none; transform: translate(-50%, -50%); }
.venue-map button::before, .venue-map button::after { position: absolute; left: 50%; background: #88cfd6; content: ""; transform: translateX(-50%); }
.venue-map button::before { top: 0; width: 24px; height: 24px; border-radius: 50%; }
.venue-map button::after { top: 21px; width: 5px; height: 26px; border-radius: 0 0 5px 5px; }
.venue-map button.active { background: transparent; transform: translate(-50%, -50%); }
.venue-map button.active::before, .venue-map button.active::after { background: #decc67; }

/* 玻璃筆記：左標題、右側由上到下的一列一篇。 */
@media (min-width: 901px) {
  .notes { display: grid; grid-template-columns: 280px minmax(0, 1fr); grid-template-rows: auto auto; column-gap: clamp(48px, 7vw, 110px); row-gap: 32px; }
  .notes-top { display: contents; }
  .notes-top h2 { grid-column: 1; grid-row: 1; padding-top: 10px; }
  .notes-top .arrows { grid-column: 2; grid-row: 1; justify-content: flex-end; align-self: start; margin: 0 0 34px; }
  .note-grid { grid-column: 2; grid-row: 2; display: grid; grid-template-columns: 1fr; gap: 28px; }
  .note-grid article { display: grid; grid-template-columns: 260px minmax(0, 1fr); gap: 36px; background: transparent; }
  .note-grid img { width: 100%; height: 148px; min-height: 0; object-fit: cover; }
  .note-grid div { padding: 18px 0 0; border-top: 3px solid #1e1e1e; }
  .note-grid h3 { margin: 0; font-size: 28px; line-height: 1.35; }
  .note-grid time { float: right; color: #6ac3cc; font-size: 21px; }
  .note-grid p { clear: both; margin: 22px 0 0; font-size: 18px; line-height: 1.75; }
}

/* 永續專區：左側步驟選單、右側自動輪播圖片。 */
.sustainability-flow { grid-template-columns: 300px minmax(0, 1fr); gap: clamp(60px, 9vw, 145px); align-items: center; }
.steps { position: relative; gap: 82px; padding: 28px 0; }
.steps::before { position: absolute; top: 0; bottom: 0; left: 82px; width: 2px; background: #e5dfd9; content: ""; }
.steps button { position: relative; z-index: 1; display: grid; grid-template-columns: 58px 24px minmax(0, 1fr); align-items: center; gap: 16px; border: 0; color: #e5dfd9; background: transparent; font-size: 30px; font-weight: 800; }
.steps button::after { width: 18px; height: 18px; grid-column: 2; grid-row: 1; justify-self: center; border-radius: 50%; background: currentColor; content: ""; }
.steps b { text-align: right; }
.steps .active { color: #5e9499; }
.sustainability-flow > img { width: 100%; height: 480px; aspect-ratio: auto; object-fit: cover; }

@media (max-width: 900px) {
  .floor-tabs { margin-left: 0; }
  .floor-tabs button { min-width: 84px; padding-inline: 18px; font-size: 24px; }
  .sustainability-flow { grid-template-columns: 1fr; gap: 44px; }
}

/* 依示意圖縮小場館導覽、筆記與永續卡片。 */
@media (min-width: 901px) {
  .venue-map { max-width: 580px; }
  .venue-card { max-width: 400px; }

  .note-grid { width: min(100%, 860px); }
  .note-grid article { grid-template-columns: 190px minmax(0, 1fr); gap: 26px; }
  .note-grid img { height: 112px; }
  .note-grid h3 { font-size: 22px; }
  .note-grid time { font-size: 16px; }
  .note-grid p { margin-top: 14px; font-size: 16px; line-height: 1.65; }

  .sdg-grid { width: min(100%, 1080px); gap: 18px; }
  .sdg-grid article { min-height: 0; aspect-ratio: 1; }
  .sdg-grid img { height: 100%; }
}

.slogan { width: 100%; margin-left: auto; font-weight: 900; text-align: right; }
.sdg-grid h3 { right: auto; bottom: 18px; left: 20px; width: auto; text-align: left; }

/* 關於我們所有內容與首頁使用同一個 1200px 內容寬度。 */
.about-page .section-wrap,
.about-page .history .section-header {
  width: min(calc(100% - 128px), 1200px);
}

/* 玻璃筆記後方維持白底。 */
.about-page .soft-area {
  background: #fff !important;
}

@media (max-width: 768px) {
  .about-page .section-wrap,
  .about-page .history .section-header {
    width: calc(100% - 32px);
  }
}

/* 時間軸需滿版延伸；僅它的標題列遵守 1200px。 */
.about-page .history.section-wrap {
  width: 100%;
}

@media (max-width: 430px) {
  .about-hero { min-height: 370px; padding: 120px 0 80px; }
  .hero-group img { width: 180px; height: 250px; }
  .about-hero p { font-size: 2rem; }
}

/* 時間軸：上下兩側的垂直線使用相同長度。 */
.timeline-item.bottom::after { height: 234px; }

/* 平板以下改為原網站可直接左右滑動的時間軸，不顯示控制按鈕。 */
@media (max-width: 1024px) {
  .history .section-header .arrows { display: none; }
  .timeline-window {
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    touch-action: auto;
  }
  .timeline-window::-webkit-scrollbar { display: none; }
  .timeline { transform: none !important; }
  .timeline-item.bottom::after { height: 234px; }
}

@media (max-width: 640px) {
  .timeline-item.bottom::after { height: 197px; }
  .timeline::before { top: 225px !important; }
}

/* 永續四卡：恢復源網站的圓角、標題及玻璃反光 hover。 */
.sdg-grid { width: 100%; }
.sdg-grid article {
  position: relative;
  min-height: 245px;
  overflow: hidden;
  border-radius: 24px;
  background: #fff;
}
.sdg-grid img {
  display: block;
  width: 100%;
  height: 245px;
  object-fit: cover;
  transition: transform .45s ease, filter .45s ease;
}
.sdg-grid article::after {
  position: absolute;
  z-index: 1;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,.42) 0%, rgba(255,255,255,.08) 35%, rgba(255,255,255,.02) 60%, rgba(170,231,238,.22) 100%);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.8), inset 0 -1px 0 rgba(255,255,255,.25);
  backdrop-filter: blur(1px) saturate(1.15);
  content: "";
  pointer-events: none;
}
.sdg-grid article::before {
  position: absolute;
  z-index: 2;
  top: -30%;
  left: -75%;
  width: 42%;
  height: 160%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.65), transparent);
  content: "";
  pointer-events: none;
  transform: rotate(18deg);
  transition: left .75s ease;
}
.sdg-grid article:hover::before { left: 135%; }
.sdg-grid article:hover img { filter: brightness(1.08) contrast(.92) saturate(.9); transform: scale(1.025); }
.sdg-grid h3 {
  position: absolute;
  z-index: 3;
  right: 22px;
  bottom: 22px;
  left: 22px;
  margin: 0;
  color: #1e1e1e;
  font-size: 20px;
  font-weight: 900;
  line-height: 1.35;
}

@media (max-width: 900px) {
  .sdg-grid img { height: 100%; }

  /* 平板開始採用水平的永續流程。 */
  .sustainability-flow { gap: 36px; margin-top: 64px; }
  .steps { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0; padding: 0; }
  .steps::before { top: 44px; right: 12.5%; bottom: auto; left: 12.5%; width: auto; height: 2px; }
  .steps button { display: grid; grid-template-columns: 1fr; grid-template-rows: 30px 22px auto; justify-items: center; gap: 8px; padding: 0; font-size: 18px; text-align: center; }
  .steps button::after { grid-column: 1; grid-row: 2; width: 18px; height: 18px; }
  .steps button b { grid-column: 1; grid-row: 1; text-align: center; }
  .steps button span { grid-column: 1; grid-row: 3; writing-mode: vertical-rl; text-orientation: upright; }
}

/* 平板橫滑時，橫線畫在實際可滑動的軌道上，避免在視窗邊界中斷。 */
@media (max-width: 1024px) {
  .timeline-window::after { display: none; }
  .timeline::before {
    display: block;
    z-index: 1;
    top: 270px;
    height: 3px;
  }
}

/* 430px 手機版依源網站改為一列一篇的閱讀順序。 */
@media (max-width: 430px) {
  .note-grid { grid-template-columns: 1fr; gap: 34px; }
  .note-grid .note-card { display: block; }
  .note-grid .note-card img { display: block; width: 100%; height: auto; aspect-ratio: 16 / 9; object-fit: cover; }
  .note-grid .note-card div { padding-top: 18px; border-top: 3px solid #1e1e1e; }
  .note-grid .note-card time { display: block; margin-bottom: 8px; color: #6ac3cc; font-size: 16px; }
  .note-grid .note-card h3 { margin: 0 0 18px; font-size: 20px; line-height: 1.45; }
  .note-grid .note-card p { display: block; margin: 0; font-size: 16px; line-height: 1.8; }

  .sdg-grid { grid-template-columns: 1fr; gap: 16px; }
  .sdg-grid article { min-height: 0; aspect-ratio: 1; }
  .sdg-grid img { height: 100%; }

  .sustainability-flow { gap: 36px; margin-top: 64px; }
  .steps { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0; padding: 0; }
  .steps::before { top: 44px; right: 12.5%; bottom: auto; left: 12.5%; width: auto; height: 2px; }
  .steps button { display: grid; grid-template-columns: 1fr; grid-template-rows: 30px 22px auto; justify-items: center; gap: 8px; padding: 0; font-size: 18px; text-align: center; }
  .steps button::after { grid-column: 1; grid-row: 2; width: 18px; height: 18px; }
  .steps button b { grid-column: 1; grid-row: 1; text-align: center; }
  .steps button span { grid-column: 1; grid-row: 3; writing-mode: vertical-rl; text-orientation: upright; }
}

/* RouterLink 沿用原本文章卡片的排列與視覺。 */
.note-card { color: inherit; text-decoration: none; }
@media (min-width: 901px) {
  .note-grid .note-card { display: grid; grid-template-columns: 190px minmax(0, 1fr); gap: 26px; }
  .note-grid .note-card img { width: 100%; height: 112px; min-height: 0; object-fit: cover; }
  .note-grid .note-card div { padding: 18px 0 0; border-top: 3px solid #1e1e1e; }
  .note-grid .note-card h3 { margin: 0; font-size: 22px; line-height: 1.35; }
  .note-grid .note-card time { float: right; color: #6ac3cc; font-size: 16px; }
  .note-grid .note-card p { clear: both; margin: 14px 0 0; font-size: 16px; line-height: 1.65; }
  .note-card:hover h3 { color: #4f9ba4; }
}

/* 原網站關於我們內容區的四個不規則背景圖塊。 */
.soft-area { position: relative; isolation: isolate; overflow: hidden; }
.about-decorations { position: absolute; z-index: 0; inset: 0; overflow: hidden; pointer-events: none; }
.about-decoration { position: absolute; display: block; height: auto; max-width: none; object-fit: contain; user-select: none; }
.decoration-01 { top: -1%; left: -40%; width: clamp(130px, 80vw, 1400px); }
.decoration-02 { top: 45%; left: 40%; width: clamp(620px, 90vw, 1413px); transform: rotate(-10deg); }
.decoration-03 { top: 67%; left: 33%; width: clamp(110px, 19vw, 220px); transform: rotate(13deg); }
.decoration-04 { top: -1%; left: 18%; width: clamp(100px, 18vw, 220px); transform: rotate(-10deg); }
.soft-area > .section-wrap { position: relative; z-index: 1; }

@media (max-width: 640px) {
  .decoration-01 { top: 0; left: -90%; width: 210vw; }
  .decoration-02 { top: 48%; left: -45%; width: 180vw; }
  .decoration-03 { top: 70%; left: 12%; width: 130px; }
  .decoration-04 { top: 2%; left: 52%; width: 115px; }
}

/* 永續流程輪播縮小，並沿用原網站淡入淡出與微位移切換。 */
@media (min-width: 901px) {
  .sustainability-flow {
    grid-template-columns: 235px minmax(0, 1fr);
    width: min(100%, 980px);
    gap: clamp(40px, 5vw, 70px);
    margin-right: auto;
    margin-left: auto;
  }
  .steps { gap: 62px; }
  .steps::before { left: 66px; }
  .steps button { grid-template-columns: 46px 20px minmax(0, 1fr); gap: 12px; font-size: 24px; }
  .steps button::after { width: 16px; height: 16px; }
  .sustainability-flow > img { height: 400px; }
}

.sustainability-fade-enter-active,
.sustainability-fade-leave-active { transition: opacity .35s ease, transform .35s ease; }
.sustainability-fade-enter-from,
.sustainability-fade-leave-to { opacity: 0; transform: translateY(16px); }

/* 手機版：時間軸連接線覆蓋整段可橫滑動內容。 */
@media (max-width: 1024px) {
  .timeline { min-width: max-content; width: max-content; }
  .timeline::before { right: auto; left: 0; width: 3380px; }
}

@media (max-width: 640px) {
  .timeline::before { width: 2770px; }
}

/* 手機版的筆記翻頁放在所有文章之後，並固定為文字箭頭色彩。 */
@media (max-width: 430px) {
  .notes { display: grid; grid-template-columns: minmax(0, 1fr); }
  .notes-top { display: contents; }
  .notes-top h2 { grid-column: 1; grid-row: 1; }
  .note-grid { grid-column: 1; grid-row: 2; }
  .notes-top .arrows { display: flex; grid-column: 1; grid-row: 3; justify-self: center; margin-top: 34px; }
  .arrows button { appearance: none; color: #1e1e1e; font-family: Arial, sans-serif; }
.arrows button:disabled { color: #bdbdbd; opacity: 1; }
}

@media (min-width: 769px) {
  .about-page { padding-top: 120px; }
}
</style>

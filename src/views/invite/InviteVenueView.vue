<script setup>
import { computed, ref } from "vue";
import headingIcon from "../../assets/images/invite/icon/icon-black.png";
import venueBackgroundGold from "../../assets/images/invite/venue-bg01.png";
import venueBackgroundBlue from "../../assets/images/invite/venue-bg02.png";

const seasons = [
  {
    months: "4-10",
    name: "夏季",
    places: [
      ["臺灣玻璃館", "8:00-18:00", "8:00-18:30"],
      ["玻璃媽祖廟", "8:00-20:00", "8:00-21:00"],
    ],
  },
  {
    months: "11-3",
    name: "冬季",
    places: [
      ["臺灣玻璃館", "8:00-17:30", "8:00-18:00"],
      ["玻璃媽祖廟", "8:00-19:00", "8:00-21:00"],
    ],
  },
];
const routes = [
  [
    "自行開車",
    "國道1號－彰化交流道下 ＞ 臺19線 ＞ 鄉道彰30 ＞ 鹿安橋 ＞ 工業東一路 ＞ 工業西三路 ＞ 鹿工南四路 ＞ 抵達台灣玻璃館。",
    "導航路線",
    "https://www.google.com/maps/search/?api=1&query=台灣玻璃館",
  ],
  [
    "高鐵",
    "搭乘台灣高鐵至台中站，轉搭台灣好行 6936A 鹿港祈福線，至台明將台灣玻璃館站下車。",
    "高鐵時刻表",
    "https://www.thsrc.com.tw/",
  ],
  [
    "臺鐵",
    "搭乘臺鐵至彰化站，轉搭台灣好行 6936A 鹿港祈福線，至台明將台灣玻璃館站下車。",
    "臺鐵時刻表",
    "https://www.railway.gov.tw/",
  ],
  [
    "客運",
    "彰化客運可於彰化車站轉乘；再搭台灣好行 6936A 鹿港祈福線，至台明將台灣玻璃館站下車。",
    "客運時刻表",
    "https://www.changhuabus.com.tw/",
  ],
];
const notices = [
  "古早味餐廳餐點每周二、三、四僅接受團體預約，請於參觀日三天前預約。",
  "水族區 DIY 體驗目前僅接受 20 人以上之預約團體；煉功屋假日吹製玻璃體驗開放現場報名，建議先行預約。",
  "本館皆為玻璃製品，參觀者請勿穿著不整或拖鞋等入館，以避免受傷。",
  "請遵循工作人員的接待及導引，保持安靜，注意安全。",
  "國中以下參訪團體，大人與小孩建議比例為 1:5。",
];
const bookingNotes = [
  "參訪人數如達20人以上之團體，請於3日前完成線上預約，入館以事先預約的團體優先進入。",
  "有同時段預約滿檔之情形，館方將主動通知後預約的團體調整時段。若時段上無法配合，本館提供以下方案：可郵寄台灣玻璃館DVD導覽光碟，供參訪團體在遊覽車上播放，到達玻璃館後自行參觀。",
  "線上預約完成24小時後，將有專人聯繫，若仍未接到確認電話，請主動與本館聯繫：(04)7811299 #266。",
  "行程或人數有異動時，請務必提前通知本館。",
  "為了保護訪客參訪安全及維護隧道玻璃，參觀黃金隧道一律穿著本館專用止滑拖鞋；止滑拖鞋供應方式可由黃金隧道櫃台購買。",
];
const activeRoute = ref(0);
const route = computed(() => routes[activeRoute.value]);
const bookingStep = ref(0);
const bookingPage = ref(0);
const submitted = ref(false);
const showGroupInfo = ref(false);
const groupTypes = [
  "媒體",
  "工商",
  "宗教",
  "教育事業",
  "政府機關",
  "民間團體",
  "一般民眾",
];
const groupDescriptions = {
  政府機關: "行政機關、公部門、民意機關、軍警單位",
  工商: "一般公司行號、工廠、營利事業單位、產業公會",
  民間團體: "職工福利、工會、協會、基金會、社團法人",
  教育事業: "學校（親師生）、研究機構、圖書館、補教單位",
  媒體: "報社、電視台、網路新聞、記者採訪團",
  宗教: "寺廟、教會、宗教法人及所屬研修團體",
  一般民眾: "社區住戶、家庭、親友組團、個人預約",
};
const form = ref({
  group: "",
  type: "",
  date: "",
  hour: "",
  minute: "",
  service: "",
  adults: "",
  children: "",
  name: "",
  phone: "",
  email: "",
});
const submitBooking = () => {
  submitted.value = true;
  bookingStep.value = 2;
};
</script>

<template>
  <main class="venue-page" :style="{ '--venue-gold': `url(${venueBackgroundGold})`, '--venue-blue': `url(${venueBackgroundBlue})` }">
    <section id="hours" class="venue-section hours">
      <div class="wrap">
        <h1><img :src="headingIcon" alt="" />開館時間</h1>
        <div class="hours-list">
          <article
            v-for="season in seasons"
            :key="season.name"
            class="hours-row"
          >
            <div class="season">
              <b>{{ season.months }}<small>月</small></b
              ><span>{{ season.name }}</span>
            </div>
            <div class="hours-card">
              <div v-for="place in season.places" :key="place[0]">
                <h2>{{ place[0] }}</h2>
                <p>平日：{{ place[1] }}</p>
                <p>假日：{{ place[2] }}</p>
              </div>
            </div>
          </article>
        </div>
        <p class="hours-note">*玻璃媽祖廟不分平假日，燈光皆延至 21:00 關閉。</p>
      </div>
    </section>
    <section id="transport" class="venue-section transport">
      <div class="wrap">
        <h2><img :src="headingIcon" alt="" />交通資訊</h2>
        <div class="transport-grid">
          <div class="transport-panel">
            <div class="tabs">
              <button
                v-for="([name], index) in routes"
                :key="name"
                :class="{ active: index === activeRoute }"
                @click="activeRoute = index"
              >
                {{ name }}
              </button>
            </div>
            <div class="route-copy">{{ route[1] }}</div>
            <a
              :href="route[3]"
              target="_blank"
              rel="noopener noreferrer"
              class="route-button"
              >{{ route[2] }} <span>&#8599;&#65038;</span></a
            >
          </div>
          <a
            class="map"
            href="https://www.google.com/maps/search/?api=1&query=台灣玻璃館"
            target="_blank"
            rel="noopener"
            ><iframe
              title="臺灣玻璃館 Google 地圖"
              src="https://www.google.com/maps?q=台灣玻璃館&output=embed"
              loading="lazy"
          /></a>
        </div>
      </div>
    </section>
    <section id="notice" class="venue-section">
      <div class="wrap">
        <h2><img :src="headingIcon" alt="" />參觀須知</h2>
        <ol class="notice-list">
          <li v-for="notice in notices" :key="notice">
            <span>{{ notice }}</span>
          </li>
        </ol>
      </div>
    </section>
    <section id="booking" class="venue-section booking">
      <div class="wrap">
        <h2><img :src="headingIcon" alt="" />預約參觀</h2>
        <div class="booking-panel">
          <div class="booking-steps">
            <span
              v-for="(label, index) in ['確認注意事項', '填寫資料', '完成預約']"
              :key="label"
              :class="{ active: index <= bookingStep }"
              ><b>0{{ index + 1 }}</b
              >{{ label }}</span
            >
          </div>
          <div v-if="bookingStep === 0" class="booking-content">
            <ul>
              <li v-for="n in bookingNotes" :key="n">{{ n }}</li>
            </ul>
            <button
              @click="
                bookingStep = 1;
                bookingPage = 0;
                submitted = false;
              "
            >
              確認，開始預約 →
            </button>
          </div>
          <form
            v-else-if="bookingStep === 1 && bookingPage === 0"
            class="booking-basic-form"
            @submit.prevent="bookingPage = 1"
          >
            <div class="booking-form-head"><h3>(一) 預約基本資料</h3><b><em>*</em>為必填項目</b></div>
            <label class="booking-row"><span>團體名稱 <em>*</em></span><input v-model="form.group" required /></label>
            <label class="booking-row booking-type"><span>團體屬性 <em>*</em></span><div class="select-with-help"><select v-model="form.type" required><option value="" disabled>請選擇團體屬性</option><option v-for="type in groupTypes" :key="type" :value="type">{{ type }}</option></select><button class="type-help" type="button" aria-label="查看團體屬性說明" @click="showGroupInfo = true">!</button></div></label>
            <label class="booking-row"><span>抵達日期 <em>*</em></span><input v-model="form.date" type="date" required @click="$event.target.showPicker?.()" /></label>
            <label class="booking-row"><span>抵達時間 <em>*</em></span><div class="arrival-fields"><select v-model="form.hour" required><option value="" disabled>時</option><option v-for="hour in 24" :key="hour" :value="String(hour - 1).padStart(2, '0')">{{ String(hour - 1).padStart(2, '0') }} 時</option></select><select v-model="form.minute" required><option value="" disabled>分</option><option v-for="minute in 12" :key="minute" :value="String((minute - 1) * 5).padStart(2, '0')">{{ String((minute - 1) * 5).padStart(2, '0') }} 分</option></select></div></label>
            <label class="booking-row"><span>解說服務 <em>*</em></span><select v-model="form.service" required><option value="" disabled>請選擇</option><option>需要</option><option>不需要</option></select></label>
            <label class="booking-row"><span>成人人數 <em>*</em></span><select v-model="form.adults" required><option value="" disabled>請選擇</option><option v-for="count in 100" :key="count" :value="count">{{ count }} 人</option></select></label>
            <label class="booking-row"><span>孩童人數 <em>*</em></span><select v-model="form.children" required><option value="" disabled>請選擇</option><option v-for="count in 100" :key="count" :value="count - 1">{{ count - 1 }} 人</option></select></label>
            <div class="form-actions"><button type="button" @click="bookingStep = 0; bookingPage = 0">← 上一頁</button><button>填寫資料 1/3 →</button></div>
          </form>
          <form
            v-else-if="bookingStep === 1 && bookingPage === 1"
            class="booking-contact-form booking-basic-form"
            @submit.prevent="bookingPage = 2"
          >
            <div class="booking-form-head"><h3>(二) 聯絡人與領隊資料</h3><b><em>*</em>為必填項目</b></div>
            <label>聯絡人<em>*</em><input v-model="form.name" required /></label
            ><label>手機<em>*</em><input v-model="form.phone" required /></label
            ><label>電話<input /></label><label>傳真<input /></label
            ><label
              >電子信箱<em>*</em><input
                v-model="form.email"
                type="email"
                required /></label
            ><label>領隊<input /></label><label>領隊手機<input /></label>
            <div class="form-actions">
              <button type="button" @click="bookingPage = 0">← 上一頁</button>
              <button>填寫資料 2/3 →</button>
            </div>
          </form>
          <form
            v-else-if="bookingStep === 1 && bookingPage === 2"
            class="booking-travel-form booking-basic-form"
            @submit.prevent="submitBooking"
          >
            <div class="booking-form-head"><h3>(三) 交通與行程資料</h3><b><em>*</em>為必填項目</b></div>
            <label
              >從何得知<em>*</em><select required>
                <option>網路</option>
                <option>親友介紹</option>
                <option>旅行社</option>
                <option>其他</option>
              </select></label
            ><label
              >課程預約<em>*</em><select required>
                <option value="" disabled selected>請選擇課程</option>
                <option>黃金隧道</option>
                <option>馬賽克杯墊</option>
                <option>彩繪玻璃馬克杯</option>
                <option>彩繪玻璃風鈴</option>
              </select></label
            ><label>預約份數<em>*</em><input type="number" min="1" required /></label
            ><label>備註資訊<input /></label>
            <div class="form-actions"><button type="button" @click="bookingPage = 1">← 上一頁</button><button>預約完成 →</button></div>
          </form>
          <div v-else class="complete">
            <div class="complete-card">
              <button class="complete-close" type="button" aria-label="關閉完成訊息" @click="bookingStep = 0; bookingPage = 0; submitted = false">×</button>
              <div class="complete-check" aria-hidden="true"></div>
              <h3>填寫完成!</h3>
              <hr />
              <p>完成後24小時內將有專人聯繫；如未接獲確認電話，請洽 (04) 7811299 分機 266。</p>
            </div>
          </div>
          <div v-if="showGroupInfo" class="group-info-modal" @click.self="showGroupInfo = false">
            <div class="group-info-dialog" role="dialog" aria-modal="true" aria-label="團體屬性說明">
              <button class="modal-close" type="button" aria-label="關閉" @click="showGroupInfo = false">×</button>
              <div v-for="type in groupTypes" :key="type" class="group-info-row"><b>{{ type }}</b><span>{{ groupDescriptions[type] }}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.venue-page {
  background: #fff;
  color: #1e1e1e;
}
.wrap {
  width: min(calc(100% - 128px), 1200px);
  margin: auto;
}
.venue-section {
  padding: 110px 0;
}
.venue-section h1,
.venue-section h2 {
  margin: 0 0 58px;
  font-size: clamp(1.3rem, 2vw, 2rem);
  font-weight: 800;
}
.venue-section h1 img,
.venue-section h2 img {
  width: 34px;
  height: 28px;
  margin-right: 14px;
  vertical-align: middle;
}
.hours-list {
  display: grid;
  gap: 34px;
  max-width: 1040px;
  margin: auto;
}
.hours-row {
  display: grid;
  grid-template-columns: 190px 1fr;
  gap: 36px;
  align-items: center;
}
.season {
  text-align: center;
}
.season b {
  display: block;
  font-size: 46px;
  line-height: 1;
}
.season b small {
  font-size: 24px;
}
.season span {
  font-size: 25px;
  font-weight: 800;
}
.hours-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 42px;
  padding: 32px 44px;
  border-radius: 28px;
  background: #e7f4f6;
}
.hours-card h2 {
  margin: 0 0 18px;
  padding-bottom: 10px;
  border-bottom: 2px solid;
  font-size: 23px;
}
.hours-card p {
  margin: 6px 0;
  font-size: 18px;
}
.hours-note {
  text-align: right;
}
.transport {
  background: #fff;
}
.transport-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 70px;
}
.tabs {
  display: flex;
  gap: 6px;
}
.tabs button {
  border: 0;
  border-radius: 22px 22px 0 0;
  padding: 12px 20px;
  background: transparent;
  font: inherit;
  cursor: pointer;
}
.tabs button.active {
  background: #e7f4f6;
}
.route-panel {
  position: relative;
}
.route-copy {
  min-height: 310px;
  padding: 30px 30px 76px;
  border-radius: 0 26px 26px;
  background: #e7f4f6;
  font-size: 18px;
  line-height: 1.9;
}
.route-link {
  position: absolute;
  right: 20px;
  bottom: 28px;
  padding-bottom: 5px;
  border-bottom: 2px solid;
  color: inherit;
  font-size: 22px;
  font-weight: 800;
  text-decoration: none;
}
.map,
.map iframe {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 310px;
  border: 0;
  border-radius: 26px;
}
.notice-list {
  display: grid;
  gap: 0;
  max-width: 1000px;
  margin: auto;
  padding: 0;
  list-style: none;
  counter-reset: notice;
}
.notice-list li {
  display: grid;
  grid-template-columns: 65px 1fr;
  gap: 20px;
  padding: 24px 0;
  border-bottom: 1px solid #1e1e1e55;
  font-size: 18px;
  line-height: 1.8;
  counter-increment: notice;
}
.notice-list li::before {
  color: #d5b53f;
  content: "0" counter(notice);
  font-size: 28px;
  font-weight: 900;
}
.booking {
  background: transparent;
}
.booking-panel {
  padding: 48px;
  border-radius: 34px;
  background: #e7f4f6;
}
.booking-steps {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 44px;
}
.booking-steps span {
  display: grid;
  gap: 8px;
  color: #aaa;
  text-align: center;
  font-weight: 700;
}
.booking-steps b {
  display: grid;
  width: 44px;
  height: 44px;
  margin: auto;
  place-items: center;
  border-radius: 50%;
  background: #d4d1cf;
}
.booking-steps .active {
  color: #5e9499;
}
.booking-steps .active b {
  background: #5e9499;
  color: #fff;
}
.booking-content ul {
  padding-left: 1.3em;
  line-height: 1.9;
}
.booking-content button,
.booking-panel form button,
.complete button {
  display: block;
  margin: 34px 0 0 auto;
  padding: 14px 24px;
  border: 0;
  background: #1e1e1e;
  color: #fff;
  font: inherit;
  font-weight: 800;
  cursor: pointer;
}
.booking-panel form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.booking-panel label {
  display: grid;
  gap: 8px;
  font-weight: 700;
}
.booking-panel input,
.booking-panel select {
  padding: 13px;
  border: 1px solid #9ab6b9;
  background: #fff;
  font: inherit;
}
.complete {
  text-align: center;
}
.complete h3 {
  font-size: 28px;
}
.complete button {
  margin-inline: auto;
}
@media (max-width: 768px) {
  .wrap {
    width: calc(100% - 32px);
  }
  .venue-section {
    padding: 70px 0;
  }
  .venue-section h1,
  .venue-section h2 {
    margin-bottom: 36px;
  }
  .hours-row,
  .transport-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .hours-card {
    grid-template-columns: 1fr;
    gap: 28px;
    padding: 26px;
  }
  .hours-note {
    text-align: left;
  }
  .route-copy {
    min-height: 240px;
  }
  .map,
  .map iframe {
    min-height: 300px;
  }
  .booking-panel {
    padding: 28px 20px;
  }
  .booking-panel form {
    grid-template-columns: 1fr;
  }
  .booking-steps {
    font-size: 13px;
  }
  .booking-steps b {
    width: 36px;
    height: 36px;
  }
  .tabs {
    flex-wrap: wrap;
  }
  .tabs button {
    padding: 10px 14px;
  }
}
.hours-note {
  width: calc(100% - 226px);
  margin-top: 18px;
  margin-right: max(0px, calc((100% - 1040px) / 2));
  margin-left: auto;
  text-align: right;
}
.route-copy::after {
  position: absolute;
  z-index: 1;
  right: -1px;
  bottom: -1px;
  width: 230px;
  height: 73px;
  border-radius: 28px 0 0;
  background: #fff;
  content: "";
}
.route-link {
  z-index: 2;
}
.notice-list li > span {
  display: block;
  padding-top: 12px;
}
.transport .transport-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 80px;
}
.transport .transport-panel {
  position: relative;
  min-height: 440px;
}
.transport .tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.transport .tabs button {
  padding: 14px 26px;
  border: 0;
  border-radius: 25px 25px 0 0;
  background: transparent;
  color: #1e1e1e;
  font: inherit;
  font-size: clamp(1rem, 1.3vw, 1.35rem);
  font-weight: 500;
}
.transport .tabs button.active {
  background: #e7f4f6;
}
.transport .route-copy {
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
.transport .route-copy::after {
  position: absolute;
  right: -1px;
  bottom: -1px;
  width: 230px;
  height: 73px;
  border-radius: 28px 0 0;
  background: #fff;
  content: "";
}
.transport .route-button {
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
.transport .map {
  min-height: 440px;
  border-radius: 28px;
  box-shadow: 0 18px 45px rgb(36 99 105 / 8%);
}
.transport .map iframe {
  width: 100%;
  min-height: 440px;
  height: 440px;
}
@media (max-width: 768px) {
  .hours-note {
    width: auto;
    margin: 18px 0 0;
    text-align: left;
  }
  .transport .transport-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .transport .transport-panel {
    min-height: 370px;
  }
  .transport .tabs {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0;
    flex-wrap: nowrap;
  }
  .transport .tabs button {
    min-width: 0;
    padding: 14px 0;
    font-size: 1.1rem;
    white-space: nowrap;
  }
  .transport .route-copy {
    min-height: 290px;
    padding: 24px 22px 70px;
  }
  .transport .route-copy::after {
    width: 180px;
    height: 58px;
  }
  .transport .route-button {
    right: 14px;
    bottom: 28px;
    font-size: 1.25rem;
  }
  .transport .map,
  .transport .map iframe {
    min-height: 300px;
    height: 300px;
  }
}
.booking-panel {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  min-height: 760px;
  padding: 165px 48px 86px;
  border-radius: 0;
  background: #e7f4f6;
  clip-path: polygon(0 10%, 43% 16%, 89% 0, 100% 14%, 100% 100%, 0 100%);
}
.booking-steps {
  position: relative;
  justify-content: center;
  gap: clamp(90px, 14vw, 230px);
  margin: 0 0 82px;
}
.booking-steps::before {
  position: absolute;
  top: 32px;
  right: 23%;
  left: 23%;
  height: 2px;
  background: #b6dfe3;
  content: "";
}
.booking-steps span {
  position: relative;
  z-index: 1;
  color: #91cbd2;
  font-size: 22px;
}
.booking-steps b {
  width: 74px;
  height: 74px;
  margin-bottom: 11px;
  border-radius: 0;
  background: #9bd6dc;
  clip-path: polygon(
    50% 0,
    97.55% 34.55%,
    79.39% 90.45%,
    20.61% 90.45%,
    2.45% 34.55%
  );
  font-size: 24px;
  font-weight: 500;
}
.booking-steps span:first-child b {
  background: #679399;
}
.booking-steps span:first-child {
  color: #679399;
}
.booking-content {
  max-width: 1000px;
  margin: auto;
  text-align: center;
}
.booking-content ul {
  display: inline-block;
  padding-left: 1.25em;
  text-align: left;
  list-style-position: outside;
  font-size: 18px;
  line-height: 2;
  transform: translateX(38px);
}
.booking-content li + li {
  margin-top: 22px;
}
.booking-content button {
  color: #1e1e1e;
  background: transparent;
  border-bottom: 3px solid #1e1e1e;
  font-size: 24px;
}
.booking-content button:hover {
  opacity: 0.7;
}
@media (max-width: 768px) {
  .booking-steps {
    gap: 10vw;
    margin-bottom: 58px;
  }
  .booking-steps span {
    font-size: 15px;
  }
  .booking-steps b {
    width: 58px;
    height: 58px;
    margin-bottom: 8px;
    font-size: 18px;
  }
  .booking-steps::before {
    top: 26px;
    right: 18%;
    left: 18%;
  }
  .booking-content ul {
    font-size: 16px;
    transform: translateX(14px);
  }
  .booking-content button {
    font-size: 18px;
  }
}
.booking-panel form h3 {
  grid-column: 1/-1;
  margin: 0;
  font-size: 1.4rem;
}
.booking-panel form button {
  justify-self: end;
}
.booking-panel form button[type="button"] {
  justify-self: start;
  color: #1e1e1e;
  background: transparent;
  border: 1px solid #1e1e1e;
}
@media (max-width: 768px) {
  .booking-panel form button,
  .booking-panel form button[type="button"] {
    justify-self: stretch;
    margin-top: 4px;
    text-align: center;
  }
}
.booking-basic-form{display:block!important}.booking-form-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:36px}.booking-form-head h3{margin:0;font-size:1.65rem;color:#75bfc8}.booking-form-head b{font-size:1rem}.booking-row{display:grid!important;grid-template-columns:170px minmax(0,1fr);align-items:center;gap:22px;margin:22px 0;font-size:1.15rem}.booking-row>span,.booking-type legend{font-weight:800}.booking-row em,.booking-type em{color:#c6a938;font-style:normal}.booking-row input:not([type="radio"]),.arrival-fields input{box-sizing:border-box;width:100%;border:0;border-radius:999px;padding:15px 22px;background:#fff;font:inherit;cursor:pointer}.booking-type{position:relative;border:0;padding:0}.booking-type legend{padding:0}.type-options{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;padding:22px 34px;border-radius:28px;background:#fff}.type-options label,.pill-options label{cursor:pointer}.type-options input,.pill-options input{position:absolute;opacity:0;pointer-events:none}.type-options span{display:block;text-align:center;font-weight:800}.type-options input:checked+span,.pill-options input:checked+span{color:#75bfc8}.type-help{position:absolute;right:-50px;top:50%;display:grid!important;width:32px;height:32px;margin:0!important;padding:0!important;place-items:center;border:2px solid #dfca67!important;border-radius:50%!important;background:transparent!important;color:#dfca67!important;font-size:20px!important;line-height:1!important;transform:translateY(-50%)}.arrival-fields{display:grid;grid-template-columns:1.3fr 1fr;gap:16px}.service-row{grid-template-columns:170px auto 130px 110px 110px}.pill-options{display:flex;width:max-content;padding:7px;border-radius:999px;background:#fff}.pill-options span{display:block;padding:8px 22px;border-radius:999px;font-weight:800}.pill-options input:checked+span{background:#96d0d7;color:#fff}.visitor-title{font-weight:800}.visitor-count{display:flex!important;align-items:center;gap:10px;font-weight:800}.visitor-count input{width:74px!important;padding:11px!important}.form-actions{display:flex;justify-content:center;gap:72px;margin-top:56px}.form-actions button{margin:0!important;padding:0 0 8px!important;border:0!important;border-bottom:3px solid #1e1e1e!important;background:transparent!important;color:#1e1e1e!important;font-size:1.55rem!important}.group-info-modal{position:fixed;z-index:20;inset:0;display:grid;place-items:center;padding:24px;background:rgb(20 30 30 / 48%)}.group-info-dialog{position:relative;width:min(900px,100%);padding:52px 70px;border-radius:40px;background:#fff}.group-info-row{display:grid;grid-template-columns:180px 1fr;gap:26px;padding:10px 0;font-size:1.18rem}.group-info-row b{color:#75bfc8}.modal-close{position:absolute;top:24px;right:28px;width:48px;height:48px;border:0;border-radius:50%;background:#dfca67;color:#fff;font-size:36px;line-height:1;cursor:pointer}@media(max-width:768px){.booking-form-head{align-items:flex-start;gap:12px;flex-direction:column}.booking-row{grid-template-columns:1fr;gap:10px}.type-options{grid-template-columns:repeat(2,1fr);padding:18px}.type-help{right:8px;top:auto;bottom:-42px;transform:none}.arrival-fields{grid-template-columns:1fr}.service-row{display:flex!important;flex-wrap:wrap;gap:14px}.visitor-title{margin-left:0;width:100%}.form-actions{gap:28px;margin-top:48px}.form-actions button{font-size:1.1rem!important}.group-info-dialog{padding:56px 28px 30px}.group-info-row{grid-template-columns:105px 1fr;gap:16px;font-size:.95rem}}
/* 第一頁維持本站原有表單視覺；以下只處理新增欄位的排版與互動。 */
form.booking-basic-form{display:grid!important;grid-template-columns:repeat(2,1fr);gap:20px}.booking-basic-form .booking-form-head{grid-column:1/-1;display:flex;justify-content:space-between;align-items:center;margin:0}.booking-basic-form .booking-form-head h3{margin:0;color:inherit;font-size:1.4rem}.booking-basic-form .booking-form-head b{font-size:1rem}.booking-basic-form .booking-row{display:grid!important;grid-template-columns:1fr;gap:8px;margin:0;font-size:inherit}.booking-basic-form .booking-row>span,.booking-basic-form .booking-type legend{font-weight:700}.booking-basic-form .booking-row em,.booking-basic-form .booking-type em{color:inherit}.booking-basic-form .booking-type{grid-column:1/-1;border:0;padding:0}.booking-basic-form .booking-type legend{padding:0}.booking-basic-form .type-options{grid-template-columns:repeat(4,1fr);padding:0;border-radius:0;background:transparent}.booking-basic-form .type-options label,.booking-basic-form .pill-options label{display:flex;align-items:center;gap:7px;cursor:pointer}.booking-basic-form .type-options input,.booking-basic-form .pill-options input{position:static;opacity:1;pointer-events:auto}.booking-basic-form .type-options span,.booking-basic-form .pill-options span{display:inline;padding:0;border-radius:0;background:transparent;color:inherit}.booking-basic-form .type-options input:checked+span,.booking-basic-form .pill-options input:checked+span{color:inherit}.booking-basic-form .type-help{position:static;display:inline-block!important;width:auto;height:auto;margin:0!important;padding:4px 10px!important;border:1px solid #9ab6b9!important;border-radius:4px!important;background:#fff!important;color:#1e1e1e!important;font-size:inherit!important;transform:none}.booking-basic-form .arrival-fields{grid-template-columns:1fr 1fr;gap:12px}.booking-basic-form .booking-row input:not([type="radio"]),.booking-basic-form .arrival-fields input{box-sizing:border-box;border:1px solid #9ab6b9;border-radius:0;padding:13px;background:#fff;font:inherit;cursor:pointer}.booking-basic-form .service-row{grid-column:1/-1;display:grid!important;grid-template-columns:auto auto auto 1fr 1fr;align-items:center;gap:16px}.booking-basic-form .pill-options{display:flex;width:auto;padding:0;border-radius:0;background:transparent}.booking-basic-form .visitor-title{font-weight:700}.booking-basic-form .visitor-count{display:flex!important;align-items:center;gap:8px;font-weight:700}.booking-basic-form .visitor-count input{width:72px!important;padding:10px!important}.booking-basic-form .form-actions{grid-column:1/-1;display:flex;justify-content:flex-end;gap:20px;margin-top:14px}.booking-basic-form .form-actions button{margin:0!important;padding:14px 24px!important;border:0!important;background:#1e1e1e!important;color:#fff!important;font-size:inherit!important}.booking-basic-form .form-actions button[type="button"]{background:transparent!important;color:#1e1e1e!important;border:1px solid #1e1e1e!important}.group-info-dialog{border-radius:20px}.group-info-row b{color:#1e1e1e}.modal-close{background:#1e1e1e}@media(max-width:768px){form.booking-basic-form{grid-template-columns:1fr}.booking-basic-form .booking-type,.booking-basic-form .service-row,.booking-basic-form .form-actions{grid-column:auto}.booking-basic-form .type-options{grid-template-columns:repeat(2,1fr)}.booking-basic-form .service-row{grid-template-columns:1fr 1fr}.booking-basic-form .visitor-title{grid-column:1/-1}.booking-basic-form .arrival-fields{grid-template-columns:1fr}.booking-basic-form .form-actions{justify-content:stretch}.booking-basic-form .form-actions button{flex:1}}
.booking-basic-form .booking-type{grid-column:auto}.booking-basic-form .select-with-help{display:flex;gap:8px}.booking-basic-form .select-with-help select{min-width:0;flex:1}.booking-basic-form select{width:100%;min-height:48px;background:#fff;font:inherit}.booking-basic-form .arrival-fields select{min-width:0}.booking-basic-form .booking-form-head h3{color:#75bfc8}.booking-basic-form .booking-row em,.booking-basic-form .booking-form-head em{color:#d5b53f}.modal-close{background:#d5b53f!important}.booking-basic-form .form-actions button{border-radius:999px!important}.booking-basic-form .form-actions button[type="button"]{border-color:#75bfc8!important}.booking-basic-form .form-actions button:not([type="button"]){background:#75bfc8!important;color:#fff!important}@media(max-width:768px){.booking-basic-form .booking-type{grid-column:auto}}
.booking-panel>.booking-steps{width:min(calc(100% - 96px),1200px);margin-right:auto;margin-left:auto}.booking-panel>form{width:min(calc(100% - 96px),1200px);margin-right:auto;margin-left:auto}@media(max-width:768px){.booking-panel{min-height:0;padding:112px 20px 58px;clip-path:polygon(0 7%,42% 12%,88% 0,100% 10%,100% 100%,0 100%)}.booking-panel>.booking-steps,.booking-panel>form{width:100%}}
.venue-section.booking{padding-bottom:0}:global(body:has(.venue-page) .site-footer){border-top-width:0}
@media(max-width:768px){.booking-panel{clip-path:polygon(0 3%,43% 5%,88% 0,100% 4%,100% 100%,0 100%)}.booking-steps::before{right:auto;left:50%;width:calc(150px + 20vw);transform:translateX(-50%)}}
.booking-contact-form h3{color:#75bfc8}.booking-contact-form .form-actions{grid-column:1/-1;display:flex;justify-content:flex-end;gap:20px;margin-top:14px}.booking-contact-form .form-actions button{margin:0!important;padding:14px 24px!important;border:0!important;border-radius:999px!important;background:#75bfc8!important;color:#fff!important;font:inherit}.booking-contact-form .form-actions button[type="button"]{border:1px solid #75bfc8!important;background:transparent!important;color:#1e1e1e!important}@media(max-width:768px){.booking-contact-form .form-actions{justify-content:stretch}.booking-contact-form .form-actions button{flex:1}}
.booking-contact-form>label{display:block}.booking-contact-form>label input{display:block;width:100%;box-sizing:border-box;margin-top:8px}.booking-contact-form>label em,.booking-contact-form .booking-form-head em{color:#d5b53f;font-style:normal}.booking-contact-form .form-actions button{font-weight:800!important}
.booking-travel-form>label{display:block}.booking-travel-form>label input,.booking-travel-form>label select{display:block;box-sizing:border-box;width:100%;margin-top:8px}.booking-travel-form>label em,.booking-travel-form .booking-form-head em{color:#d5b53f;font-style:normal}.booking-travel-form h3{color:#75bfc8}.booking-travel-form .form-actions{grid-column:1/-1;display:flex;justify-content:flex-end;gap:20px;margin-top:14px}.booking-travel-form .form-actions button{margin:0!important;padding:14px 24px!important;border:0!important;border-radius:999px!important;background:#75bfc8!important;color:#fff!important;font:inherit;font-weight:800!important}.booking-travel-form .form-actions button[type="button"]{border:1px solid #75bfc8!important;background:transparent!important;color:#1e1e1e!important}@media(max-width:768px){.booking-travel-form .form-actions{justify-content:stretch}.booking-travel-form .form-actions button{flex:1}}
.complete{display:grid;min-height:520px;place-items:center;text-align:left}.complete-card{position:relative;width:min(780px,100%);box-sizing:border-box;padding:72px 72px 68px;border:1px solid #c9d8d9;border-radius:42px;background:#fff;box-shadow:0 18px 34px rgb(56 103 108 / 14%)}.complete-check{display:grid;width:120px;height:120px;margin:0 auto 28px;place-items:center;border-radius:50%;background:#94cdd5;color:#fff;font-size:82px;font-weight:300;line-height:1}.complete-card h3{margin:0;text-align:center;font-size:2.35rem}.complete-card hr{margin:26px auto 42px;border:0;border-top:3px solid #1e1e1e}.complete-card p{margin:0;font-size:1.35rem;font-weight:700;line-height:1.8}.complete-close{position:absolute;top:32px;right:34px;display:grid!important;width:58px;height:58px;margin:0!important;padding:0!important;place-items:center;border:0!important;border-radius:50%!important;background:#d5c65d!important;color:#fff!important;font-size:44px!important;font-weight:300!important;line-height:1;cursor:pointer}@media(max-width:768px){.complete{min-height:420px}.complete-card{padding:66px 28px 38px;border-radius:28px}.complete-check{width:90px;height:90px;margin-bottom:20px;font-size:60px}.complete-card h3{font-size:1.9rem}.complete-card hr{margin:22px 0 30px}.complete-card p{font-size:1.05rem}.complete-close{top:18px;right:18px;width:44px;height:44px;font-size:32px!important}}
.complete{min-height:440px}.complete-card{width:min(620px,100%);padding:52px 58px 50px;border-radius:32px}.complete-check{position:relative;width:96px;height:96px;margin-bottom:22px;font-size:0}.complete-check::after{position:absolute;top:29px;left:25px;width:43px;height:22px;border-bottom:7px solid #fff;border-left:7px solid #fff;content:"";transform:rotate(-45deg)}.complete-card h3{font-size:2rem}.complete-card hr{margin:22px auto 30px}.complete-card p{font-size:1.15rem}.complete-close{top:24px;right:26px;width:50px;height:50px;font-size:38px!important}@media(max-width:768px){.complete{min-height:360px}.complete-card{padding:54px 28px 34px}.complete-check{width:78px;height:78px}.complete-check::after{top:23px;left:20px;width:34px;height:18px;border-width:0 0 6px 6px}.complete-card p{font-size:1rem}}
.venue-page{position:relative;isolation:isolate;overflow:hidden}.venue-page::before{position:absolute;z-index:0;top:-250px;right:-330px;width:min(76vw,1120px);aspect-ratio:1353/1264;background:var(--venue-gold) center/contain no-repeat;content:"";pointer-events:none}.venue-page>.venue-section{position:relative;z-index:1}.transport::before{position:absolute;z-index:0;top:900px;left:-620px;width:min(78vw,1050px);aspect-ratio:1099/933;background:var(--venue-blue) center/contain no-repeat;content:"";pointer-events:none}.transport .wrap{position:relative;z-index:1}@media(max-width:768px){.venue-page::before{top:-160px;right:-55vw;width:125vw}.transport::before{top:720px;left:-70vw;width:130vw}}
</style>

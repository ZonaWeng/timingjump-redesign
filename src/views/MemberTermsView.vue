<script setup>
import { useRouter } from "vue-router"

const router = useRouter()

const sections = [
  ["一、個人資料", "為確保會員服務正常運作，您同意本公司依服務所需蒐集、處理及使用您所提供的基本資料。相關資料僅作為會員識別、商品交易、活動通知、客服聯繫與服務改善之用，並依個人資料保護相關法令妥善保存及管理。"],
  ["二、交易注意事項", "本公司得依營運需要調整商品、價格、活動內容與配送方式。您完成訂單送出後，仍應以本公司確認之訂單資訊為準；若因庫存不足、付款失敗、系統異常或其他不可歸責於本公司之事由致無法完成交易，本公司將儘速通知您。"],
  ["三、服務中止", "本公司得因系統維護、設備故障、不可抗力或其他必要情況，暫時停止或中斷全部或部分會員服務。若會員有違反法令、服務條款、侵害他人權益或其他不當使用情形，本公司得限制、暫停或終止其會員資格。"],
  ["四、免責聲明", "本服務所提供之商品、資訊及連結內容，均以提供當時之狀態為準。本公司將盡力維持服務正確性與安全性，但不保證服務完全不會中斷、延遲或發生錯誤；因使用本服務所生之直接或間接損失，應依相關法令及個別情況處理。"],
  ["五、智慧財產權", "本網站所使用之文字、圖像、商標、設計、程式及其他內容，均受著作權、商標權及其他智慧財產權保護。未經本公司或權利人事前書面同意，不得以重製、改作、散布、公開傳輸或其他方式使用。"],
  ["六、責任限制", "在法令允許的最大範圍內，本公司對因使用或無法使用本服務所造成之損害，不負超過您就該筆交易所實際支付金額之賠償責任。本條款不影響消費者依法律所享有之權利。"],
  ["七、一般性賠償", "若因您違反本條款、法令或侵害第三人權益，致本公司遭受任何請求、訴訟、損失、責任或費用，您應負賠償責任，並協助本公司處理相關爭議。"],
  ["八、管轄法律", "本條款之解釋與適用以中華民國法律為準據法。如因本服務所生爭議，雙方應本於誠信原則協商；若協商不成，以臺灣彰化地方法院為第一審管轄法院。"],
  ["九、免責聲明更新", "本公司得隨時修訂本服務條款，修訂後內容將公布於網站。您於條款更新後繼續使用本服務，即視為已閱讀、瞭解並同意接受修訂後之內容。"],
]
</script>

<template>
  <main class="terms-page">
    <article class="terms-card">
      <button class="back-button" type="button" @click="router.back()"><span aria-hidden="true">&#8249;&#65038;</span>返回上一頁</button>
      <h1>會員服務條款</h1>
      <p class="opening">台灣玻璃館（以下簡稱「本公司」）所經營的購物網站，並依本網站各項服務條款及其他相關規範提供會員服務。為保障您的權益，請於使用本服務前詳閱本條款；您開始使用本服務，即表示已閱讀、瞭解並同意接受本條款所有內容。</p>
      <section v-for="([title, content]) in sections" :key="title" class="terms-section">
        <h2>{{ title }}</h2>
        <p>{{ content }}</p>
      </section>
    </article>
  </main>
</template>

<style scoped>
.terms-page { min-height: 100vh; padding: 150px 24px 96px; background: #fff; color: #202020; }
.terms-card { width: min(100%, 820px); margin: 0 auto; }
.back-button { display: inline-flex; align-items: center; gap: 5px; border: 0; padding: 0; color: #202020; background: transparent; font: inherit; font-size: 15px; cursor: pointer; }
.back-button:hover { color: #4e858b; }
.back-button span { font-family: Arial, sans-serif; font-size: 1.2em; font-weight: 400; line-height: .8; }
h1 { margin: 16px 0 26px; padding-bottom: 12px; border-bottom: 2px solid #202020; font-size: 28px; font-weight: 800; }
.opening, .terms-section p { margin: 0; font-size: 15px; line-height: 1.9; text-align: justify; }
.terms-section { padding: 23px 0 19px; border-bottom: 1px solid #69c3cc; }
.terms-section h2 { margin: 0 0 12px; color: #52b5bf; font-size: 21px; font-weight: 800; }
@media (max-width: 640px) { .terms-page { padding: 104px 18px 56px; } .terms-card { width: 100%; } .back-button { font-size: 14px; } h1 { margin-top: 14px; font-size: 23px; } .opening, .terms-section p { font-size: 14px; line-height: 1.85; } .terms-section { padding-block: 18px; } .terms-section h2 { font-size: 18px; } }
</style>

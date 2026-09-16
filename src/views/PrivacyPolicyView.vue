<script setup>
import { useRouter } from "vue-router"
const router = useRouter()
const sections = [
  ["一、隱私權保護政策的適用範圍", ["本隱私權保護政策說明本網站於您使用服務時所蒐集的個人識別資料、資料處理與利用方式。本政策不適用於本網站以外的連結網站，也不適用於非本公司所僱用或管理的人員。"]],
  ["二、個人資料蒐集與處理", ["您在註冊帳號、瀏覽網頁、參加活動、購買商品或使用客服服務時，本公司可能蒐集姓名、聯絡方式、電子郵件、地址、交易及服務使用紀錄等必要資料。蒐集資料之目的在於提供會員服務、完成交易、客戶管理、行銷通知、統計分析及改善網站服務品質。", "個人資料之處理及利用均遵守個人資料保護法及相關法令。本公司將採取合理安全措施保護您的資料，並於蒐集目的存續期間、法令所定保存期限或取得您同意之期間內保存。"]],
  ["三、個人資料利用", ["本公司蒐集您的個人資料，只供本公司內部使用，並用於會員管理、客戶服務、訂單與配送、付款確認、活動通知、行銷推廣、系統維護及法令遵循等服務目的。除依法令規定或經您同意外，本公司不會任意出售、交換或出租您的個人資料。"]],
  ["四、網站對外的相關連結", ["本網站可能提供其他網站的連結。當您連結至其他網站時，該網站之隱私權保護政策與本公司無關；建議您於提供個人資料前，詳閱該網站的隱私權政策。"]],
  ["五、與第三人共用個人資料之政策", ["本公司絕不會任意提供、交換、出租或出售任何您的個人資料給其他個人、團體或私人企業。但有下列情形者不在此限：經您書面同意、法律明文規定、為維護國家安全或增進公共利益、為免除您生命身體自由或財產上之危險，或為防止對您權益之重大危害。"]],
  ["六、Cookie之使用", ["為提供更佳服務，本網站會在您的電腦或行動裝置中寫入 Cookie。若您不願接受 Cookie，可於瀏覽器設定調整隱私權等級；惟部分網站功能可能因此無法正常執行。"]],
  ["七、客戶資料權利行使", ["依個人資料保護法，您得就您的個人資料行使查詢、閱覽、複製、補充、更正、停止蒐集、處理、利用或刪除之權利。若欲提出申請，請透過客服聯絡方式與本公司聯繫；本公司將於法令規定期間內處理並回覆。"]],
  ["八、隱私權保護政策之修正", ["本網站隱私權保護政策將因應需求隨時修正，修正後的條款將刊登於網站上。若有任何操作問題，歡迎透過下列聯絡方式與我們聯繫。"]],
]
</script>

<template>
  <main class="policy-page"><article class="policy-card">
    <button class="back-button" type="button" @click="router.back()">&#8249;&#65038; 返回上一頁</button>
    <h1>隱私權政策</h1>
    <p class="opening">台灣玻璃館（以下簡稱本網站）非常重視用戶的隱私權，為了讓您能夠安心的使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策，以保障您的權益，請您詳閱下列內容：</p>
    <section v-for="([title, paragraphs]) in sections" :key="title" class="policy-section"><h2>{{ title }}</h2><p v-for="paragraph in paragraphs" :key="paragraph">{{ paragraph }}</p></section>
    <section class="contact"><h3>聯絡資訊</h3><p>服務專線　(04) 7811299</p><p>EMAIL　　 service@tmg.com.tw</p></section>
    <section class="copyright"><h1>著作權聲明</h1><ol><li>本網站之所有著作（含語文、音樂、攝影、圖形、視聽、電腦程式及網站其他內容）均屬「台灣玻璃館」所有或經合法授權本公司使用之著作。</li><li>非經台灣玻璃館書面同意授權，不得擅自以任何形式重製、改作、編輯、散布、傳輸或公開展示網站內容。</li></ol></section>
  </article></main>
</template>

<style scoped>
.policy-page{min-height:100vh;padding:150px 24px 96px;background:#fff;color:#202020}.policy-card{width:min(100%,820px);margin:auto}.back-button{border:0;padding:0;background:transparent;color:#202020;font:inherit;font-size:15px;cursor:pointer}.back-button:hover{color:#4e858b}h1{margin:20px 0 28px;padding-bottom:12px;border-bottom:2px solid #202020;font-size:28px;font-weight:800}.opening,.policy-section p,.contact p,.copyright li{margin:0;font-size:15px;line-height:1.9;text-align:justify}.policy-section{padding:23px 0 19px;border-bottom:1px solid #69c3cc}.policy-section h2{margin:0 0 12px;color:#52b5bf;font-size:21px;font-weight:800}.policy-section p+p{margin-top:12px}.contact{padding:34px 0}.contact h3{margin:0 0 12px;font-size:20px}.contact p{max-width:300px;padding:5px 0;border-bottom:1px solid #202020}.copyright{padding-top:10px}.copyright h1{margin-bottom:22px}.copyright ol{display:grid;gap:12px;margin:0;padding-left:1.4em}@media(max-width:640px){.policy-page{padding:104px 18px 56px}.policy-card{width:100%}.back-button,.opening,.policy-section p,.contact p,.copyright li{font-size:14px}.policy-section{padding-block:18px}.policy-section h2{font-size:18px}h1{font-size:23px}}
</style>

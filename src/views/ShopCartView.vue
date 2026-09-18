<script setup>
import { computed, ref } from "vue"
import { cart, cartTotal, removeFromCart, updateCartQuantity } from "../stores/cart.js"

const area = ref("台灣")
const region = ref("台灣本島")
const payment = ref("LINE Pay")
const delivery = ref("")
const shipping = computed(() => cartTotal.value >= 2000 ? 0 : cart.items.length ? 100 : 0)
const total = computed(() => cartTotal.value + shipping.value)
const money = (value) => new Intl.NumberFormat("zh-TW").format(value)
</script>

<template>
  <main class="cart-page">
    <div class="cart-wrap">
      <nav class="breadcrumb" aria-label="麵包屑"><RouterLink to="/shop">首頁</RouterLink><span>›</span><RouterLink to="/shop/products">商品專區</RouterLink><span>›</span><span aria-current="page">購物車</span></nav>
      <h1>購物車</h1>

      <section v-if="cart.items.length" class="cart-layout">
        <div class="cart-content">
          <div class="cart-head"><span>商品</span><span>單價</span><span>數量</span><span>小計</span></div>
          <article v-for="item in cart.items" :key="item.id" class="cart-item">
            <img :src="item.image" :alt="item.name">
            <div class="item-name"><strong>{{ item.name }}</strong><small>商品編號：{{ item.code }}</small><button @click="removeFromCart(item.id)">移除商品</button></div>
            <span class="item-price">NT$ {{ money(item.price) }}</span>
            <div class="item-quantity"><button aria-label="減少數量" @click="updateCartQuantity(item.id, item.quantity - 1)">−</button><span>{{ item.quantity }}</span><button aria-label="增加數量" @click="updateCartQuantity(item.id, item.quantity + 1)">＋</button></div>
            <strong class="item-subtotal">NT$ {{ money(item.price * item.quantity) }}</strong>
          </article>

          <section class="checkout-options">
            <h2>配送與付款方式</h2>
            <div class="option-row"><label>配送地區</label><div><select v-model="area"><option>台灣</option></select><select v-model="region"><option>台灣本島</option><option>離島地區</option></select></div></div>
            <div class="option-row"><label>付款方式</label><div class="payment-options"><label v-for="method in ['7-11 ibon付款', '超商取貨付款', '信用卡', 'ATM', 'LINE Pay', '宅配貨到付款']" :key="method"><input v-model="payment" type="radio" name="payment" :value="method"><span>{{ method }}</span></label></div></div>
            <div class="option-row"><label for="delivery">配送方式</label><select id="delivery" v-model="delivery"><option disabled value="">請選擇配送方式</option><option>宅配到府</option><option>7-11 超商取貨</option><option>全家超商取貨</option></select></div>
          </section>
        </div>
        <aside class="order-summary"><h2>訂單摘要</h2><p><span>商品小計</span><strong>NT$ {{ money(cartTotal) }}</strong></p><p><span>運費</span><strong>{{ shipping ? `NT$ ${money(shipping)}` : '免運費' }}</strong></p><p class="summary-total"><span>總金額</span><strong>NT$ {{ money(total) }}</strong></p><button type="button">前往結帳</button><RouterLink to="/shop/products">繼續購物</RouterLink><small>全館消費滿 NT$ 2,000 免運費</small></aside>
      </section>
      <section v-else class="empty-cart"><p>您的購物車目前沒有商品</p><RouterLink to="/shop/products">前往挑選商品</RouterLink></section>
    </div>
  </main>
</template>

<style scoped>
.cart-page{min-height:100vh;padding:145px 24px 100px;background:#fff;color:#252525}.cart-wrap{width:min(100%,1200px);margin:auto}.breadcrumb{display:flex;gap:12px;color:#777;font-size:14px}.breadcrumb a:hover,.order-summary a:hover{color:#62aeba}h1{max-width:none;margin:26px 0 55px;font-size:clamp(36px,4vw,52px);letter-spacing:.08em}.cart-layout{display:grid;grid-template-columns:minmax(0,1fr) 300px;gap:46px;align-items:start}.cart-content{min-width:0}.cart-head,.cart-item{display:grid;grid-template-columns:minmax(280px,1fr) 105px 128px 120px;gap:14px;align-items:center}.cart-head{padding:0 0 15px;border-bottom:2px solid #282828;font-size:15px;font-weight:800}.cart-head span:first-child{grid-column:1}.cart-item{position:relative;min-height:145px;padding:18px 0;border-bottom:1px solid #dedede}.cart-item>img{width:106px;height:106px;object-fit:cover;background:#f3f3f3}.item-name{position:absolute;left:122px;top:24px;display:grid;gap:7px;max-width:180px}.item-name strong{font-size:17px;line-height:1.4}.item-name small{color:#777;font-size:12px}.item-name button{justify-self:start;padding:0;border:0;color:#777;background:transparent;font:inherit;font-size:13px;text-decoration:underline;cursor:pointer}.item-quantity{display:flex;align-items:center;justify-content:center;gap:9px}.item-quantity button{display:grid;width:28px;height:28px;padding:0;place-items:center;border:1px solid #aaa;background:#fff;font-size:18px;cursor:pointer}.item-quantity span{min-width:20px;text-align:center}.item-subtotal{text-align:right}.checkout-options{margin-top:52px;padding-top:30px;border-top:2px solid #282828}.checkout-options h2,.order-summary h2{margin:0 0 26px;font-size:23px}.option-row{display:grid;grid-template-columns:150px minmax(0,1fr);gap:26px;margin:0 0 25px}.option-row>label{padding-top:10px;font-size:18px;font-weight:800}.option-row>div{display:grid;gap:14px}.option-row select{width:100%;height:48px;padding:0 14px;border:1px solid #c9c9c9;border-radius:4px;background:#fff;color:#444;font:inherit;font-size:17px}.option-row div:has(select){grid-template-columns:1fr 1fr}.payment-options label{display:flex;align-items:center;gap:12px;color:#4d4d4d;font-size:17px;cursor:pointer}.payment-options input{width:22px;height:22px;accent-color:#62aeba}.order-summary{padding:28px 24px;background:#f7f4e8}.order-summary p{display:flex;justify-content:space-between;gap:16px;margin:16px 0;color:#555}.order-summary .summary-total{margin-top:24px;padding-top:21px;border-top:1px solid #cfc9b6;color:#252525;font-size:18px}.summary-total strong{font-size:22px}.order-summary button,.empty-cart a{display:grid;width:100%;min-height:52px;margin-top:28px;place-items:center;border:0;background:#d3b732;color:#fff;font:inherit;font-weight:800;cursor:pointer}.order-summary a{display:block;margin-top:16px;text-align:center;text-decoration:underline}.order-summary small{display:block;margin-top:28px;color:#777;line-height:1.5}.empty-cart{padding:80px 20px;text-align:center;border-top:2px solid #252525;border-bottom:1px solid #ddd}.empty-cart p{font-size:20px}.empty-cart a{width:min(100%,260px);margin:28px auto 0;text-decoration:none}@media(max-width:850px){.cart-layout{grid-template-columns:1fr}.order-summary{max-width:500px}.cart-page{padding-top:112px}}@media(max-width:640px){.cart-page{padding:100px 16px 60px}.cart-wrap{width:100%}h1{margin:22px 0 36px;font-size:34px}.cart-head{display:none}.cart-item{grid-template-columns:95px 1fr;gap:14px;min-height:135px}.cart-item>img{width:95px;height:95px}.item-name{position:static;max-width:none;align-self:start}.item-price{display:none}.item-quantity{position:absolute;right:0;bottom:18px}.item-subtotal{position:absolute;right:0;top:22px;font-size:14px}.checkout-options{margin-top:34px}.option-row{grid-template-columns:1fr;gap:10px;margin-bottom:22px}.option-row>label{padding:0}.option-row div:has(select){grid-template-columns:1fr}.order-summary{padding:24px 20px}.breadcrumb{font-size:12px}}
</style>

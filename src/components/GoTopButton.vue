<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const visible = ref(false);
const bottomOffset = ref(18);
const updateVisibility = () => {
  visible.value = window.scrollY > 300;
  const footer = document.querySelector(".site-footer");
  const footerTop = footer?.getBoundingClientRect().top ?? window.innerHeight;
  const baseOffset = Math.max(18, Math.min(window.innerWidth * 0.03, 46));
  const footerOffset = Math.max(0, window.innerHeight - footerTop + 18);
  bottomOffset.value = baseOffset + footerOffset;
};
const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

onMounted(() => {
  updateVisibility();
  window.addEventListener("scroll", updateVisibility, { passive: true });
});
onBeforeUnmount(() => window.removeEventListener("scroll", updateVisibility));
</script>

<template>
  <Transition name="go-top">
    <button v-if="visible" class="go-top-button" :style="{ bottom: `${bottomOffset}px` }" type="button" aria-label="回到頁面頂端" @click="goTop">
      <span><span class="go-top-arrow" aria-hidden="true">↑</span>TOP</span>
    </button>
  </Transition>
</template>

<style scoped>
.go-top-button{position:fixed;z-index:9999;right:clamp(18px,2.5vw,46px);display:grid;width:76px;height:76px;margin:0;padding:0;place-items:center;border:1px solid rgb(255 255 255 / .85);border-radius:46% 54% 58% 42% / 43% 39% 61% 57%;background:rgb(106 195 204 / .92);box-shadow:0 10px 25px rgb(36 100 106 / .22);color:#fff;font-size:14px;font-weight:800;line-height:1.15;text-align:center;text-decoration:none;cursor:pointer;transition:opacity .18s ease,transform .18s ease,bottom .18s ease}.go-top-button:hover{background:#5e9499;transform:translateY(-5px)}:global(body:has(.shop-home-page) .go-top-button){background:rgb(222 204 103 / .94);box-shadow:0 10px 25px rgb(125 108 27 / .24)}:global(body:has(.shop-home-page) .go-top-button:hover){background:rgb(222 204 103 / .94);filter:brightness(.9)}.go-top-button:focus-visible{outline:2px solid #1e1e1e;outline-offset:4px}.go-top-arrow{display:block;font-size:22px}.go-top-enter-active,.go-top-leave-active{transition:opacity .18s ease,transform .18s ease}.go-top-enter-from,.go-top-leave-to{opacity:0;transform:translateY(14px)}@media(max-width:768px){.go-top-button{width:60px;height:60px;font-size:11px}.go-top-arrow{font-size:18px}}
:global(body:has(.shop-home-page, .shop-products-page, .shop-faq-page, .shop-contact-page) .go-top-button){background:rgb(222 204 103 / .94);box-shadow:0 10px 25px rgb(125 108 27 / .24)}:global(body:has(.shop-home-page, .shop-products-page, .shop-faq-page, .shop-contact-page) .go-top-button:hover){background:rgb(222 204 103 / .94);filter:brightness(.9)}
</style>

<script setup>
import { computed } from "vue"
import { useRoute } from "vue-router"

import SiteHeader from "./components/SiteHeader.vue"
import SiteFooter from "./components/SiteFooter.vue"
import GoTopButton from "./components/GoTopButton.vue"
import {
  inviteNavigation,
  shopNavigation,
} from "./data/navigation.js"
import { footerLinkGroups } from "./data/footer.js"

const route = useRoute()

const currentNavigation = computed(() => {
  return route.path.startsWith("/shop")
    ? shopNavigation
    : inviteNavigation
})

const switchAction = computed(() => {
  return route.path.startsWith("/shop")
    ? { label: "參觀展覽", to: "/invite" }
    : { label: "商品專區", to: "/shop" }
})

const homeTo = computed(() => {
  return route.path.startsWith("/shop")
    ? "/shop"
    : "/invite"
})

const isEntryPage = computed(() => route.path === "/")
</script>

<template>
  <div class="site">
    <SiteHeader v-if="!isEntryPage"
  brand="Glass Web"
  :home-to="homeTo"
  :nav-items="currentNavigation"
  :switch-action="switchAction"
/>

    <main class="site-main">
      <RouterView />
    </main>

    <SiteFooter v-if="!isEntryPage"
  brand="Glass Web"
  :link-groups="footerLinkGroups"
  copyright="Copyright 2026 台灣玻璃館｜All Rights Reserved"
/>
    <GoTopButton v-if="!isEntryPage" />
  </div>
</template>

<script setup>
import { ref } from "vue"
import brandLogo from "../assets/images/logo_黑.png"
import loginIcon from "../assets/images/icon/login.png"

defineProps({
  brand: {
    type: String,
    required: true,
  },
  navItems: {
    type: Array,
    required: true,
  },
  switchAction: {
    type: Object,
    required: true,
  },
  homeTo: {
  type: String,
  required: true,
},
})

const isMenuOpen = ref(false)

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="site-header">
    <RouterLink class="brand" :to="homeTo" @click="closeMenu">
  <img :src="brandLogo" :alt="brand">
</RouterLink>

    <nav
      id="main-navigation"
      class="main-nav"
      :class="{ 'is-open': isMenuOpen }"
      aria-label="主要導覽"
    >
      <RouterLink
        v-for="item in navItems"
        :key="item.label"
        :to="item.to"
        @click="closeMenu"
      >
        {{ item.label }}
      </RouterLink>

      <RouterLink
        class="switch-button switch-button--mobile"
        :to="switchAction.to"
        @click="closeMenu"
      >
        {{ switchAction.label }} →
      </RouterLink>
    </nav>

    <div class="header-actions">
      <button class="login-button" type="button" aria-label="登入">
  <img :src="loginIcon" alt="">
  <span>登入</span>
</button>

      <RouterLink
        class="switch-button switch-button--desktop"
        :to="switchAction.to"
      >
        {{ switchAction.label }} →
      </RouterLink>

    <button
  class="menu-toggle"
  :class="{ 'is-open': isMenuOpen }"
  type="button"
  :aria-expanded="isMenuOpen"
  aria-controls="main-navigation"
  @click="isMenuOpen = !isMenuOpen"
>
  {{ isMenuOpen ? "關閉" : "選單" }}
</button>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  width: min(100% - 72px, 1980px);
  height: 75px;
  min-height: 0px;
  display: flex;
  align-items: center;
  gap: 28px;
  margin: 14px auto 0;
  padding: 0 50px 0 68px;
  border: 0;
  border-radius: 999px;
  background: rgb(247 253 254 / 92%);
  box-shadow: 0 14px 34px rgb(55 118 125 / 10%);
  position: relative;
z-index: 100;
}

.brand {
  display: block;
  flex-shrink: 0;
}

.brand img {
  display: block;
  width: auto;
  height: 42px;
}

.main-nav {
   min-width: 0;
  display: flex;
  align-items: center;
  gap: clamp(14px, 1.25vw, 26px);
}

.main-nav a {
  color: #1e1e1e;
  font-size: clamp(0.95rem, 1vw, 1.15rem);
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
}

.main-nav a:hover,
.main-nav a.router-link-active {
  color: #4e858b;
}

.header-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 24px;
  margin-left: auto;
}

.login-button {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  gap: 10px;
  min-width: 52px;
  border: 0;
  padding: 8px;
  color: #1e1e1e;
  background: transparent;
  font: inherit;
  font-weight: 700;
  white-space: nowrap;
  cursor: pointer;
}

.login-button img {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.switch-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  min-width: 120px;
  min-height: 45px;
  padding: 10px 22px;
  white-space: nowrap;
  color: #fff;
  background: #e8c92e;
  clip-path: polygon(10% 8%,76% 0,100% 34%,92% 80%,65% 100%,8% 86%,0 40%);
  font-size: clamp(1rem, 1.15vw, 1.3rem);
  font-weight: 800;
  text-decoration: none;
  white-space: nowrap;
  transition: background 160ms ease, transform 160ms ease;
}

.switch-button:hover {
  background: #d8b81b;
  transform: translateX(3px);
}

:global(body:has(.shop-home-page, .shop-products-page, .shop-faq-page, .shop-contact-page) .switch-button) {
  background: #62b6c2;
}

:global(body:has(.shop-home-page, .shop-products-page, .shop-faq-page, .shop-contact-page) .switch-button:hover) {
  background: #4b9faa;
}

.switch-button--mobile,
.menu-toggle {
  display: none;
}



@media (max-width: 1100px) {
  .site-header {
    position: relative;
    width: calc(100% - 28px);
  max-width: none;
     height: 75px;
  min-height: 0;
    gap: 16px;
    margin-top: 14px;
    padding: 20px 28px;
    border-radius: 999px;
    background: rgb(241 252 253 / 92%);
  }

  .brand img {
     width: auto;
  height: 62px;
  }

  .header-actions {
    gap: 16px;
  }

  .login-button {
    padding: 6px;
    font-size: 0;
  }

  .login-button span {
    display: none;
  }

  .login-button img {
    width: 30px;
    height: 30px;
  }

  .switch-button--desktop {
    display: none;
  }

  .menu-toggle {
    display: block;
    border: 0;
    padding: 0;
    color: #1e1e1e;
    background: transparent;
    font-size: 0;
    cursor: pointer;
  }

  .menu-toggle::before {
    content: "☰";
    font-size: 46px;
    line-height: 1;
  }
  .menu-toggle.is-open::before {
  content: "×";
  font-size: 52px;
  font-weight: 300;
}

  .main-nav {
    display: none;
    position: absolute;
    z-index: 10;
    top: calc(100% + 12px);
    right: 0;
    width: min(100%, 420px);
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 16px;
    border-radius: 28px;
    background: #f1fcfd;
    box-shadow: 0 18px 40px rgb(55 118 125 / 20%);
  }

  .main-nav.is-open {
    display: flex;
  }

  .main-nav a {
    padding: 14px 16px;
    border-radius: 12px;
    font-size: 1.1rem;
  }

  .main-nav a:hover,
  .main-nav a.router-link-active {
    background: #dff1f3;
  }

  :global(body:has(.shop-home-page, .shop-products-page, .shop-faq-page, .shop-contact-page) .main-nav a:hover),
  :global(body:has(.shop-home-page, .shop-products-page, .shop-faq-page, .shop-contact-page) .main-nav a.router-link-active) {
    color: #BFA62E;
    background: #f8f5e1;
  }

  .switch-button--mobile {
  display: inline-flex;
  align-self: flex-end;
  width: auto;
  min-width: 160px;
  margin: 16px 0 0 auto;
}
}

@media (max-width: 520px) {
  .site-header {
      height: 70px;
  min-height: 0;
    padding: 16px 24px;
  }

  .brand img {
    width: auto;
  height: 48px;
  }

  .menu-toggle::before {
    font-size: 38px;
  }

  .login-button::before {
    font-size: 25px;
  }
}
</style>

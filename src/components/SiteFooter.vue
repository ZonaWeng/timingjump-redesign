<script setup>
import brandLogo from "../assets/images/logo_黑.png"
defineProps({
  brand: {
    type: String,
    required: true,
  },
  linkGroups: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-links">
        <div
          v-for="(group, index) in linkGroups"
          :key="index"
          class="footer-link-group"
        >
          <RouterLink
            v-for="item in group"
            :key="item.label"
            :to="item.to"
          >
            {{ item.label }}
          </RouterLink>
        </div>
      </div>

      <div class="footer-info">
        <div class="footer-top">
          <div class="social-links">
  <a
    href="https://www.facebook.com/TGGallery"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <img src="../assets/images/icon/fb2.png" alt="">
  </a>

  <a href="https://www.instagram.com/explore/locations/7531691/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
    <img src="../assets/images/icon/line2.png" alt="">
  </a>

  <a
  href="https://www.youtube.com/user/Timingjump/videos"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="YouTube"
>
  <img src="../assets/images/icon/yt.png" alt="">
</a>
</div>

          <RouterLink class="footer-logo" to="/">
  <img :src="brandLogo" :alt="brand">
</RouterLink>
        </div>

        <p class="company-info">
          台明將企業股份有限公司 台灣玻璃館｜統編 4549-9448
Copyright 2026 臺灣玻璃館｜All Rights Reserved｜版權所有
Designed by 逢甲玻璃心
        </p>

        
      </div>
    </div>
  </footer>
</template>
<style scoped>
.site-footer {
  border-top: 40px solid #fff;
  color: #1e1e1e;
  background: #e5dfd9;
}
.footer-logo img {
  display: block;
  width: 220px;
  height: auto;
}
.footer-content {
  width: min(100% - 80px, 1800px);
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(420px, 0.9fr);
  gap: 80px;
  margin-inline: auto;
  padding-block: 48px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.footer-link-group {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 40px;
}

.footer-link-group a {
  color: inherit;
  font-size: 0.95rem;
  font-weight: 400;
  text-decoration: none;
}

.footer-link-group a:first-child {
  font-size: 1.1rem;
  font-weight: 700;
}

.footer-link-group a:hover {
  color: #4e858b;
}

.footer-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
}

.footer-top {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 36px;
}

.social-links {
  display: flex;
  align-items: center;
  gap: 15px;
}

.social-links a {
  color: inherit;
  font-weight: 700;
  text-decoration: none;
}

.footer-logo {
  color: inherit;
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-decoration: none;
}

.company-info {
  margin: 64px 0 12px;
  color: #55504b;
}

.social-links img {
  display: block;
  width: 30px;
  height: 30px;
  object-fit: contain;
}

@media (max-width: 900px) {
  .footer-content {
    width: min(100% - 64px, 1800px);
    display: grid;
    grid-template-areas:
      "footer-top"
      "footer-links"
      "company-info";
    grid-template-columns: 1fr;
    gap: 36px;
    padding-block: 44px 48px;
  }

  .footer-info {
    display: contents;
  }

  .footer-top {
    grid-area: footer-top;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }

  .footer-logo {
    font-size: 1.5rem;
  }

   .footer-logo img {
    width: 180px;
  }

  .social-links {
    gap: 20px;
  }

  .footer-links {
    grid-area: footer-links;
    gap: 28px;
  }

  .footer-link-group {
    flex-direction: row;
    align-items: center;
    gap: 16px 40px;
  }

  .footer-link-group a {
    font-size: 1rem;
  }

  .company-info {
    grid-area: company-info;
    margin: 0;
    text-align: left;
  }

  
}
</style>

import { createRouter, createWebHistory } from "vue-router"

import HomeView from "../views/HomeView.vue"
import InviteView from "../views/InviteView.vue"
import ShopView from "../views/ShopView.vue"
import ShopProductsView from "../views/ShopProductsView.vue"
import ShopFaqView from "../views/ShopFaqView.vue"
import ShopContactView from "../views/ShopContactView.vue"
import ShopCartView from "../views/ShopCartView.vue"
import InviteAboutView from "../views/invite/InviteAboutView.vue"
import InviteGlassDetailView from "../views/invite/InviteGlassDetailView.vue"
import InviteVenueView from "../views/invite/InviteVenueView.vue"
import InviteNewsView from "../views/invite/InviteNewsView.vue"
import InviteNewsDetailView from "../views/invite/InviteNewsDetailView.vue"
import InviteActivityView from "../views/invite/InviteActivityView.vue"
import InviteQuestionView from "../views/invite/InviteQuestionView.vue"
import InviteContactView from "../views/invite/InviteContactView.vue"
import MemberTermsView from "../views/MemberTermsView.vue"
import LoginView from "../views/LoginView.vue"
import PrivacyPolicyView from "../views/PrivacyPolicyView.vue"

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition
        if (to.hash) return { el: to.hash, behavior: "smooth" }
        return { top: 0 }
    },
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/invite",
            name: "invite",
            component: InviteView,
        },
        {
            path: "/shop",
            name: "shop",
            component: ShopView,
        },
        {
            path: "/shop/products",
            name: "shop-products",
            component: ShopProductsView,
        },
        {
            path: "/shop/faq",
            name: "shop-faq",
            component: ShopFaqView,
        },
        {
            path: "/shop/cart",
            name: "shop-cart",
            component: ShopCartView,
        },
        {
            path: "/shop/contact",
            name: "shop-contact",
            component: ShopContactView,
        },
        {
            path: "/invite/about",
            name: "invite-about",
            component: InviteAboutView,
        },
        {
            path: "/invite/glass-detail",
            name: "invite-glass-detail",
            component: InviteGlassDetailView,
        },
        {
            path: "/invite/venue",
            name: "invite-venue",
            component: InviteVenueView,
        },
        {
            path: "/invite/news",
            name: "invite-news",
            component: InviteNewsView,
        },
        {
            path: "/invite/news-detail",
            name: "invite-news-detail",
            component: InviteNewsDetailView,
        },
        {
            path: "/invite/activity",
            name: "invite-activity",
            component: InviteActivityView,
        },
        {
            path: "/invite/question",
            name: "invite-question",
            component: InviteQuestionView,
        },
        {
            path: "/invite/contact",
            name: "invite-contact",
            component: InviteContactView,
        },
        {
            path: "/login",
            name: "login",
            component: LoginView,
        },
        {
            path: "/member-terms",
            name: "member-terms",
            component: MemberTermsView,
        },
        {
            path: "/privacy-policy",
            name: "privacy-policy",
            component: PrivacyPolicyView,
        },
    ],
})

// Some mobile in-app browsers reopen a freshly deployed site at `/` instead of
// preserving its current URL. Keep the visitor on the last internal page for
// the duration of that browser session; `/?entry=1` remains an explicit way to
// visit the entrance page.
const lastRouteKey = "timingjump:last-internal-route"

router.beforeEach((to) => {
    if (to.path === "/" && to.query.entry !== "1") {
        const lastRoute = window.sessionStorage.getItem(lastRouteKey)
        if (lastRoute && lastRoute !== "/") return lastRoute
    }
    return true
})

router.afterEach((to) => {
    if (to.path !== "/") window.sessionStorage.setItem(lastRouteKey, to.fullPath)
})

export default router

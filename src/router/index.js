import { createRouter, createWebHistory } from "vue-router"

import HomeView from "../views/HomeView.vue"
import InviteView from "../views/InviteView.vue"
import ShopView from "../views/ShopView.vue"
import ShopProductsView from "../views/ShopProductsView.vue"
import ShopFaqView from "../views/ShopFaqView.vue"
import ShopContactView from "../views/ShopContactView.vue"
import InviteAboutView from "../views/invite/InviteAboutView.vue"
import InviteGlassDetailView from "../views/invite/InviteGlassDetailView.vue"
import InviteVenueView from "../views/invite/InviteVenueView.vue"
import InviteNewsView from "../views/invite/InviteNewsView.vue"
import InviteActivityView from "../views/invite/InviteActivityView.vue"
import InviteQuestionView from "../views/invite/InviteQuestionView.vue"
import InviteContactView from "../views/invite/InviteContactView.vue"

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
    ],
})

export default router

import Vue from "vue";
import VueRouter from "vue-router";
import SignupPage from "../views/SignUp.vue";
import LoginPage from "../views/Login.vue";
import Feed from "../views/Feed.vue";
import Profile from "../views/Profile.vue";
import Search from "../views/Search.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/signup",
        name: "signup-page",
        component: SignupPage
    },
    {
        path: "/login",
        name: "login-page",
        component: LoginPage
    },
    {
        path: "/feed",
        name: "feed-page",
        component: Feed
    },
    {
        path: "/profile",
        name: "profile-page",
        component: Profile
    },
    {
        path: "/search",
        name: "search-page",
        component: Search
    }


];

const router = new VueRouter({
    routes
});

export default router;
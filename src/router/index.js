import Vue from "vue";
import VueRouter from "vue-router";
import SignupPage from "../views/SignUp.vue";
import LoginPage from "../views/Login.vue";
import ProfilePage from "../views/Profile.vue"
import DeleteProfile from "../views/DeleteProfile.vue"
import ViewProfiles from "../views/ViewProfiles.vue"
import UserProfile from "../views/UserProfile.vue"
import CreateTweet from "../views/CreateTweet.vue"
import ViewTweets from "../views/ViewTweets.vue"
import UserFeed from "../views/UserFeed.vue"


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
        path: "/profile",
        name: "profile-page",
        component: ProfilePage
    },
    {
        path: "/delete",
        name: "delete-profile",
        component: DeleteProfile
    },
    {
        path: "/viewProfiles",
        name: "view-profiles",
        component: ViewProfiles
    },
    {
        path: "/userProfile",
        name: "user-profile",
        component: UserProfile
    },
    {
        path: "/createTweet",
        name: "create-tweet",
        component: CreateTweet
    },
    {
        path: "/viewTweets",
        name: "view-tweets",
        component: ViewTweets
    },
    {
        path: "/userFeed",
        name: "user-feed",
        component: UserFeed
    }

];

const router = new VueRouter({
    routes
});

export default router;
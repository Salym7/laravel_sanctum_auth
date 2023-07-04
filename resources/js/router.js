// import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

// const app = createApp({});

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/get",
            name: "get.index",
            component: function () {
                return import("./components/Get.vue");
            },
        },
        {
            path: "/user/login",
            name: "user.login",
            component: function () {
                return import("./components/Login.vue");
            },
        },
        {
            path: "/user/registration",
            name: "user.registration",
            component: function () {
                return import("./components/Registration.vue");
            },
        },
        {
            path: "/user/personal",
            name: "user.personal",
            component: function () {
                return import("./components/Personal.vue");
            },
        },
    ],
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("x_xsrf_token");

    if (!token) {
        if (to.name === "user.login" || to.name === "user.registration") {
            return next();
        } else {
            return next({
                name: "user.login",
            });
        }
    }

    if ((to.name === "user.login" || to.name === "user.registration") && token) {
        return next({
            name: "user.personal",
        });
    }

    next();
});

export default router;

<template>
    <div class="container p-4">
        <router-link class="me-3" :to="{ name: 'get.index' }">Get</router-link>
        <router-link v-if="!token" class="me-3" :to="{ name: 'user.login' }"
            >Login</router-link
        >
        <router-link
            v-if="!token"
            class="me-3"
            :to="{ name: 'user.registration' }"
            >Register</router-link
        >
        <router-link v-if="token" class="me-3" :to="{ name: 'user.personal' }"
            >Personal</router-link
        >
        <a v-if="token" href="#" @click.prevent="logout">Logout</a>
        <router-view :key="$route.fullPath"></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            token: null,
        }
    },

    mounted() {
        this.getToken()
    },
    updated() {
        this.getToken()
    },

    methods: {
        getToken() {
            this.token = localStorage.getItem("x_xsrf_token")
        },

        logout() {
            axios.post("/logout").then((res) => {
                localStorage.removeItem("x_xsrf_token")
                this.$router.push({ name: "user.login" })
            })
        },
    },
}
</script>

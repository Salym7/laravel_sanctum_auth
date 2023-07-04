<template>
    <div class="container p-4">
        <router-link class="me-3" :to="{ name: 'get.index' }">Get</router-link>
        <router-link class="me-3" :to="{ name: 'user.login' }"
            >Login</router-link
        >
        <router-link class="me-3" :to="{ name: 'user.registration' }"
            >Register</router-link
        >
        <a href="#" @click.prevent="logout">Logout</a>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log("Component mounted.")
    },
    methods: {
        logout() {
            axios
                .post("/logout")
                .then(this.$router.push({ name: "user.login" }))
        },
    },
}
</script>

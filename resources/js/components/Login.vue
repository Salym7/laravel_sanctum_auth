<template>
    <div class="row justify-content-center">
        <form action="" class="w-25">
            <input
                v-model="email"
                type="email"
                id="email"
                placeholder="email"
                class="form-control mb-2 mt-2"
            />
            <input
                v-model="password"
                type="password"
                id="password"
                placeholder="password"
                class="form-control mb-2"
            />
            <input
                type="submit"
                id="button"
                value="login"
                class="btn btn-primary w-100"
                @click.prevent="login"
            />
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: null,
            password: null,
        }
    },

    methods: {
        login() {
            axios.get("/sanctum/csrf-cookie").then((response) => {
                axios
                    .post("/login", {
                        email: this.email,
                        password: this.password,
                    })
                    .then((res) => {
                        localStorage.setItem(
                            "x_xsrf_token",
                            res.config.headers["X-XSRF-TOKEN"]
                        )
                        this.$router.push({ name: "user.personal" })
                    })
                    .catch((err) => {
                        console.log(err.response)
                    })
            })
        },
    },
}
</script>

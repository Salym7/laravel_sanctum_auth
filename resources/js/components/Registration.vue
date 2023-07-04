<template>
    <div class="row justify-content-center">
        <form action="" class="w-25">
            <input
                v-model="name"
                type="text"
                id="name"
                placeholder="name"
                class="form-control mb-2"
            />
            <input
                v-model="email"
                type="email"
                id="email"
                placeholder="email"
                class="form-control mb-2"
            />
            <input
                v-model="password"
                type="password"
                id="password"
                placeholder="password"
                class="form-control mb-2"
            />
            <input
                v-model="password_confirmation"
                type="password"
                id="password_confirmation"
                placeholder="password_confirmation"
                class="form-control mb-2"
            />
            <input
                type="submit"
                id="password"
                value="login"
                class="btn btn-primary w-100"
                @click.prevent="register"
            />
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: null,
            email: null,
            password: null,
            password_confirmation: null,
        }
    },

    methods: {
        register() {
            axios.get("/sanctum/csrf-cookie").then((response) => {
                axios
                    .post("/register", {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        password_confirmation: this.password_confirmation,
                    })
                    .then((res) => {
                        console.log(res)
                    })
                    .catch((err) => {
                        console.log(err.response)
                    })
            })
        },
    },
}
</script>

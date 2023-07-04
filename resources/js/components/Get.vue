<template>
    <div class="row justify-content-center">Get</div>
</template>

<script>
export default {
    mounted() {
        this.getData()
    },
    methods: {
        getData() {
            axios.get("/api/get").then((res) => {
                console.log(res)
            })
        },
    },
}
</script>

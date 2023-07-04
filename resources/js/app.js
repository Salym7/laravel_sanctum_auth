import "./bootstrap";
import router from "./router";
import { createApp } from "vue";

const app = createApp({});

import App from "./components/App.vue";
app.component("App", App);
app.use(router);

app.mount("#app");

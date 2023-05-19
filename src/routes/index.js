import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import StockView from "../views/StockView.vue";



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", name: "Home", component: HomeView},
        {path: "/stock", name: "Stock", component: StockView},
    ]
})

export default router;

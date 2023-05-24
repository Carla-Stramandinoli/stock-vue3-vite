import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import FriosView from "../views/FriosView.vue";
import CalentitosView from "../views/CalentitosView.vue";
import IslasView from "../views/IslasView.vue";



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", name: "Home", component: HomeView},
        {path: "/frios", name: "Frios", component: FriosView},
        {path: "/calentitos", name: "Calentitos", component: CalentitosView},
        {path: "/islas", name: "Islas", component: IslasView},

    ]
})

export default router;

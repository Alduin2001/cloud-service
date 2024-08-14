import { FC } from "react"
import Home from "../components/home/home"
import About from "../components/about/about"
import Profile from "../components/profile"
import OrderTarif from "../components/order/order_tarif"
import MyCloud from "../components/cloud/my_cloud"
interface RouteOption{
    name:string,
    path:string,
    component:FC
}

const publicRoute:RouteOption[] = [
    {
        name:'Главная',
        path:'/',
        component:Home
    },
    {
        name:'О нас',
        path:'/about',
        component:About
    },
    {
        name:'Заказать тариф',
        path:'/order_tarif',
        component:Profile
    },
    {
        name:'Облако',
        path:'/cloud',
        component:MyCloud
    },
    {
        name:'Профиль',
        path:'/profile',
        component:OrderTarif
    }
];

export {publicRoute};
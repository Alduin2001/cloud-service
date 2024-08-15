import { FC } from "react"
import Home from "../components/home/home"
import About from "../components/about/about"
import Profile from "../components/profile"
import OrderTarif from "../components/order/order_tarif"
import MyCloud from "../components/cloud/my_cloud"
import MyOrders from "../components/order/myorders"
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
        component:OrderTarif
    },
    {
        name:'Облако',
        path:'/cloud',
        component:MyCloud
    },
    {
        name:'Профиль',
        path:'/profile',
        component:Profile
    },
    {
        name:'Мои заказы',
        path:'/myorders',
        component:MyOrders
    }
];

export {publicRoute};
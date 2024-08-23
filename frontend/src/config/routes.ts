import { FC } from "react"
import Home from "../components/home/home"
import About from "../components/about/about"
import Profile from "../components/profile"
import OrderTarif from "../components/order/order_tarif"
import MyCloud from "../components/cloud/my_cloud"
import MyOrders from "../components/order/myorders"
import CreateTarif from "../components/tarif/create_tarif"
import ManageTarif from "../components/tarif/manage_tarif"
import ManageOrders from "../components/order/manage_order"
import TarifOne from "../components/tarif/tarif_one"
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
        name:'Тариф один',
        path:'/tarif_one/:id',
        component:TarifOne
    }
];
const authRoutes:RouteOption[] = [
    {
        name:'Профиль',
        path:'/profile',
        component:Profile
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
        name:'Мои заказы',
        path:'/myorders',
        component:MyOrders
    },
];
const adminRoutes:RouteOption[] = [
    {
        name:'Создать тариф',
        path:'/create_tarif',
        component:CreateTarif
    },
    {
        name:'Управление тарифами',
        path:'/manage_tarif',
        component:ManageTarif
    },
    {
        name:'Управление заказами',
        path:'/manage_orders',
        component:ManageOrders
    }
];

export {publicRoute, adminRoutes, authRoutes};
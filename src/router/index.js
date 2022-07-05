import { createRouter, createWebHistory } from "vue-router";

import Home from '../views/public/Home.vue'
import Shop from '../views/public/Shop.vue'
import View from '../views/public/View.vue'
import Wishlist from '../views/public/Wishlist.vue'
import Account from '../views/public/Account.vue'
import Cart from '../views/public/Cart.vue'
import Checkout from '../views/public/Checkout.vue'
import Register from '../views/public/Register.vue'
import Login from '../views/public/Login.vue'
import Profile from '../views/public/Profile.vue'
import OrderComplete from '../views/public/OrderComplete.vue'
import ManageAddress from '../views/public/ManageAddress.vue'
import ChangePassword from '../views/public/ChangePassword.vue'

import NotFound from '../views/public/NotFound.vue'

import PublicLayout from '../views/public/Layout.vue'

const routes = [
    {
        path: '/',
        name: 'public',
        component: PublicLayout,
        children: [
            { path: '/', name: 'home', component: Home },
            { path: '/shop', name: 'shop', component: Shop },
            { path: '/view', name: 'view', component: View },
            { path: '/wishlist', name: 'wishlist', component: Wishlist },
            { path: '/account', name: 'account', component: Account },
            { path: '/cart', name: 'cart', component: Cart },
            { path: '/checkout', name: 'checkout', component: Checkout },
            { path: '/register', name: 'register', component: Register },
            { path: '/login', name: 'login', component: Login },
            { path: '/profile', name: 'profile', component: Profile },
            { path: '/order-complete', name: 'order-complete', component: OrderComplete },
            { path: '/manage-address', name: 'manage-address', component: ManageAddress },
            { path: '/change-password', name: 'change-password', component: ChangePassword }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Account from '../views/Account.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Cart from '../views/Cart.vue'
import SearchProducts from '../components/SearchProducts.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Checkout from '../Checkout.vue'
import StoreProduct from '../views/StoreProduct.vue'
import News from '../views/News.vue'
import Promotions from '../views/Promotions.vue'
import PromotionDetail from '../views/PromotionDetail.vue'
import NewDetail from '../views/NewDetail.vue'
import AdminProduct from '../ADMIN/AdminProduct.vue'
import BirthdayCake from '../views/BirthdayCake.vue'
import BreadCake from '../views/BreadCake.vue'
import CookieCake from '../views/CookieCake.vue'
import HighlightsCake from '../views/HighlightsCake.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/account/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/account/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/search-products',
    name: 'SearchProducts',
    component: SearchProducts
  },
  {
    path: '/product-detail/:id',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/store',
    name: 'StoreProduct',
    component: StoreProduct
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/promotions',
    name: 'Promotions',
    component: Promotions
  },
  {

    path: '/new-detail/:id',
    name: 'NewDetail',
    component: NewDetail
  },
  {
    path: '/promotion-detail/:id',
    name: 'PromotionDetail',
    component: PromotionDetail
  },
  {
    path: '/admin',
    name: 'AdminProduct',
    component: AdminProduct
  },
  {
    path: '/banh-sinh-nhat',
    name: 'BirthdayCake',
    component: BirthdayCake
  },
  {
    path: '/banh-my-banh-man',
    name: 'BreadCake',
    component: BreadCake
  },
  {
    path: '/cookiecake-minicake',
    name: 'CookieCake',
    component: CookieCake
  },
  {
    path: '/highlights-cake',
    name: 'HighlightsCake',
    component: HighlightsCake
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

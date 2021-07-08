import Vue from 'vue'
import Router from 'vue-router'
import Shopcart from '@/components/Shopcart.vue'
import GoodsList from '@/components/GoodsList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      component: GoodsList
    },
		{
		  path: '/shopcart',
		  name: 'Shopcart',
		  component: Shopcart
		}
  ]
})

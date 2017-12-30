import Vue from 'vue'
import Router from 'vue-router'
import Sorting from '@/components/Sorting'
import Array from '@/components/Array'
import NumberFormat from '@/components/NumberFormat'
import Parent from '@/components/Parent'
import Child from '@/components/Child'
import store from '@/store/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sorting',
      component: Sorting
    },
    {
    	path: '/array',
    	name: 'array',
    	component: Array
    },
    {
    	path: '/NumberFormat',
    	name: 'numberformat',
    	component: NumberFormat
    },
    {
    	path: '/Child',
    	name: 'child',
    	component: Child
    },
    {
    	path: '/Parent',
    	name: 'parent',
    	component: Parent
    }
  ]
})
import Vue from 'vue'
import Router from 'vue-router'
import index from '@/iview/index'
import zuhuxinxiguanli from '@/iview/zuhuxinxiguanli'
import xiangmuxinxiguanli from '@/iview/xiangmuxinxiguanli'
import daoruxiangmuxinxiguanli from '@/iview/daoruxiangmuxinxiguanli'
import xuqiuxinxiguanli from '@/iview/xuqiuxinxiguanli'
import chakanxinxi from '@/iview/chakanxinxi'
import addxtxx from '@/iview/addxtxx'
import cvm from '@/iview/cvm'
import cbs from '@/iview/cbs'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/zuhuxinxiguanli',
      name: 'zuhuxinxiguanli',
      component: zuhuxinxiguanli
    },
    {
      path: '/xiangmuxinxiguanli',
      name: 'xiangmuxinxiguanli',
      component: xiangmuxinxiguanli
    },
    {
      path: '/daoruxiangmuxinxiguanli',
      name: 'daoruxiangmuxinxiguanli',
      component: daoruxiangmuxinxiguanli
    },
    {
      path: '/xuqiuxinxiguanli',
      name: 'xuqiuxinxiguanli',
      component: xuqiuxinxiguanli
    },
    {
      path: '/addxtxx',
      name: 'addxtxx',
      component: addxtxx
    },
    {
      path: '/chakanxinxi',
      name: 'chakanxinxi',
      component: chakanxinxi
    },
    {
      path: '/cvm',
      name: 'cvm',
      component: cvm
    },
    {
      path: '/cbs',
      name: 'cbs',
      component: cbs
    }

  ]
})

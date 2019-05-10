import Vue from 'vue'
import Router from 'vue-router'
import game from './views/game.vue'
import user from './views/user.vue'
import jd from './components/jd.vue'
import sz from './components/sz.vue'
import ft from './components/ft.vue'
import jfshop from './components/jfshop.vue'
import myteam from './components/myteam.vue'
import mybusiness from './components/mybusiness.vue'
import service from './components/service.vue'
import recharge from './components/recharge.vue'
import myshare from './components/myshare.vue'
import jfdh from './components/jfdh.vue'
import jfxx from './components/jfxx.vue'
import jfjl from './components/jfjl.vue'
import gamedetail from './components/gamedetail.vue'
import rechargedetail from './components/rechargedetail.vue'
import exchangedetail from './components/exchangedetail.vue'
Vue.use(Router)

export default new Router({
  // mode: 'history',
routes: [
    {
      path: '/',
      name: '/',
      components: {
        gamePage:game
      },
      redirect: 'jd',
      children: [
        {
          path: 'jd',
          components: {
                        game:jd,
                      }
        },
        {
          path: 'sz',
          components: {
                        game:sz,
                      }
        },
        {
          path: 'ft',
          components: {
                        game:ft,
                      }
        }
      ],
      meta: {
        keepAlive: true // 缓存
      }
    },
    {
      path: '/user',
      name: 'user',
      components:
      {
        userPage:user
      },
      meta: {
        keepAlive: true // 缓存
      }
  },
  {
    path: '/jfshop',
    name: 'jfshop',
    redirect: 'jfshop/jfdh',
    components: {
      jfShop:jfshop
    },
    children:[
      {
        path: 'jfdh',
        components: {
          jf:jfdh
        }
      },
      {
        path: 'jfxx',
        components: {
          jf:jfxx
        }
      },
      {
        path: 'jfjl',
        components: {
          jf:jfjl
        }
      }
    ],
    meta: {
      keepAlive: true // 缓存
    }
  },
  {
    path: '/myteam',
    name: 'myteam',
    components: {
      myTeam:myteam
    },
    meta: {
      keepAlive: true // 缓存
    }
  },
  {
    path: '/mybusiness',
    name: 'mybusiness',
    components: {
      myBusiness:mybusiness
    },
    redirect: '/mybusiness/gamedetail',
    children:[
      {
        path: 'gamedetail',
        components: {
          mybusiness:gamedetail
        }
      },
      {
        path: 'rechargedetail',
        components: {
          mybusiness:rechargedetail
        }
      },
      {
        path: 'exchangedetail',
        components: {
          mybusiness:exchangedetail
        }
      }
    ],
    meta: {
      keepAlive: true // 缓存
    }
  },
  {
    path: '/service',
    name: 'service',
    components: {
      service:service
    },
    meta: {
      keepAlive: true // 缓存
    }
  },
  {
    path: '/recharge',
    name: 'recharge',
    components: {
      recharge:recharge
    },
    meta: {
      keepAlive: true // 缓存
    }
  },
  {
    path: '/myshare',
    name: 'myshare',
    components: {
      myshare:myshare
    },
    meta: {
      keepAlive: true // 缓存
    }
  }
  ]
})

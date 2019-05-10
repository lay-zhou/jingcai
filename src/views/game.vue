<template>
<div class="game" ref="game">
    <div class="header" >
        <div class="jifen">
            <img src='../assets/images/jifen.png' class="img1">
            <p> 积分 : 0.00</p>
        </div>
        <div class="jfcz">
            <p>充值</p>
            <span class="iconfont icon-jiantou-002"></span>
        </div>
    </div>
    <div class="navigate" >
        <p>规则</p>
        <router-link  :to="{ name:'user', params: { id:123 }}">个人中心</router-link>
    </div>
    <div class="core" >
        <router-link to='/jd' class="router r1" >经典场</router-link>
        <router-link to='/sz' class="router r2" >数字场</router-link>
        <router-link to="/ft" class="router r3" >复投场</router-link>
    </div>
    <div class="content">
        <router-view name="game"></router-view>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {
            str: ''
        }
    },
    methods: {
       getData() {
         // getData方法，模拟从后台请求数据
         this.str = "我是通过调用方法加载的数据。。。"
         console.log(this.str)
       },
       getDevice() {
           let  ele = this.$refs.game.style
           ele.width = window.screen.width + 'px'
       }
    },
    components : {
    },
    mounted () {
        
    },
    // beforeRouteEnter (to, from, next) {
        
    // } // 选择性获取页面
    activated () {
        this.getData()
        this.getDevice()
    }
}
</script>
<style lang="scss" scoped>
.game {
    background-image: url('../assets/images/bg8.jpg');
    background-size: cover;
    background-position: center 0;
    height: 100%;
    #myChart {
        p {
            color: #ffffff;
            font-size: .4rem;
            padding: .2rem;
        }
        margin: 0 auto;
    }
    .content {
            margin: 0 .1rem;
            background-color: transparent;
        }
    .core {
        text-align: center;
        margin-top: .6rem;
        .router {
            padding-top: .2rem;
            height: 1rem;
            display: inline-block;
            width: 30%;
            margin: 0  .1rem;
            background-color: #03A9F4;
            border-radius: .06rem;
            box-shadow: 0 3px 6px rgba(0, 0, 0,0.23);
            color: white;
            font: .50rem "roboto", sans-serif;
            font-weight: 100;
            transition: all 400ms ease-in-out;
    }
         .r1.router-link-active {// .router-link-active
            background: #69F0AE;
            box-shadow:  0 20px 70px rgba(0, 0, 0, 1);
            transition: all 50ms;
        }
        .r2.router-link-active {// .router-link-active
            background: #fe5c51;
            box-shadow:  0 20px 70px rgba(0, 0, 0, 1);
            transition: all 50ms;
        }
        .r3.router-link-active {// .router-link-active
            background: fuchsia;
            box-shadow:  0 30px 70px rgba(0, 0, 0, 1);
            transition: all 50ms;
        }
    }
    .navigate {
            margin-top: .3rem;
            p {
                display: inline-block;
                width: 1rem;
                height: .8rem;
                line-height: .8rem;
                background-color: #ff9d1b;
                border-top-right-radius: .1rem;
                border-bottom-right-radius: .1rem;
                text-align: center;
                color: #ffffff;
            }
            a {
                color: #ffffff;
                display: block;
                background-color: #fe5362;
                border-top-left-radius: .1rem;
                border-bottom-left-radius: .1rem;
                width: 1.5rem;
                height: .8rem;
                line-height: .8rem;
                float: right;
                text-align: center;
            }
    }
    .header {
        background-color: #69F0AE;
        padding: 0 .11rem;
        height: .64rem;
        line-height: .64rem;
        .jifen {
            float: left;
            .img1 {
                height: .42rem;
                width: .42rem;
                display: inline-block;
            }
            p {
                display: inline-block;
                margin-left: .15rem;
            }
        }
        .jfcz {
            float: right;
            p {
                display: inline-block;
                font-weight: 600;
                font-size: .33rem;
            }
            span {
                margin-left: .1rem;
                display: inline-block;
            }
        }
    }
}
</style>
<template>
<div class="mybusiness">
    <div class="header">
        <router-link to="/user">
          <span class="iconfont icon-fanhui"></span>
        </router-link>
        <p>交易明细</p>
    </div>
    <div class="ad">
    </div>
    <div class="bodyheader">
         <ul>
             <li><router-link to="/mybusiness/gamedetail">游戏明细</router-link></li>
             <li><router-link to="/mybusiness/rechargedetail">充值明细</router-link></li>
             <li style="border-right:1px solid #ffffff;"><router-link to="/mybusiness/exchangedetail">兑换明细</router-link></li>
         </ul>
    </div>
    <div class="body">
        <router-view name="mybusiness"></router-view>
    </div>
</div>
</template>
<script>
export default {
   data() {
    return {

    }
}
}
</script>
<style lang="scss" scoped>
.mybusiness {
    width: 100%;
    .bodyheader {
        ul {
            height: .6rem;
            border-bottom: 1px solid #cccccc;
            line-height: .6rem;
            padding-bottom: .1rem;
            margin:0 .01rem;
            li {
                text-align: center;
                width: 33%;
                display: inline-block;
                border-right: 1px solid #cccccc;
            }
        }
    }
    .bodyheader:before {
        display: block;
        position: relative;
        left: 0;
        top: -.14rem;
        height: .18rem;
        content: "";
        background-image: url('../assets/images/bodyheadertop.png');
   }
    .ad {
        height: 43vw;
        background-image: url('../assets/images/mybusiness.jpg');
        background-size: cover;
        background-position: center;
    }
    .header {
            width: 100%;
            height: .9rem;
            line-height: .9rem;
            background-color: #19b5ff;
            color: #ffffff;
            text-align: center;
            padding:0 .1rem; 
            a {
                float: left;
                span {
                    color: #ffffff;
                    font-size: .5rem;
            }
            }
            p {
                display: inline-block;
                padding-right:.6rem; 
                font-size: .4rem;
            }
        }
}
</style>
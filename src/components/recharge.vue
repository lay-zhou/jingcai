<template>
<div class="recharge">
    <div class="header">
        <router-link to="/user">
          <span class="iconfont icon-fanhui"></span>
        </router-link>
        <p>充值中心</p>
    </div>
    <div class="body">
        <ul>
            <li v-for="(moneyList,i) in moneyLists" :key="i" @click="select(i,moneyList)" :class="{ active:i == selectId }">
                <p>{{ moneyList.money }}&nbsp;元</p>
                <img src="../assets/images/select.png" class="none" :class="{ Nnone:i == selectId }" >
            </li>
            <li class="random" @click="selectRandom" :class="{ active: isActive }">
                <input type="number" placeholder="输入金额" v-model="randommoney">
                <img src="../assets/images/select.png"  class="none" :class="{ Nnone:isActive }" >
            </li>
        </ul>
    </div>
    <div class="bottom" @click="goFloat">
        <p>我要充值</p>
    </div>
    <div class="float" v-show="float">
        <div class="fdetail">
            <p>本次充值
                <span >{{ money }}</span>
                元
            </p>
            <div class="wxpay">微信支付</div>
            <div class="alipay">支付宝支付</div>
            <div class="close" @click="float=false">取消</div>
        </div>
    </div>
</div>
</template>
<script>
export default {
   data() {
    return {
        moneyLists: [
            {money:12},{money:50},{money:100},{money:200},{money:500},{money:1000}
        ],
        money: 12,
        selectId: 1,
        isActive: false,
        float: false,
        randommoney: ''
    }
    },
    methods: {
        select(item,moneyList) {
            this.money = moneyList.money
            this.isActive = false
            this.selectId = item
            this.randommoney = ''
        },
        selectRandom () {
            this.selectId = -1
            this.isActive = true
        },
        goFloat () {
            this.float = true
            if (this.randommoney) {
                this.money = this.randommoney
            }
        }
    },
    activated() {
        this.money = 12,
        this.selectId = 0,
        this.isActive = false
    }
}
</script>
<style lang="scss" scoped>
.recharge {
    .float {
        max-width:740px;
        min-width:320px;
        margin: 0 auto;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.65);
        .fdetail {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: #fff;
            height: 5rem;
            text-align: center;
            p {
                margin: .2rem 0;
                display: inline-block;
                font-size: .5rem;
                span {
                display: inline-block;
                font-size: .5rem;
                color: #ff4c4c;
                }
            }
            .wxpay {
                margin: .1rem .5rem;
                height: 1rem;
                border: 1px solid #ff4c4c;
                border-radius: .2rem;
                line-height: 1rem;
                font-size: .36rem;
                color: #ff4c4c;
            }
            .alipay {
                margin: .3rem .5rem;
                height: 1rem;
                border: 1px solid #ff4c4c;
                border-radius: .2rem;
                line-height: 1rem;
                font-size: .36rem;
                color: #ff4c4c;
            }
            .close {
                margin: .3rem .5rem;
                height: 1rem;
                border: 1px solid #cccccc;
                border-radius: .1rem;
                line-height: 1rem;
                font-size: .36rem;
                color: #cccccc;
            }
        }
    }
    .bottom {
        height: .9rem;
        background-color: #19b5ff;
        margin: .9rem .1rem;
        border-radius: .05rem;
        line-height: .9rem;
        p {
            font-size: .4rem;
            color: #ffffff;
            text-align: center;
        }
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
    .body {
        margin-top: .4rem;
        ul {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            li.active {
                border:1px solid #ff4c4c;
            }
            li {
                width: 28%;
                height: .8rem;
                border: 1px solid #cccccc;
                border-radius: .1rem;
                box-sizing: border-box;
                line-height: .8rem;
                margin: .2rem .2rem;
                position: relative;
                .none {
                    display:none;
                }
                .Nnone {
                width: .5rem;
                height: .5rem;
                display: inline-block;
                position: absolute;
                bottom: 0;
                right: 0;
                }
                P {
                    color: #333;
                    text-align: center;
                    font-size: .3rem;
                }
            }
            .random {
                height: .8rem;
                line-height: .8rem;
                input {
                    width: 100%;
                    color: #333;
                    text-align: center;
                }
                input::-webkit-input-placeholder{
                    color:#cccccc;
                    text-align: center;
                }
                input::-moz-placeholder{   /* Mozilla Firefox 19+ */
                    color:#cccccc;
                    text-align: center;
                }
                input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
                    color:#cccccc;
                    text-align: center;
                }
                input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
                    color:#cccccc;
                    text-align: center;
                }
            }
        }
    }
}
</style>
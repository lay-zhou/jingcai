<template>
<div class="jd">
    <!-- 上部分 -->
    <!-- <div class="top">
    </div> -->
    <!-- 设置积分倍数 -->
    <div class="mid">
        <span class="zx" @click="zx">最小</span>
        <span class="iconfont icon-jiajian jian" @click="jian"></span>
        <input type="number" v-model="num"
        max="100"
        style="ime-mode:Disabled"
        onKeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))">
        <span style="font-size:.6rem;color:white;margin-right:.2rem;">手</span>
        <span class="iconfont icon-jia jia" @click="jia"></span>
        <span class="zd" @click="zd">最大</span>
    </div>
    <!-- 开奖 -->
    <div class="bottom">
        <ul class="box">
            <li v-for="(list,i) in lists" :key='i' @click="submit(list)"  :class="{ active:i==ins }" >  
                <img :src="list.imgUrl" class="img1">
                        <span  class="img2" ></span>
                         <p v-show="!shakecenter">{{ list.name }}</p>
                <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" >
                    <div v-show="shakecenter" :class="[{ showit:i==id},{none:(i-4) },{openCard:i==id}]">
                        <img :src="list.imgUrl" class="img1">
                        <span  class="img2" ></span>
                    </div>
                </transition>
            </li>
        </ul>
            
        <div class="toast" v-show="toast">
            <span class="close" @click="close"></span>
            <span class="star"></span>
            <div class="wrapper">
                <div class="row" v-for="detail in details" :key="detail.left">
                    <p style="float:right;">
                        {{ detail.right }}
                    </p>
                    <p style="float:left;">
                        {{ detail.left }}
                    </p>
                </div>
                <img src="../assets/images/ren1.png" class="img1">
            <div class="submit" @click="ensure">
                    <img src="../assets/images/true.png" class="img3" >
                    <p>确认</p>
            </div>
            <img src="../assets/images/ren3.png" class="img2">
            </div>
        </div>

        <div class="shake-card" v-show="shake"></div>

        <div class="result" v-show="result">
            <div class="blin"></div>
            <div class="caidai"></div>
            <div class="resultcard">
                <div class="result-head"></div>
                <div class="result-body"></div>
                <div class="card">
                    <router-link to="/sz" class="win" ></router-link>
                </div>
            </div>
        </div>

    </div>

    <div class="echart">
        <p>找规律</p>
        <echart class="chart1" :width="width" :height="height" :scaleData="scaleData" :type="type"></echart>
    </div>
    <tendata :num="num" :num2="num2" :name="name"></tendata>
</div>
</template>


<script>
import echart from '../components/echart'
import tendata from '../components/tendata'
export default {
    data() {
        return {
            shake: false,
            toast: false,
            shakecenter : false,
            win: false,
            result: false,
            ins:0,
            id: Number,
            num : 1,
            name,
            card: '',
            alternate :'',
            lists:[
                {
                    imgUrl: require('../assets/images/pattern1.png'),
                    id:0,
                    name: '猜大'
                },
                {
                    imgUrl: require('../assets/images/pattern2.png'),
                    id:1,
                    name: '猜小'
                },{
                    imgUrl: require('../assets/images/pattern3.png'),
                    id:2,
                    name: '猜单'
                },
                {
                    imgUrl: require('../assets/images/pattern4.png'),
                    id:3,
                    name: '猜双'
                }
            ],
            details: [],
            width:320,
            height:270,
            type: 'pie',
            scaleData: [
            {
                'name': '大',
                'value': 10
            },
            {
                'name': '小',
                'value': 15
            },
            {
                'name': '单',
                'value': 14
            },
            {
                'name': '双',
                'value': 5
            }
        ]
        }
    },
    methods: {
        submit (item) {
            if (!this.shake) { 
                if (this.num > 100 ) {
                return false
            } else {
                clearInterval(this.alternate)
                this.name = item.name
                this.card = item.id
                this.details.push({
                        right: this.num,
                        left: '数量(类型)'
                    },
                    {
                        right: this.name,
                        left: '猜选种类'
                    },
                    {
                        right: 1,
                        left: '下注费'
                    },
                    {
                        right: 1,
                        left: '手续费'
                    },
                    {
                        right: this.num2,
                        left: '预计收益积分'
                    })
                this.toast = !this.toast
            }
        }  
        },
        ensure () {
            this.chart = true
            this.toast = false
            this.shake = true
            this.id = this.card
            this.shakecenter = true
            clearInterval(this.alternate)
            this.ins = -1
            this.details = []
            setTimeout(()=>{
                this.result = true
            },800)
        },
        async active () {
            let _this = this
             function getIns(){
              return new Promise((resolve, reject)=>{
                    _this.alternate= setInterval (()=>{
                        _this.ins += 1
                        resolve(_this.ins)
                        if (_this.ins > 3 ) {
                           _this.ins = 0
                        }
                    },2000)
            })
            }
            this.ins = await getIns()   
        },
        close() {
            this.details = []
            this.toast = false
        },
        beforeEnter(el) {
            el.style.zIndex = "1"
        },
        enter(el, done) {
            el.style.zIndex = '1002'
            done()
        },
        afterEnter(el) {

        },
        jian () {
            if (  this.num > 1) {
               this.num -= 1
            }
        },
        jia () {
            if ( this.num <100 ) {
                this.num +=1
            }
        },
        zx () {
            this.num = 1
        },
        zd () {
            this.num = 100
        }
},
    computed : {
        num2 () {
            return this.num*10
        }
    },
    mounted () {
        this.num = 1
        this.active()
    },
    components: {
        echart,
        tendata
    }
}
</script>
<style lang="scss" scoped>
.jd {
    margin-top: .5rem;
    .echart {
        width: 100%;
        height: 100%;
        text-align: center;
        margin-top: .23333rem;
        p {
            font-size: .4rem;
            color: #fff;

        }
        .chart1 {
            display: inline-block;
        }
    }
    .bottom {
        clear: both;
        margin-top: .3rem;
        width: 100%;
        height: 3.1rem;
        .shake-card {
            max-width: 740px;
            min-width: 320px;
            margin: 0 auto;
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            z-index: 1000;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,.85);
        }
        .toast {
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
        background: rgba(0,0,0,.85);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .close {
        margin-left: 5rem;
        width: .8rem;
        height: .8rem;
        background-image: url(../assets/images/close.png);
        background-size: 100% 100%;
        }
        .star {  
            display: block;
            width: 3rem;
            height: 1rem;
            background-image: url(../assets/images/star2.png);
            background-size: 100% 100%;
            margin-bottom: .2rem;
        }
        .wrapper {
            background-color: #fe5c51;
            width: 6rem;
            height: 7rem;
            border-radius: .2rem;
            text-align: center;
            .row {
                height: 1rem;
                line-height: 1rem;
                padding: 0 .2rem;
            }
        .submit {
            margin-top: .4rem;
            position: relative;
            display: inline-block;
            width: 3rem;
            height: 1rem;
            .img3 {
                position: absolute;
                display: block;
                width: 3rem;
                height: 1rem;
            }
            p {
                position: absolute;
                display: block;
                color: #fe5c51;
                font-size: .43rem;
                margin-left: 1.05rem;
                margin-top: .23rem;
            }
        }
        .img1 {
                width: 2rem;
                height: 2rem;
                margin-left: -1rem;
            }
        .img2 {
            width: 1.6rem;
            height: 1.8rem;
            margin-left: .3rem;
        }
        }   
    }
        .box {
        display: flex;
        width: 100%;
        height: 100%;
        flex-wrap: wrap;
            li {
                display: flex; 
                justify-content: center;
                width: 25%;
                position: relative;
                .none {
                display: none;
            }
                .showit {
                    display: block;
                }
                div.v-enter-to {
                    position: fixed;
                    max-width: 740px;
                    min-width: 320px;
                    margin:0 auto;
                    width: 100%;
                    height: 100%;
                    top: calc(50% - 1.95rem);
                    left: calc(50% - 1.35rem);
                    .img1 {
                        display: block;
                        width: 2rem;
                        height: 3rem;
                        margin-left: .33rem;
                        margin-top: .45rem;
                    }
                    .img2 {
                        display: block;
                        width: 2.7rem;
                        height: 3.9rem;
                    }
                }
                div.v-enter-to.openCard {
                z-index: 1001;
                -o-transform: scale(1);
                -ms-transform: scale(1);
                -moz-transform: scale(1);
                -webkit-transform: scale(1);
                transform: scale(1);
                -o-animation: openCard .8s linear forwards;
                -ms-animation: openCard .8s linear forwards;
                -moz-animation: openCard .8s linear forwards;
                -webkit-animation: openCard .8s linear forwards;
                animation: openCard .8s linear forwards;
            }
            @keyframes openCard {
                    10%,
                    30%,
                    50% {
                        -o-transform: scale(1) translateX(-1rem);
                        -ms-transform: scale(1) translateX(-1rem);
                        -moz-transform: scale(1) translateX(-1rem);
                        -webkit-transform: scale(1) translateX(-1rem);
                        transform: scale(1) translateX(-1rem);
                    }
                    20%,
                    40%,
                    60% {
                        -o-transform: scale(1) translateX(1rem);
                        -ms-transform: scale(1) translateX(1rem);
                        -moz-transform: scale(1) translateX(1rem);
                        -webkit-transform: scale(1) translateX(1rem);
                        transform: scale(1) translateX(1rem);
                    }
                    100% {
                        -o-transform: scale(1) translateX(90deg);
                        -ms-transform: scale(1) translateX(90deg);
                        -moz-transform: scale(1) translateX(90deg);
                        -webkit-transform: scale(1) translateX(90deg);
                        transform: scale(1) rotateY(90deg);
                    }
         }
                
                .img1 {
                    position: absolute;
                    display: block;
                    width: 1.5rem;
                    height: 2rem;
                    z-index: 2;
                    margin-top: .33rem;
                }
                .img2 {
                    background-image: url(../assets/images/card1.png);
                    position: absolute;
                    display: block;
                    width: 1.85rem;
                    height: 2.65rem;
                    z-index: 1;
                    -moz-background-size:100% 100%;
                    background-size:100% 100%;
                }
                p {
                    color: #fff;
                    font-size: .33rem;
                    z-index: 3;
                    margin-top: 2.8rem;
                }
            }
            li.active {
                        .img2 {
                            background-image: url(../assets/images/card2.png);
                        }
                        -o-animation: shaking 0.5s ease-in-out;
                        -ms-animation: shaking 0.5s ease-in-out;
                        -moz-animation: shaking 0.5s ease-in-out;
                        -webkit-animation: shaking 0.5s ease-in-out;
                        animation: shaking 0.5s ease-in-out;
            }
                        @keyframes shaking {
                        0%,
                        100% {
                            -o-transform: rotateY(0deg);
                            -ms-transform: rotateY(0deg);
                            -moz-transform: rotateY(0deg);
                            -webkit-transform: rotateY(0deg);
                            transform: rotateY(0deg);
                        }
                        33% {
                            -o-transform: rotateY(-20deg);
                            -ms-transform: rotateY(-20deg);
                            -moz-transform: rotateY(-20deg);
                            -webkit-transform: rotateY(-20deg);
                            transform: rotateY(-20deg);
                        }
                        66% {
                            -o-transform: rotateY(20deg);
                            -ms-transform: rotateY(20deg);
                            -moz-transform: rotateY(20deg);
                            -webkit-transform: rotateY(20deg);
                            transform: rotateY(20deg);
                        }
            }
        }
        .result {
            transform-style: preserve-3d;
            z-index: 1002;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            max-width: 740px;
            min-width: 320px;
            margin: 0 auto;
            width: 100%;
            .blin {
                position: absolute;
                z-index:1002;
                width: 100%;
                height: 10rem;
                background-image: url(../assets/images/gold.png);
                background-size: 100% 100%;
                -o-animation: circle 10s linear infinite;
                -ms-animation: circle 10s linear infinite;
                -moz-animation: circle 10s linear infinite;
                animation: circle 10s linear infinite;
                margin-top: 2rem;
            }
            @keyframes circle {
                0% {
                -o-transform: rotate(0deg);
                -ms-transform: rotate(0deg);
                -moz-transform: rotate(0deg);
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            100% {
                -o-transform: rotate(360deg);
                -ms-transform: rotate(360deg);
                -moz-transform: rotate(360deg);
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
            }
            }
            .caidai {
                position: absolute;
                width: 100%;
                height:10rem;
                background-image: url(../assets/images/dianzhui.png);
                background-size:100% 100%;
                z-index: 1003;
                margin-top: 2rem;
                -o-transform: scale(1.2);
                -ms-transform: scale(1.2);
                -moz-transform: scale(1.2);
                -webkit-transform: scale(1.2);
                transform: scale(1.2);
            }
            .resultcard {
                position: absolute;
                left: calc(50% - 3.6rem);
                top: 4rem;
                z-index: 1004;
                width: 7.2rem;
                height: 100%;
                -o-transform: scale(0.1);
                -ms-transform: scale(0.1);
                -moz-transform: scale(0.1);
                -webkit-transform: scale(0.1);
                transform: scale(0.1);
                -o-animation: reback .5s linear forwards;
                -ms-animation: reback .5s linear forwards;
                -moz-animation: reback .5s linear forwards;
                -webkit-animation: reback .5s linear forwards;
                animation: reback .5s linear forwards;
                @keyframes reback {
                    100% {
                        -o-transform: scale(1);
                        -ms-transform: scale(1);
                        -moz-transform: scale(1);
                        -webkit-transform: scale(1);
                        transform: scale(1);
                    }
                    
                }
                .result-head {
                    z-index: 1004;
                    position: relative;
                    background-image: url('../assets/images/top.png');
                    background-size: 100% 100%;
                    width : 100%;
                    height: 4.5rem;
                }
                .result-body {
                    z-index: 1007;
                    position: relative;
                    top: -1.6rem;
                    background-image: url('../assets/images/bottom.png');
                    background-size: 100% 100%;
                    width:100%;
                    height: 4rem;
                }
                .card {
                    z-index: 1005;
                    position: relative;
                    width: 88%;
                    height: 4rem;
                    top: -7.6rem;
                    margin: 0 auto;
                    background-image: url(../assets/images/middle.png);
                    background-size: 100% 100%;
                    .win {
                        position: relative;
                        top: .15rem;
                        margin: 0 auto;
                        display: block;
                        z-index: 1006;
                        background-image: url(../assets/images/prize2.png);
                        background-size: 100% 100%;
                        width: 6rem;
                        height: 4rem;
                    }
                }           
            }
    }
    }
    .mid {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 1rem;
        line-height: 1rem;
        margin:0 .3rem;
        margin-top: .2rem;
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }
        input[type="number"] {
            -moz-appearance: textfield;
        }
        input {
            background-color: transparent;
            text-align: center;
            line-height: 1rem;
            color: #fff;
            font-size: .6rem;
            width: 1.5rem;
        }
        .zx {
            margin-right: .3rem;
            display: inline-block;
            border-radius:.2rem;
            color: #fff;
            background-color: aqua;
            width: 1.2rem;
            height: .5rem;
        }
        span.zx {
            text-align: center;
            line-height: .5rem;
        }
        .zd {
            margin-left: .3rem;
            border-radius:.2rem;
            color: #fff;
            display: inline-block;
            background-color: fuchsia;
            width: 1.2rem;
            height: .5rem;
        }
        span.zd {
            text-align: center;
            line-height: .5rem;
        }
        .jian {
            color: aqua;
            font-size: .4rem;
        }
        p {
            margin: 0 0.6rem;
            display: inline-block;
            font-size: .6rem;
            font-weight: 500;
        }
        .jia {
            color: fuchsia;
            font-size: .4rem;
        }
    }
    .top {
        // height: 1rem;
        // line-height: 1rem;
        margin-left: .3rem;
        .rule {
        height: .8rem;
        line-height: .8rem;
        float: right;
        p {
            display: inline-block;
            margin-left: .2rem;
        }
        span {
            display: inline-block;
        }
        }
        .left {
            height: 100%;
            width: 42%;
            float: left;
            position: relative;
            margin-right: .2rem;
            .img {
                height: 100%;
                width: 100%;
                position: absolute;
            } 
            p {
                margin-left: 0.1rem;
                text-align: center;
                position: absolute;
                font-size: .26rem;
                width: 100%;
            }
        }
    }
}
</style>
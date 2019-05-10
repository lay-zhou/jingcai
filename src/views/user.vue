<template>
<div class="user">
    <!-- 头部 -->
    <div class="header">
        <div class="back">
            <router-link to="/">返回游戏</router-link>
        </div>
        <div class="htop">
            <div class="left">
                <img src="../assets/images/bg9.jpg" >
            </div>
            <div class="middle">
                <p>雨世</p>
                <span>ID:888</span>
            </div>
            <router-link to="/recharge">
                <div class="right">
                    <p>充值中心</p>
                    <span class="iconfont icon-chongzhi1"></span>
                </div>
            </router-link>
        </div>
        <div class="hbottom">
            <div class="bottom">
                <div class="gamejifen">
                    <p>游戏积分</p>
                    <span>
                        0.00
                    </span>
                </div>
                <div class="invitejifen">
                    <p>邀请积分</p>
                    <span>
                        0.00
                    </span>
                </div>
            </div>
        </div>
    </div>
    <!-- 广告 -->
    <div class="ad">
        <router-link to="/myshare">
            <img src="../assets/images/ad1.jpg" alt="">
        </router-link>
    </div>
    <!-- 下面部分 -->
    <div class="body">
        <div class="btop">
            <router-link to="/jd">
                <div class="game">
                    <span class="iconfont icon-jiantou1"></span>
                    <p class="right">惊喜不断</p>
                    <img src="../assets/images/game.png" alt="">
                    <p class="left">掌上夺宝</p>
                </div>
            </router-link>
            <router-link to="/jfshop">
                <div class="jifenshop">
                    <img src="../assets/images/jifenshop.png" alt="">
                    <span class="iconfont icon-jiantou1"></span>
                    <p>精彩好礼</p>
                </div>
            </router-link>
        </div>
        <div class="bmiddle"></div>
        <div class="bbottom">
            <router-link to="/myteam">
                <div class="row">
                    <img src="../assets/images/team.png" alt="">
                    <p class="font">我的团队</p>
                </div>
            </router-link>
            <router-link to="/mybusiness">
                <div class="row">
                    <img src="../assets/images/chargedetail.png" alt="">
                    <p class="font">交易明细</p>
                </div>
            </router-link>
            <router-link to="/service">
                <div class="row">
                    <img src="../assets/images/service.png" alt="">
                    <p class="font">联系客服</p>
                </div>
            </router-link>
        </div>
    </div>
</div>
</template>
<script>
export default {
   data() {
    return {
        str: 'gogo'
    }
    },
    methods: {
        getData() {
            console.log(this.str)
        }
    },
    activated () {
        this.getData()
    }
}
</script>
<style lang="scss" scoped>
.user {
    max-width:740px;
    min-width:320px;
    margin: 0 auto;
    width:100%;
    background:#ffffff;
    height: 100%    ;
    z-index:-1;
    zoom: 1;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: center 0;
    background-size: 100% 100%;
    .back {
        height: .8rem;
        line-height: .8rem;
        width: 1.5rem;
        background-color: #fe5362;
        border-top-right-radius: .1rem;
        border-bottom-right-radius: .1rem;
        position: relative;
        top: .2rem;
        a {
            color: #fff;
            margin-left: .18rem;
        }
    }
    .header {
        width: 100%;
        height: 3.8rem;
        background-color: #f9cd0d;
        .htop {
            height: 1rem;
            margin: 0 .5rem;
            padding: .5rem 0;
            display: flex;
            align-items: center;
           .left {
            img {
                box-shadow: 0 5px 17px #660;
                display: block;
                border: 1px solid #ffffff;
                width: 1.1rem;
                height: 1.1rem;
                border-radius: 50%;
                }
            }
            .middle {
                margin-left: .2rem;
                p {
                    font-size: .35rem;
                }
                span {
                    margin-top: .08rem;
                    font-size: .25rem;
                    display: block;
                }
            }
            a {
                display: block;
                margin-left: auto;
                .right {
                display: flex;
                align-items: center;
                span {
                    margin-left: .08rem;
                    display: inline-block;
                    color:#fe5362;
                    font-size: .6rem;
                }
                p {
                    display: inline-block;
                    font-size: .38rem;
                }
            }
            }
            
        }
        .hbottom {
            height: 1.5rem;
            width: 100%;
            .bottom {
                height: 100%;
                display: flex;
                width: 66%;
                background-color: #fff;
                margin: 0 auto;
                box-shadow: 0 5px 17px #ddd;
                border-radius: .15rem;
                .gamejifen {
                    width: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    p {
                        color: #333;
                        font-size: .3rem;
                    }
                    span {
                        color: #ff6d1a;
                        margin-top: .2rem;
                        font-size: .3rem;
                    }
                }
                .invitejifen {
                    width: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    p {
                        color: #333;
                        font-size: .3rem;
                    }
                    span {
                        color: #ff6d1a;
                        margin-top: .2rem;
                        font-size: .3rem;
                    }
            }
            }
        }
    }
    .ad {
        margin-top: .78rem;
        width: 100%;
        img {
            width: 100%;
            height: 1.6rem;
        }
    }
    .body {
        margin-top: .1rem;
        width: 100%;
        height: 100%;
        .btop {
             margin: 0 .2rem;
            width: 100%;
            height: 3rem;
            .game {
                border-bottom: 1px solid #f5f5f5;
                border-top: 1px solid #f5f5f5;
                width: 100%;
                height: 1.5rem;
                line-height: 1.5rem;
                img {
                    display: inline-block;
                    width: 1.1rem;
                    height: 1.1rem;
                }
                .left {
                    margin-left: .1rem;
                    vertical-align: middle;
                    display: inline-block;
                    color: #333;
                    font-size: .43rem;
                }
                span.icon-jiantou1 {
                    display: block;
                    margin-left: .15rem;
                    float: right;
                    color: #cccccc;
                    font-size: .42rem;
                    margin-right: .2rem;
                }
                .right {
                    float: right;
                    font-size: .36rem;
                    color: #cccccc;
                }
            }
            .jifenshop {
                margin-top: 0rem;
                width: 100%;
                height: 1.5rem;
                line-height: 1.5rem;
                border-bottom: 1px solid #f5f5f5;
                img {
                    width: 2.5rem;
                    height: 1.6rem;
                }
                p {
                    vertical-align: middle;
                    float: right;
                    font-size: .36rem;
                    color: #cccccc;
                }
                span.icon-jiantou1 {
                    margin-left: .15rem;
                    margin-right: .2rem;
                    float: right;
                    color: #cccccc;
                    font-size: .42rem;
                }
            }
        }
        .bmiddle {
                background-color: #f5f5f5;
                height: .3333rem;
            }
        .bbottom {
            margin: .2rem .2rem;
            width: 100%；
            height：5rem;
            .row {
                width: 100%;
                height: 1.2rem;
                line-height: 1.2rem;
                img {
                    display: inline-block;
                    width: .7rem;
                    height: .65rem;
                }
                p {
                    margin-left: .2rem;
                    font-size: .42rem;
                    display: inline-block;
                }
            }
        }
    }
}
</style>
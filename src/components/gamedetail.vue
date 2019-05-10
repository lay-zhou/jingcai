<template>
<div class="jfxx">
    <div style="background:#eeeeee; width:100%; height: .3rem;"></div>
    <div class="title">
        <p>游戏明细</p>
    </div>
    <div class="body">
        <ul>
            <li v-for="gameList in gameLists" :key="gameList.id">
                <div class="left"></div>
                <div class="right">
                    <div class="top">
                        <p class="time">{{ gameList.time }}</p>
                        <p class="type">{{ gameList.type }} {{ gameList.times }}手</p>
                    </div>
                    <div class="middle">
                        <p class="result">猜中</p>
                        <span>+{{ gameList.jf }}积分</span>
                    </div>
                    <div class="odd">单号尾号: <span style="color:#ff4c4c;">{{ gameList.odd }}</span></div>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
export default {
   data() {
    return {
        gameLists: [
            { id:0 ,type: '猜单', time: '2018/12/9  16:36:10', jf: 10, times: 1, odd: 1},
            { id:1 ,type: '猜双', time: '2018/12/9  16:36:10', jf: 10, times: 1, odd: 3},
            { id:2 ,type: '猜大', time: '2018/12/9  16:36:10', jf: 10, times: 1, odd: 7},
            { id:3 ,type: '猜小', time: '2018/12/9  16:36:10', jf: 10, times: 1, odd: 4},
            { id:4 ,type: '猜小', time: '2018/12/9  16:36:10', jf: 10, times: 1, odd: 0},
            { id:5 ,type: '猜小', time: '2018/12/9  16:36:10', jf: 10, times: 1, odd: 8}
        ]
    }
    }
}
</script>
<style lang="scss" scoped>
.jfxx {
    .body {
        height: 100%;
        margin: .2rem .2rem;
        ul {
            li {
                display: flex;
                height: 100%;
                padding: .18rem 0;
                border-bottom: 1px solid #cccccc;
                align-items: center;
                .left {
                    margin-left: .2rem;
                    width: .8rem;
                    height: .8rem;
                    background-image: url('../assets/images/game2.png');
                    background-size: cover;
                    display: block;
                }
                .right {
                    display: block;
                    margin-left: .5rem;
                    .top {
                        height: .6rem;
                        line-height: .6rem;
                        .type {
                        font-size: .35rem;
                        display: inline-block;
                        }
                        .time {
                            font-size: .33rem;
                            color: #cccccc;
                            float: right;
                            margin-left: .2rem;
                        }
                    }     
                    .middle {
                        margin-top: .06rem;
                        height: .6rem;
                        line-height: .6rem;
                        .result {
                        display: block;
                        float: left;
                        border: 1px solid #009933;
                        border-radius: .1rem;
                        width: 1rem;
                        height: .5rem;
                        line-height: .5rem;
                        color: #009933;
                        text-align: center;
                        margin-right: .12rem;
                        font-size: .32rem;
                        }
                        span {
                            display: inline-block;
                            color: #009933;
                            font-size: .35rem;
                        }
                    }
                    .odd {
                        height: .6rem;
                        line-height: .6rem;
                        display: block;
                        font-size: .35rem;
                    }
                }
            }
        }
    }
    .title {
        text-align: center;
        margin: 0 auto;
        width: 100%;
        height: .6rem;
        line-height: .6rem;
        margin:.2rem 0;
        background-image: url('../assets/images/title-bg.png');
        background-size: 100% 100%;
    }
}
</style>
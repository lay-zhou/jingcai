<template>
<div class="jfxx">
    <div style="background:#eeeeee; width:100%; height: .3rem;"></div>
    <div class="title">
        <p>积分详细</p>
    </div>
    <div class="body">
        <ul>
            <li v-for="jfxxList in jfxxLists" :key="jfxxList.id">
                <div class="left"></div>
                <div class="right">
                    <p class="type">{{ jfxxList.type }}</p>
                    <p class="time">{{ jfxxList.time }}</p>
                    <span>+{{ jfxxList.jf }}积分</span>
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
        jfxxLists: [
            { id:0 ,type: '充值', time: '2018/12/9  16:36:10', jf: 10 },
            { id:1 ,type: '充值', time: '2018/12/9  16:36:10', jf: 10 },
            { id:2 ,type: '充值', time: '2018/12/9  16:36:10', jf: 10 },
            { id:3 ,type: '充值', time: '2018/12/9  16:36:10', jf: 10 },
            { id:4 ,type: '充值', time: '2018/12/9  16:36:10', jf: 10 },
            { id:5 ,type: '充值', time: '2018/12/9  16:36:10', jf: 10 },
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
                display: block;
                height: 100%;
                padding: .18rem 0;
                border-bottom: 1px solid #cccccc;
                .left {
                    margin-left: .2rem;
                    width: .8rem;
                    height: .8rem;
                    background-image: url('../assets/images/jfxx1.png');
                    background-size: cover;
                    display: inline-block;
                }
                .right {
                    display: inline-block;
                    margin-left: .5rem;
                    height: .48rem;
                    line-height: .48rem;
                    .type {
                        font-size: .35rem;
                        display: inline-block;
                    }
                    .time {
                        font-size: .33rem;
                        color: #cccccc;
                        display: inline-block;
                        margin-left: .2rem;
                    }
                    span {
                        display: block;
                        color: #ff4c4c;
                        font-size: .33rem;
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
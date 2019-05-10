<template>
<div class="tendata">
    <p class="title">最近十次夺宝记录</p>
    <div class="row">
        <div class="right">
            <p>尾数</p>
            <span class="">1</span>
        </div>
        <div class="left">
            <p>{{ name }}&nbsp;{{ num }}手</p>
            <span style="color:red;" v-if="red">盈利{{ num2 }}积分</span>
            <span style="color:#f5f5f5" v-else>亏损{{ num2 }}积分</span>
        </div>
    </div>
</div>
</template>
<script>
export default {
    props:{
        name:{
            required:true,
            type: String
        },
        num:{
            required:true,
            type: Number
        },
        num2:{
            required:true,
            type:Number
        }
    },
   data() {
    return {
        red: ''
    }
}
}
</script>
<style lang="scss" scoped>
.tendata {
    border-top: 2px solid #cccccc;
    margin: 0 .2rem;
    .title {
        text-align: center;
        margin: .2rem 0;
        color: #ffffff;
        font-size: .4rem;
    }
    .row {
        width: 100%;
        height: .6rem;
        color: yellow;
        line-height: .6rem;
        .right {
            float: right;
            p {
                font-size: .33rem;
                display: inline-block;
            }
            span {
                margin-left: .1rem;
                display: inline-block;
                font-size: .35rem;
            }
        }
        .left {
            float: left;
            p {
                color: yellow;
                font-size: .33rem;
                display: inline-block;
            }
            span {
                margin-left: .2rem;
                display: inline-block;
                font-size: .35rem;
            }
        }
    }
}
</style>
<template>
<div class="jfdh">
    <div style="background:#eeeeee; width:100%; height: .3rem;"></div>
    <div class="title">
        <p>积分兑换</p>
    </div>
    <div class="body">
        <ul>
            <li>
                <img src="../assets/images/jfdh1.jpg" alt="">
                <p>优惠卷兑换</p>
                <span>立即兑换</span>
            </li>
            <li>
                <img src="../assets/images/jfdh2.jpg" alt="">
                <p>产品兑换</p>
                <span>立即兑换</span>
            </li>
            <li>
                <img src="../assets/images/jfdh2.jpg" alt="">
                <p>产品兑换</p>
                <span>立即兑换</span>
            </li>
            <li>
                <img src="../assets/images/jfdh2.jpg" alt="">
                <p>产品兑换</p>
                <span>立即兑换</span>
            </li>
            <li>
                <img src="../assets/images/jfdh2.jpg" alt="">
                <p>产品兑换</p>
                <span>立即兑换</span>
            </li>
            <li>
                <img src="../assets/images/jfdh2.jpg" alt="">
                <p>产品兑换</p>
                <span>立即兑换</span>
            </li>
        </ul>
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
.jfdh {
    width: 100%;
    height: 100%;
    .body {
        margin: .1rem;
        ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            li {
                text-align: center;
                width: 30%;
                margin-right: .1rem;
                margin-top: .2rem;
                img {
                    width: 100%;
                }
                p {
                    margin: .02rem;
                }
                span {
                    margin-top: .1rem;
                    line-height: .5rem;
                    color: #ff4c4c;
                    width: 1.8rem;
                    height: .5rem;
                    display: inline-block;
                    border: 1px solid #ff4c4c;
                    border-radius: .2rem;
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
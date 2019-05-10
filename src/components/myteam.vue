<template>
<div class="myteam" ref="myteam">
    <div class="header">
        <router-link to="/user">
          <span class="iconfont icon-fanhui"></span>
        </router-link>
        <p>我的团队</p>
    </div>
    <div class="body">
        <p class="title">我的团队</p>
        <div class="content">
            <ul class="top">
                <li>
                    <p>一级人员</p>
                    <span>0</span>
                </li>
                <li>
                    <p>二级人员</p>
                    <span>0</span>
                </li>
                <li style="border:1px solid #fff;">
                    <p>三级人员</p>
                    <span>0</span>
                </li>
            </ul>
            <ul class="bottom">
                <li>
                    <p>四级人员</p>
                    <span>0</span>
                </li>
                <li style="border:1px solid #fff;">
                    <p>五级人员</p>
                    <span>0</span>
                </li>
            </ul>
        </div>
    </div>
    <div class="body">
        <p class="title">佣金比例</p>
        <div class="content">
            <ul class="top">
                <li>
                    <p>一级</p>
                    <span>0</span>
                </li>
                <li>
                    <p>二级</p>
                    <span>0</span>
                </li>
                <li style="border:1px solid #fff;">
                    <p>三级</p>
                    <span>0</span>
                </li>
            </ul>
            <ul class="bottom">
                <li>
                    <p>四级</p>
                    <span>0</span>
                </li>
                <li style="border:1px solid #fff;">
                    <p>五级</p>
                    <span>0</span>
                </li>
            </ul>
        </div>
    </div>
    <div class="body">
        <p class="title">积分</p>
        <div class="content">
            <ul class="bottom">
                <li>
                    <p>今日积分</p>
                    <span>0</span>
                </li>
                <li style="border:1px solid #fff;">
                    <p>总积分</p>
                    <span>0</span>
                </li>
                <li style="border:1px solid #fff;">
                    <p>上级ID</p>
                    <span>8888</span>
                </li>
            </ul>

        </div>
    </div>
</div>
</template>
<script>
export default {
   data() {
    return {

    }
    },
    methods: {
        getDevice() {
            this.$refs.myteam.style.height = document.body.scrollHeight + 'px'
        }
    },
    mounted() {
        this.getDevice()
    }
}
</script>
<style lang="scss" scoped>
.myteam {
    background-color: #f5f5f5;
    .body {
        margin: .4rem;
        height: 4rem;
        background-color: #fff;
        box-shadow: 0 1px 17px #ddd;
        border-radius: .2rem;
        .title {
            font-size: .42rem;
            text-align: center;
            padding: .2rem;
        }
        .content {
            .top {
                display: flex;
                justify-content: center;
                li {
                    width: 30%;
                    text-align: center;
                    border-right: 1px solid #cccccc;
                    p {
                        color: #cccccc;
                        margin-top: .2rem;
                        font-size: .4rem;
                    }
                    span {
                        display: inline-block;
                        margin-top: .2rem;
                        color: #f9cd0d;
                        font-size: .45rem;
                    }
                }
            }
            .bottom {
                margin-top: .3rem;
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                li {
                    width: 48%;
                    text-align: center;
                    border-right: 1px solid #cccccc;
                    
                    p {
                        color: #cccccc;
                        margin-top: .2rem;
                        font-size: .4rem;
                    }
                    span {
                        display: inline-block;
                        margin-top: .2rem;
                        color: #f9cd0d;
                        font-size: .45rem;
                    }
                }
            }
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
}
</style>
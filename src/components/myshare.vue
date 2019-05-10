<template>
<div class="myshare" ref="myshare">
     <div class="header">
        <router-link to="/user">
          <span class="iconfont icon-fanhui"></span>
        </router-link>
        <p>我的专属二维码</p>
    </div>
    <p class="download" @click="downs">保存到本地</p>
</div>
</template>
<script>
export default {
   data() {
    return {
    }
    },
    methods: {
        downloadIamge(imgsrc, name) {//下载图片地址和图片名
        let image = new Image()
        // 解决跨域 Canvas 污染问题
        image.setAttribute("crossOrigin", "anonymous")
        image.onload = function() {
            let canvas = document.createElement("canvas")
            canvas.width = image.width
            canvas.height = image.height
            let context = canvas.getContext("2d")
            context.drawImage(image, 0, 0, image.width, image.height)
            let url = canvas.toDataURL("image/png") //得到图片的base64编码数据
            let a = document.createElement("a") // 生成一个a元素
            let event = new MouseEvent("click") // 创建一个单击事件
            a.download = name || "photo" // 设置图片名称
            a.href = url // 将生成的URL设置为a.href属性
            a.dispatchEvent(event) // 触发a的单击事件
        }
        image.src = imgsrc
        },
        downs(){
        this.downloadIamge('https://cdn.w7.cc/web/resource/images/wechat/static/install/banner.png', 'ID:111专属图')
        }
    },
    mounted () {
    },
    activated () {
        let ele = this.$refs.myshare.style
        ele.width = window.screen.width + 'px'
        ele.height = window.screen.height + 'px'
    }
}
</script>
<style lang="scss" scoped>
.myshare {
    background-image: url('../assets/images/bgma.jpg');
    background-size: cover;
    background-position: center 0;
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
    .download {
        display: inline-block;
        border: 1px solid #19b5ff;
        width: 2.4rem;
        height: .6rem;
        border-radius: .1rem;
        line-height: .6rem;
        text-align: center;
        color: #ffffff;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        font-size: .333rem;
        margin-bottom: .2rem;
    }
}
</style>
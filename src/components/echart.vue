<template>
<div id="myChart" :style="{width: width + 'px', height: height + 'px'}"></div>
</template>
<script>
export default {
   props: {
       scaleData: {
           required: true
       },
       type: {
           type: String,
           required: true
       },
       width: {
           type: Number,
           required: true
       },
       height: {
           type: Number,
           required: true
       }
   },
   data() {
    return {
        rich: {
        white: {
            color: '#ddd',
            align: 'center',
            padding: [3, 0]
        }
    },
        placeHolderStyle: {
        normal: {
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            color: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 0
        }
    },
        data: [],
        color: ['#00ffff', '#00cfff', '#006ced', '#ffe000', '#ffa800', '#ff5b00', '#ff3000', '#338de6', '#e65a33', '#e63333'],
        option : '',
        seriesObj : ''
        }
    },
    methods: {
        getChart () {
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            for (let i = 0; i < this.scaleData.length; i++) {
            this.data.push({
                value: this.scaleData[i].value,
                name: this.scaleData[i].name,
                itemStyle: {
                    normal: {
                        borderWidth: 5,
                        shadowBlur: 20,
                        borderColor: this.color[i],
                        shadowColor: this.color[i]
                    }
                    }
                }, {
                    value: 2,
                    name: '',
                    itemStyle: this.placeHolderStyle
                })
            }
            let _this = this
            this.seriesObj = [
                {
                name: '',
                type: _this.type,
                clockWise: false,
                radius: [95, 100],
                hoverAnimation: false,
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'outside',
                            color: '#ddd',
                            formatter(params){

                                let percent = 0
                                let total = 0
                                for (let i = 0; i < _this.scaleData.length; i++) {
                                    total += _this.scaleData[i].value
                                }
                                percent = ((params.value / total) * 100).toFixed(0)
                                if (params.name !== '') {
                                    return params.name + '\n{white|' + '占比' + percent + '%}'
                                } else {
                                    return ''
                                }
                            },
                            rich: this.rich
                        },
                        labelLine: {
                            length: 2,
                            length2: 10,
                            show: true,
                            color: '#00ffff'
                        }
                    }
                },
                data: this.data
            }]

                        this.option = {
                        backgroundColor: 'transparent',
                        tooltip: {
                            show: false
                        },
                        legend: {
                            show: false
                        },
                        toolbox: {
                            show: false
                        },
                        series: this.seriesObj
                        }
                        myChart.setOption(this.option)
        }
    },
    mounted() {
        this.getChart()  
    }
}
</script>
<style lang="scss" scoped>
</style>
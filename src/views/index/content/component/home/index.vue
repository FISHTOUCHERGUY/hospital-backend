<template>
  <div class="home">
    <div class="card">
        <el-card>医师人数
            <span>10</span>
        </el-card>
        
        <el-card>药物种类
            <span>10</span>
        </el-card>
        <el-card>合作企业
            <span>10</span>
        </el-card>
        <el-card>入驻药店
            <span>10</span>
        </el-card>
    </div>
    <div class="echart">
      <div id="myEcharts" :style="{ width: '600px', height: '250px' }"></div>
    </div>
    <div class="bottomCard">
        <el-card>
            医院科室
        </el-card>
        <el-card>
            最新政策
        </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import { onMounted, onUnmounted } from "vue";

let echart = echarts;

onMounted(() => {
  initChart();
});

const initChart = () => {
  let chart = echart.init(document.getElementById("myEcharts"), "");
  // 把配置和数据放这里
  chart.setOption({
    xAxis: {
      type: "category",
      data: [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月",
      ],
    },
    tooltip: {
      trigger: "axis",
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320, 801, 102, 230, 4321, 4129],
        type: "line",
        smooth: true,
      },
    ],
  });
  window.onresize = function () {
    //自适应大小
    chart.resize();
  };
};
</script>

<style scoped lang="scss">
.home {
  display: flex;
  align-items: center;
  flex-direction: column;
  .echart {
    border: 2px solid gainsboro;
    margin-top: 40px;
  }
  .card{
    margin-top: 20px;
    display: flex;
    .el-card{
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
        margin-right: 20px;
        width: 200px;
    }
    span{
        color: rgb(119, 159, 239);
    }
  }
  .bottomCard{
    display: flex;
    .el-card{
        color: rgb(99, 101, 101);
        font-size: 12px;
        font-weight: 1000;
        display: flex;
        flex-wrap: wrap;
        margin-right: 40px;
        width: 400px;
        height: 100px;

    }
  }
}
</style>

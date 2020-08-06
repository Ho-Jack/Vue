<template>

  <div>
    <el-row>
      <el-col :span="12">
        <span>信息概况</span>
        <el-row>
          <el-col :span="4">
            <p>在建项目</p>
            <p>69</p>
          </el-col>
          <el-col :span="4">
            <p>本月新增项目</p>
            <p>69</p>
          </el-col>
          <el-col :span="4">
            <p>考勤项目</p>
            <p>69</p>
          </el-col>
          <el-col :span="4">
            <p>参建企业</p>
            <p>69</p>
          </el-col>
          <el-col :span="4">
            <p>已发工资</p>
            <p>69</p>
          </el-col>
          <el-col :span="4">
            <p>实名人员</p>
            <p>69</p>
          </el-col>

        </el-row>
      </el-col>
      <el-col :span="12">
        <span>设备安装情况</span>
        <el-row>
          <el-col :span="5">
            <p>视频监控</p>
            <p>69</p>
          </el-col>
          <el-col :span="5">
            <p>车辆识别</p>
            <p>69</p>
          </el-col>
          <el-col :span="5">
            <p>扬尘噪音</p>
            <p>69</p>
          </el-col>
          <el-col :span="5">
            <p>塔吊</p>
            <p>69</p>
          </el-col>
          <el-col :span="4">
            <p>升降机</p>
            <p>69</p>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col
        :span="12"
        class="map-chart"
      >
        <div class="chart-container">
          <span class="map-data">
            <ul>
              <li class="map-tooltip-title">洛阳市</li>
              <li
                v-for="item in sortMapData"
                :key="item.name"
              >
                <span>{{ item.name }}</span>
                <span
                  :style="{width:item.value*1.2+'em'}"
                  class="map-tooltip"
                />
                <span>{{ item.value }}</span>
              </li>
            </ul>
          </span>
          <mapChart
            id="mapChart"
            height="100%"
            width="100%"
          />
        </div>
      </el-col>
      <el-col :span="12">
        <el-row>
          <el-col class="chart-container">
            <firstBarChar
              id="firstBarChar"
              height="100%"
              width="100%"
            />
          </el-col>
        </el-row>
        <el-row>
          <el-col class="chart-container">
            <secondBarChar
              id="secondBarChar"
              height="100%"
              width="100%"
            />
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>

</template>

<script>
import firstBarChar from '@/components/Charts/zglBarChart'
import secondBarChar from '@/components/Charts/wffgzBarChart'
import mapChart from '../../components/Charts/luoyangMap'
export default {
  name: 'MixChart',
  components: { firstBarChar,
    secondBarChar,
    mapChart },
  data() {
    return {
      mapData: [
        {
          name: 11,
          value: 1
        },
        {
          name: 33,
          value: 3
        },
        {
          name: 22,
          value: 2
        },
        {
          name: 44,
          value: 4
        }
      ]
    }
  },
  computed: {
    sortMapData: function() {
      return this.sortByKey(this.mapData, 'value')
    }
  },
  methods: {
    // 根据对象中的某个字段，进行排序
    sortByKey(array, key) {
      return array.sort(function(a, b) {
        var x = a[key]
        var y = b[key]
        return (y - x)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.chart-container {
  position: relative;
  width: 100%;
  height: 370px;
}
.map-chart {
  .chart-container {
    position: relative;
    width: 100%;
    height: 800px;
    .map-data {
      position: absolute;
      color: white;
      z-index: 999;
      li {
        list-style: none;
      }
      .map-tooltip-title {
        padding-left: 10px;
        margin-bottom: 10px;
        border-left: 5px solid #b6ff77;
      }
      .map-tooltip {
        display: inline-block;
        border: 1px solid #051e41;
        border-radius: 3px;
        background-color: #b92b2b;
        height: 13px;
      }
    }
  }
}
</style>


<!-- 11 -->
<template>
  <div>
    <!--视频窗口展示-->
    <div
      id="playWnd"
      class="playWnd"
    ></div>
    <el-button @click="PalyVideo('5e8b8f65fa1b436bb3ca2dbc66c941f7');">Ehome测试</el-button>

  </div>
</template>

<script>
import video from "./video/video"
export default {

  data () {
    return {
      initCount: 0,
      pubKey: ''
    };
  },

  mounted () {
    video.initPlugin()
  },

  methods: {
    PalyVideo (val) {
      video.PalyVideo(val)
    }
  }
}

</script>
<style lang='scss' scoped>
.playWnd {
  margin: 30px 0 0 400px;
  width: 1000px; /*播放容器的宽和高设定*/
  height: 600px;
  border: 1px solid red;
}
</style>
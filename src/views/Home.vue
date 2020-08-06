<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
   <!--  <video1></video1> -->
   <div class="DetailsTags" @click="showCustomPopupClick">
    <div class="Detailscenter F12 ML10">7天无理由退货</div>
</div >
<CustomPopup ref="CustomPopupRef">
    <div slot="PoperContent" class="PoperContentView">
          <div class="ServiceNoteTitle W100">服务说明</div>
             <div @click="closerButton" class=" closer closerButton">1111</div>                   
    </div>
</CustomPopup>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
//import video1 from '@/components/video'
  import CustomPopup from '@/components/picker/index.vue'
export default {
  name: 'home',
  components: {
    CustomPopup
    //  HelloWorld
   /*  video1 */
  },
  methods:{
     showCustomPopupClick() {
                this.$refs.CustomPopupRef.showCustom();
            },
            closerButton() {
                this.$refs.CustomPopupRef.maskClick();
            }
  }
}
</script>
<style scoped>
  .PoperContentView {
        height: 1000rem;
        background: #FFFFFF;
        border-top-left-radius: 16rem;
        border-top-right-radius: 16rem;
    }
    .ServiceNoteTitle {
        height: 100rem;
        border-bottom: 1px solid #EEEEEE;
        text-align: center;
        line-height: 100rem;
    }

    .closerButton {
        position: absolute;
        right: 10rem;
    }
</style>
<template>
  <div>
    <!-- <div id="nav">
      <router-link to="/">reactive</router-link> |
      <router-link to="/ref">ref</router-link>|
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="main">    
        <el-menu
          :uniqueOpened="true"  
          :router="true"
          class="menu"    
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="/">
            <template #title>
              <i class="el-icon-location"></i>
              <span>reactive</span>
            </template>     
          </el-menu-item>
          <el-menu-item index="/ref">
            <i class="el-icon-menu"></i>
            <template #title>ref</template>
          </el-menu-item>
          <el-menu-item index="/render">
            <i class="el-icon-document"></i>
            <template #title>渲染函数 / JSX 中使用</template>
          </el-menu-item>
       
        </el-menu>
     
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<style lang="scss" scoped>
.main{
  display: flex;
  flex-direction: row;
  .menu{
    width: 150px;
    height: 100vh;
  }
}
</style>
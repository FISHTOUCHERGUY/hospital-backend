<template>
  <div class="container">
    <div class="left">
      <Sidebar />
    </div>
    <div class="right">
      <div class="header">
        <div class="title">title</div>
      </div>
      <div class="content">
        <RouterView id="router"></RouterView>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "../index/sidebar/index.vue";
</script>

<style scoped lang="scss">
// #router:hover {
//   overflow-y: auto;
// }

#router {
  padding-right: 17px;
  padding-left: 3px;
  height: 70vh;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}

.container {
  display: flex;
  height: 560px;
  .left {
    border: 3px solid rgb(167, 226, 215);
    flex: 2;
    width: 100px;
    background-color: #479d97;
  }
  .right {
    background-color: rgb(248, 243, 243);
    flex: 12;
    .header {
      background-color: white;
      height: 50px;
      display: flex;
      //   flex-direction: column;
      align-items: center;
      .title {
        margin-left: 20px;
        font-weight: 1000;
      }
    }
    .content {
      border: 5px solid rgb(243, 240, 240);
      margin: 10px 10px;
      background-color: white;
      height: 85%;
    }
  }
}
</style>

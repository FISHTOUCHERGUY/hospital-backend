<template>
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#1dc7bc"
      active-text-color="#169990"
    >
      <div class="body">
        <el-menu-item index="/index/home" @click="changeActive('/index/home')">
          <el-icon>
            <Calendar />
          </el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-menu-item index="/index/company" @click="changeActive('/index/company')">
          <el-icon>
            <document />
          </el-icon>
          <span>医药公司管理</span>
        </el-menu-item>
        <el-menu-item index="/index/sale" @click="changeActive('/index/sale')">
          <el-icon>
            <Bell />
          </el-icon>
          <span>销售地点管理</span>
        </el-menu-item>
        <el-menu-item index="/index/city" @click="changeActive('/index/city')">
          <el-icon>
            <InfoFilled />
          </el-icon>
          <span>城市信息管理</span>
        </el-menu-item>
        <el-menu-item index="/index/medicine" @click="changeActive('/index/medicine')">
          <el-icon>
            <Search />
          </el-icon>
          <span>药品信息管理</span>
        </el-menu-item>
        <el-menu-item index="/index/insurance_policy" @click="changeActive('/index/insurance_policy')">
          <el-icon>
            <Search />
          </el-icon>
          <span>医保政策管理</span>
        </el-menu-item>
        <el-menu-item index="/index/company_policy" @click="changeActive('/index/company_policy')">
          <el-icon>
            <Search />
          </el-icon>
          <span>医药公司政策管理</span>
        </el-menu-item>
        <el-menu-item index="/index/doctor" @click="changeActive('/index/doctor')">
          <el-icon>
            <Search />
          </el-icon>
          <span>医生信息管理</span>
        </el-menu-item>
        <el-menu-item index="/index/material" @click="changeActive('/index/material')">
          <el-icon>
            <Search />
          </el-icon>
          <span>必备材料管理</span>
        </el-menu-item>
      </div>
    </el-menu>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute,useRouter } from "vue-router";

let $route = useRoute();
let $router = useRouter();

const changeActive = (path : string) => { 
  $router.push({path});
};

</script>

<style scoped lang="scss">

</style>

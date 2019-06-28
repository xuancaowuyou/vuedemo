<template>
  <div class="navmenu">
    <el-menu
      router
      default-active="content"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#333399"
      text-color="#f5f5f5"
      active-text-color="#ffd04b"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="fa fa-map-marker fa-lg"></i>&nbsp;
          <span slot="title">首页</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="content">选项1</el-menu-item>
          <el-menu-item index="/cartlist">选项2</el-menu-item>
          <el-menu-item index="/ele">选项3</el-menu-item>
        </el-menu-item-group>
        <!-- <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu> -->
      </el-submenu>
      <el-menu-item index="/manage">
        <i class="fa fa-th-large fa-lg"></i>&nbsp;
        <span slot="title">采购管理</span>
      </el-menu-item>
      <el-menu-item index="/myorder">
        <i class="fa fa-file-text-o fa-lg"></i>&nbsp;
        <span slot="title">我的订单</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import { mapState} from 'vuex'
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  computed: {
    ...mapState({
      isCollapse:state => state.headerStatus.isCollapse
    })
  }
};
</script>
<style>
.navmenu {
  background-color: #333399;
  min-height: 100vh;
}
.link_a {
  color: #666;
  padding: 20px 10px;
}
.router-link-active {
  color: #ff0000;
}
.icon_color {
  color: #fff;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
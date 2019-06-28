<template>
  <div id="app">    
    <div class="container">
      <nav-menu></nav-menu>
      <div class="mainBox">
        <h-header></h-header>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Headers from './children/Headers'
import NavMenu from './children/NavMenu'
export default {
  components:{
    'h-header':Headers,
    'nav-menu':NavMenu
  }
}
</script>

<style>
.clearfix:before, .clearfix:after
{    content: "";
    display: table;
    clear: both;
}
.clearfix
{
    zoom: 1;
}
.fl
{
    float: left;
}
.fr
{
    float: right;
}
ul{
  margin:0px;
  padding:0px;
}
ul li{
  list-style:none;
}
h1,h2,h3,h4,h5,p{margin:0px;}
body{
  margin:0px;
  font-size:14px;
}
.container{
  display:flex;
}
.mainBox{
  width:100%;
}
</style>

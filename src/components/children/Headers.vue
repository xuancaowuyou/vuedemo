<template>
    <div class="header clearfix">
        <i class="fa fa-bars fa-2x iToggle"  :class="isCollapse?'iRotate':''" @click="isCollapseToggle"></i>
        <img src="@/assets/hd_logo.png" class="hd_logo fl"/>        
        <div class="hd_btn_box">
            <el-button  plain>阳光企采</el-button>            
            <el-button  plain>阳光巡检</el-button>         
            <el-button type="primary" plain>阳光企采</el-button>          
        </div>
        <div class="fr">
            <div class="hd_lang_switch fl">
            <el-switch @change="test"
            v-model="value3"
            active-text="中文"
            inactive-text="英文">
            </el-switch>
            </div>
            <div class="hd_userInfo fr">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        {{$t("message.username")}}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>狮子头</el-dropdown-item>
                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                    </el-dropdown-menu> 
                </el-dropdown>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)

import { mapState,mapMutations} from 'vuex'
    export default{
        name:'headers',
        data(){
            return {
                value3:true
            }
        },
        computed:{
            ...mapState({
                isCollapse:state => state.headerStatus.isCollapse
            })
        },
        methods:{
             ...mapMutations(['isCollapseToggle']),
            test:function(){
                if(this.value3){
                    this.$i18n.locale='zhCHS'
                }else{
                    this.$i18n.locale='en'
                }                
            }
        }
    }
</script>
<style>
.header{
  height:70px;
  background:#fff;  
}
.hd_logo{
    display:inline-block;  
    height:50px;
    margin:10px 30px;
}
.hd_btn_box{
    display:inline-block; 
    margin-left:80px; 
    margin-top:15px;
}
.hd_lang_switch{
    margin:25px 30px;
}
.hd_userInfo{
    margin:25px 30px;
}
.iRotate{
  transform:rotate(90deg);
  transition:transform .5s ease;
}
.iToggle{
    float:left;
    padding:0px 20px;
    margin-top:20px;
}
</style>
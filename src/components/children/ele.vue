<template>
<div class="dolist"><!--dolist-->
  <el-input v-model="input" placeholder="请输入内容"  @keyup.enter.native="keydownFn"></el-input>
  <p>已完成{{selects.length}} 正在进行{{checkList.length}}</p>
   <el-checkbox-group v-model="checkList" >
    <el-row class="border_row" v-for="(item,index) in selects" :key="index">
      <el-checkbox :label="item"></el-checkbox>
    <el-button type="text"   @click.native="deleteoption(index)"><i class="el-icon-close"></i></el-button> 
    </el-row>
  </el-checkbox-group>

  <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
  <div style="margin: 15px 0;"></div>
  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
  </el-checkbox-group>


</div>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    data() {
      return {
        input:'',
        selects:['现在开始'],
        checkList: [],

        checkAll: false,
        checkedCities: ['上海', '北京'],
        cities:cityOptions,
        isIndeterminate: true
      }
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },
      keydownFn(e){
        this.selects.push(e.target.value);
        this.input = ''
      },
      deleteoption(index){        
        let id = this.checkList.indexOf(this.selects[index]);
        if(id!=-1){
          this.checkList.splice(id,1);
        }        
        this.selects.splice(index,1);
      }
    },
    beforeCreate(){
      console.log('beforeCreate '+'data: '+this.selects)
      console.log(document.getElementById("app"))
    },
    created(){
      console.log('created '+'data: '+ this.selects)
      console.log(document.getElementById("app"))
    },
    beforeMount(){
       console.log('beforeMount '+'data: '+ this.selects)
       console.log(document.getElementById("app"))
    },
    mounted(){
       console.log('mounted '+this.selects)
       console.log(document.getElementById("app"))
    },
    beforeUpdate(){
      console.log('beforeUpdate')
    }
  };

</script>
<style scoped>
.dolist{
  width:600px;
}
.border_row{
  border-left:2px solid #ff0000;
  margin:5px 0px;
  padding:5px 10px;
}
.border_row .el-checkbox{
  width:230px;
}
.el-icon-close{
  font-size:14px;
}
.el-icon-close:hover{
  color:red;
}
/* .el-checkbox__input.is-checked+.el-checkbox__label{
  text-decoration: line-through;
} */
</style>

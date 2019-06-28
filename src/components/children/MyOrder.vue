<template>
    <div class="myorder">
        <h3>1、购物车数量增减</h3>
        <div class="quantity">
        <a href="javascript:;" class="decrement" :class="disabled ?'disabled':'' " @click=decreaseNum(1) >-</a>
        <input  class="iTxt" v-model="changableNum" />
        <a href="javascript:;" class="increment" @click=increaseNum(1) >+</a>
        </div>
        <hr/>

        <h3>2、新增内容</h3>       
        <ul>
            <li v-for="(item,index) in foodList" :key="index">{{item}}</li>
        </ul>
        <input type="text" v-model="newFood" placeholder="输入新值" class="add_val"/>
        <button class="add_btn" @click="pushFoodList(newFood)">增加</button>
        <hr/>

        <h3>3、新增内容</h3>
        <div>
            <button v-if="iShow" class="btn add" @click="iChangeShow">新增</button>
            <div v-else>
                <input type="text" v-model='newPeople' placeholder="请输入人员姓名" class="name_val" />
                <button class="btn confirm" @click="addPeople(newPeople)">确定</button>
            </div>
            <table class="tab">
                <tr>
                    <th>姓名</th>
                    <th>操作</th>
                </tr>
                <tr v-for="(people,index) in peopleList" :key="index">
                    <td>{{people}}</td>
                    <td>
                        <a href="javascript:;" @click="editPeople(index)">编辑</a>
                        <a href="javascript:;" @click="delPeople(index)">删除</a>
                    </td>
                </tr>
            </table>
            <div class="mask" v-if="showEidt">
                <div class="section_txt">
                    <input type="text" v-model='changePeople'/>
                    <div class="foot_btn clearfix">
                        <button class="btn fl" @click="cancelPeople">取消</button>
                        <button class="btn fr" @click='confirmPeople'>确定</button>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState,mapMutations} from 'vuex'
export default{
    computed:{
        ...mapState({
            changableNum:state => state.headerStatus.changableNum,
            disabled:state => state.headerStatus.disabled,
            foodList:state => state.orderStatus.foodList,
            iShow:state => state.orderStatus.member.iShow,
            peopleList:state => state.orderStatus.member.peopleList,
            showEidt:state => state.orderStatus.member.showEidt
        }),
         newFood: {
            get () {
                return this.$store.state.orderStatus.newFood;
            },
            set (food) {
               this.$store.commit('setFood',food)
            }
        },
        newPeople: {
            get(){
                return this.$store.state.orderStatus.member.newPeople;
            },
            set(people){
                this.$store.commit("setNewPeople",people);
            }
        },
        changePeople:{
            get(){
                return this.$store.state.orderStatus.member.changePeople;
            },
            set(people){
                this.$store.commit('setChangePeople',people);
            }
        }
    },
    watch:{
        newVal(icur,oldVal){
            console.log('新值：'+icur,'旧值：'+ oldVal);
        }
    },
    methods:{
        ...mapMutations(['increaseNum','decreaseNum','pushFoodList','iChangeShow','addPeople','editPeople','delPeople','cancelPeople','confirmPeople'])
    },
    mounted(){
    //    this.axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
    //    .then(response => {
    //       this.info = response.data.bpi;
    //    })
    //    .catch(error => console.log(error))        
    }
}
</script>
<style>
a{text-decoration: none;}
    .myorder{
        border:1px solid red;
        background:#f5f5f5;
        padding:100px 50px;
    }
    .quantity{
        position:relative;
        display:inline-block;
        width:80px;
        height:22px;
        background:#fff;
    }
    .increment,.decrement{
        display:inline-block;
        width:16px;
        height:18px;
        background:#fff;
        border:1px solid #ccc;
        color:#666;
        padding:1px 0;
        text-align:center;
    }
    .increment{
        float:right;
        border-left:0px;
    }
    .decrement{
        float:left;
        border-right:0;
    }
    .iTxt{
        position:absolute;
        left:17px;
        top:0px;
        display:inline-block;
        width:42px;
        height:18px;
        line-height:18px;
        border:1px solid #ccc;
        text-align:center;
        font-size:12px;
        padding:1px;
    }
    .disabled{
       color:#eee;
    }


.add_val{
    padding:5px 10px;
    background:#fff;
    border:none;
}
.add_btn{
    background:#666;
    color:#fff;
    border:none;
    padding:5px 10px;
}

  
    h3{
        margin-bottom:10px;
    }
    .btn{
        height:34px;
        background:#41b883;
        border-radius:4px;
        color:#fff;
        border: 1px solid transparent; 
        outline:none;
        cursor:pointer;
    }
    .add{
        padding:0px 60px;
    }
    .confirm{
        padding:0px 20px;
    }
    .name_val{
        padding:8px 10px;
        border:1px solid #999;
        margin-right:5px;
        background:#fff;
    }
    .tab th,.tab td{
        width:80px;
        padding:5px 20px;
    }
    .tab td{
        text-align:center;
    }
    .tab td a{
        display:inline-block;
        padding:0px 5px;
        color:#666;
    }
    .mask{
        position:fixed;
        left:0px;
        top:0px;
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.3);
        text-align:center;
    }
    .section_txt{
        position:absolute;
        left:50%;
        top:50%;
        width:180px;        
    }
    .section_txt input{
        width:180px;
        padding:10px;
        box-sizing:border-box;
        background:#fff;
    }
    .foot_btn{
        margin-top:10px;
    }
    .foot_btn .btn{
        width:80px;
    }
</style>
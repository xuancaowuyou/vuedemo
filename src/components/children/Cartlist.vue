<template>
    <div class="cartlist">
        <div class="tit_gds_item clearfix">
            <div class="tit_gds_check"><input type="checkbox"  v-model='isCheckedAll' @change='checkedAll' /></div>
            <div class="tit_gds_txt">商品</div>
            <div class="tit_gds_num">数量</div>
            <div class="tit_gds_price" >价格</div>
            <div class="tit_gds_amount">金额</div>
            <div class="tit_gds_operate">操作</div>
        </div>
        <div class="cartitem clearfix" v-for="(product,index) in productList" :key="index">
            <div class="td_cell gds_check">
               <input type="checkbox" :value='product.pro_id'  v-model="checkboxList" @change="ck_change"/>
            </div>
            <div class="td_cell gds_pic">
                 <img :src="product.pro_img"/>
            </div>
            <div class="td_cell gds_detail">
                 {{product.pro_name}}品牌：{{product.pro_brand}};产地：{{product.pro_place}};规格：{{product.pro_purity}}; 起订量：{{product.pro_min}};配送仓库：{{product.pro_depot}};
            </div>
            <div class="td_cell gds_num">
                <div class="quantity">
                    <a href="javascript:;" class="decrement" :class="product.pro_disable ?'disabled':'' " @click=reduceNum({index,num:1}) >-</a>
                    <input  class="iTxt" v-model="product.pro_num" />
                    <a href="javascript:;" class="increment" @click=addNum({index,num:1}) >+</a>
                </div>
            </div>
            <div class="td_cell gds_price">
                 {{product.pro_price}}
            </div>
            <div class="td_cell gds_amount">
                 {{product.pro_num*product.pro_price}}
            </div>
            <div class="td_cell gds_operate">
                <a href="javascirt:;" class="gds_delete" @click="goods_del(index)">删除</a> 
            </div>
        </div>
        <div class="cartfoot">总件数：<strong>{{getGoodsCount}}</strong>,总金额：<strong>{{getGoodsAmount}}</strong>元</div>
     
    </div>
</template>
<script>
import {mapState,mapMutations,mapGetters} from 'vuex'
export default{
    computed:{
        ...mapState({
            productList:state => state.cartStatus.productList,
            checkboxList:state => state.cartStatus.checkboxList
        }),
        ...mapGetters(['getGoodsCount','getGoodsAmount']),
        isCheckedAll:{
            get(){
                return this.$store.state.cartStatus.isCheckedAll;
            },
            set(zzz){
                this.$store.commit('setCheckAll',zzz)
            }
        },
        checkboxList:{
            get(){
                return this.$store.state.cartStatus.checkboxList;
            },
            set(zzz){
                this.$store.commit('setCheckboxList',zzz);
            }
        }      
    },
    methods:{
        ...mapMutations(['reduceNum','addNum','goods_del','checkedAll','ck_change'])       
    }
}
</script>
<style>
.tit_gds_item{
    height:40px;
    line-height:40px;
    background:#eee;
    text-align:center;
}
.cartitem{
    border:1px solid #ccc;
}
.td_cell{
    display:inline-block;
    height:100px;
    line-height:100px;
    text-align:center;
}
.gds_check,.tit_gds_check{
    position:relative;
    float:left;
    width:100px;
}
.tit_gds_check:after{
    position:absolute;
    left:60px;
    top:0px;
    content:'全选'
}
.tit_gds_txt{
    float:left;
    width:330px;
}
.gds_pic{
    float:left;
    width:100px;
}
.gds_pic img{
    vertical-align: middle;
}
.gds_detail{
    float:left;
    width:200px;
    line-height:24px;
    padding:10px 20px 0px 10px;
    text-align:left;
} 
.gds_num,.tit_gds_num{
    float:left;
    width:120px;
}
.increment,.decrement{
    display:inline-block;
    width:16px;
    height:18px;
    line-height:18px;
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
.gds_price,.tit_gds_price{
    float:left;
    width:120px;
} 
.gds_amount,.tit_gds_amount{
    float:left;
    width:120px;
} 
.gds_operate,.tit_gds_operate{
    float:left;
    width:100px;
}
.gds_delete{
    color:#666;
}
.cartfoot{
    height:60px;
    line-height:60px;
    background:#eee;
    text-align:right;
    padding-right:20px;
}
.cartfoot strong{
    padding:0px 5px;
    color:red;
}
</style>
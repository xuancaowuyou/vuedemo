const state = {   
    productList:[
        {
            'pro_id':1,
            'pro_name':'甘油|丙三醇',
            'pro_brand':'skc',
            'pro_place': '韩国',//产地
            'pro_purity': '99.7%',//规格
            'pro_min': "215千克",//最小起订量
            'pro_depot': '上海仓海仓储',//所在仓库
            'pro_num': 1,//数量
            'pro_img': require('../../assets/testimg.jpg'),//图片链接
            'pro_price': 800,
            'pro_disable':true
        },
        {
            'pro_id':2,
            'pro_name':'甘油|丙三醇',
            'pro_brand':'skc',
            'pro_place': '韩国',//产地
            'pro_purity': '99.7%',//规格
            'pro_min': "215千克",//最小起订量
            'pro_depot': '上海仓海仓储',//所在仓库
            'pro_num': 1,//数量
            'pro_img': require('../../assets/testimg.jpg'),//图片链接
            'pro_price': 700,
            'pro_disable':true
        }
    ],
    checkboxList:[],
    isCheckedAll:false
}
const getters = {
    getGoodsCount(state){//总共件数
        let count = 0;
        state.checkboxList.forEach(function(item){
            state.productList.filter(function(product){
                if( item == product.pro_id ){
                    count += product.pro_num;
                }
            })
        })
        return count;
    },
    getGoodsAmount(state){//总金额       
        let amount = 0;
        state.checkboxList.forEach(function(checkId){           
            state.productList.filter(function(product){
                if(checkId == product.pro_id){ 
                    amount +=  product.pro_num*product.pro_price;
                }
            })
        })
        return amount;
    }
}
const mutations = {
    addNum(state,{index,num}){ //同上，这里面的参数除了state之外还传了需要增加的值sum        
        state.productList[index].pro_num += num; 
        state.productList[index].pro_disable = state.productList[index].pro_num >1 ? false : true  
    },
    reduceNum(state,{index,num}){             
        if(state.productList[index].pro_num > 1 ){
            state.productList[index].pro_num -= num;                    
        }  
        state.productList[index].pro_disable = state.productList[index].pro_num >1 ? false : true        
    },
    goods_del(state,index){//删除商品
        state.productList.splice(index,1);
    },
    checkedAll(state) {//全选
        if (state.isCheckedAll) {//实现反选           
            state.checkboxList = [];  
            state.productList.forEach( (item) => {
                state.checkboxList.push(item.pro_id);
            });            
        } else { //实现全选
            state.checkboxList = [];                     
        }         
    },
    setCheckAll(state,zzz){
        state.isCheckedAll = zzz
    },
    setCheckboxList(state,zzz){
            state.checkboxList = zzz;
    },
    ck_change(state){//单选       
        state.isCheckedAll = state.productList.length == state.checkboxList.length ? true : false
    }
}
const actions = {

}
export default{
    state,
    getters,
    mutations,
    actions
}
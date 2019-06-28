const state = {
    changableNum:1,
    isCollapse:false,
    disabled:true
}
const getters = {
    getChangedNum(){  //承载变化的changebleNum的值
        return state.changableNum
    },
    getIsCollapse(state){
        state.isCollapse;
    }
}
const mutations = {
    increaseNum(state,num){ //changableNum增加一个数
        state.changableNum += num;
        if(state.changableNum >1){
            state.disabled = false;
        }else{
            state.disabled = true;
        }         
    },
    decreaseNum(state,num){ //changableNum减少一个数            
        if(state.changableNum > 1 ){
            state.changableNum -= num;
            if(state.changableNum <= 1 ){
                state.disabled = true;
                return false;    
            }                     
        }        
    },
    isCollapseToggle(state){
        state.isCollapse = !state.isCollapse
    }
}
const actions = {
    // getNewNum(context,num){   //同上注释，num为要变化的形参
    //     context.commit('addNum',num)
    //  },
    // getReduceNum(context,num){
    //    context.commit("reduceNum",num)
    // }
}
export default {
    state,
    getters,
    mutations,
    actions
}

    
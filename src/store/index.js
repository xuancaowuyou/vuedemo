import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import cartStatus from './modules/cartStatus'
import headerStatus from './modules/headerStatus'
import manageStatus from './modules/manageStatus'
import orderStatus from './modules/orderStatus'


export default new Vuex.Store({
    modules:{
        cartStatus,
        manageStatus,
        headerStatus,
        orderStatus
    }
})

// export default new Vuex.Store({
//     state:{
//         count:10,
//         isCollapse:false
//     },
//     getters:{
//         iCount(state){
//             state.count;
//         }
//     },
//     mutations:{
//         isCollapseToggle(state){
//             state.isCollapse = !state.isCollapse
//         }
//     }
// });

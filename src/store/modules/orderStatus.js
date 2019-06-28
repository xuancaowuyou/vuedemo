const state={
    foodList:['黄金糕','狮子头','螺蛳粉','双皮奶','蚵仔煎'],  //初始化一个colects数组    
    newFood:'',
    member:{
      iShow:true,
      newPeople:'',
      peopleList:['jack'],
      showEidt:false,
      changePeople:'', //编辑弹框重新改的内容
      editId:''
    }
};
const getters={
  renderFoodList(state){ //承载变化的foodList
    return state.foodList;
  }
};
const mutations={
     pushFoodList(state,items){ //如何变化foodList,插入items
        state.foodList.push(items);       
     },
     setFood(state,food){
       state.newFood= food
     },
     iChangeShow(state){  //新增按钮 切换 input输入框
        state.member.iShow = !state.member.iShow;
     },
     setNewPeople(state,people){ //设置newPeople 为input框的文本内容
        state.member.newPeople = people;        
     },
     addPeople(state,people){ //新增人员添加到peopleList数组中
      if(people.length){
         state.member.peopleList.unshift(people);
      }       
     },
     delPeople(state,index){//删除数组元素
       state.member.peopleList.splice(index,1);
     },
     editPeople(state,index){//编辑数组元素
        state.member.showEidt = !state.member.showEidt;  //遮罩显示
        state.member.changePeople = state.member.peopleList[index];
        state.member.editId = index;
     },
     cancelPeople(state){ //编辑弹框中取消按钮
      state.member.showEidt = false
     },
     confirmPeople(state){ //编辑弹框中确定按钮
      state.member.peopleList[state.member.editId] = state.member.changePeople;
      state.member.showEidt = false;
     },
     setChangePeople(state,people){
        state.member.changePeople = people;
     }
 };
const actions={
    invokePushItems(context,item){ //触发mutations里面的pushCollects ,传入数据形参item 对应到items
        context.commit('pushCollects',item);
    }
};
export default {
     state,
     getters,
     mutations,
     actions
}
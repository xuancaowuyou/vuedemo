const state ={    
    bookList:[{
            id:1,
            title:'红楼梦',
            author:'曹雪芹',
            price:32
        },
        {
            id:2,
            title:'水浒传',
            author:'施耐庵',
            price:30
        },
        {
            id:3,
            title:'三国演义',
            author:'罗贯中',
            price:24
        },
        {
            id:4,
            title:'西游记',
            author:'吴承恩',
            price:20
        }     
    ],
    newId:'4',
    newBook:{
        id:0,
        title:'',
        author:'',
        price:0
    },
    totalPrice:0 
}
const getters = {
      getTotalPrice:state =>{
            state.totalPrice = 0;
            state.bookList.forEach(function(val){
                state.totalPrice += val.price;        
            })
            return state.totalPrice;
      }  
}
const mutations = {
    setBookTitle(state,title){
        state.newBook.title = title
    },
    setBookAuthor(state,author){
        state.newBook.author = author
    },
    setBookPrice(state,price){
        state.newBook.price = parseInt(price);
    },
    addBook(state){
        const len = state.bookList.length;
        state.newBook.id = len>0 ? (state.bookList[len-1].id +1):1;
        state.bookList.push(state.newBook);
        state.newBook={
            id:0,
            title:'',
            author:'',
            price:0
        }
        
    },
    delBook(state,index){
        state.bookList.splice(index,1);
    }
}
// const actions = {}

export default {
    state,
    getters,
    mutations,
    //actions
}
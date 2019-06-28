<template>
    <div class="myorder">
        <h1>Hello Vue!</h1>
        <h2>添加书籍</h2>
        <hr/>
        <p>书名：</p>
        <input type="text" v-model="title" class="bookTxt"/>
        <p>作者：</p>
        <input type="text" v-model="author" class="bookTxt"/>
        <p>价格：</p>
        <input type="text" v-model="price" class="bookTxt"/>
        <div><button class="add_book" @click="addBook">添加</button></div>
        <div>
            <table class="tab_book">
                <tr>
                    <th>序号</th>
                    <th>书名</th>
                    <th>作者</th>
                    <th>价格</th>
                    <th>操作</th>
                </tr>
                <tr  v-for="(book,index) in bookList" :key="index">
                    <td>{{book.id }}</td>
                    <td>{{book.title}}</td>
                    <td>{{book.author}}</td>
                    <td>{{book.price}}</td>
                    <td><a href="javascript:;" class="del_book" @click="delBook(index)">删除</a></td>
                </tr>
            </table>
            <div class="total_price">总价：<strong>{{getTotalPrice}}</strong></div>
        </div>       
    </div>
</template>
<script>
    import { mapState,mapGetters,mapMutations} from 'vuex'
    export default{
        computed:{
            ...mapState({
                bookList:state => state.manageStatus.bookList,
                totalPrice:state => state.manageStatus.totalPrice
            }),
            ...mapGetters(['getTotalPrice']),
            title:{
                get() {
                    return this.$store.state.manageStatus.newBook.title
                },
                set(title){
                    this.$store.commit('setBookTitle',title);
                }
            },
           author:{
                get() {
                    return this.$store.state.manageStatus.newBook.author
                },
                set(author){
                    this.$store.commit('setBookAuthor',author);
                }
            },
            price:{
                get() {
                    return this.$store.state.manageStatus.newBook.price
                },
                set(price){
                    this.$store.commit('setBookPrice',price);
                }
            }          
        },
        methods:{            
            ...mapMutations(['addBook','delBook'])
        }
    }
</script>
<style>
    .myorder{
        background:#f5f5f5;
        padding:100px 50px;
    }
    .bookTxt{
        width: 300px;
        padding:8px 10px;
        border-radius:4px;
        border:1px solid #e5e5e5;
        margin:5px 0px;
        box-sizing:border-box;
        background:#fff;
    }
    .add_book{
        display:inline-block;
        width:300px;
        padding:8px 10px;
        border-radius:4px;
        background:#337ab7;
        color:#fff;
        outline:none;
        border:none;
        margin-top:10px;
    }
    .tab_book{
        width:500px;
        border-collapse: collapse;
        margin-top:30px;
    }
    .tab_book tr{
        border-bottom:1px solid #999;
    }
    .tab_book td{
        text-align:center;
        padding:10px;
    }
    .del_book{
        display:inline-block;
        padding:6px 10px;
        border-radius:4px;
        background:#5cb85c;
        color:#fff;
    }
    .total_price{
        padding:10px 0px 10px 400px;
    }
   
</style>
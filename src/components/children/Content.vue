<template>
    <div class="content">
        <div class="cont_one clearfix">
            <div class="cont_one_a fl">
                <div class="cont_one_info clearfix">
                    <div class="cont_one_count fl">
                        <div class="one_order_count">
                            <h2>1430</h2>
                            <p>总订单数量</p>
                        </div>
                        <div class="one_sku_count">
                            <h2>5422</h2>
                            <p>总SKU数量</p>
                        </div>
                    </div>
                    <div class="cont_one_userlogin fl">
                        <span class="one_userhead"></span>
                        <div class="one_userinfo">
                            <p >张三</p>
                            <p>阳光印网总公司-技术部</p>
                        </div>
                        <div class="one_logininfo">
                            <p>上次登录时间：2018年9月12日11:33:20</p>
                            <p>上次登录IP：192.169.1.1</p>
                        </div>
                    </div>
                </div>
                <div class="cont_one_msg">                    
                    <h3>消息中心</h3>
                    <ul>
                        <li>因天气影响，未来一周北上广物流将受到影响。<span class="one_msg_time">2019.01.26</span></li>
                        <li>因天气影响，未来一周北上广物流将受到影响。<span class="one_msg_time">2019.01.26</span></li>
                        <li>因天气影响，未来一周北上广物流将受到影响。<span class="one_msg_time">2019.01.26</span></li>
                    </ul>
                </div>
            </div>
            <div class="cont_one_b fl">     
                <ve-map :data="chartDataMap"></ve-map>                
            </div>
        </div>
        <div class="cont_two clearfix">
            <div class="cont_two_a fl">                
                <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
            </div>
            <div class="cont_two_b fl">
                <ve-line :data="chartData" :settings="chartSettings"></ve-line>
            </div>
        </div> 
    </div>
</template>
<script>

export default{
     data () {
      this.chartSettings = {
        metrics: ['', '下单用户'],
        dimension: ['日期']
      }
      return {
        chartData: {
          columns: ['日期',  '下单用户', '下单率'],
          rows: [
            { '日期': '2019/03/1',  '下单用户': 1093, '下单率': 0.32 },
            { '日期': '2019/03/2', '下单用户': 3230, '下单率': 0.26 },
            { '日期': '2019/03/3', '下单用户': 2623, '下单率': 0.76 },
            { '日期': '2019/03/4',  '下单用户': 1423, '下单率': 0.49 },
            { '日期': '2019/03/5',  '下单用户': 3492, '下单率': 0.323 },
            { '日期': '2019/03/6', '下单用户': 4293, '下单率': 0.78 }
          ]
        },
        chartDataMap: {
          columns: ['位置', '税收', '人口', '面积'],
          rows: [
            { '位置': '吉林', '税收': 123, '人口': 123, '面积': 92134 },
            { '位置': '北京', '税收': 1223, '人口': 2123, '面积': 29234 },
            { '位置': '上海', '税收': 2123, '人口': 1243, '面积': 94234 },
            { '位置': '浙江', '税收': 4123, '人口': 5123, '面积': 29234 }
          ]
        }
      }
    }
    
}
</script>
<style>
.content{  
  background:#f2f2f2;
  padding:20px;
  -webkit-box-sizing:border-box; 
  -moz-box-sizing:border-box;
  box-sizing:border-box;
}
.cont_one{
    width:100%;
}
.cont_one_a{
    width:49%;
}
.cont_one_info{
    width:100%;
 }
.cont_one_userlogin{
    position:relative;
    width:57%;
    height:180px;
    background:#fff;
    border:1px solid #999;
     -webkit-box-sizing:border-box; 
    -moz-box-sizing:border-box;
    box-sizing:border-box;
    margin-left:3%;
}
.one_userhead{
    position:absolute;
    top:30px;
    left:30px;
    width:60px;
    height:60px;
    background:yellow;
    border-radius:50%;
    border:1px solid #999;
}
.one_userinfo{
    position: relative;
    height: 100px;
    padding: 40px 0 0 90px;
    border-bottom: 1px solid #999;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0px 20px;
}
.one_logininfo p{
    line-height:28px;
    padding-left:40px;
}

.cont_one_b{
    width:49%;   
    height:400px;
    background:#fff;
    border:1px solid #999;
    background:#fff; 
    -webkit-box-sizing:border-box; 
    -moz-box-sizing:border-box;
    box-sizing:border-box;
    margin-left:2%;
}
.cont_one_count{
  width:40%;
}
.cont_one_count h2{
    margin:10px 0px 6px;
    color:#0033ff;
    font-size:24px;
}
.one_order_count{
    height:80px;
    background:url(../../assets/one_order_icon.png) #fff no-repeat;
    border:1px solid #999;
    padding-left:80px;
    text-align:center;
    -webkit-box-sizing:border-box; 
    -moz-box-sizing:border-box;
    box-sizing:border-box;
}
.one_sku_count{
    height:80px;
    background:url(../../assets/one_sku_icon.png) #fff no-repeat;
    border:1px solid #999;
    padding-left:80px;
    text-align:center;
    -webkit-box-sizing:border-box; 
    -moz-box-sizing:border-box;
    box-sizing:border-box;
    margin-top:20px;
}

.cont_one_msg{
    height:200px;
    padding:20px 50px 20px 20px; 
    background:#fff;
    border:1px solid #999;    
    -webkit-box-sizing:border-box; 
    -moz-box-sizing:border-box;
    box-sizing:border-box;    
    margin-top:20px;
}
.cont_one_msg h3{
    padding-bottom:10px;
    border-bottom:1px solid #999;
}
.cont_one_msg ul li{
    position:relative;
    padding:8px 0px;
}
.one_msg_time{
    position:absolute;
    right:0px;
}
.cont_two{
    margin-top:30px;
}
.cont_two_a{
    width:49%;
    height:400px;
    background:#fff;
    border:1px solid #999;
    -webkit-box-sizing:border-box; 
    -moz-box-sizing:border-box;
    box-sizing:border-box;
}
.cont_two_b{
    width:49%;
    height:400px;
    background:#fff;
    border:1px solid #999;
    -webkit-box-sizing:border-box; 
    -moz-box-sizing:border-box;
    box-sizing:border-box;
    margin-left:2%;
}
</style>
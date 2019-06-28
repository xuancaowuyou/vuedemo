import Vue from 'vue'
import VueI18n from 'vue-i18n'//中英文切换
Vue.use(VueI18n)

const messages={
    en:{  //英文
        message:{
            username:'zhangsan',
            about:'about',
            welcome:'Welcom'
        }
    },
    zhCHS:{
        message:{
            username:'张三',
            about:'关于',
            welcome:'欢迎'
        }
    },
    zhCHT:{
        message:{
            username: '张叁',
            about: '關於',
            welcome: "歡迎"
        }
    }
}
// module.exports={
//     messages:messages
// }

const i18n = new VueI18n({
	locale:'zhCHS',
	messages:messages
})
export default i18n
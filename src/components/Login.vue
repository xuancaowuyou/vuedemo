<template>
  <div class="login-container pull-height app-router-view">
    <div class="login-info text-white animated fadeInLeft">
      <div class="logo" style="margin-top: -426px;">
        <img
          src="data:image/png;base64,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"
          width="160px"
          height="160px"
          alt="logo"
          style="vertical-align: middle;"
        >
      </div>
      <h2 class="login-info-title">nx-admin</h2>
      <ul class="login-info-list">
        <li class="login-info-item">
          <i class="el-icon-check"></i>&nbsp;nx-admin 是一个基于XXXX工程可视化管理平台，采用token交互验证方式。
        </li>
        <li class="login-info-item">
          <i class="el-icon-check"></i>&nbsp;您可以 nx-admin 为基础，不只限制于vue的页面，你可以嵌入任意第三方网站，基于iframe框架。
        </li>
        <li class="login-info-item">
          <i class="el-icon-check"></i>&nbsp;nx-admin 构建简单上手快，最大程度上帮助企业节省时间成本和费用开支。
        </li>
        <li class="login-info-item">
          <i class="el-icon-check"></i>&nbsp;技术答疑QQ群，为了提高入群的门槛，象征性收取0.9元：493671066
        </li>
      </ul>
    </div>
    <div class="login-border animated fadeInRight">
      <div class="login-main">
        <h4 class="login-title">登录nx-admin</h4>
        <div class="el-tabs el-tabs--top">
          <div class="el-tabs__header is-top">
            <div class="el-tabs__nav-wrap is-top">
              <div class="el-tabs__nav-scroll">
                <div role="tablist" class="el-tabs__nav" style="transform: translateX(0px);">
                  <div
                    class="el-tabs__active-bar is-top"
                    style="width: 56px; transform: translateX(0px);"
                  ></div>
                  <div
                    id="tab-user"
                    aria-controls="pane-user"
                    role="tab"
                    aria-selected="true"
                    tabindex="0"
                    class="el-tabs__item is-top is-active"
                  >用户密码</div>
                  <div
                    id="tab-code"
                    aria-controls="pane-code"
                    role="tab"
                    tabindex="-1"
                    class="el-tabs__item is-top"
                  >短信验证码</div>
                </div>
              </div>
              <div class="resize-triggers">
                <div class="expand-trigger">
                  <div style="width: 271px; height: 41px;"></div>
                </div>
                <div class="contract-trigger"></div>
              </div>
            </div>
          </div>
          <div class="el-tabs__content">
            <div role="tabpanel" id="pane-user" aria-labelledby="tab-user" class="el-tab-pane">
              <form class="el-form login-form">
                <div class="el-form-item el-form-item--feedback is-required">
                  <!---->
                  <div class="el-form-item__content" style="margin-left: 0px;">
                    <div class="el-input el-input--small el-input--prefix">
                      <!---->
                      <input
                        type="text"
                        autocomplete="off"
                        placeholder="请输入用户名"
                        class="el-input__inner"
                      >
                      <span class="el-input__prefix">
                        <i class="icon-yonghu"></i>
                        <!---->
                      </span>
                      <!---->
                      <!---->
                    </div>
                    <!---->
                  </div>
                </div>
                <div class="el-form-item el-form-item--feedback is-required">
                  <!---->
                  <div class="el-form-item__content" style="margin-left: 0px;">
                    <div class="el-input el-input--small el-input--prefix el-input--suffix">
                      <!---->
                      <input
                        type="password"
                        autocomplete="off"
                        placeholder="请输入密码"
                        class="el-input__inner"
                      >
                      <span class="el-input__prefix">
                        <i class="icon-mima"></i>
                        <!---->
                      </span>
                      <span class="el-input__suffix">
                        <span class="el-input__suffix-inner">
                          <i class="el-icon-view el-input__icon"></i>
                          <!---->
                        </span>
                        <!---->
                      </span>
                      <!---->
                    </div>
                    <!---->
                  </div>
                </div>
                <label role="checkbox" class="el-checkbox">
                  <span aria-checked="mixed" class="el-checkbox__input">
                    <span class="el-checkbox__inner"></span>
                    <input type="checkbox" class="el-checkbox__original" value>
                  </span>
                  <span class="el-checkbox__label">记住账号
                    <!---->
                  </span>
                </label>
                <div class="el-form-item el-form-item--feedback">
                  <!---->
                  <div class="el-form-item__content" style="margin-left: 0px;">
                    <button
                      type="button"
                      class="el-button login-submit el-button--primary el-button--small"
                       @click="gotoHome"
                    >
                      <!---->
                      <!---->
                      <span>登录</span>
                    </button>
                    <!---->
                  </div>
                </div>
              </form>
            </div>
            <div
              role="tabpanel"
              aria-hidden="true"
              id="pane-code"
              aria-labelledby="tab-code"
              class="el-tab-pane"
              style="display: none;"
            >
              <form class="el-form login-form">
                <div class="el-form-item el-form-item--feedback is-required">
                  <!---->
                  <div class="el-form-item__content" style="margin-left: 0px;">
                    <div class="el-input el-input--small el-input--prefix">
                      <!---->
                      <input
                        type="text"
                        autocomplete="off"
                        placeholder="请输入手机号码"
                        class="el-input__inner"
                      >
                      <span class="el-input__prefix">
                        <i class="icon-shouji"></i>
                        <!---->
                      </span>
                      <!---->
                      <!---->
                    </div>
                    <!---->
                  </div>
                </div>
                <div class="el-form-item el-form-item--feedback is-required">
                  <!---->
                  <div class="el-form-item__content" style="margin-left: 0px;">
                    <div
                      class="el-input el-input--small el-input-group el-input-group--append el-input--prefix"
                    >
                      <!---->
                      <input
                        type="text"
                        autocomplete="off"
                        placeholder="请输入验证码"
                        class="el-input__inner"
                      >
                      <span class="el-input__prefix">
                        <i class="icon-yanzhengma yanzhengma"></i>
                        <!---->
                      </span>
                      <!---->
                      <div class="el-input-group__append">
                        <span class="msg-text">发送验证码</span>
                      </div>
                    </div>
                    <!---->
                  </div>
                </div>
                <div class="el-form-item el-form-item--feedback">
                  <!---->
                  <div class="el-form-item__content" style="margin-left: 0px;">
                    <button
                      type="button"
                      class="el-button login-submit el-button--primary el-button--small"
                      @click="gotoHome"
                    >
                      <!---->
                      <!---->
                      <span>登录</span>
                    </button>
                    <!---->
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    methods:{
        gotoHome(){
            this.$router.push({path:"/home"})
        }
    }
}
</script>
<style>
.login-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  height: 900px;
}
.login-container::before {
  z-index: -999;
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(../assets/login.e334716.png);
  background-size: cover;
}
.login-info {
  padding-left: 60px;
}
.login-info-title {
  line-height: 90px;
}
.login-info-item {
  font-size: 14px;
}
.login-border {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 30px 50px 25px 50px;
  background-color: #fff;
  border-radius: 6px;
  -webkit-box-shadow: 1px 1px 2px #eee;
  box-shadow: 1px 1px 2px #eee;
}
.login-main {
  border-radius: 3px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #fff;
}
.login-main > h3 {
  margin-bottom: 20px;
}
.login-main > p {
  color: #76838f;
}
.login-title {
  margin: 0 0 20px;
  text-align: center;
  color: #409eff;
  letter-spacing: 3px;
}
.login-submit {
  margin-top: 20px;
  width: 100%;
  border-radius: 28px;
}
.login-form {
  margin: 10px 0;
}
.login-form .el-form-item__content {
  width: 270px;
}
.login-form .el-form-item {
  margin-bottom: 12px;
}
.login-form .el-input input {
  text-indent: 5px;
  border-color: #dcdcdc;
  border-radius: 3px;
}
.login-form .el-input .el-input__prefix i {
  padding: 0 5px;
  font-size: 16px !important;
}
.login-code {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  margin: 0 0 0 10px;
}
.login-code-img {
  margin-top: 2px;
  width: 100px;
  height: 32px;
  background-color: #fdfdfd;
  border: 1px solid #f0f0f0;
  color: #333;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 5px;
  line-height: 32px;
  text-indent: 5px;
  text-align: center;
}
</style>
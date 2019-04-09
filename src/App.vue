<template>
  <div id="app">
    <!-- <router-link to="/transition2/transition9" tag="span">登录</router-link>
    <router-link to="/transition11/test" tag="span">注册</router-link>-->
    <router-view/>
    <!-- <div style="display:flex;height:80px">
      <router-view style="background-color:red;flex:8 " name="left"/>
      <router-view name="right" style="background-color:green;flex:9"/>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
<style>
.myactive {
  color: red;
  font-weight: 800;
  font-style: italic;
  font-size: 80px;
  text-decoration: underline;
  background-color: green;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(140px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>

<template>
  <div>
    <button @click="comName='login'">登录</button>
    <button @click="comName='register'">注册</button>
    <transition mode="out-in">
      <component :is="comName"></component>
    </transition>
  </div>
</template> 

<script>
export default {
  name: "TransitionDemo6",
  data() {
    return {
      comName: "login"
    };
  },
  components: {
    login: {
      template: "<h1>{{msg}}</h1>",
      data() {
        return {
          msg: "登录"
        };
      }
    },
    register: {
      props: [String],
      template: "<h1>{{msg}}</h1>",
      data() {
        return {
          msg: "注册"
        };
      }
    }
  }
};
</script>
<style>
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(150px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>

<template>
  <div>
    <button @click="flag=true">登录</button>
    <button @click="flag=flase">注册</button>
    <login v-if="flag"></login>
    <register v-else="flag"></register>
  </div>
</template> 

<script>
export default {
  name: "TransitionDemo4",
  data() {
    return {
      flag: true
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

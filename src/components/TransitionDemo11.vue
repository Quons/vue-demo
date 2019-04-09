<template>
  <div>
    <login ref="mylogin"></login>
    <input type="button" value="获取元素" @click="getElement">
    <h3 id="myh3" ref="myh3">哈哈哈</h3>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "TransitionDemo11",
    data() {
      return {};
    },
    created() {

    },
    methods: {
      getElement() {
        //console.log(this.$refs.myh3);
        this.$refs.mylogin.show();
        console.log(this.$refs.mylogin.msg);
      }
    },
    components: {
      login: {
        template: `<h1>登录组件</h1>`,
        data() {
          return {
            msg: "自杜建"
          };
        },
        methods: {
          show() {
            console.log("show");
          }
        }
      }
    }
  };

</script>
<style>
</style>

<template>
  <div>
    <login :parentmsg="comName"></login>
  </div>
</template> 

<script>
export default {
  name: "TransitionDemo8",
  data() {
    return {
      comName: "login"
    };
  },
  components: {
    login: {
      props: ["parentmsg"],
      template: "<h1>{{msg}}----{{parentmsg}}</h1>",
      data() {
        return {
          msg: "登录"
        };
      }
    }
  }
};
</script>
<style>
</style>

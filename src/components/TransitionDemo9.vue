<template>
  <div>
    <login @func="show">{{fromsonmsg}}</login>
  </div>
</template> 

<script>
export default {
  name: "TransitionDemo9",
  data() {
    return {
      comName: "login",
      fromsonmsg: ""
    };
  },
  components: {
    login: {
      props: ["parentmsg"],
      template: ` <div><h1 @click='myclick'>这是子组件</h1><slot></slot></div>`,
      data() {
        return {
          sonmsg: { name: "小明", age: 19 }
        };
      },
      methods: {
        myclick() {
          this.$emit("func", this.sonmsg);
        }
      }
    }
  },
  methods: {
    show(data) {
      this.fromsonmsg = data;
      console.log("调用了父组件的方法:" + data.age + data.name);
    }
  }
};
</script>
<style>
</style>

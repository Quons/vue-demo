<template>
  <div>
    <input type="button" @click="flag=!flag" value="button">
    <!-- 每次都会重新删除或创建元素 -->
    <h3 v-if="flag">这是用v-if控制的元素</h3>
    <!-- 不会每次尽心dom的删除和创建操作 -->
    <h3 v-show="flag">这是用v-show控制的元素</h3>
  </div>
</template>

<script>
export default {
  name: "vueDemo",
  data() {
    return {
      flag: true
    };
  },
  methods: {
    toggle() {
      this.flag = !this.flag;
    }
  }
};
</script>
<style>
.red {
  color: red;
}
.thin {
  font-weight: 200;
}
.italic {
  font-style: italic;
}
.active {
  letter-spacing: 1pc;
}
</style>

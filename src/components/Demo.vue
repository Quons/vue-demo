<template>
  <div>
    <h1 :class="classObj">this is a h1 tag</h1>
  </div>
</template>

<script>
export default {
  name: "vueDemo",
  data() {
    return {
      classObj: { 'red': true, active: true, italic: true }
    };
  },
  methods: {
    calculate() {}
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

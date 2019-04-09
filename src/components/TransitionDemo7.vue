<template>
  <div>
    <button @click="flag=!flag">button</button>
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="flag"></div>
    </transition>
  </div>
</template> 

<script>
export default {
  name: "TransitionDemo7",
  data() {
    return {
      flag: false
    };
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 1;
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      el.offsetWidth;
      el.style.transform = "translate(150px,150px)";
      el.style.transition = "all 1s ease";
      done();
    },
    afterEnter(el) {
      el.style.opacity = 0;
      this.flag = !this.flag;
    }
  }
};
</script>
<style>
.ball {
  background-color: red;
  width: 15px;
  height: 15px;
  border-radius: 50%;
}
</style>

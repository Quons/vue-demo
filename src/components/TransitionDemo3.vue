<template>
  <div>
    <button @click="flag=!flag">button</button>
    <br>
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div v-show="flag" class="ball"></div>
    </transition>
  </div>
</template>
 
<script>
import animate from "animate.css";
export default {
  name: "TransitionDemo3",
  data() {
    return {
      flag: false
    };
  },
  methods: {
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      el.offsetWidth;
      el.style.transform = "translate(150px,450px)";
      el.style.transition = "all 1s ease";
      done();
    },
    afterEnter(el) {
      this.flag = !this.flag;
    }
  }
};
</script>
<style >
.ball {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
}
</style>

 

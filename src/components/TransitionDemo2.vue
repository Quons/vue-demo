<template>
  <div>
    <button @click="flag=!flag">button</button>
    <transition
      enter-active-class="bounceIn"
      leave-active-class="bounceOut"
      :duration="{enter:200,leave:400}"
    >
      <h3 v-if="flag" class="animated">this is a h3 tag</h3>
    </transition>
  </div>
</template> 
<script>
export default {
  name: "TransitionDem3",
  data() {
    return {
      flag: true,
      flag2: true
    };
  }
};
</script>
<style >
/* .v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(150px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.4s ease;
}

.my-enter,
.my-leave-to {
  opacity: 0;
  transform: translateY(150px);
}
.my-enter-active,
.my-leave-active {
  transition: all 0.4s ease;
} */
</style>
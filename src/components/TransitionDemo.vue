<template>
  <div>
    <button @click="flag=!flag">button</button>
    <transition>
      <h3 v-if="flag">this is a h3 tag</h3>
    </transition>

    <hr>
    <button @click="flag2=!flag2">button</button>
    <transition name="my">
      <h3 v-if="flag2">this is a h3 tag</h3>
    </transition>
  </div>
</template>
<script>
export default {
  name: "TransitionDemo",
  data() {
    return {
      flag: true,
      flag2: true,
      flag3: false
    };
  }
};
</script>
<style >
.v-enter,
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
}
</style>

 

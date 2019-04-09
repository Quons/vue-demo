<template>
  <div>
    <input v-model="firstname" type="text">+
    <input v-model="lastname" type="text">=
    <input v-model="fullname" type="text">
  </div>
</template>

<script>
export default {
  name: "TransitionDemo12",
  data() {
    return {
      firstname: "",
      lastname: "",
      fullname: ""
    };
  },

  methods: {},
  watch: {
    firstname(newVal, oldVal) {
      this.fullname = newVal + " " + this.lastname;
    },
    lastname(newVal, oldVal) {
      this.fullname = this.firstname + " " + newVal;
    }
  }
};
</script>
<style>
</style>

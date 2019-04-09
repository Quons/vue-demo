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
      lastname: ""
    };
  },

  methods: {},
  computed: {
    fullname: function() {
      return this.firstname + " " + this.lastname;
    }
  }
};
</script>
<style>
</style>

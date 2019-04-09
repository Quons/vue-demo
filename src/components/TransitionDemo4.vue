<template>
  <div>
    <div>
      <label for>
        id:
        <input type="text" v-model="id">
      </label>
      <label for>
        name:
        <input type="text" v-model="name">
      </label>
      <label for>
        <input type="button" @click="add" value="add">
      </label>
    </div>
    <transition-group appear tag="ul">
      <li
        v-for="(item ,index ) in list"
        v-bind:key="item.id"
        @click="del(index)"
      >{{ item.id }}-----{{item.name}}</li>
    </transition-group>
  </div>
</template> 
<script>
import "../css/index.less";
export default {
  name: "TransitionDemo4",
  data() {
    return {
      id: 0,
      name: "",
      list: [
        { id: 1, name: "quon1" },
        { id: 2, name: "quon2" },
        { id: 3, name: "quon3" },
        { id: 4, name: "quon4" }
      ]
    };
  },
  methods: {
    add() {
      this.list.push({ id: this.id, name: this.name });
    },
    del(i) {
      this.list.splice(i, 1);
    }
  }
};
</script>
<style >
</style>

 

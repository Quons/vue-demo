<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css"
    >
    <table class="table table-bordered table-hover table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Ctime</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
 
<script>
export default {
  name: "vueDemo",
  data() {
    return {
    list:[
      {},
    ]
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

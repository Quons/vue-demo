<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css"
    >
    <tmp1 @func="comment"></tmp1>
    <ul class="list-group">
      <li class="list-group-item" v-for="item in list" :key="item.id">
        <span class="badge">评论人:{{item.user}}</span>
        {{item.content}}
      </li>
    </ul>
  </div>
</template> 


<script>
export default {
  name: "TransitionDemo10",
  data() {
    return {
      list: [
        { id: Date.now(), user: "李白", content: "哈哈" },
        { id: Date.now() + 1, user: "李白", content: "哈哈" },
        { id: Date.now() + 2, user: "李白", content: "哈哈" },
        { id: Date.now() + 3, user: "李白", content: "哈哈" }
      ]
    };
  },
  components: {
    tmp1: {
      data() {
        return {
          user: "",
          commentmsg: ""
        };
      },
      template: `<div id="subtemp">
   <div>
    <div class="form-group">
      <label>评论人：</label>
      <input v-model="user" type="text" class="form-control">
    </div>
    <div class="form-group">
      <label>评论内容：</label>
      <textarea v-model="commentmsg" class="form-control"></textarea>
    </div>
    <div class="form-group">
      <input text="button" @click="comment"  value="发表评论"  class="btn btn-primary">
    </div>
  </div>
</div>`,
      methods: {
        postComment() {
          var cmt = {
            id: Date.now(),
            user: this.user,
            content: this.commentmsg
          };
          var list = JSON.parse(localStorage.getItem("cmts") || "[]");
          list.unshift(cmt);

          localStorage.setItem("cmts", JSON.stringify(list));
          this.user = "";
          this.commentmsg = "";
        },
        comment() {
          this.$emit("func", {
            id: Date.now(),
            user: this.user,
            content: this.commentmsg
          });
          this.user = "";
          this.commentmsg = "";
        }
      }
    }
  },
  methods: {
    comment(c) {
      this.list.push(c);
    }
  }
};
</script>
<style>
</style>

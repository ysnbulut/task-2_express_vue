<template>
  <div class="hello">
    <div
      v-for="(user, index) in users"
      v-bind:item="user"
      v-bind:index="index"
      v-bind:key="user._id"
    >
      <p>{{ user.username }} {{ user.password }}</p>
    </div>
  </div>
</template>

<script>
import UsersServices from "../usersServices";

export default {
  name: "UserLogin",
  data() {
    return {
      users: [],
    };
  },
  async created() {
    this.users = await UsersServices.test();
    console.log(this.users);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

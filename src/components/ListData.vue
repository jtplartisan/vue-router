<template>
  <center>
    <table border="1px" cellpadding="10">
      <tr>
        <th>Id</th>
        <th>UserId</th>
        <th>Title</th>
        <th>Completed</th>
      </tr>
      <tr v-for="d in user" :key="d">
        <td>{{ d.id }}</td>
        <td>{{ d.userId }}</td>
        <td>{{ d.title }}</td>
        <td>{{ d.completed }}</td>
      </tr>
    </table>
  </center>
</template>
<script>
import axios from "axios";
export default {
  name: "List-Data",
  data() {
    return {
      user: null,
    };
  },

  created() {
    axios
      .get(`http://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        // JSON responses are automatically parsed.
        this.user = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>
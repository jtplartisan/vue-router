<template>
  <div class="form">
    <h1>Test Form</h1>
    <form v-on:submit.prevent="submitForm">
      <ValidationProvider rules="minmax:3,8" v-slot="v">
        <input type="text" v-model="form.name" placeholder="Enter Your name" />
        <span>{{ v.errors[0] }}</span>
      </ValidationProvider>
      <input
        type="email"
        placeholder="Enter Your Email"
        v-model="form.email"
      /><br /><br />
      <input type="checkbox" value="vue" v-model="form.hobbies" />Vue
      <input type="checkbox" value="react" v-model="form.hobbies" />React
      <input type="checkbox" value="next" v-model="form.hobbies" />Next
      <input type="checkbox" value="angular" v-model="form.hobbies" />Angular
      <br /><br />
      <input type="radio" value="male" name="gen" v-model="form.gender" />Male
      <input
        type="radio"
        value="Female"
        name="gen"
        v-model="form.gender"
      />Female<br /><br />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>
<script>
import { ValidationProvider } from "vee-validate";
import { extend } from "vee-validate";
import axios from "axios";
extend("minmax", {
  validate(value, args) {
    const length = value.length;

    return length >= args.min && length <= args.max;
  },
  params: ["min", "max"],
  message:
    "The field must have at least {min} characters and max {max} characters",
});

export default {
  components: {
    ValidationProvider,
  },

  name: "PostFormAxios",
  data() {
    return {
      form: {
        name: "",
        email: "",
        gender: "",
        hobbies: [],
      },
    };
  },
  methods: {
    submitForm() {
      axios
        .post("https://jsonplaceholder.typicode.com/todos", this.form)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          alert("Submitted Successfully");
        });
    },
  },
};
</script>
<style scoped>
.form {
  background: rgb(180, 160, 216);
  padding: 8px;
}
button {
  border: none;
  background: rgb(46, 14, 230);
  color: azure;
  height: 40px;
  width: 100px;
  border-radius: 3px;
}
</style>
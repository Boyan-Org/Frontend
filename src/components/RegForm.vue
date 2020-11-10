<template>
  <el-card shadow="hover" class="mx-auto">
    <div id="loginform">
      <el-form ref="form" :model="form" label-width="140px">
        <el-form-item label="Username" required="" :error="nameError">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="Password" :error="ruleError" required="">
          <el-input
            placeholder="Enter Password"
            v-model="form.password"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item :error="confirmError" required="">
          <span slot="label">Confirm Password</span>
          <el-input placeholder="Repeat Password" v-model="confirmPassword" show-password></el-input>
        </el-form-item>
        <el-button type="primary" @click="onSubmit">Register</el-button>
        <div>
          <br />Already have an account? <el-link  type="primary" @click="open">Login</el-link>
        </div>
      </el-form>
    </div>
  </el-card>
</template>

<style>
#loginform {
  padding: 30px 30px 30px 10px;
}
</style>

<script>
import Vue from 'vue'
import VueRouter from "vue-router";
Vue.use(VueRouter);

export default {
  data() {
    return {
      confirmError: "",
      ruleError: "",
      nameError:"",
      confirmPassword:"",
      form: {
        username: "",
        password: "",
      },
      show: true,
    };
  },
  methods: {
    open() { //redirect to /login
      this.$router.push('/login');
    },
    onSubmit(evt) {
      if (this.form.username == ""){
        this.nameError = "Please input a valid ID";
        return;
      } else { //TODO: username already exist
        this.nameError = "";
      }
      if (this.form.password == "") { //TODO: add complexity check
        // Test if the password is valid
        this.ruleError = "Please input a password";
        return;
      } else {
        this.ruleError = "";
      }
      if (this.confirmPassword == ""){
        this.confirmError = "Please confirm your password";
        return;
      } else if (this.confirmPassword != this.form.password) {
        // Test if the two password match
        this.confirmError = "Password doesn't match";
        return;
      } else {
        this.confirmError = "";
      }
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.userID = "";
      this.form.password = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
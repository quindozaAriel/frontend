<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-2" style="margin-top: 15%">
        <div class="card">
          <div class="card-header">
            <center>
              <h1>{{ loginTitle }}</h1>
            </center>
          </div>
          <div class="card-body">
            <form id="login_form" method="post" @submit.prevent="submitForm">
              <div class="form-group">
                <label for="email">Email</label>
                <i class="text-danger float-right">{{ emailInput }}</i>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Password"
                  v-model="emailInput"
                />
              </div>
              <div class="form-group">
                <label for="passowrd">Password</label>
                <i class="text-danger float-right">{{ passwordInput }}</i>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                  v-model="passwordInput"
                />
              </div>
              <center>
                <button type="submit" class="btn btn-primary mr-3">
                  Login
                </button>
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  @click="clearForm"
                >
                  Cancel
                </button>
              </center>
            </form>
          </div>
          <div class="card-footer"></div>
        </div>
      </div>
      <div class="col-3" style="margin-top: 15%">
        <div class="card">
          <div class="card-header">{{authentication}}</div>
          <div class="card-body">
            {{ userDetails }}
          </div>
          <div class="card-footer">
            <button class="btn btn-danger" @click="removeUserDetail">
              Remove state
            </button>
            <b-button>asdads</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      emailInput: "",
      passwordInput: "",
      result: "",
    };
  },
  methods: {
    ...mapActions(["setUserDetail", "removeUserDetail"]),

    submitForm: function (e) {
      axios({
        method: "post",
        url: "http://10.164.58.130/backend/public/api/auth/login",
        data: {
          email: this.emailInput,
          password: this.passwordInput,
        },
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.error != "Unauthorized") {
          
             this.setUserDetail(response.data)
             this.$router.push('/home')
          } else {
            alert("not login");
          }
        })
        .catch((error) => {
          alert(error);
        });
    },
    clearForm: function () {
      this.emailInput = "";
      this.passwordInput = "";
    },
  },
  computed: {
    ...mapGetters({
      loginTitle: "getSampleText",
      userDetails: "getUserDetail",
      authentication:"getAuthentication",
    }),
    /* 
  SAMPLE DEFAULT GETTER COMMAND
  this.sampleText = this.$store.getters.getSampleText
  */
  },
};
</script>

<style>
</style>
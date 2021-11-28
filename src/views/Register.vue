<template>
  <div class="banner_account">
    <div>
      <div class="overlay_account"></div>
      <v-main>
        <div class="title_account">
          <p><b>TÀI KHOẢN</b></p>
        </div>
        <div class="form_account">
          <v-row class="inner">
            <v-col cols="4" offset="4">
              <v-form @submit.prevent="HandleSubmit">
                <h4><b>TẠO TÀI KHOẢN</b></h4>
                <hr />
                <error v-if="error" :error="error" />
                <p>
                  <input type="text" placeholder="Tên" v-model="last_name" />
                </p>
                <p>
                  <input type="text" placeholder="Họ" v-model="first_name" />
                </p>
                <p>
                  <input type="email" placeholder="Email" v-model="email" />
                </p>
                <p>
                  <input
                    type="password"
                    placeholder="Mật khẩu"
                    v-model="password"
                  />
                </p>
                <p><button>Đăng ký</button></p>
                <router-link to="/"><p>Trở về</p></router-link>
              </v-form>
            </v-col>
          </v-row>
        </div>
      </v-main>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Error from "../components/Error.vue";
export default {
  name: "Register",
  components: {
    Error,
  },
  data: () => ({
    user: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      error: "",
    },
  }),
  methods: {
    async HandleSubmit() {
      try {
        const response = await axios.post("/user/register", {
          lastName: this.last_name,
          fistName: this.first_name,
          email: this.email,
          password: this.password,
        });
        localStorage.setItem("token", JSON.stringify(response));
        this.$router.push("/account");
        location.reload();
      } catch (e) {
        this.error = "Dữ liệu không hợp lệ!";
      }
    },
  },
};
</script>

<style scoped>
.banner_account {
  background: url(//theme.hstatic.net/1000313040/1000406925/14/breadcrumb_bg.png?v=1757);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;
}
.overlay_account {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
  background: rgba(0, 0, 0, 0.5);
}
.title_account {
  text-align: center;
  color: white;
  padding: 120px 0px;
  font-size: 35px;
}
.form_account {
  background: #f8f2e8;
}
.inner {
  padding: 50px 180px;
}
.v-form h4 {
  font-size: 25px;
  text-align: center;
}
.v-form input {
  width: 100%;
  border: 1px solid #e6e6e6;
  max-width: 100%;
  padding: 8px 10px;
  border-radius: 3px;
  background: white;
}
.v-form button {
  padding: 8px 10px;
  font-weight: bold;
  border-radius: 3px;
  background-color: #3d1a1a;
  color: #fff;
  border: 1px solid transparent;
  width: 100%;
}
.v-form a {
  color: #333333;
  text-align: center;
}
</style>
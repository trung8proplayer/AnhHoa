<template>
  <v-app>
    <v-card
      class="mx-auto overflow-hidden"
      width="100%"
      height="100%"
      v-if="isAdmin && adminCheck"
    >
      <v-app-bar color="deep-purple" dark>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title>Admin</v-toolbar-title>
      </v-app-bar>
      <router-view />
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <img
                  src="https://theme.hstatic.net/1000313040/1000406925/14/logo.png?v=1734"
                  style="max-width: 100%"
                  alt=""
                />
        <div class="px-3 py-5">
          <div class="py-3">
            <router-link to="/admin/news" class="link">
              <v-icon>mdi-newspaper</v-icon>
              <p>Quản lý tin tức</p>
            </router-link>
          </div>
          <div class="py-3">
            <router-link to="/admin" class="link">
              <v-icon>mdi-cake</v-icon>
              <p>Quản lý bánh</p>
            </router-link>
          </div>
          <div class="py-3">
            <router-link to="/admin/promotions" class="link">
              <v-icon>mdi-pig-variant</v-icon>
              <p>Quản lý khuyến mại</p>
            </router-link>
          </div>
          <div class="py-3">
            <router-link to="/admin/orders" class="link">
              <v-icon>mdi-cart</v-icon>
              <p>Quản lý order</p>
            </router-link>
          </div>
          <div class="py-3">
            <router-link to="/admin/perorder" class="link">
              <v-icon>mdi-phone</v-icon>
              <p>Quản lý liên hệ</p>
            </router-link>
          </div>
           <div class="py-3">
            <a href="/" @click="LogoutClick()" class="link">
              <v-icon>mdi-logout</v-icon>
              <p>Đăng xuất</p>
            </a>
          </div>
        </div>
      </v-navigation-drawer>
    </v-card>
    <v-main v-if="!isAdmin">
      <header-anh-hoa
        :user="user"
        v-if="
          this.$route.fullPath != '/checkout' &&
          this.$route.fullPath.toString().substring(0, 6) != '/admin'
        "
      />
      <router-view @getUser="getUser" :user="user" />
      <footer-anh-hoa
        v-if="
          this.$route.fullPath != '/checkout' &&
          this.$route.fullPath.toString().substring(0, 6) != '/admin'
        "
      />
      <div
        id="hotline"
        v-if="
          this.$route.fullPath != '/checkout' &&
          this.$route.fullPath.toString().substring(0, 6) != '/admin'
        "
      >
        <router-link to=""><v-icon style="color: white">mdi-phone</v-icon></router-link>
      </div>
    </v-main>
  </v-app>
</template>
  
<script>
import HeaderAnhHoa from "./components/HeaderAnhHoa.vue";
import FooterAnhHoa from "./components/FooterAnhHoa.vue";
/* import axios from 'axios' */
export default {
  components: { HeaderAnhHoa, FooterAnhHoa },
  name: "App",
  data: () => ({
    user: null,
    isAdmin: false,
    drawer: false,
    adminCheck: false,
  }),
  created() {
    this.user = JSON.parse(localStorage.getItem("User"));
    if (this.$route.path.includes("admin")) {
      this.isAdmin = true;
    }
  },
  methods: {
    getUser() {
      this.user = JSON.parse(localStorage.getItem("User"));
    },
    LogoutClick() {
      localStorage.removeItem("Admin");
    },
  },
  watch: {
    async $route() {
      if (this.$route.path.includes("admin")) {
        this.isAdmin = true;
        if(JSON.parse(localStorage.getItem("Admin"))){
          this.adminCheck = true;
        }
      } else {
        this.isAdmin = false;
      }
    },

  },
};
</script>
<style scoped>
#hotline{
      position: fixed;
    bottom: 40px;
    left: 40px;
    z-index: 999999999;
    display: flex;
    align-items: center;
    width: 60px;
    border-radius: 50%;
    box-shadow: 0px 0px 20px rgb(0 0 0 / 30%);
}
#hotline a{
      display: inline-block;
    text-align: center;
    background: #0f75bc;
    color: #ffffff;
    width: 60px;
    font-size: 24px;
    line-height: 60px;
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgb(15 117 188 / 30%);
}

.link {
  display: flex;
  align-items: center;
  color: black;
}
.link:hover {
  text-decoration: none;
  color: #673ab7 !important;
}
p {
  margin: 0 !important;
}
.v-navigation-drawer .v-icon{
  padding-right: 10px;
}
</style>

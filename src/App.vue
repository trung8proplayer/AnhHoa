<template>
  <v-app>
    <v-main>
      <header-anh-hoa :user="user" />
      <router-view :user="user" />
      <footer-anh-hoa />
      <div id="hotline">
        <a href=""><v-icon style="color: white">mdi-phone</v-icon></a>
      </div>
      <div id="messenger">
        <a href=""
          ><v-icon style="color: white">mdi-facebook-messenger</v-icon></a
        >
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
  }),
  async created() {
    this.user = JSON.parse(localStorage.getItem("token"));
  },
};
</script>
<style scoped>
#hotline {
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
a {
  display: inline-block;
  text-align: center;
  background: #0f75bc;
  color: #ffffff;
  width: 60px;
  font-size: 24px;
  line-height: 60px;
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgb(15 117 188 / 30%);
  transition: all 0.3s;
  text-decoration: none;
}
#messenger {
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 999999999;
  display: flex;
  align-items: center;
  width: 60px;
  border-radius: 50%;
  box-shadow: 0px 0px 20px rgb(0 0 0 / 30%);
}
</style>

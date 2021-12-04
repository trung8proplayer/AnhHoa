<template>
  <div>
    <header>
      <div class="header__inner">
        <div class="nav_bar">
          <div class="nav">
            <div class="logo">
              <router-link to="/" class="logo_img">
                <img
                  src="https://theme.hstatic.net/1000313040/1000406925/14/logo.png?v=1734"
                  style="max-width: 100%"
                  alt=""
                />
              </router-link>
              <button class="btn_menu" @click="drawer = true">
                <v-icon style="color: white">mdi-menu</v-icon>
              </button>
              <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary
                width="300px"
              >
                <img
                  src="https://theme.hstatic.net/1000313040/1000406925/14/logo.png?v=1734"
                  style="max-width: 100%"
                  alt=""
                />
                <div
                  class="input_search"
                  style="width: 280px; padding-left: 15px"
                >
                  <form
                    action=""
                    class="form_search"
                    style="border: solid 1px; padding-top: 0px"
                  >
                    <input
                      type="text"
                      placeholder="Tìm kiếm..."
                      class="ip_search"
                    />
                    <button class="btn_search">
                      <v-icon color="white">mdi-magnify</v-icon>
                    </button>
                  </form>
                </div>
                <v-list nav dense>
                  <v-list-item-group
                    v-model="group"
                    active-class="deep-purple--text text--accent-4"
                  >
                    <v-list-item
                      v-for="item in title"
                      :key="item.index"
                      style="border-top: solid 1px"
                    >
                      <v-list-item-title>{{ item }}</v-list-item-title>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-navigation-drawer>
            </div>
            <div class="input_search">
              <form class="form_search" @submit.prevent="HandleSubmit">
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  class="ip_search"
                  v-model="key_search"
                />
                <button class="btn_search">
                  <v-icon color="white">mdi-magnify</v-icon>
                </button>
              </form>
            </div>

            <div class="contact">
              <router-link to="" class="hd">
                <v-icon>mdi-phone</v-icon>
                <span>0961452578</span>
              </router-link>
              <router-link to="/store" class="hd">
                <v-icon>mdi-office-building</v-icon>
                <span>Hệ thống 14 cửa hàng</span>
              </router-link>
              <router-link to="/account/login" class="hd" v-if="!user">
                <v-icon>mdi-account</v-icon>
                <span>Tài khoản</span>
              </router-link>
              <router-link to="/account" class="hd" v-if="user">
                <v-icon>mdi-account</v-icon>
                <span>Chào, {{ user.lastName }}</span>
              </router-link>
              <a href="/" @click="LogoutClick()" class="hd" v-if="user">
                <v-icon>mdi-logout</v-icon>
                <span>Đăng xuất</span>
              </a>
              <router-link to="/cart" class="hd cart">
                <v-icon>mdi-cart-variant</v-icon>
                <span>0</span>
              </router-link>
            </div>
            <div class="contact2">
              <div>
                <router-link to="" class="hd2">
                  <v-icon>mdi-phone</v-icon>
                  <span>0961452578</span>
                </router-link>
              </div>
              <div>
                <router-link to="" class="hd2">
                  <v-icon>mdi-office-building</v-icon>
                  <span>Hệ thống 14 cửa hàng</span>
                </router-link>
              </div>
            </div>
          </div>
          <div class="menu">
            <ul>
              <li>
                <router-link to="/">TRANG CHỦ</router-link>
              </li>
              <li>
                <router-link to="/banh-sinh-nhat">
                  <div class="dropdown" style="padding-top: 5px">
                    <div>
                      BÁNH SINH NHẬT
                    </div>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to= "/banh-my-banh-man">
                  <div class="dropdown" style="padding-top: 5px">
                    <div>
                      BÁNH MỲ & BÁNH MẶN
                    </div>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="/cookiecake-minicake">
                  <div class="dropdown" style="padding-top: 5px">
                    <div>
                      COOKIES & MINICAKE
                    </div>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="/news">TIN TỨC</router-link>
              </li>
              <li>
                <router-link to="/promotions">KHUYẾN MẠI HOT</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "HeaderAnhHoa",
  props: ["user"],
  data: () => ({
    drawer: false,
    group: null,
    title: [
      "Trang chủ",
      "Bánh sinh nhật",
      "Bánh mỳ & Bánh mặn",
      "Cookies & Minicake",
      "Tin tức",
      "Khuyến mại",
      "Chào, Trung",
      "Đăng xuất",
    ],
    key_search: "",
  }),
  watch:{
    $route(){
      this.key_search = this.$route.query.query;
    }
  },
  methods: {
    LogoutClick() {
      localStorage.removeItem("User");
    },
    HandleSubmit() {
      this.$router.push("/search-products?query=" + this.key_search);
      this.$emit('Search');
    },
  },
};
</script>
<style scoped>
header {
  background-color: rgba(74, 29, 34, 0.9);
  height: 160px;
}
.nav_bar {
  width: 78%;
  height: 160px;
  margin: 0px 11%;
}
.nav {
  width: 100%;
  height: 70%;
}
.logo {
  width: 10%;
  height: 100%;
  padding-right: 10px;
}
.input_search {
  width: 23%;
  flex-direction: row;
}
.form_search {
  width: 100%;
  padding-top: 35px;
  display: flex;
}
.ip_search {
  width: 100%;
  height: 37px;
  padding: 8px 10px;
  background-color: white;
  border-radius: 2px;
}
.btn_search {
  background-color: #3e2723;
  width: 41px;
  height: 37px;
  border-radius: 2px;
}
.contact {
  width: 67%;
  display: flex;
  justify-content: space-around;
  line-height: 100px;
}
.hd .v-icon {
  background: white;
  border-radius: 100%;
  width: 36px;
  height: 36px;
  color: black;
}
.hd span {
  color: white;
  font-size: 14px;
  padding-left: 10px;
}
.hd {
  text-decoration: none;
}
.menu {
  width: 100%;
  padding-top: 10px;
}
.menu ul {
  display: flex;
  list-style: none;
}
.menu ul li {
  padding-right: 20px;
}
.menu ul li a {
  color: white;
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
}
.hd2 .v-icon {
  background: white;
  border-radius: 100%;
  width: 36px;
  height: 36px;
  color: black;
}
.hd2 span {
  color: white;
  font-size: 14px;
  padding-left: 10px;
}
.hd2 {
  text-decoration: none;
}
.contact2 {
  width: 100%;
}
.btn_menu {
  border: solid 1px white;
  margin: 35px 0px;
  height: 50px;
  width: 50px;
}
.dropdown:hover > .dropdown-menu {
  display: block;
}
.dropdown > .dropdown-toggle:active {
  pointer-events: none;
}

@media screen and (min-width: 1024px) {
  .btn_menu {
    display: none;
  }
  .contact2 {
    display: none;
  }
}

@media screen and (max-width: 1280px) {
  .nav_bar {
    width: 90%;
    margin: 0px 5%;
  }
}

@media screen and (max-width: 1024px) {
  .btn_menu {
    display: block;
  }
  .logo {
    width: 12%;
  }
  .input_search {
    width: 70%;
  }
  .contact {
    width: 12%;
  }
  .hd {
    display: none;
  }
  .cart {
    display: block;
  }
  .logo_img {
    display: none;
  }
  .ip_search {
    height: 50px;
    width: 100%;
  }
  .btn_search {
    height: 50px;
    width: 50px;
  }
  .nav {
    display: flex;
    justify-content: space-around;
  }
  .logo {
    width: 10%;
  }
  .input_search {
    width: 60%;
  }
  .contact {
    width: 10%;
  }
  .cart {
    height: 50px;
    width: 50px;
    line-height: 50px;
  }
  .cart span {
    display: none;
  }
  .cart .v-icon {
    height: 50px;
    width: 50px;
    border-radius: 0px;
    background-color: rgba(74, 29, 34, 0.9);
    color: white;
    border: 1px solid white;
    margin: 35px 0px;
  }
  .menu {
    display: none;
  }
  .contact2 {
    display: flex;
    justify-content: space-around;
  }
}
</style>
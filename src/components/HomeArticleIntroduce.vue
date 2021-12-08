<template>
  <div class="home_article_introduce">
    <v-main style="background-color: #f8f2e8">
      <v-container class="article">
        <div class="title">
          <h3>TIN TỨC</h3>
          <p>NỔI BẬT NHẤT TRONG TUẦN</p>
          <h2>
            <img
              src="//theme.hstatic.net/1000313040/1000406925/14/home_line_collection1.png?v=1757"
              alt=""
            />
          </h2>
        </div>
      <v-row>
        <v-col cols="4" v-for="item in news" :key="item">
          <v-card class="mx-auto">
                  <a href="" style="text-decoration: none; color: black; text-align: center">
                    <v-img
                    class="white--text align-end"
                    :src="item.new_image"
                  >
                  </v-img>
                  <h6>{{item.title}}</h6>
                  </a>
                  <p class="content">{{item.content}}</p>
            </v-card> 
        </v-col>
        </v-row>              
                 
      </v-container>
      <v-container class="introduce" style="padding-bottom: 50px">
        <div class="title">
          <h3>VỀ CHÚNG TÔI</h3>
          <p>CHÀO MỪNG BẠN ĐẾN ANHHOA BAKERY</p>
          <h2>
            <img
              src="//theme.hstatic.net/1000313040/1000406925/14/home_line_collection1.png?v=1757"
              alt=""
            />
          </h2>
        </div>
        <v-row>
          <v-col>
            <div class="introduce_img">
              <a href="">
                <img
                  src="https://theme.hstatic.net/1000313040/1000406925/14/intro.png?v=1757"
                  alt=""
                />
              </a>
            </div>
          </v-col>
          <v-col>
            <div class="introduce_txt">
              <p>
                Anh Hòa Bakery là thương hiệu bánh ngọt Pháp của công ty cổ phần
                bánh ngọt Anh Hòa. Được thành lập từ năm 2004 tại con phố Ngõ
                Trạm, quận Hoàn Kiếm, Hà Nội. Trải qua hơn 15 năm phát triển,
                đến nay Anh Hòa Bakery đã có 13 cơ sở kinh doanh đặt trên những
                tuyến phố đông dân cư ở Hà Nội. Các sản phẩm Anh Hòa Bakery được
                làm từ các nguyên liệu nhập khẩu của các nước có truyền thống
                làm bánh như: Newzeland, Mỹ, Pháp, Bỉ. Với hương vị thơm ngon
                đặc trưng của các loại kem, bơ, sữa, phô mai, hạt hạnh nhân,
                chocolate... dưới bàn tay khéo léo của những người thợ làm bánh
                giàu kinh nghiệm. Quy mô xưởng sản xuất rộng hơn 2000m2 với các
                thiết bị tiên tiến hiện đại theo tiêu chuẩn ISO 2018, toàn bộ
                nhà máy được sơn phủ bởi sơn EPOXY đặc biệt. Anh Hòa Bakery luôn
                mang đến cho khách hàng những sản phẩm chất lượng nhất, đảm bảo
                tuyệt đối về an toàn vệ sinh thực phẩm.
              </p>
              <a href="" class="btn">ĐỌC THÊM</a>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "HomeArticleIntroduce",
  data: () => ({
    news:[]
  }),
  async created() {
    const response = await axios.get("news");
    for (let index = 0; index < 3; index++) {
      this.news.push(response.data[index])
    }
  },
};
</script>

<style scoped>
.title {
  text-align: center;
  padding: 30px;
}
.title h3 {
  font-size: 32px;
  color: #c0c906;
  margin-bottom: 0;
  font-weight: bold;
}
.title p {
  font-size: 18px;
  font-weight: bold;
}
.introduce_img {
  margin-top: 20px;
  border: solid 1px #3d1a1a;
  border-radius: 12px;
}
.introduce_img img {
  transform: translate(20px, -15px);
  border-radius: 12px;
  width: 100%;
  transition: all 0.3s ease;
}
.introduce_img img:hover {
  transform: translate(0) !important;
}
.introduce_txt {
  text-align: center;
}
.introduce_txt p {
  padding: 15px 10px;
  text-align: justify;
}
.introduce_txt a {
  display: inline-block;
  padding: 10px 15px;
  border-radius: 10px;
  color: #fff;
  background: #3d1a1a;
}
.content{
  color: #333333;
  padding-top: 10px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-decoration: none;
  font-size: 13px;
}
</style>
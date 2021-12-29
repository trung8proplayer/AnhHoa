<template>
  <div>
      <v-card
    class="mx-auto overflow-hidden"
    height="100%"
  >
    <v-app-bar
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Admin</v-toolbar-title>
    </v-app-bar>
    <table>
      <b-button v-b-modal.modal-prevent-closing>Thêm tin tức mới</b-button>
  <tr>
    <th>Tên tin tức</th>
    <th>Ảnh</th>
    <th>Nội dung</th>
    <th>Hoạt động</th>
  </tr>
  <tr v-for="item in news" :key="item._id">
    <td>{{item.title}}</td>
    <td><img :src="item.new_image" alt="" style="height:100px"></td>
    <td>{{item.content}}</td>
    <td>
        <div style="display:flex">
          <button @click.prevent="deleteNew(item._id)" class="btn-delete">Xóa </button>
          <button v-b-modal.modal-prevent @click.prevent="editNew(item._id)" class="btn-edit">Sửa </button>
        </div>
    </td>
  </tr>
</table>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
              <router-link to="/admin">
                  
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Quản lý sản phẩm</v-list-item-title>
          </v-list-item>
        </router-link>
         <router-link to="/admin/news">
                  
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Quản lý tin tức</v-list-item-title>
          </v-list-item>
        </router-link>
         <router-link to="/admin/promotions">
            <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Quản lý khuyến mại</v-list-item-title>
          </v-list-item>
        </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
  <div>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Nhập thông tin tin tức"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="addNew">
        <b-form-group
          label="Tên tin tức"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="newOne.title"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Ảnh"
          label-for="image-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="image-input"
            v-model="newOne.new_image"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Nội dung"
          label-for="price-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="price-input"
            v-model="newOne.content"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
    
    <b-modal
      id="modal-prevent"
      ref="modal"
      title="Sửa thông tin tin tức"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk2"
      
    >
      <form ref="form" @submit.stop.prevent="updateNew">
        <b-form-group
          label="Tên tin tức"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="oldNew.title"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Ảnh"
          label-for="image-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="image-input"
            v-model="oldNew.new_image"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Nội dung"
          label-for="price-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="price-input"
            v-model="oldNew.content"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AdminNew",
  data() {
    return {
      news: [],
      newOne:{
      },
      drawer: false,
      group: null,
      oldNew:{
      },
      nameState: null,
      
       
    }
  },
  async created() {
    const res = await axios.get("news");
    this.news = res.data;
    console.log(this.news)
  },
  methods: {
      async deleteNew(_id)
      {
        axios.delete(`news/${_id}`).then(()=>{    
          for(let i=0;i  < this.news.length; i++){
            if(this.news[i]._id== _id){
              this.news.splice(i,1)
              break
            }
          }
        }) 
        alert("Xóa thành công")
      },
      async addNew(){
        axios.post('news/create',this.newOne).then(()=>{
          this.news.push(this.newOne);
          console.log(this.newOne)
          this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
        })
        alert("Thêm thành công")
      },
      async editNew(_id){
        const res = await axios.get(`news/${_id}`)
        this.oldNew = res.data[0]
        console.log(this.oldNew)
      },
      async updateNew(){
        axios.put(`news/${this.oldNew._id}`,this.oldNew).then(()=>{
          for(let i=0; i < this.news.length; i++){
            if(this.news[i]==this.oldNew._id){
              this.news.splice(i , 1, this.oldNew)
              console.log(i)
              break
            }
          }
          alert("Cập nhật thành công")
        })
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent')
        })
      },
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },
      handleOk(bvModalEvt) {
        
        bvModalEvt.preventDefault()
       
        this.addNew()
      },
      handleOk2(bvModalEvt) {
        
        bvModalEvt.preventDefault()
       
        this.updateNew()
        
      },
      resetModal() {
        this.nameState = null
      },
    }
}
</script>
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 80%;
  margin:50px auto;
  font-size: 14px;
}

td, th {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
.btn-delete{
  
  padding: 10px;
  border-radius: 5px;
  color: #dddddd;
  background-color: orangered;
  margin-right: 10px ;
}
.btn-edit{
  background-color: blue;
  padding: 10px;
  border-radius: 5px;
  color: #dddddd;
  
}
.v-item-group{
    margin-top: 50%;
}
</style>


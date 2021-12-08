<template>
  <div>
    <div>
    <b-button v-b-modal.modal-prevent-closing>Open Modal</b-button>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Nhập thông tin bánh"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="addProduct">
        <b-form-group
          label="Tên bánh"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="product.cake_name"
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
            v-model="product.cake_image"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Giá tiền"
          label-for="price-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="price-input"
            v-model="product.price"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Loại bánh"
          label-for="type-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="type-input"
            v-model="product.cake_type"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Mô tả"
          label-for="description-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="description-input"
            v-model="product.description"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
        
      </form>
    </b-modal>
    <!-- update -->
    <b-modal
      id="modal-prevent"
      ref="modal"
      title="Sửa thông tin bánh"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk2"
      
    >
      <form ref="form" @submit.stop.prevent="updateProduct">
        <b-form-group
          label="Tên bánh"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="oldProduct.cake_name"
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
            v-model="oldProduct.cake_image"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Giá tiền"
          label-for="price-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="price-input"
            v-model="oldProduct.price"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Loại bánh"
          label-for="type-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="type-input"
            v-model="oldProduct.cake_type"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Mô tả"
          label-for="description-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="description-input"
            v-model="oldProduct.description"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
        
      </form>
    </b-modal>
  </div>
  
    <table>
  <tr>
    <th>Tên bánh</th>
    <th>Ảnh</th>
    <th>Giá tiền</th>
    <th>Loại Bánh</th>
    <th>Mô tả</th>
    <th>Hoạt động</th>
  </tr>
  <tr v-for="item in products" :key="item._id">
    <td>{{item.cake_name}}</td>
    <td>{{item.cake_image}}</td>
    <td>{{item.price}}</td>
    <td>{{item.cake_type}}</td>
    <td>{{item.description}}</td>
    <td>
        <button @click.prevent="deleteProducts(item._id)">Xóa</button>
        <button v-b-modal.modal-prevent @click.prevent="editproduct(item._id)">Sửa</button>
    </td>
  </tr>
</table>
  

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AdminProduct",
  data() {
    return {
      products: [],
      product:{
        cake_name: '',
        cake_image:'',
        price:'',
        cake_type:'',
        description:''
      },
      oldProduct:{
      },
      nameState: null,
      
       
    }
  },
  async created() {
    const res = await axios.get("cake");
    this.products = res.data;
    console.log(this.products)
  },
  methods: {
      async deleteProducts(_id)
      {
        axios.delete(`cake/${_id}`).then(()=>{    
          for(let i=0;i  < this.products.length; i++){
            if(this.products[i]._id== _id){
              this.products.splice(i,1)
              break
            }
          }
        }) 
      },
      async addProduct(){
        axios.post('cake/create',this.product).then(()=>{
          this.products.push(this.product);
          console.log(this.product)
          this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
        })
      },
      async editproduct(_id){
        const res = await axios.get(`cake/${_id}`)
        this.oldProduct = res.data[0]
        console.log(this.oldProduct)
      },
      async updateProduct(){
        axios.put(`cake/${this.oldProduct._id}`,this.oldProduct).then(()=>{
          for(let i=0; i < this.products.length; i++){
            if(this.products[i]==this.oldProduct._id){
              this.products.splice(i , 1, this.oldProduct)
              console.log(i)
              break
            }
          }
        })
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent')
        })
        window.location.reload()
      },
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.addProduct()
      },
      handleOk2(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.updateProduct()
        
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
  font-size: 10px;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
.btn{
  background-color: blue;
  color: #dddddd;
}
</style>
<template>
  <div>
    <v-card class="mx-auto overflow-hidden" height="100%">
      <table>
        <b-button v-b-modal.modal-prevent-closing>Thêm khuyến mại mới</b-button>
        <tr>
          <th>Tên khuyến mại</th>
          <th>Ảnh</th>
          <th>Nội dung</th>
          <th>Hoạt động</th>
        </tr>
        <tr v-for="item in promotions" :key="item._id">
          <td>{{ item.promotion_name }}</td>
          <td>
            <img :src="item.promotion_image" alt="" style="height: 100px" />
          </td>
          <td>{{ item.content }}</td>
          <td>
            <div style="display: flex">
              <button
                @click.prevent="deletePromotion(item._id)"
                class="btn-delete"
              >
                Xóa
              </button>
              <button
                v-b-modal.modal-prevent
                @click.prevent="editPromotion(item._id)"
                class="btn-edit"
              >
                Sửa
              </button>
            </div>
          </td>
        </tr>
      </table>
    </v-card>
    <div>
      <b-modal
        id="modal-prevent-closing"
        ref="modal"
        title="Nhập thông tin khuyến mại"
        @show="resetModal"
        @hidden="resetModal"
        @ok="handleOk"
      >
        <form ref="form" @submit.stop.prevent="addPromotion">
          <b-form-group
            label="Tên khuyến mại"
            label-for="name-input"
            invalid-feedback="Name is required"
            :state="nameState"
          >
            <b-form-input
              id="name-input"
              v-model="promotion.promotion_name"
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
              v-model="promotion.promotion_image"
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
              v-model="promotion.content"
              :state="nameState"
              required
            ></b-form-input>
          </b-form-group>
        </form>
      </b-modal>

      <b-modal
        id="modal-prevent"
        ref="modal"
        title="Sửa thông tin khuyến mại"
        @show="resetModal"
        @hidden="resetModal"
        @ok="handleOk2"
      >
        <form ref="form" @submit.stop.prevent="updatePromotion">
          <b-form-group
            label="Tên khuyến mại"
            label-for="name-input"
            invalid-feedback="Name is required"
            :state="nameState"
          >
            <b-form-input
              id="name-input"
              v-model="oldPromotion.promotion_name"
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
              v-model="oldPromotion.promotion_image"
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
              v-model="oldPromotion.content"
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
  name: "AdminPromotion",
  data() {
    return {
      promotions: [],
      promotion: {},
      drawer: false,
      group: null,
      oldPromotion: {},
      nameState: null,
    };
  },
  async created() {
    const res = await axios.get("promotions");
    this.promotions = res.data;
    console.log(this.promotions);
  },
  methods: {
    async deletePromotion(_id) {
      axios.delete(`promotions/${_id}`).then(() => {
        for (let i = 0; i < this.promotions.length; i++) {
          if (this.promotions[i]._id == _id) {
            this.promotions.splice(i, 1);
            break;
          }
        }
      });
      alert("Xóa thành công");
    },
    async addPromotion() {
      axios.post("promotions/create", this.promotion).then(() => {
        this.promotions.push(this.promotion);
        console.log(this.promotion);
        this.$nextTick(() => {
          this.$bvModal.hide("modal-prevent-closing");
        });
      });
      alert("Thêm thành công");
    },
    async editPromotion(_id) {
      const res = await axios.get(`promotions/${_id}`);
      this.oldPromotion = res.data[0];
      console.log(this.oldPromotion);
    },
    async updatePromotion() {
      axios
        .put(`promotions/${this.oldPromotion._id}`, this.oldPromotion)
        .then(() => {
          for (let i = 0; i < this.promotions.length; i++) {
            if (this.promotions[i] == this.oldPromotion._id) {
              this.promotions.splice(i, 1, this.oldPromotion);
              console.log(i);
              break;
            }
          }
          alert("Cập nhật thành công");
        });
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent");
      });
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();

      this.addPromotion();
    },
    handleOk2(bvModalEvt) {
      bvModalEvt.preventDefault();

      this.updatePromotion();
    },
    resetModal() {
      this.nameState = null;
    },
  },
};
</script>
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 80%;
  margin: 50px auto;
  font-size: 14px;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
.btn-delete {
  padding: 10px;
  border-radius: 5px;
  color: #dddddd;
  background-color: orangered;
  margin-right: 10px;
}
.btn-edit {
  background-color: blue;
  padding: 10px;
  border-radius: 5px;
  color: #dddddd;
}
.v-item-group {
  margin-top: 50%;
}
</style>


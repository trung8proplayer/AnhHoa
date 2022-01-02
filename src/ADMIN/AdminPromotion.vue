<template>
  <v-data-table
    :headers="headers"
    :items="promotions"
    class="elevation-1"
    :items-per-page="5"
    :search="search"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Danh sách khuyến mại</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              Thêm khuyến mại mới
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="promotion.promotion_name"
                      label="Tên khuyến mại"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="promotion.promotion_image"
                      label="Ảnh"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="promotion.content"
                      label="Nội dung"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Hủy </v-btn>
              <v-btn color="blue darken-1" text @click="save"> Lưu </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Bạn muốn xóa khuyến mại này?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Không</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >Có</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.promotion_image`]="{ item }">
      <v-img :src="item.promotion_image" style="width: 200px; height: 200px"></v-img>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon small class="mr-2 text-primary" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)" class="text-danger"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="getData"> Reset </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import axios from "axios";
export default {
   name: "AdminPromotion",
  data() {
    return {
      promotions: [],
      promotion: {},
      search: "",
      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
      defaultItem: {
        promotion_name: "",
        promotion_image: "",
        content: "",

      },
      headers: [
        { text: "Tên khuyến mại", value: "promotion_name", align: "start" },
        { text: "Ảnh", value: "promotion_image", sortable: false },
        { text: "Nội dung", value: "content", align: "center" },
        { text: "Hành động", value: "actions", sortable: false },
      ],
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Thêm khuyến mại" : "Sửa thông tin khuyến mại";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  async created() {
    this.getData();
  },
  methods: {
    async addPromotion() {
      axios.post("promotions/create", this.promotion).then(() => {
        this.getData();
      });
      alert("Thêm thành công");
    },
    editItem(item) {
      this.editedIndex = this.promotions.indexOf(item);
      this.promotion = Object.assign({}, item);
      this.dialog = true;
      console.log(item);
    },
    updatePromotion() {
      axios.put(`promotions/${this.promotion._id}`, this.promotion).then(() => {
        this.getData();
      });
    },
    async getData() {
      const res = await axios.get("promotions");
      this.promotions = res.data;
    },

    deleteItem(item) {
      this.editedIndex = this.promotions.indexOf(item);
      this.promotion = Object.assign({}, item);
      this.dialogDelete = true;
    },
    async deletePromotion() {
      axios.delete(`promotions/${this.promotion._id}`).then(() => {
        this.getData();
      });
    },

    deleteItemConfirm() {
      this.deletePromotion();
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.promotion = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.promotion = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        this.updatePromotion();
      } else {
        this.addPromotion();
      }
      this.close();
    },
  },
};
</script>
<style scoped>
</style>


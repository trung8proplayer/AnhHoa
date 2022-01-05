<template>
  <v-data-table
    :headers="headers"
    :items="products"
    class="elevation-1"
    :items-per-page="5"
    :search="search"
    item-key="_id"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Danh sách khách liên hệ</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
        <v-spacer></v-spacer>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-btn depressed color="primary" @click="deleteCake(item._id)">
        Đã liên hệ    
      </v-btn>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="getData"> Reset </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import axios from "axios";

export default {
  name: "PerOrder",
  data() {
    return {
      products: [],
      product: {},
      search: "",
      headers: [
        { text: "Tên người dùng", value: "full_name", align: "start" },
        { text: "Gmail", value: "email", sortable: false },
        { text: "Số điện thoại", value: "phone", align: "center" },
        { text: "Nội dung", value: "content" },
        { text: "Trạng thái", value: "actions", sortable: false ,align: "center"},
      ],
    };
  },
  async created() {
    this.getData();
  },
  methods: {
    async getData() {
      const res = await axios.get("perOrder");
      this.products = res.data;
    },
    async deleteCake(_id) {
      axios.delete(`perOrder/${_id}`).then(() => {
        this.getData();
      });
    },
  },
};
</script>
<style scoped>
</style>


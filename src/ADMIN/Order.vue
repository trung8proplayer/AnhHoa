<template>
  <div class="py-3 px-5">
    <v-data-table
      dense
      :headers="headers"
      :items="orders"
      item-key="name"
      class="elevation-1"
      :loading="loading"
      :hide-default-footer="true"
    >
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2 font-26 text-primary" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon class="font-26 text-danger" small @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Orders",
  data: () => ({
    headers: [
      {
        text: "Người đặt",
        align: "start",
        value: "user",
      },
      { text: "Tên món ăn", value: "name" },
      { text: "Trạng thái", value: "status" },
      { text: "Vận chuyển", value: "transport" },
      { text: "Ngày đặt", value: "createdAt" },
      { text: "Tổng tiền", value: "total" },
      { text: "Hành động", value: "actions", sortable: false },
    ],
    orders: [],
    loading: true,
  }),
  created() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get("/order")
        .then((data) => {
          const items = data.data;
          items.map((e) => {
            this.orders.push({
              user: e.user,
              name: e.name,
              status: e.status,
              transport: e.transport,
              createdAt: new Date(e.createdAt).toLocaleDateString(),
              total: `${e.total?e.total:0} đ`,
            });
          });
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    editItem(item) {
      console.log(item);
    },
    delete(item) {
      console.log(item);
    },
  },
};
</script>

<style style="css">
.text-start {
  padding: 1rem !important;
}
.font-26 {
  font-size: 26px !important;
}
</style>
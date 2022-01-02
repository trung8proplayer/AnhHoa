<template>
  <div class="py-3 px-5">
    <v-toolbar-title>Danh sách đơn hàng</v-toolbar-title>
    <v-divider class="mx-4" inset vertical></v-divider>
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Search"
      single-line
      hide-details
    ></v-text-field>
    <v-data-table
      dense
      :headers="headers"
      :items="orders"
      item-key="_id"
      class="elevation-1"
      :loading="loading"
      :search="search"
    >
      <template v-slot:[`item.actions`]="{ item }">
        <v-btn depressed color="primary" @click="orderDetail(item._id)">
          Xem chi tiết
        </v-btn>
      </template>
    </v-data-table>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title> </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  :value="order.name"
                  label="Tên đơn hàng"
                  :readonly="readonly"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  :value="
                    order && order.createdAt
                      ? new Date(order.createdAt).toLocaleDateString()
                      : 0
                  "
                  label="Ngày đặt"
                  :readonly="readonly"
                  >đ</v-text-field
                >
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  :value="order.user.lastName"
                  label="Tên đơn hàng"
                  :readonly="readonly"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  :value="order.address"
                  label="Địa chỉ"
                  :readonly="readonly"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  :value="order.phone"
                  label="Số điện thoại"
                  :readonly="readonly"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="12">
                <table class="list-cake">
                  <tr class="item">
                    <td class="item-row">Tên bánh</td>
                    <td>Đơn giá</td>
                  </tr>
                  <tr v-for="item in order.cakes" :key="item" class="item">
                    <td>{{ item.cake_name }}</td>
                    <td>{{ item.price }}</td>
                  </tr>
                </table>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  :value="order.total"
                  label="Tổng tiền"
                  :readonly="readonly"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="12">
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-btn depressed color="primary" @click="close()">
                  Đóng
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Orders",
  data: () => ({
    headers: [
      { text: "Tên đơn hàng", value: "name" },
      { text: "Trạng thái", value: "status" },
      { text: "Vận chuyển", value: "transport" },
      { text: "Ngày đặt", value: "createdAt" },
      { text: "Tổng tiền", value: "total" },
      { text: "Hành động", value: "actions", sortable: false, align: "center" },
    ],
    orders: [],
    dialog: false,
    dialogDelete: false,
    editedIndex: -1,
    defaultItem: {},
    order: {
      user: {
        fistName: "",
        lastName: "",
      },
      cakes: [
        {
          cake_image: "",
          cake_name: "",
          price: "",
        },
      ],
    },
    loading: true,
    search: "",
    readonly: true,
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
              _id: e._id,
              name: e.name,
              status: e.status,
              transport: e.transport,
              address: e.address,
              phone: e.phone,
              createdAt: new Date(e.createdAt).toLocaleDateString(),
              total: `${e.total ? e.total : 0} đ`,
            });
          });
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    async orderDetail(_id) {
      console.log(_id);
      const res = await axios.get(`order/detail/${_id}`);
      this.order = res.data[0];
      this.dialog = true;
      console.log(this.order);
    },
    close(){
      this.dialog = false;
    }
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
.list-cake {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

.item,
.item-row {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
<template>
   <v-data-table
    :headers="headers"
    :items="news"
    class="elevation-1"
    :items-per-page="5"
    :search="search"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Danh sách tin tức</v-toolbar-title>
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
              Thêm tin tức mới
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
                      v-model="newOne.title"
                      label="Tên tin tức"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="newOne.new_image"
                      label="Ảnh"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="newOne.content"
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
              >Bạn muốn xóa tin tức này?</v-card-title
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
    <template v-slot:[`item.new_image`]="{ item }">
      <v-img :src="item.new_image" style="width: 200px; height: 200px"></v-img>
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
  name: "AdminNew",
  data() {
    return {
      news: [],
      newOne: {},
      search: "",
      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
      defaultItem: {
        new_image: "",
        title: "",
        content: "",
      },
      headers: [
        { text: "Tên tin tức", value: "title", align: "start" },
        { text: "Ảnh", value: "new_image", sortable: false },
        { text: "Nội dung", value: "content", align: "center" },
        { text: "Hành động", value: "actions", sortable: false },
      ],
    };
  },
   computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Thêm tin tức" : "Sửa thông tin tin tức";
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
    async deleteNew() {
      axios.delete(`news/${this.newOne._id}`).then(() => {
        this.getData();
      });
    },
    deleteItem(item) {
      this.editedIndex = this.news.indexOf(item);
      this.newOne = Object.assign({}, item);
      this.dialogDelete = true;
    },
    async addNew() {
      axios.post("news/create", this.newOne).then(() => {
        this.getData();
      });
    },
    editItem(item) {
      this.editedIndex = this.news.indexOf(item);
      this.newOne = Object.assign({}, item);
      this.dialog = true;
      console.log(item);
    },
    updateNew() {
      axios.put(`news/${this.newOne._id}`, this.newOne).then(() => {
        this.getData().then(() => {
        });
      });
    },
    async getData() {
      const res = await axios.get("news");
      this.news = res.data;
    },
    deleteItemConfirm() {
      this.deleteNew();
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.newOne = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.newOne = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        this.updateNew();
      } else {
        this.addNew();
      }
      this.close();
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


import mongoose from "mongoose";

const menuitemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  minutes: {
    type: Number,
    required: true
  }

});

const MenuItem = mongoose.model("MenuItem", menuitemSchema);

export default MenuItem;

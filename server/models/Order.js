import mongoose from "mongoose";
import MenuItem from "./MenuItem.js";

const orderSchema = new mongoose.Schema({
  menuItems: [MenuItem.schema]

});

const Order = mongoose.model("Order", orderSchema);

export default Order;

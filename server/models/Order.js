import mongoose from "mongoose";
import MenuItem from "./MenuItem";

const orderSchema = new mongoose.Schema({
  menuItems: [MenuItem.schema]

});

const Order = mongoose.model("Order", orderSchema);

export default Order;

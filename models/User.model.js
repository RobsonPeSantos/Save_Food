const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    password: String,
    estabilishment: {
      companyName: String,
      category: String,
      cuisine: [], //ex - Italian, French, Brazilian
      phone: String,
      email: String,
      address: {
        street: String,
        number: Number,
        complement: String,
        neighborhood: String,
        city: String,
      },
      paymentForms: [], //credit card, cash, meal ticket
      offers: [{ type: Schema.Types.ObjectId, ref: "Offer" }],
      delivery: Boolean,
      takeaway: Boolean,
      takeawayTime: {
        startTime: Date, //use setHours() method
        endTime: Date,
      },
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;

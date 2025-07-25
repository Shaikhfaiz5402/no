//import mongoose from "mongoose";
//const {ObjectId} = mongoose.Schema.Types

//const bookingSchema = new mongoose.Schema({
   // car: {type: ObjectId, ref: "Car", required: true},
    //user: {type: ObjectId, ref: "User", required: true},
    //owner: {type: ObjectId, ref: "User", required: true},
    //pickupDate: {type: Date, required: true},
    //returnDate: {type: Date, required: true},
    //status: {type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending"},
    //price: {type: Number, required: true}
//},{timestamps: true})

//const Booking = mongoose.model('Booking', bookingSchema)

//export default Booking

import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Car",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  pickupDate: {
    type: Date,
    required: true,
  },
  returnDate: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^\d{10}$/.test(v); // Validates exactly 10 digits
      },
      message: props => `${props.value} is not a valid 10-digit mobile number!`,
    },
  },
}, {
  timestamps: true,
});

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;

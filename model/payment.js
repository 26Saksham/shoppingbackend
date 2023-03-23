import mongoose, { trusted } from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },  
  number: {
    type: Number,
    required: true,
  },
  cardOption:{
    type:String,
    required:true
  },
  cardNo:{
    type:String,
      required:true
  },

  'ccv':{
     type:String,
      required:true
  },

  'expiry':{
       type:String,
      required:true
  },

  order:{
    type:Array,
    required:true
  },

},{
    timestamps: true
  });

const payment = mongoose.model("payment", userSchema);

export default payment;

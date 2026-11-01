const mongoose= require("mongoose");
const Schema= mongoose.Schema;
let defaultImg = "https://unsplash.com/photos/two-chairs-sitting-in-front-of-a-swimming-pool-k_My4rXk4Lc";

const listingSchema= new Schema({
    title:{
        type: String,
        require:true,
    },
    description:String,
    image:{
        type: String,
        default: defaultImg,
        set: (v)=> v=== ""? defaultImg:v,
    },
    price:Number,
    location:String,
    country:String,
});

const Listing= mongoose.model("Listing",listingSchema);

module.exports = Listing;
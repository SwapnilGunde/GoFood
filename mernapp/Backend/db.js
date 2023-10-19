const mongoose = require('mongoose');
async function connectToMongo() {
    try {
      await mongoose.connect('mongodb+srv://SwapnilGunde:Swapnil321@cluster0.tffivff.mongodb.net/goFoodMERN?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('Connected to MongoDB');
      const fetched_data = await mongoose.connection.db.collection("foodItems").find({}).toArray()
      const foodCategory_data = await mongoose.connection.db.collection("foodCategory").find({}).toArray()
      global.foodItems =  fetched_data;
      global.foodCategory =  foodCategory_data;
      }
     catch (error) {
      console.error('Error connecting to MongoDB', error);
    }
  }
  
  module.exports=connectToMongo;
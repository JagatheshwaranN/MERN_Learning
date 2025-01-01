// console.log("Welcome to Mongoose Learning Program Journey")
const mongoose = require('mongoose');
const User = require('./user')
// Approach 1
// mongoose.connect("mongodb://localhost/testdb");

// Approach 2
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/testdb');
    // const user = await User.findById("676eaf3ea8ea667ef3d7f9de");
    // const user = await User.find({name: 'Jaga'});
    // const user = await User.findOne({name: 'Jaga'});
    // const user = await User.exists({name: 'Jaga'});
    // const user = await User.where("name").equals("Jaga");
    // const user = await User.where("name").equals("Jaga").where("age").lt(31);
    // const user = await User.where("name").equals("Jaga").where("age").lt(35).limit(2);
    // const user = await User.where("name").equals("Jaga").where("age").lt(35).limit(2).select("age");
    // user[0].bestFriend = "676d3075e69cff11315fb174";
    // await user[0].save();
    // const user = await User.where("name").equals("Jaga").where("age").lt(35).limit(2);
    // const user = await User.where("name").equals("Jaga").where("age").lt(35).limit(1).populate("bestFriend");
    // const user = await User.findByUserName({name:"Jaga"});
    // user.sayHi();
    // const user = await User.findOne({name:"Jaga", email:"test@gmail.com"});
    // console.log(user.namedEmail)
    const user = await User.findOne({name:"Jaga", age:32}).limit(1);
    console.log(user);
    user.save();
    console.log(user);
}

// async function main() {
//     await mongoose.connect('mongodb://127.0.0.1:27017/testdb');
//     const user = await User.create({
//         name: "Jaga", 
//         age:32,
//         email: "TEST@gmail.com",
//         hobbies: ["Coding", "Gardening"],
//         address: {
//             street: "123 Street",
//             city: "Chennai"
//         }});
//     // user.name = "Jagu";
//     console.log(user);

// }

// Approach 1
// const user = new User({name: "Jaga", age:31});
// user.save().then(()=>console.log("User Saved Successfully");
const mongoose = require("mongoose")

// Single Schema
// const userSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
//     email: String,
//     createdAt: Date,
//     updatedAt: Date,
//     bestFriend: mongoose.SchemaTypes.ObjectId,
//     hobbies: [String],
//     address: {
//         street: String,
//         city: String
//     }
// })

// Nesting of Schema
const addressSchema = new mongoose.Schema({
    street: String,
    city: String
})

// const userSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
//     email: String,
//     createdAt: Date,
//     updatedAt: Date,
//     bestFriend: mongoose.SchemaTypes.ObjectId,
//     hobbies: [String],
//     address: addressSchema
// })

// Adding validation to Email
const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 1,
        max: 100,
        validate: {
            validator: val => val > 0,
            message: props => `${props.value} is not an odd number`
        }},
    email: {
        type: String,
        minLength: 10,
        required: true,
        lowercase: true
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
    updatedAt:  {
        type: Date,
        // immutable: true,
        default: () => Date.now()
    },
bestFriend: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User"},
    hobbies: [String],
    address: addressSchema
})

userSchema.methods.sayHi = function sayHi() {
    console.log(`Hi! My name is ${this.name}`);
}

userSchema.statics.findByUserName = function(name) {
    return this.where({name: new RegExp(name, "i")});
}

userSchema.query.byUserName = function(name) {
    return this.where({name: new RegExp(name, "i")});
}

userSchema.virtual("namedEmail").get(function(){
    return `${this.name} ${this.email}`;
})

userSchema.pre("save", function(next) {
    this.updatedAt = Date.now();
    next();
})

userSchema.post("save", function(doc, next) {
    doc.sayHi();
    next();
})


module.exports = mongoose.model("User", userSchema);
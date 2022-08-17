const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:root@cluster0.j56ygnp.mongodb.net/miapp?retryWrites=true&w=majority')

const User = mongoose.model('User',{
    username: String,
    age: Number,
})

const crear = async () => {
    const user = new User({ username: 'Daniel Olaya', age: 18})
    const savedUser = await user.save()
    console.log(savedUser);
}

const encontrarTodo = async () => {
    const users = await User.find()
    console.log(users);
}

const userName = async () => {
    const user = await User.find({ username: 'Daniel Olaya'}) 
    console.log(user);
}

// crear()
// encontrarTodo()
userName()
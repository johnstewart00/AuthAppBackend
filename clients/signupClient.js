const mongoose = require('mongoose');
const userSchema = require('../misc/schemas');
const { Schema } = mongoose;


const User = mongoose.model('User', userSchema);

class signupClient {
    constructor(username, password, firstName, lastName, address, gender){
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.gender = gender;
    }

    signup = async () => {
      console.log('in the signup Client signup function')
      console.log('username: ', this.username)
      console.log('hashedPassword: ', this.password);
      try {
        mongoose.connect('mongodb+srv://johnstewart:test@cluster0.ypghj.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
          console.log('Connected to MongoDB');
        })
        .catch((error) => {
          console.error('Error connecting to MongoDB:', error);
        });
        const user = await User.find({username: this.username});
        // console.log('user: ', user);
        if(user.length > 0){
          console.log('already a user with that username')
          throw new Error('username already taken!')
        }
        const newUser = new User({
            username: this.username,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
            address: this.address,
            gender: this.gender
        });
        await newUser.save()
        console.log('added a new user', newUser)
        return Promise.resolve();
      } catch (error) {
        console.log('error adding a user: ', error);
        throw error;
      }        
    }
}

module.exports = signupClient
const mongoose = require('mongoose');
const userSchema = require('../misc/schemas');
const { Schema } = mongoose;

const User = mongoose.model('User', userSchema);

class loginClient {
    constructor(username, password){
        this.username = username;
        this.password = password;
    }

    login = async () => {
        console.log('in the login Client login function')
        console.log('username: ', this.username)
        console.log('hashedPassword: ', this.password);
        try {
            await mongoose.connect('mongodb+srv://johnstewart:test@cluster0.ypghj.mongodb.net/?retryWrites=true&w=majority', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then(() => {
                console.log('Connected to MongoDB');
            })
            .catch((error) => {
                console.error('Error connecting to MongoDB:', error);
            });
            
            const user = await User.find({username: this.username, password: this.password})
            //console.log('Users:', users);
            if(user.length === 0) {
                console.log('no user found')
                throw new Error('no data found')
            }
            console.log('success!', user)

            await mongoose.connection.close();
            return user;
        } catch (error) {
            console.error('Error retrieving the users: ', error);
            throw error;
        }
    }
    
}
module.exports = loginClient
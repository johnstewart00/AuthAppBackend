const loginProcessor = require('../processors/loginProcessor')

async function loginHandler (username, password) {
    console.log('in the login handler');
    console.log(username, password);
    try {
        const result = await loginProcessor(username, password);
        return result;
    } catch (error){
        console.log('in the login Handler catch block: ', error)
        throw error
    } 
} 
module.exports = loginHandler;
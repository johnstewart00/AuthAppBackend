const hashFunction = require('../misc/hashFunction');
const loginClient = require('../clients/loginClient')

async function loginProcessor (username, password) {
    console.log('in the login processor');
    const passwordHashed = hashFunction(password);
    const client = new loginClient(username, passwordHashed);
    try {
        const result = await client.login();
        return result;
    } catch (error){
        console.log('in the login processor catch block: ', error);
        throw error;
    }
}
module.exports = loginProcessor
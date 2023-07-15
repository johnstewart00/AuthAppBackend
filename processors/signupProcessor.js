const signupClient = require("../clients/signupClient");
const hashFunction = require("../misc/hashFunction")

async function signupProcessor (username, password, firstName, lastName, address, gender) {
    console.log('in the signup processor')
    const passwordHashed = hashFunction(password);
    const client = new signupClient(username, passwordHashed, firstName, lastName, address, gender);
    try {
        const result = await client.signup();
        return result;
    } catch (error) {
        console.log('signupProcessor catch block: ', error);
        throw error;
    }
}
module.exports = signupProcessor
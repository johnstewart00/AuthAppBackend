const signupProcessor = require("../processors/signupProcessor");

async function signupHandler ({username, password, firstName, lastName, address, gender}) {
    console.log('in the signup handler');
    try {
        const result = await signupProcessor(username, password, firstName, lastName, address, gender);
        return result;
    } catch (error) {
        console.log('in the signup Handler catch block', error);
        throw error;
    }
}

module.exports = signupHandler
const fetch = require('node-fetch');

class GitHubUserClient {
    async getUserDetails(userName) {
        const githubUserDetailsApi = `https://api.github.com/users/${userName}`;

        const apiResponse = await fetch(githubUserDetailsApi);
        const user = await apiResponse.json();

        if (apiResponse.status !== 200)
            throw Error(user.message);

        return user;
    }
}

async function getGitHubUserDetails (userName) {
    const client = new GitHubUserClient();

    try {
        const user = await client.getUserDetails(userName);

        console.log('User Name ', user.name);
        console.log('User Location ', user.location);
    } catch(error) {
        console.error(`Error : ${error.message}`);
    }
}

// Existing user
getGitHubUserDetails('shabeermothi');
// Unknown user
getGitHubUserDetails('dhgklashdlkrs');
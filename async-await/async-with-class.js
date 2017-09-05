const fetch = require('node-fetch');

class GitHubApiClient {
    async getUserDetails(userName) {
        const githubUserDetailsApi = `https://api.github.com/users/${userName}`;

        const apiResponse = await fetch(githubUserDetailsApi);
        return await apiResponse.json();
    }
}

/**
 * Note that the getUserDetails call is wrapped inside an async function
 * to make use of await operator
 */
(async () => {
    const githubClient = new GitHubApiClient();
    const user = await githubClient.getUserDetails('shabeermothi');

    console.log('Name ', user.name);
    console.log('Location ', user.location);
})();

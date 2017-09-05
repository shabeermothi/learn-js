const fetch = require('node-fetch');

class GitHubClient {
    async getDetails(uri) {
        const gitHubApi = `https://api.github.com/${uri}`;

        const apiResponse = await fetch(gitHubApi);
        const details = await apiResponse.json();

        if (apiResponse.status !== 200)
            throw Error(details.message);

        return details;
    }
}

async function getDetails(userName) {
    const client = new GitHubClient();

    try {
        const [user, repos] = await Promise.all([
            client.getDetails(`users/${userName}`),
            client.getDetails(`users/${userName}/repos`)
        ]);

        console.log('User Name ', user.name);
        console.log('User Location ', user.location);

        console.log(`${repos.length} repos`);
    } catch(error) {
        console.error(`Error : ${error.message}`);
    }
}

getDetails('shabeermothi');
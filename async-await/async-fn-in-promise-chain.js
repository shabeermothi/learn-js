const fetch = require('node-fetch');

async function getGithubUserDetails(username) {
    const githubUserDetailsApi = `https://api.github.com/users/${username}`;

    const apiResponse = await fetch(githubUserDetailsApi);
    return await apiResponse.json();
}

getGithubUserDetails('shabeermothi')
    .then((user) => {
        console.log('User Name ', user.name);
        console.log('User Location ', user.location);
    });
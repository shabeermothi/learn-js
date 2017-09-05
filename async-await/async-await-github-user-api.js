const fetch = require('node-fetch');

function getGithubUserDetailsWithoutAsync(username) {
    const githubUserDetailsApi = `https://api.github.com/users/${username}`;

    fetch(githubUserDetailsApi)
        .then((response) => response.json())
        .then((user) => {
            console.log('Without Async');
            console.log('--------------');
            console.log('User Name ', user.name);
            console.log('User Location ', user.location);
        });
}

getGithubUserDetailsWithoutAsync('shabeermothi');

async function getGithubUserDetailsWithAsync(username) {
    const githubUserDetailsApi = `https://api.github.com/users/${username}`;

    const apiResponse = await fetch(githubUserDetailsApi);
    const userDetails = await apiResponse.json();
    
    console.log('With Async');
    console.log('-----------');
    console.log('User Name ', userDetails.name);
    console.log('User Location ', userDetails.location);
}

getGithubUserDetailsWithAsync('shabeermothi');
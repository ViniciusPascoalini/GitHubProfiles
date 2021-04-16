import { Octokit } from "@octokit/core";

const GitHubAPI__KEY = "";

const octokit = new Octokit({
    auth: `${GitHubAPI__KEY}`
});


const searchGitHubUser = async(user) => {

    try {

        const req = await octokit.request(`GET /users/${user}`);
    
        console.log(req);
        return(req);
    }   catch(err) {
        console.log(err);
    }
}


export default searchGitHubUser;
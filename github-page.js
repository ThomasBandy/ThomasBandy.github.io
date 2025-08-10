async function getUser(ghUserName) {
    try {
        const res = await fetch(`https://api.github.com/users/${ghUserName}`);
        const data = await res.json();
        return data;
        
    } catch (error) {
        console.error(error);
    }
}

getUser('ThomasBandy');

async function getUserRepos(ghUserName) {
    try {
        const response = await fetch(`https://api.github.com/users/${ghUserName}/repos`)
        const data = await response.json();
        
        const repoList = document.getElementById('repo-list');
        repoList.innerHTML = ''; 

        data.forEach(repo => {
            const repoCard = document.createElement('div');
            repoCard.classList.add('repo-card');
            repoCard.addEventListener('click', function() {
                window.location.href = `https://www.github.com/${repo.full_name}`
            });
            const repoName = document.createElement('p');
            repoName.classList.add('repo-name');
            repoName.textContent = (`${repo.name}`);
    
            repoList.appendChild(repoCard);
            repoCard.appendChild(repoName);
        });

        if (!data) {
            return;
        }
    } catch (error) {
        console.error(error);
    }

    
   
}

getUserRepos('ThomasBandy');
function fetchCommitMessage() {
    fetch('https://api.github.com/repos/mrksbgg/mrksbgg.github.io/commits?per_page=1')
    .then(res => res.json())
    .then(res => {
        document.getElementById('commitMessage').innerHTML = res[0].commit.message;
    });
}

function fetchCommitDate() {
    return fetch('https://api.github.com/repos/mrksbgg/mrksbgg.github.io/commits?per_page=1')
    .then(res => res.json())
    .then(res => {
        return res[0].commit.author.date; 
    });
}

function formatDate(dateString) {
    const commitDate = new Date(dateString); 

    const day = commitDate.getDate();
    const month = commitDate.getMonth() + 1; 
    const year = commitDate.getFullYear();

    return `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`;
}

fetchCommitDate()
    .then(dateString => {
        const formattedDate = formatDate(dateString);
        document.getElementById('commitDate').innerHTML = formattedDate; 
});
//  get userData from LS
var userData = JSON.parse(localStorage.getItem('userData'));
let userName = userData.userName;
let fullName = userData.fullName;
let totalRepo = userData.totalRepo;
if (totalRepo > 30) {
    totalRepo = "30+";
}
// localStorage.clear(userData);

// Get Repo data
if (userName != "") {
    fetch(`https://api.github.com/users/${userName}/repos`)
        .then(result => result.json())
        .then(data => {
            if (data.message == 'Not Found') {
                ui.showAlert("User not Found!", "alert alert-danger");
            } else {
                showBanner(data);
                showRepos(data);
                // console.log(data);
            }
        })
}

function showBanner(repos) {
    let banner = document.querySelector('#banner');
    banner.innerHTML = `
        <h1 class="text-white fw-bold">${fullName}</h1>
        <h3 class="text-white">Public Repositories <span class="badge bg-danger">${totalRepo}</span></h3>
        <hr class = "mt-4">
    `
}

// Show All Repo (Need to efficient)
function showRepos(repos) {
    let r_sec = document.querySelector('#repos_sec');
    for (var i = 0; i < repos.length; i = i + 3) {
        if (repos.length - i >= 3) {
            r_sec.innerHTML += `
        <div class="row pd-2">
                <div class="col-md-4 py-2 mx-auto">
                    <div class="card repo-card repo-anim border border-light">
                        <a class="card-body btn repo-anim" href = "https://github.com/${userName}/${repos[i].name}">
                            <div class="col ms-2" style="text-align: justify;">
                                <strong>${repos[i].name}</strong> <br>
                                <small><i>Language: ${repos[i].language}</i></small> <br>
                                <small>Created at: ${repos[i].created_at}</small> <br>
                                <small>Fork: ${repos[i].fork}</small>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-md-4 py-2 mx-auto">
                    <div class="card repo-card repo-anim border border-light">
                        <a class="card-body btn repo-anim" href = "https://github.com/${userName}/${repos[i+1].name}">
                            <div class="col ms-2" style="text-align: justify;">
                                <strong>${repos[i+1].name}</strong> <br>
                                <small><i>Language: ${repos[i+1].language}</i></small> <br>
                                <small>Created at: ${repos[i+1].created_at}</small> <br>
                                <small>Fork: ${repos[i+1].fork}</small>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-md-4 py-2 mx-auto">
                    <div class="card repo-card repo-anim border border-light">
                        <a class="card-body btn repo-anim" href = "https://github.com/${userName}/${repos[i+2].name}">
                            <div class="col ms-2" style="text-align: justify;">
                                <strong>${repos[i+2].name}</strong> <br>
                                <small><i>Language: ${repos[i+2].language}</i></small> <br>
                                <small>Created at: ${repos[i+2].created_at}</small> <br>
                                <small>Fork: ${repos[i+2].fork}</small>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        `
        } else if (repos.length - i == 2) {
            r_sec.innerHTML += `
        <div class="row  pd-2">
            <div class="col-md-4 py-2 mx-auto">
                <div class="card repo-card repo-anim border border-light">
                    <a class="card-body btn repo-anim" href = "https://github.com/${userName}/${repos[i].name}">
                        <div class="col ms-2" style="text-align: justify;">
                            <strong>${repos[i].name}</strong> <br>
                            <small><i>Language: ${repos[i].language}</i></small> <br>
                            <small>Created at: ${repos[i].created_at}</small> <br>
                            <small>Fork: ${repos[i].fork}</small>
                        </div>
                    </a>
                </div>
            </div>
            <div class="col-md-4 py-2 mx-auto">
                <div class="card repo-card repo-anim border border-light">
                    <a class="card-body btn repo-anim" "https://github.com/${userName}/${repos[i+1].name}">
                        <div class="col ms-2" style="text-align: justify;">
                            <strong>${repos[i+1].name}</strong> <br>
                            <small><i>Language: ${repos[i+1].language}</i></small> <br>
                            <small>Created at: ${repos[i+1].created_at}</small> <br>
                            <small>Fork: ${repos[i+1].fork}</small>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        `
        } else if (repos.length - i == 1) {
            r_sec.innerHTML += `
        <div class="row  pd-2">
            <div class="col-md-4 py-2 mx-auto">
                <div class="card repo-card repo-anim border border-light">
                    <a class="card-body btn repo-anim" href = "https://github.com/${userName}/${repos[i].name}">
                        <div class="col ms-2" style="text-align: justify;">
                            <strong>${repos[i].name}</strong> <br>
                            <small><i>Language: ${repos[i].language}</i></small> <br>
                            <small>Created at: ${repos[i].created_at}</small> <br>
                            <small>Fork: ${repos[i].fork}</small>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        `
        }
    }
    // Change style if fork is true
    let forkClass = document.querySelectorAll("small");
    for (i = 0; i < forkClass.length; i++) {
        if (forkClass[i].innerHTML == "Fork: true") {
            forkClass[i].parentElement.parentElement.className = "card-body btn forkedProj"
            console.log();
        }
    }
}
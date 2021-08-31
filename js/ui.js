class UI {
    constructor() {
        this.profile = document.querySelector('#profile');
    }
    showProfile(user) {
        this.clearAlert();
        this.profile.innerHTML = `
        <div class="card card-body my-4">
                <div class="row">
                    <div class="col-md-3 text-center my-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mt-3 me-2">View Profile</a>
                        <a href="/repo.html" class="btn btn-primary btn-block mt-3">View Repos</a>
                    </div>
                    <div class="col-md-9 mt-3 mx-auto">
                    <div class= "text-center">
                        <h3>${user.name}</h3>
                        <span class="badge bg-secondary me-2 my-2">Public Repos: ${user.public_repos}</span>
                        <span class="badge bg-secondary me-2 my-2">Public Gists: ${user.public_gists}</span>
                        <span class="badge bg-secondary me-2 my-2">Followers: ${user.followers}</span>
                        <span class="badge bg-secondary my-2">Following: ${user.following}</span> </div>
                        <br>
                        <ul class="list-group">
                            <li class="list-group-item"><b>Login:</b> ${user.login}</li>
                            <li class="list-group-item"><b>Company:</b> ${user.company}</li>
                            <li class="list-group-item"><b>Bio:</b> ${user.bio}</li>
                            <li class="list-group-item"><b>Location:</b> ${user.location}</li>
                            <li class="list-group-item"><b>Member Since:</b> ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }
    clearProfile() {
        this.profile.innerHTML = "";
    }

    clearAlert() {
        let currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }

    showAlert(message, daClass) {
        this.clearAlert();
        this.clearProfile();
        let div = document.createElement('div');
        div.className = daClass;
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector('.container');
        let search = document.querySelector('.searchBox');
        container.insertBefore(div, search);
        setTimeout(function() {
            div.innerHTML = "";
            div.className = "";
        }, 3000)
    }
    storeData(user) {
        var userData = {
            "userName": `${user.login}`,
            "fullName": `${user.name}`,
            "totalRepo": `${user.public_repos}`,
        }
        localStorage.setItem('userData', JSON.stringify(userData));
    }
}
let searchBtn = document.querySelector('#search_but');
let searchUser = document.querySelector('#search_user');
// let ui = new UI;
// get user name
searchBtn.addEventListener('click', (e) => {
    let userName = searchUser.value;
    if (userName != '') {
        // Fetch API 
        fetch(`https://api.github.com/users/${userName}/repos`)
            .then(result => result.json())
            .then(data => {
                if (data.message == 'Not Found') {
                    ui.showAlert("User not Found!", "alert alert-danger");
                } else {
                    // console.log(data.name);
                    // ui.showProfile(data);
                    // console.log(data[0].name);
                    // console.log(data[0].language);
                    // console.log(data[0].license.name);
                    // language,fork,name,created_at
                    // license(if license> data[i].license.name else data[i].license)
                }

            })
    } else {
        // clear profile if user type none
        // ui.clearProfile();
    }
})
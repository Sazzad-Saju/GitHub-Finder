let searchBtn = document.querySelector('#search_but');
let searchUser = document.querySelector('#search_user');
let ui = new UI;
// get user data
searchBtn.addEventListener('click', (e) => {
    let userName = searchUser.value;
    if (userName != '') {
        // Fetch API 
        fetch(`https://api.github.com/users/${userName}`)
            .then(result => result.json())
            .then(data => {
                if (data.message == 'Not Found') {
                    ui.showAlert("User not Found!", "alert alert-danger");
                } else {
                    ui.showProfile(data);
                    ui.storeData(data);
                }

            })
    } else {
        // clear profile if user type none
        ui.clearProfile();
    }
})
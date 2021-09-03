const onload = () => {
    const sessionStorage = window.sessionStorage;
    let loginUser = sessionStorage.getItem("logInUser")
    if (loginUser == null) {
        window.open("index.html", "_self");
    }
    let currentBooking = sessionStorage.getItem(loginUser);
    if (currentBooking == null) {
        window.open("index.html", "_self");
    }
}
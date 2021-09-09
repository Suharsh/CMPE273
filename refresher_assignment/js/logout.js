const onLogout = () => {
    const sessionStorage = window.sessionStorage;
    let studentEmail = sessionStorage.getItem("logInUser");
    sessionStorage.removeItem("logInUser");
    sessionStorage.removeItem(studentEmail);
}
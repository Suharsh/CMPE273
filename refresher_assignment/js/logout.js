const onLogout = () => {
    const sessionStorage = window.sessionStorage;
    sessionStorage.removeItem("logInUser");
}
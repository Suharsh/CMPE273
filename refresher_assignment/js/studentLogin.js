onLogin = (event)=>{
    let studentEmail = document.getElementById('iStudentEmail').value;
    let studentPassword = document.getElementById('iStudentPassword').value;
    if(!isRegisteredUser(studentEmail)||!isUserPasswordValid(studentEmail,studentPassword)){
        alert("Please enter a valid username or password")
        resetUserLogin(event);
        return false;
    }
    setLoginUser(studentEmail);
 },
 isRegisteredUser=(studentEmail)=>{
     const storedStudentDetails = localStorage.getItem(studentEmail);
     return storedStudentDetails!=null;
 },
 isUserPasswordValid=(studentEmail,studentPassword)=>{
    const storedStudentDetails = localStorage.getItem(studentEmail);
    const parsedStudentDetails = JSON.parse(storedStudentDetails);
    return storedStudentDetails!=null && atob(studentPassword)===parsedStudentDetails.studentPassword;
 },
 resetUserLogin=(event)=>{
    event.preventDefault();
    document.getElementById('iStudentEmail').value = "";
    document.getElementById('iStudentPassword').value = "";
 },
 setLoginUser=(studentEmail)=>{
    const sessionStorage = window.sessionStorage;
    sessionStorage.setItem("logInUser",studentEmail);
 }
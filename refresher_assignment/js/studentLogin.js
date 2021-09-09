const onLogin = (event) => {
   let studentEmail = document.getElementById("iStudentEmail").value;
   let studentPassword = document.getElementById("iStudentPassword").value;
   if (!isRegisteredUser(studentEmail) || !isUserPasswordValid(studentEmail, studentPassword)) {
      alert("Please enter a valid username or password")
      resetUserLogin(event);
      return false;
   }
   setLoginUser(studentEmail);
}

const onLoad = () => {
   let loginUser = sessionStorage.getItem("logInUser")
    if (loginUser!=null) {
        window.open("booking.html", "_self");
    }
}

const isRegisteredUser = (studentEmail) => {
   const storedStudentDetails = localStorage.getItem(studentEmail);
   return storedStudentDetails != null;
}

const isUserPasswordValid = (studentEmail, studentPassword) => {
   const storedStudentDetails = localStorage.getItem(studentEmail);
   const parsedStudentDetails = JSON.parse(storedStudentDetails);
   return storedStudentDetails != null && btoa(studentPassword) === parsedStudentDetails.studentPassword;
}

const resetUserLogin = (event) => {
   event.preventDefault();
   document.getElementById("iStudentEmail").value = "";
   document.getElementById("iStudentPassword").value = "";
}

const setLoginUser = (studentEmail) => {
   const sessionStorage = window.sessionStorage;
   sessionStorage.setItem("logInUser", studentEmail);
}
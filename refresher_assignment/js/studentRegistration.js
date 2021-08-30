onRegister = () => {
    const localStorage = window.localStorage;
    let studentDetails = getStudentRegistrationDetails();
    if(isUserAlreadyRegistered(studentDetails))
      alert("User is already registered with the email id");
    localStorage.setItem(studentDetails.studentEmail, JSON.stringify(studentDetails));
}

getStudentRegistrationDetails=()=>{
    let studentEmail = document.getElementById("iStudentEmail").value;
    let studentId = document.getElementById("iStudentId").value;
    let studentName = document.getElementById("iStudentName").value;
    let studentPassword = atob(document.getElementById("iStudentPassword").value);
    let studentPhoneNumber = document.getElementById("iStudentPhoneNumber").value;
    let studentDetails = {
        studentId: studentId,
        studentName: studentName,
        studentPhoneNumber: studentPhoneNumber,
        studentEmail: studentEmail,
        studentPassword: studentPassword,
        bookingDetails:[]
    };
    return studentDetails;
}

isUserAlreadyRegistered=(studentDetails)=>{
    const storedStudentDetails = localStorage.getItem(studentDetails.studentEmail);
    return storedStudentDetails!=null
}

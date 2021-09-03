const onBook = () => {

    const sessionStorage = window.sessionStorage;
    const localStorage = window.localStorage;
    const studentEmail = document.getElementById("iStudentEmail").value;
    let storedStudentDetails = JSON.parse(localStorage.getItem(studentEmail));
    let bookingDetails = getBookingDetails();
    storedStudentDetails.bookingDetails.push(bookingDetails);
    localStorage.setItem(studentEmail, JSON.stringify(storedStudentDetails));
    sessionStorage.setItem(studentEmail, JSON.stringify(bookingDetails));
}
const getBookingDetails = () => {
    let bookingDetails = {
        travelDateTime: document.getElementById('iTravelDateTime').value,
        pickupAddress: document.getElementById('iStudentAddress').value,
        pickupLocation: document.getElementById('iLocation').value,
        bookingContactNumber: document.getElementById('iStudentPhoneNumber').value
    }
    return bookingDetails;
}

const onLoad = () => {
    const sessionStorage = window.sessionStorage;
    const localStorage = window.localStorage;
    let loginUser = sessionStorage.getItem("logInUser")
    if (loginUser == null) {
        window.open("index.html", "_self");
    }
    let logInStudentEmail = sessionStorage.getItem("logInUser")
    const storedStudentDetails = JSON.parse(localStorage.getItem(logInStudentEmail));

    document.getElementById('iStudentId').value = storedStudentDetails.studentId;
    document.getElementById('iStudentName').value = storedStudentDetails.studentName;
    document.getElementById('iStudentEmail').value = storedStudentDetails.studentEmail;
    document.getElementById('iStudentPhoneNumber').value = storedStudentDetails.studentPhoneNumber;
    document.getElementById('iTravelDateTime').min = getDateTime();
}

const onLocate = () => {
    if (!navigator.geolocation) {
        alert("Unable to determine your current location.Your browser does not support geo-location.")
    }
    navigator.geolocation.getCurrentPosition((position) => {
        let points = "latitude: " + position.coords.latitude + " longitude: " + position.coords.longitude;
        document.getElementById("iLocation").value = points;
    });
}

const getDateTime = () => {
    let today = new Date();
    let date = (today.getDate() < 10 ? '0' : '') + today.getDate();
    let month = ((today.getMonth() + 1) < 10 ? '0' : '') + (today.getMonth() + 1);
    let year = today.getFullYear();
    let hrs = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let currentDateTime = year + "-" + month + "-" + date + "T" + hrs + ":" + min + ":" + sec;
    return currentDateTime;
}
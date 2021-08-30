onBook = () => {

    const sessionStorage = window.sessionStorage;
    const localStorage = window.localStorage;
    const studentEmail = document.getElementById("iStudentEmail").value;
    let storedStudentDetails = JSON.parse(localStorage.getItem(studentEmail));
    let bookingDetails = getBookingDetails();
    storedStudentDetails.bookingDetails.push(bookingDetails);
    localStorage.setItem(studentEmail, JSON.stringify(storedStudentDetails));
    sessionStorage.setItem(studentEmail, JSON.stringify(bookingDetails));
},
    getBookingDetails = () => {
        let bookingDetails = {
            travelDateTime: document.getElementById('iTravelDateTime').value,
            pickupAddress: document.getElementById('iStudentAddress').value,
            pickupLocation: document.getElementById('iLocation').value,
            bookingContactNumber: document.getElementById('iStudentPhoneNumber').value
        }
        return bookingDetails;
    }
onLoad = () => {
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
},
    onLocate = () => {
        if (!navigator.geolocation) {
            alert("Unable to determine your current location.Your browser does not support geo-location.")
        }
        navigator.geolocation.getCurrentPosition((position) => {
            let points = "latitude: " + position.coords.latitude + " longitude: " + position.coords.longitude;
            document.getElementById("iLocation").value = points;
        });
    },

    calculateDistance = (lat1, lon1, lat2, lon2) => {
        let radiusOfEarth = 6371;
        let latitudeDifference = convertDegreeToRadian(lat2 - lat1);
        var longitudeDifference = convertDegreeToRadian(lon2 - lon1);
        var a =
            Math.sin(latitudeDifference / 2) * Math.sin(latitudeDifference / 2) +
            Math.cos(convertDegreeToRadian(lat1)) * Math.cos(convertDegreeToRadian(lat2)) *
            Math.sin(longitudeDifference / 2) * Math.sin(longitudeDifference / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = radiusOfEarth * c; // Distance in km
        return d;
    },

    convertDegreeToRadian = (degree) => {
        return (Math.PI / 180) * degree;
    }
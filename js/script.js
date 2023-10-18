//Displays the current image in a whole screen modal
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
}

document.addEventListener("readystatechange", function (event) {
    if (event.target.readyState == "interactive") {
        document.querySelector("body").classList.add("js");


        //This function will show more information when certain text has been clicked on.
        let featuresExpandButtons = document.querySelectorAll(".activities article .expand-button a");
        for (let button of featuresExpandButtons) {
            button.addEventListener("click", function (event) {
                this.parentElement.parentElement.classList.add("expanded");
                event.preventDefault();
            });
        }

        const formButton = document.querySelector("#booking-form form button");


        //This covers the form in the booking section
        document.querySelector("#booking-form form").addEventListener("submit", function (event) {

            let firstName = document.querySelector("#form-first-name").value;
            let lastName = document.querySelector("#form-last-name").value;
            let phoneNumber = document.querySelector("#form-phone-number").value;
            let email = document.querySelector("#form-email").value;

            let numAdults = parseInt(document.querySelector("#form-adults").value);
            let numChildren = parseInt(document.querySelector("#form-children").value);
            let room = document.querySelector("#form-room").value;
            let startDate = document.querySelector("#form-start").value;
            let endDate = document.querySelector("#form-end").value;

            let creditNumber = document.querySelector("#form-card-number").value;
            let expiryDate = document.querySelector("#form-expiration-date").value;
            let securityCode = document.querySelector("#form-security-code").value;

            //Calculates the number of days guests are staying and the total cost
        var numDays = Math.round(((Date.parse(endDate) - Date.parse(startDate)) / (1000 * 3600 * 24)));
            var total = (numAdults * 80) + (numChildren * 40) + parseInt(room * numDays);


            //Get the room as a string as I gather the prices
            var roomType = "";
            if (parseInt(room) == 1900) {
                roomType = "the Emperor's Chambers";
            }
            if (parseInt(room) == 600) {
                roomType = "an Ocean View Suite";
            }
            if (parseInt(room) == 480) {
                roomType = "a Deluxe Villa";
            }
            let complete = false;

            if (firstName != "" && lastName != "" && phoneNumber != "" && email != "" && startDate != "" && endDate != "" && creditNumber != "" & expiryDate != "" & securityCode != "") {
                complete = true;
            }

            //Checks each segment to see which is empty. Then present a red border to indicate users to do something
            if (firstName == "") {
                let formFirstName = document.querySelector("#form-first-name");
                formFirstName.classList.add("error");
                let formFirstNameLabel = formFirstName.closest(".form-item").querySelector("label");
                formFirstNameLabel.classList.add("error");
            }

            if (lastName == "") {
                let formLastName = document.querySelector("#form-last-name");
                formLastName.classList.add("error");
                let formLastNameLabel = formLastName.closest(".form-item").querySelector("label");
                formLastNameLabel.classList.add("error");
            }

            if (phoneNumber == "") {
                let formPhoneNumber = document.querySelector("#form-phone-number");
                formPhoneNumber.classList.add("error");
                let formPhoneNumberLabel = formPhoneNumber.closest(".form-item").querySelector("label");
                formPhoneNumberLabel.classList.add("error");
            }

            if (email == "") {
                let formEmail = document.querySelector("#form-email");
                formEmail.classList.add("error");
                let formEmailLabel = formEmail.closest(".form-item").querySelector("label");
                formEmailLabel.classList.add("error");
            }

            if (startDate == "") {
                let formStart = document.querySelector("#form-start");
                formStart.classList.add("error");
                let formStartLabel = formStart.closest(".form-item").querySelector("label");
                formStartLabel.classList.add("error");
            }

            if (endDate == "") {
                let formEnd = document.querySelector("#form-end");
                formEnd.classList.add("error");
                let formEndLabel = formEnd.closest(".form-item").querySelector("label");
                formEndLabel.classList.add("error");
            }

            if (creditNumber == "") {
                let formCardNumber = document.querySelector("#form-card-number");
                formCardNumber.classList.add("error");
                let formCardNumberLabel = formCardNumber.closest(".form-item").querySelector("label");
                formCardNumberLabel.classList.add("error");
            }

            if (expiryDate == "") {
                let formExpiryDate = document.querySelector("#form-expiration-date");
                formExpiryDate.classList.add("error");
                let formExpiryDateLabel = formExpiryDate.closest(".form-item").querySelector("label");
                formExpiryDateLabel.classList.add("error");
            }

            if (securityCode == "") {
                let formSecutiyCode = document.querySelector("#form-security-code");
                formSecutiyCode.classList.add("error");
                let formSecutiyCodeLabel = formSecutiyCode.closest(".form-item").querySelector("label");
                formSecutiyCodeLabel.classList.add("error");
            }
            if (complete) {
                console.log("Complete Form");
                formButton.innerHTML = "All Done!";
                formButton.setAttribute("disabled", "true");
                //Present the total cost
                window.alert("Complete! With " + numAdults + " adults, " + numChildren + " children and " + numDays + " nights in " + roomType + ", the total charged is $" + total);
                //Take users to the home page
                window.location.href = "index.html";
            } else {
                console.log("Incomplete Form");
                formButton.innerHTML = "Try Again";
            }

            event.preventDefault();

        });


        //If the user presses any buttons, return the text area back to normal
        const formFields = document.querySelectorAll("#form-first-name, #form-last-name, #form-phone-number, #form-email, #form-start, #form-end, #form-card-number, #form-expiration-date, #form-security-code");
        for (formField of formFields) {
            formField.addEventListener("keydown", function () {
                this.classList.remove("error");
                this.closest(".form-item").querySelector("label").classList.remove("error");
            });
        }

        
    }
});

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var previous = window.pageYOffset;
window.onscroll = function () {
    var current = window.pageYOffset;

    //Find if the user is scrolling down or up on each scroll
    if (previous > current) {
        document.getElementById("main-menu").style.top = "0";
    } else {
        document.getElementById("main-menu").style.top = "-60px";
    }
    previous = current;
}
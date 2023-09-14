const studentForm = document.getElementById("studentForm");
const displayCard = document.getElementById("displayCard");

studentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const profilePic = document.getElementById("profilePic").files[0];

    const card = document.createElement("div");
    card.className = "card";

    const profilePicImg = document.createElement("img");
    profilePicImg.src = URL.createObjectURL(profilePic);
    profilePicImg.alt = "Profile Picture";
    profilePicImg.style.maxWidth = "100%";
    profilePicImg.style.height = "auto";

    const details = document.createElement("p");
    details.innerHTML = `<strong>Name:</strong> ${name}<br>
                         <strong>Date of Birth:</strong> ${dob}<br>
                         <strong>Gender:</strong> ${gender}<br>
                         <strong>Address:</strong> ${address}<br>
                         <strong>City:</strong> ${city}<br>
                         <strong>State:</strong> ${state}<br>
                         <strong>Phone Number:</strong> ${phone}<br>
                         <strong>Email:</strong> ${email}`;

    card.appendChild(profilePicImg);
    card.appendChild(details);

    displayCard.innerHTML = "";
    displayCard.appendChild(card);

    studentForm.reset();
});

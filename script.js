function calculateAge() {

    let name = document.getElementById("name").value;
    let dob = document.getElementById("dob").value;

    // Check if fields are empty
    if (name === "" || dob === "") {
        alert("Please fill all fields!");
        return;
    }

    let today = new Date();
    let birthDate = new Date(dob);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust days
    if (days < 0) {
        months--;

        let previousMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        );

        days += previousMonth.getDate();
    }

    // Adjust months
    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("output").innerHTML =
`The age of <b>${name}</b> is <br>
 <b>${years}</b> Years,
 <b>${months}</b> Months and
 <b>${days}</b> Days`;

document.getElementById("output").classList.add("fade-in");
}
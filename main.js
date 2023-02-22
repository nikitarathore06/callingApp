function displayData(event) {
    event.preventDefault();


    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let relation = document.getElementById("relation").value;
    let nameLabel = document.getElementById("name-label");



    let dataContainer = document.getElementById("data-container");
    let dataElement = document.createElement("div");

    let nameHeading = document.createElement("h2");
    let nameTextNode = document.createTextNode("Name:");
    nameHeading.textContent = name;

    let emailParagraph = document.createElement("p");
    emailParagraph.textContent = email;

    let phoneParagraph = document.createElement("p");
    phoneParagraph.textContent = phone;

    let relationParagraph = document.createElement("p");
    relationParagraph.textContent = relation;


    let phoneCall = document.createElement("a");
    phoneCall.innerHTML = "<img src='call.jpg'>";
    phoneCall.setAttribute('href', 'tel:' + phone)


    let MessageMsg = document.createElement("a");
    MessageMsg.innerHTML = "<img src='what.jpg'>";
    MessageMsg.setAttribute('href', 'https://wa.me/' + phone)

    nameLabel.appendChild(nameTextNode);
    dataElement.appendChild(nameHeading);
    dataElement.appendChild(emailParagraph);
    dataElement.appendChild(phoneParagraph);
    dataElement.appendChild(relationParagraph);
    dataElement.appendChild(phoneCall);
    dataElement.appendChild(MessageMsg);



    dataContainer.appendChild(dataElement);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("relation").value = "";


}

let form = document.querySelector("form");
form.addEventListener("submit", displayData);
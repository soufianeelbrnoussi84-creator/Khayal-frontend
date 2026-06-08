function confirmOrder() {

    let email = document.getElementById("Contact").value
    let phone = document.getElementById("phone").value
    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let city = document.getElementById("city").value
    let address = document.getElementById("address").value
    let hasError = false

    if (email === ""){
        document.getElementById("emailError").textContent = "Please enter your email or phone number"
        hasError = true
    }   
        else {
    document.getElementById("emailError").textContent = ""
    }

    if (phone === "") {
        document.getElementById("phoneError").textContent = "Please enter your phone number"
        hasError = true
    }
       else {
    document.getElementById("phoneError").textContent = ""
    }

    if (firstName === "") {
        document.getElementById("firstNameError").textContent = "please enter your first name"
        hasError = true
    }
       else {
    document.getElementById("firstNameError").textContent = ""
    }

    if (lastName === "") {
        document.getElementById("lastNameError").textContent = "please enter your last name"
        hasError = true
    }   
    
       else {
    document.getElementById("lastNameError").textContent = ""
    } 

    if (city === "") {
        document.getElementById("cityError").textContent = "please enter your city"
        hasError = true
    }
        else {
    document.getElementById("cityError").textContent = ""
    } 

    if (address === "") {
        document.getElementById("addressError").textContent = "please enter your address"
        hasError = true
    }  
        else {
    document.getElementById("addressError").textContent = ""
    } 

    if (hasError) return


    let urlParams = new URLSearchParams(window.location.search)
    let productId = urlParams.get("product_id")


    let data = {
        email: email,
        first_name: firstName,
        last_name: lastName,
        phone: phone,
        city: city,
        country: "Morocco",
        address: address,
        product_id: parseInt(productId),
        quantity: 1
    }

    fetch("https://khayal-api-production.up.railway.app/create_order",{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    })

    alert("Thanks for your! We will contact you soon")
    window.location.href = "index.html";
}
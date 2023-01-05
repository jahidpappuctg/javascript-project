function getFormValue() {
    const nameInput = document.getElementById("fullName");
    const nameValue = nameInput.value;
    const errorText = document.getElementById("error-text");


    if (nameValue) {
        console.log("nameValue");
    } else {
        errorText.innerHTML = '<p class="text-danger">Please write your name</p>';
}

    
}

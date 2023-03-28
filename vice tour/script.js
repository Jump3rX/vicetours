var sendBtn = document.getElementById("send-btn")

function showMessage(event) {
    event.preventDefault();
    let nameEl = document.getElementById("name-el").value
    let emailEl = document.getElementById("email-el").value
    let messageEl = document.getElementById("message-el").value
    if (nameEl === '' || emailEl === '' || messageEl === '') {
        alert("All inputs must be filled!")
    } else {
        alert("Thank you for reaching out.")
        nameEl = ''
        emailEl = ''
        messageEl = ''
    }
}
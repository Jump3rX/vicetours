var sendBtn = document.getElementById("send-btn")
let Alert=document.getElementById("alert");

$('.alert').alert()                 

function showMessage(event) {
    event.preventDefault();
    let nameEl = document.getElementById("name-el").value
    let emailEl = document.getElementById("email-el").value
    let messageEl = document.getElementById("message-el").value
    if (nameEl === '' || emailEl === '' || messageEl === '') {
        // alert("All inputs must be filled!")
        Alert.innerHTML=`
                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>All Fields Are Required!</strong>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                       </div>`
    } else {
        // alert("Thank you for reaching out.")
        Alert.innerHTML=`
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Thank you for reaching out</strong>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>`
        // nameEl = ""
        // emailEl = ""
        // messageEl = ""
        document.getElementById("name-el").value=""
        document.getElementById("email-el").value=""
        document.getElementById("message-el").value=""
    }
}
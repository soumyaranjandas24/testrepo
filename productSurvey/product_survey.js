
const username = document.getElementById('name').value;
const age = document.getElementById('age').value;
const email = document.getElementById('email').value;
const job = document.getElementById('job').value;
const designation = document.getElementById('designation').value;
const productType = document.getElementById('productType').value;
const feedback = document.getElementById('feedbackText').value;

function submitFeedback() {
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductType').innerHTML = productType;
    document.getElementById('userFeedbackText').innerHTML = feedback;

}
document.getElementById('userInfo').style.display = 'block';

const submitButton = document.getElementById('submitBtn');

submitButton.onclick = submitFeedback;

/*
var appointments = [
    { studentName: 'Natalie', time: '1:30PM Tuesday, 6th November 2018', subject: 'ECO317', details: 'Hi '},
    { studentName: 'Yirang Choe', time: '3:30PM, Tuesday, 6th November 2018', subject: 'CS101'},
    { studentName: 'Mahitha Kalyani', time: '10:30 PM, Tuesday, 6th November 2018', subject: 'CS476'},
    { studentName: 'Michael Scott', time: '2:30 PM, Tuesday, 6th November 2018', subject: 'BS918'}];
*/
/*

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}*/


function handleSubmitClick() {
    alert("Sorry,you can't delete now.");
};

document.getElementById('del_btn').addEventListener('click', handleSubmitClick, false);




function handleSubmitClick () {
    window.alert('Submitting the form. OK to finalize.');
}

document.getElementById('del_btn').addEventListener('click', handleSubmitClick, false);

/* Capture form element value(s) */
(function () {
    var form = document.getElementById('submit_name');
    var elements = form.elements;
    var elFirstName = elements.FirstName;

    addEvent(form, 'submit', function (e) {
        e.preventDefault(); // Stop the form from being sent
        document.getElementById('submit_name').textContent = 'Hello, ' + elFirstName.value; // Replace form with message through DOM
    });
}());

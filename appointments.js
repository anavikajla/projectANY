


function handleSubmitClick() {
    window.alert("Sorry, you can't delete now. You can only delete 48 hours before the course starts");
};

document.getElementById('del_btn').addEventListener('click', handleSubmitClick, false);


function handleSubmitClick2() {
    window.alert(" Please confirm again you need to delete now.");
};

document.getElementById('del_btn2').addEventListener('click', handleSubmitClick2, false);



function handleSubmitClick2() {
    window.alert(" Please confirm again you need to delete now.");
};

document.getElementById('del_btn3').addEventListener('click', handleSubmitClick2, false);

//--------scrolling navbar----------

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("scroll").style.top = "0";
    } else {
        document.getElementById("scroll").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
}


//
// /* Capture form element value(s) */
// (function () {
//     var form = document.getElementById('submit_name');
//     var elements = form.elements;
//     var elFirstName = elements.FirstName;
//
//     addEvent(form, 'submit', function (e) {
//         e.preventDefault(); // Stop the form from being sent
//         document.getElementById('submit_name').textContent = 'Hello, ' + elFirstName.value; // Replace form with message through DOM
//     });
// }());

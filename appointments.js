

//pop up window for delete

function handleSubmitClick() {
    window.alert("Sorry, you can't cancel now. You can only cancel the appointment 48 hours prior to the tutoring starts");
};

document.getElementById('del_btn').addEventListener('click', handleSubmitClick, false);


function handleSubmitClick2() {
    window.alert(" Please confirm again you need to cancel now.");
};

document.getElementById('del_btn2').addEventListener('click', handleSubmitClick2, false);



function handleSubmitClick2() {
    window.alert(" Please confirm again you need to cancel now.");
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


//------text-disappear-------
window.onload = function() {
    window.setTimeout(fadeout, 3000); //8 seconds
}

function fadeout() {
    document.getElementById('info').style.opacity = '0';
    document.getElementById("info").style.marginBottom = "0";
}


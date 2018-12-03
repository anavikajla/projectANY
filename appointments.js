var appointments = [
    { studentName: 'Natalie', time: '1:30PM Tuesday, 6th November 2018', subject: 'ECO317', details: 'Hi '},
    { studentName: 'Yirang Choe', time: '3:30PM, Tuesday, 6th November 2018', subject: 'CS101'},
    { studentName: 'Mahitha Kalyani', time: '10:30 PM, Tuesday, 6th November 2018', subject: 'CS476'},
    { studentName: 'Michael Scott', time: '2:30 PM, Tuesday, 6th November 2018', subject: 'BS918'}];

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
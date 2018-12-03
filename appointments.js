var appointments = [
    { studentName: 'Natalie', time: '1:30PM Tuesday, 6th November 2018', subject: 'ECO317' details: 'Hi '},
    { studentName: 'Yirang Choe', time: '3:30PM, Tuesday, 6th November 2018', subject: 'CS101'},
    { studentName: 'Mahitha Kalyani', time: '10:30 PM, Tuesday, 6th November 2018', subject: 'CS476'}
    { studentName: 'Michael Scott', time: '2:30 PM, Tuesday, 6th November 2018', subject: 'BS918'}];

$('#show').click(function() {
    $('#info').toggle();
    var visible = $('#info').is(":visible");
    if(visible)
        $('a',this).html('Hide details');
    else
        $('a',this).html('Show details');
});
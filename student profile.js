<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="src/index.js"></script>


$("#weekly-schedule").dayScheduleSelector({
});


$("#weekly-schedule").data('artsy.dayScheduleSelector').deserialize({
        '0': [['09:30', '11:00'], ['13:00', '16:30']]
});

$(function() {
    $('#calendar').fullCalendar({
        events: '/calendarJSON/',
        header: {
            left: '',
            center: 'prev title next',
            right: ''
        },
        eventClick:  function(event, jsEvent, view) {
            $("#startTime").html(moment(event.start).format('MMM Do h:mm A'));
            $("#endTime").html(moment(event.end).format('MMM Do h:mm A'));
            $("#eventInfo").html(event.description);
            $("#eventLink").attr('href', event.url);
            $("#eventContent").dialog({ modal: true, title: event.title, width:380});
            return false;
        }
    });
});
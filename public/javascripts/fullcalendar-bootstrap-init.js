$(function() {
	
	$('#bootstrapModalFullCalendar').fullCalendar({
		events: '/calendarJSON/',
		header: {
		   left: '',
		   center: 'prev title next',
		   right: ''
		},
		eventClick:  function(event, jsEvent, view) {
		   $('#modalTitle').html(event.title);
		   $('#modalBody').html(event.description);
		   $('#eventUrl').attr('href',event.url);
		   $('#fullCalModal').modal();
		   return false;
		}
	});
}); 
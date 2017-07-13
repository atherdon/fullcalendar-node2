$(function() {


	if( !key || !client ){
		console.log( 'don\' have necessary credentials' );
	}


 	$('#bootstrapModalFullCalendar').fullCalendar({
 	  googleCalendarApiKey: key,
 	  events: {
 	      googleCalendarId: client
 	  },
 	  // googleCalendarApiKey: 'AIzaSyCyh2ohQ0pF9gutVSvdee1xN6Dc8QmK5ew',
 	  // events: {
 	  //     googleCalendarId: 'mikesmithdevtest@gmail.com'
 	  // },
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
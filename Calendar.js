document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid', 'googleCalendar' ],
      header: {
        left: '',
        center: 'title',
        right: ''
      },

      displayEventTime: true, //don't show the time in list view

      googleCalendarApiKey: 'AIzaSyANfhiJO3_F_IMtJEbzakHshHAt0-9ZOG0',

      events: 'lopalopax@gmail.com',

      eventClick: function(args) {

        //opens events in a popup window
        window.open(arg.event.url, '_blank', 'width=700,height=600');

        //prevents current tab from navigating
        args.jsevent.preventDefault();
      }

    });

    calendar.render();
  });

document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar2');

  var calendar2 = new FullCalendar.Calendar(calendarEl, {
    plugins: ['list', 'googleCalendar'],
    header: {
      left: '',
      center: 'title',
      right: ''
    },
    defaultView: 'listDay',

    displayEventTime: true, //don't show the time in list view

    googleCalendarApiKey: 'AIzaSyANfhiJO3_F_IMtJEbzakHshHAt0-9ZOG0',

    events: 'lopalopax@gmail.com',

    eventClick: function (args) {

      //opens events in a popup window
      window.open(arg.event.url, '_blank', 'width=700,height=600');

      //prevents current tab from navigating
      args.jsevent.preventDefault();
    }

  });

  calendar2.render();
});  
import React from 'react';
import $ from 'jquery';
require('fullcalendar/dist/fullcalendar.js');
import 'fullcalendar/dist/fullcalendar.css';
const events = [{
					title: 'All Day Event',
					start: '2017-05-01'
				},
				{
					title: 'Long Event',
					start: '2017-05-07',
					end: '2017-05-10'
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: '2017-05-09T16:00:00'
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: '2017-05-16T16:00:00'
				},
				{
					title: 'Conference',
					start: '2017-05-11',
					end: '2017-05-13'
				},
				{
					title: 'Meeting',
					start: '2017-05-12T10:30:00',
					end: '2017-05-12T12:30:00'
				},
				{
					title: 'Lunch',
					start: '2017-05-12T12:00:00'
				},
				{
					title: 'Meeting',
					start: '2017-05-12T14:30:00'
				},
				{
					title: 'Happy Hour',
					start: '2017-05-12T17:30:00'
				},
				{
					title: 'Dinner',
					start: '2017-05-12T20:00:00'
				},
				{
					title: 'Birthday Party',
					start: '2017-05-13T07:00:00'
				},
				{
					title: 'Click for Google',
					url: 'http://google.com/',
					start: '2017-05-28'
				}];
export default class FullCalendar extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
       var closure = this;
        $(this.calendar).fullCalendar({
            header: {
                left: "today prev,next",
                center: "title",
                right: "agendaWeek,month,agendaDay"
            },
            views:{
                agendaWeek: {buttonText : "Week"},
				month : {buttonText : "Month"},
				agendaDay : {buttonText : "Day"}
            },
            defaultView : "agendaWeek",
            defaultDate : new Date(),
            navLinks : true,
            editable : false,
            eventLimit: true,
            events : closure.props.events,
            timezone: "local",
        });
    }
    componentWillUpdate(nextProps){
        debugger;
        $(this.calendar).fullCalendar('removeEventSources');
        $(this.calendar).fullCalendar('addEventSource', nextProps.events);
    }
    componentWillUnmount(){
        $(this.calendar).fullCalendar('destroy');
    }
    render(){
        return (<div ref={(calendar) => {this.calendar = calendar;}}></div>);
    }
}
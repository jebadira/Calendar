import $ from 'jquery'
import Dispatcher from '../dispatcher/dispatcher.js';
import CalendarActionTypes from '../actions/CalendarActionTypes.js';
const API = {
    formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
},
    load(){
        var closure = this;
        var promise = $.ajax({
            url : "https://asuep.sharepoint.com/sites/DeviLink/_api/web/lists/GetByTitle('Calendar')/items",
            method: "GET",
            headers: { "Accept": "application/json;odata=verbose" }
        });

        promise.done(function(data){
         
            var events = [];
            for(var i =0; i < data.d.results.length; i++){
                var startdate = closure.formatDate(data.d.results[i].EventDate);
                var enddate = closure.formatDate(data.d.results[i].EndDate);
                events.push({
                    start : data.d.results[i].EventDate,
                    end : data.d.results[i].EndDate,
                    title : data.d.results[i].Title,
                    allDay : data.d.results[i].fAllDayEvent
                });
            }
            Dispatcher.dispatch({
                type : CalendarActionTypes.LOADINGCALENDAREVENTS,
                data : events
            });
        });
    }
}

export default API;
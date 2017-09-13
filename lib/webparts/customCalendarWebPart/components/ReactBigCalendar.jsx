import React from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
 BigCalendar.momentLocalizer(moment);
        const MyCalendar = props => (
            <div><BigCalendar events={[]} /></div>
        );
export default class ReactBigCalendar extends React.Component{

    constructor(props){
        super(props);
    }


    componentDidMount(){
        
    }

    render(){
       
       
        return(<div><MyCalendar /></div>);
    }
}
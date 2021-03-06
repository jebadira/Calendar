import React from 'react';
import {Spinner, SpinnerSize} from 'office-ui-fabric-react/lib/Spinner';
import FullCalendar from './FullCalendar.jsx';
export default class CalendarWebPart extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.actions.loadEvents();
    }
    render(){
       return ( <div>
           {this.props.loading ? <Spinner size={SpinnerSize.large} label='Loading Calendar' />
        :
         <div style={{minHeight: 500}}>
             
           <FullCalendar events={this.props.events}/>
        </div>
        }
       </div>);
        
       
    }


}
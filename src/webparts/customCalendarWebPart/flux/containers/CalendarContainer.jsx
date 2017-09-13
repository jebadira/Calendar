import React from 'react';
import Utils from 'flux/utils';
import CalendarWebPart from '../../components/CalendarWebPart.jsx';
import CalendarStore from '../stores/CalendarStore.jsx';

import CalendarActions from '../actions/CalendarActions.js';
class CalendarContainer extends React.Component{
    static getStores(){
        return [CalendarStore];
    }

    static calculateState(prevState, props){

        return {
            actions : {loadEvents : CalendarActions.load},
            events: CalendarStore.getState().get('events').toJS(),
            loading : CalendarStore.getState().get('loading'),
        }
    }

    render(){
        return(
        <div>
            <CalendarWebPart actions={this.state.actions} events={this.state.events} loading={this.state.loading}/>
        </div>
        );
            }

}
export default Utils.Container.create(CalendarContainer, {withProps : true});
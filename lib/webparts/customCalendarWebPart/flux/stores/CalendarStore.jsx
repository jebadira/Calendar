import {ReduceStore} from 'flux/utils';
import Dispatcher from '../dispatcher/dispatcher.js';
import Immutable from 'immutable';
import CalendarActionTypes from '../actions/CalendarActionTypes.js';
class CalendarStore extends ReduceStore{

    constructor(){
        super(Dispatcher);
    }

    getInitialState(){
        const init = Immutable.Map();
        return init.merge({
            loading : false, 
            events : Immutable.List(),
            });
    }
    reduce(state,  action){
        switch(action.type){
            case CalendarActionTypes.LOADINGCALENDAREVENTS:
            return state.merge({loading : false, events : action.data});
            break;
            default:
            return state;
            break;
        }
    }
}
export default new CalendarStore();
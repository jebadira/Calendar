import API from '../api/CalendarApi.js';
import CalendarActionTypes from './CalendarActionTypes.js';
const Actions = {

    load(){
        API.load();
    }
}

export default Actions;
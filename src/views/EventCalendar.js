import React,{Component} from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Main/style.css';

import events from './events';
import moment from 'moment';
import 'moment/locale/pt-br';

const localizer = momentLocalizer(moment);

moment.locale('pt-br');

// https://fullcalendar.io/docs/react {inutilizado}

export default class EventCalendar extends Component {
    state ={culture: 'pt-br'}
    render(){        
        return(
        <div style={{ height: 700 }}>
            <Calendar
            localizer={localizer}
            events={events}
            step={60}
            />
        </div>
        )
    }
}
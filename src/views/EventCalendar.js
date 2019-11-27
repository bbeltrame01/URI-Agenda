import React,{Component} from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import events from './events';
import moment from 'moment';
import 'moment/locale/pt-br';
import NewEvents from './Scheduler/Events/NewEvent.js';
// https://github.com/Yanipo5/Editable-Bootstrap-Modal-In-React

const localizer = momentLocalizer(moment);

moment.locale('pt-br');

 
export default class EventCalendar extends Component {
    state ={culture: 'pt-br'}
    constructor(...args) {
        super(...args)
    
        this.state = { events }
      }
    
      handleSelect = ({ start, end }) => {
        const title = window.prompt("Novo Evento:")
        if (title)
        console.log(start)
          this.setState({
            events: [
              ...this.state.events,
              {
                title,
                start,
                end,                
              },
            ],
          })
      }
    render(){        
        return(
        <div style={{ height: 700 }}>
            <Calendar
            selectable
            localizer={localizer}
            events={this.state.events}
            step={60}
            onSelectSlot={this.handleSelect}
            />               
            <NewEvents/>
        </div>
        )
    }
}
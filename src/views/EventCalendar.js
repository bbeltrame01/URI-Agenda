import React,{Component, useState} from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import moment from 'moment';
import 'moment/locale/pt-br';
import {server} from "variables/constants";

import ModalEvent/* , {handleShow} */ from './Scheduler/Events/NewEvent.js';


// https://github.com/Yanipo5/Editable-Bootstrap-Modal-In-React

const localizer = momentLocalizer(moment);

moment.locale('pt-br');

 
export default class EventCalendar extends Component {
  
    state ={culture: 'pt-br'}
    
    constructor(...args) {
        super(...args)
        this.state = { events:[] }
    }
      
    async componentDidMount() {
      try{

        await fetch(server + `evento/` + sessionStorage.getItem("workspaceId"))
        .then(response => response.json())
        .then(response => {
          var eventArray = [];
          response.forEach(element => {
            eventArray.push({
              'title': element.descricao,
              'start': new Date(element.dt_hr_inicial),
              'end': new Date(element.dt_hr_final)
            })
          });
          this.setState({events:eventArray});
        })

      } catch (e) {
        console.log(e);
      }
    }

      handleSelect = ({ start, end }) => {
        const title = window.prompt("Novo Evento:")
        if (title){
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
          fetch(server+`evento/create`,{ 
            method:"POST",
            body: JSON.stringify({
              "user_id": sessionStorage.getItem("userId"),
              "descricao": title,
              "workspace_id": sessionStorage.getItem("workspaceId"),
              "dt_hr_inicial": start,
              "dt_hr_final": end
            }),
            headers: {
              'Accept': 'application/json, text/plain, /',
              'Content-Type': 'application/json'
            },
          })
          .then(response => response.json())
          .then(response => {
      
            console.log(response)
          })
          



        }
      }
      
    render(){   
        return(
          <>
            <div style={{ height: 700 }}>
                <Calendar
                selectable
                localizer={localizer}
                events={this.state.events}
                step={60}
                onSelectSlot={this.handleSelect}
                />               
              </div>
        {/*       <ModalEvent
                show={this.show}
                onHide={this.handleClose}
              /> */}
          </>
        )
    }
}
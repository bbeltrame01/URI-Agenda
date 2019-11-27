import React,{Component} from 'react';
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
    start = ""
    end = "" 
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
              'title': element.title,
              'start': new Date(element.dt_hr_inicial),
              'end': new Date(element.dt_hr_final),
            })
          });
          this.setState({events:eventArray});
        })

      } catch (e) {
        console.log(e);
      }
    }

      handleClose = () => {
        this.setState({
          show: false,
        })
      }


      handleChangeEventTitle = (e) => {
        this.setState({
          titleValue: e.target.value,
        })
      }

      handleChangeEventDesc = (e) => {
        console.log(e.target.value)
        this.setState({
          descValue: e.target.value,
        })
      }

      handleShow = () => {
        this.setState({
          show: true,
          titleValue: "",
          descValue: "",
        })
      }
    render(){
        const {
          show = false,
          titleValue = "",
          start = "",
          end = "",
          descValue = "",
          title = "",
        } = this.state;

        const handleShow = ({ start, end }) => {
          this.setState({
            title: "Novo Evento",
            titleValue: "",
            show: true,
            start : start,
            end : end,
          })
        } 

        const teste = (e) => {
           this.setState({
            show: true,
            title: "Edição do evento",
            titleValue: e.title,
          }) 
          console.log(e)
        } 


        const handleSave = (e) => {
          e.preventDefault()
           this.setState({
            events: [
              ...this.state.events,
              {
                title: titleValue,
                start,
                end,                
              },
            ],
            show: false,
            titleValue: "",
            descValue: "",
          }) 
          fetch(server+`evento/create`,{ 
            method:"POST",
            body: JSON.stringify({
              "user_id": sessionStorage.getItem("userId"),
              "desc": descValue,
              "title": titleValue,
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
  
        return(
          <>
            <div style={{ height: 700 }}>
                <Calendar
                selectable
                localizer={localizer}
                events={this.state.events}
                step={60}
                onSelectSlot={handleShow}
                onSelectEvent={teste}
                />               
              </div>
              <ModalEvent
                show={show}
                title={title}
                titleValue={titleValue}
                descValue={descValue}
                onHide={this.handleClose}
                onSave={handleSave}
                handleChangeEventTitle={this.handleChangeEventTitle}
                handleChangeEventDesc={this.handleChangeEventDesc}
              /> 
          </>
        )
    }
}
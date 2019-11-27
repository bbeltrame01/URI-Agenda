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
              'id': element._id,
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
          nomeSubmit = "",
          idEvent = "",
          css = "display:none",
        } = this.state;

        const handleShow = ({ start, end }) => {
          this.setState({
            title: "Novo Evento",
            nomeSubmit: "Criar",
            titleValue: "",
            show: true,
            start : start,
            end : end,
            css : "display:none",

          })
          document.getElementById("btn-excluir").style.display="none";
        } 

        const update = (e) => {
           this.setState({
            show: true,
            title: "Edição do evento",
            nomeSubmit: "Atualizar",
            titleValue: e.title,
            idEvent: e.id,
            start : e.start,
            end : e.end,
            css : "display:block",
          }) 

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
          
          let route = server+`evento/create`;
          if (nomeSubmit === "Atualizar"){
            route = server+`evento/update`;
          }
          console.log(route)

          fetch(route,{ 
            method:"POST",
            body: JSON.stringify({
              "user_id": sessionStorage.getItem("userId"),
              "desc": descValue,
              "id": idEvent,
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
            window.location.reload()
          }) 
        }
        const handleDelete = (e) => {

          fetch(server+`evento/delete`,{ 
            method:"POST",
            body: JSON.stringify({
              "id": idEvent,
            }),
            headers: {
              'Accept': 'application/json, text/plain, /',
              'Content-Type': 'application/json'
            },
          })
          .then(response => response.json())
          .then(response => {
            window.location.reload()
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
                onSelectEvent={update}
                />               
              </div>
              <ModalEvent
                show={show}
                title={title}
                titleValue={titleValue}
                descValue={descValue}
                onHide={this.handleClose}
                onSave={handleSave}
                css={css}
                handleChangeEventTitle={this.handleChangeEventTitle}
                handleChangeEventDesc={this.handleChangeEventDesc}
                nomeSubmit={nomeSubmit}
                onDelete={handleDelete}
              /> 
          </>
        )
    }
}
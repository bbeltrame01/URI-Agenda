import { server } from "variables/constants";

async function eventos() {

  // await fetch(server + `evento/` + sessionStorage.getItem("workspaceId"))
  //   .then(response => response.json())
  //   .then(response => {
  //     var eventArray = [];
  //     response.forEach(element => {
  //       eventArray.push({
  //         'title': element.descricao,
  //         'start': new Date(2019, 10, 18),
  //         'end': new Date(2019, 10, 18)
  //       })
  //     });
  //     console.log(eventArray) 
  //     return eventArray;
  //   })
}

export default eventos();
/* export default [
    {
      'title': 'Reunião de Dpto',
      'start': new Date(2019, 10, 18),
      'end': new Date(2019, 10, 19)
    },
    {
      'title': 'Trabalho Faculdade',
      'start': new Date(2019, 10, 27,11,11,11),
      'end': new Date(2019, 10, 27, 12,12,12)
    },
  
    {
      'title': 'DTS STARTS',
      'start': new Date(2016, 2, 13, 0, 0, 0),
      'end': new Date(2016, 2, 20, 0, 0, 0)
    },
  
    {
      'title': 'DTS ENDS',
      'start': new Date(2016, 10, 6, 0, 0, 0),
      'end': new Date(2016, 10, 13, 0, 0, 0)
    },
  
    {
      'title': 'Some Event',
      'start': new Date(2015, 3, 9, 0, 0, 0),
      'end': new Date(2015, 3, 9, 0, 0, 0)
    },
    {
      'title': 'Conference',
      'start': new Date(2015, 3, 11),
      'end': new Date(2015, 3, 13),
      desc: 'Big conference for important people'
    },
    {
      'title': 'Meeting',
      'start': new Date(2015, 3, 12, 10, 30, 0, 0),
      'end': new Date(2015, 3, 12, 12, 30, 0, 0),
      desc: 'Pre-meeting meeting, to prepare for the meeting'
    },
    {
      'title': 'Lunch',
      'start': new Date(2015, 3, 12, 12, 0, 0, 0),
      'end': new Date(2015, 3, 12, 13, 0, 0, 0),
      desc: 'Power lunch'
    },
    {
      'title': 'Meeting',
      'start': new Date(2015, 3, 12, 14, 0, 0, 0),
      'end': new Date(2015, 3, 12, 15, 0, 0, 0)
    },
    {
      'title': 'Happy Hour',
      'start': new Date(2015, 3, 12, 17, 0, 0, 0),
      'end': new Date(2015, 3, 12, 17, 30, 0, 0),
      desc: 'Most important meal of the day'
    },
    {
      'title': 'Dinner',
      'start': new Date(2019, 11, 11, 0, 0, 0, 0),
      'end': new Date(2019, 11, 11, 0, 0, 0, 0)
    },
    {
      'title': 'Birthday Party',
      'start': new Date(2015, 3, 13, 7, 0, 0),
      'end': new Date(2015, 3, 13, 10, 30, 0)
    },
    {
      'title': 'Birthday Party 2',
      'start': new Date(2015, 3, 13, 7, 0, 0),
      'end': new Date(2015, 3, 13, 10, 30, 0)
    },
    {
      'title': 'Birthday Party 3',
      'start': new Date(2015, 3, 13, 7, 0, 0),
      'end': new Date(2015, 3, 13, 10, 30, 0)
    },
    {
      'title': 'Late Night Event',
      'start': new Date(2015, 3, 17, 19, 30, 0),
      'end': new Date(2015, 3, 18, 2, 0, 0)
    },
    {
      'title': 'Multi-day Event',
      'start': new Date(2015, 3, 20, 19, 30, 0),
      'end': new Date(2015, 3, 22, 2, 0, 0)
    }
  ]
   */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Calendar from "@material-ui/icons/CalendarToday";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-dashboard-react/views/loginPage.js";

import image from "assets/img/bg.jpg";
import {server} from "variables/constants";

const useStyles = makeStyles(styles);

export default function LoginPage() {
  const workspace = () => {
    fetch(server+`workspace/create`,{ 
      method:"POST",
      body: JSON.stringify({ 
        "name": document.getElementById('workspace').value 
      }),
      headers: {
        'Accept': 'application/json, text/plain, /',
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(response => {

      if(response.error){
        document.getElementById('msg').innerHTML = response.error 
      }else{
        sessionStorage.setItem("workspaceId", response.workspace._id);
        window.location.href="admin";
      }
    })
  };

  const workspaceLogin = () => {
    fetch(server+`workspace/login`,{ 
      method:"POST",
      body: JSON.stringify({ 
        "name": document.getElementById('workspace').value 
      }),
      headers: {
        'Accept': 'application/json, text/plain, /',
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(response => {

      if(response.error){
        document.getElementById('msg').innerHTML = response.error 
      }else{
        sessionStorage.setItem("workspaceId", response.workspace._id);
        window.location.href="admin";
      }
    })
  };

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  return (
    <div>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={3}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Workspace</h4>
                  </CardHeader>
                  <CardBody>
                    <CustomInput
                      labelText="Nome Agenda"
                      id="workspace"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Calendar className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <span>
                      <p id="msg" style={{color:"red"}}></p>
                    </span> 
                    <Button block color="primary" size="lg" onClick={() => workspaceLogin()}>Entrar</Button>
                    <Button block simple color="primary" size="lg" onClick={() => workspace()}>Criar</Button>                
                  </CardBody>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

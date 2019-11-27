import React, {useState,useEffect} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

import Save from "@material-ui/icons/Save";
import CardFooter from "components/Card/CardFooter";
import {server} from "variables/constants";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

const UserProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  useEffect(()=>{
    fetch(server+`user/`+sessionStorage.getItem("userId"))
    .then(response => response.json())
    .then(response => {
      if(!response.error){
        setName(response.name)
        setEmail(response.email) 
      }
    })
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(password)
    

    /*fetch(server+`user/update`+sessionStorage.getItem("userId"),{
    
      method:"POST",
      body: JSON.stringify({ 
        "name": name,
        "email": email,
        "password": password
      }),
      headers: {
        'Accept': 'application/json, text/plain, /',
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(response => {

    })*/

  }
    

  const classes = useStyles();
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Perfil do Usuário</h4>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Nome Completo"
                      id="name"

                      inputProps={{
                        value:name,

                      }}
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Email"
                      id="email"
                      inputProps={{
                        value:email,
                      }}
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>                
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Senha"
                      id="password"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                lock_outline
                              </Icon>
                            </InputAdornment>
                          ),
                          autoComplete: "off"
                        }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Confirme a Senha"
                      id="confirm-password"
                      formControlProps={{
                        type: "password",
                        fullWidth: true
                      }}
                      inputProps={{
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                lock_outline
                              </Icon>
                            </InputAdornment>
                          ),
                          autoComplete: "off"
                        }}
                    />
                  </GridItem>
                </GridContainer>              
              </CardBody>
              <CardFooter>
                <Button
                  type="submit"
                  color="success"
                  block
                >
                  <Save />
                  Gravar
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </form>
  );
}

export default UserProfile;
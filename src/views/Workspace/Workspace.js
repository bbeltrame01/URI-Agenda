import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import GridContainer from "components/Grid/GridContainer.js";

import { cardTitle } from "assets/jss/material-dashboard-react.js";

const styles = {
  cardTitle,
  textCenter: {
    textAlign: "center"
  }
};

const useStyles = makeStyles(styles);

export default function CardsImages() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer justify="center">
        <Card className={classes.textCenter} style={{ width: "20rem" }}>
          <CardBody>
            <h4 className={classes.cardTitle}>Agenda - Trabalho</h4>
            <p>
              Descrição definida pelo usuário, ou tiramo.
            </p>
            <Button color="primary">Entrar</Button>
            <Button color="primary">+</Button>
          </CardBody>
        </Card>
      </GridContainer>
    </div>
  );
}
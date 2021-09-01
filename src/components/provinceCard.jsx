import React from "react";
import { Card, Grid, Typography, makeStyles } from "@material-ui/core";

const ProvinceCard = (props) => {
  const useStyles = makeStyles({
    count: {
      fontWeight: "bold",
    },
    name: {
      color: props.color,
      textTransform: "uppercase",
      fontWeight: "bold ",
    },
    card: {
      borderBottom: `2px solid green`,
      "&:hover": {
        borderBottomColor: `red`,
      },
    },
  });
  const styles = useStyles();

  return (
    <Card className={styles.card}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Grid item>
          <Typography variant="h5" className={styles.count}>
            {Intl.NumberFormat().format(props.count)}
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="h6" className={styles.name}>
            {props.name}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProvinceCard;

import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Box,
  Grid,
  CardMedia,
  makeStyles,
  Paper,
} from "@material-ui/core";

const PakCard = (props) => {
  const useStyle = makeStyles({
    title: {
      fontWeight: 600,
      margin: "auto",
      paddingTop: "12",
      paddingBottom: "12",
    },
    image: {
      width: "4.2rem",
    },
    lastDay: {
      padding: 5,
      margin: "auto",
    },
    lastDayBox: {
      backgroundColor: props.secondaryColor,
      borderRadius: 10,
      padding: 3,
      marginBottom: 8,
      marginTop: 8,
    },
    myCard: {
      margin: "auto",
      minHeight: "10rem",
      minWidth: "14rem",
      maxHeight: "12rem",
      maxWidth: "16rem",
      backgroundColor: props.mainColor,
      padding: "0.5rem",
      borderRadius: 8,
      boxShadow: "none",
      "&:hover": {
        backgroundColor: props.hover,
      },
    },
  });

  const styles = useStyle();

  return (
    <Card className={styles.myCard}>
      <Grid container justifyContent="space-between">
        <Grid item lg={8}>
          <Typography variant="h6">{props.title}</Typography>
        </Grid>
        <Grid item lg={4}>
          <CardMedia
            component="img"
            className={styles.image}
            image={props.image}
            title="Hello"
          />
        </Grid>
        <Typography className={styles.title} variant="h4">
          {new Intl.NumberFormat().format(props.count)}
        </Typography>
      </Grid>
      <Box mx={"1rem"} className={styles.lastDayBox}>
        <Typography className={styles.lastDay} variant="body2">
          Last 24 hours:{" "}
          <strong>{new Intl.NumberFormat().format(props.lastDay)}</strong>
        </Typography>
      </Box>
    </Card>
  );
};

export default PakCard;

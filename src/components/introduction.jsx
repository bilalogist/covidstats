import React from "react";
import { Grid, Typography, Button, Box } from "@material-ui/core";
import styles from "../styles/introduction.module.css";

const Introduction = () => {
  return (
    <Grid
      container
      justifyContent={"space-between"}
      className={styles.spaceBefore}
    >
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <Typography className={styles.head1} variant="body1">
          - KNOW ABOUT COVID-19
        </Typography>

        <Typography
          className={styles.head2}
          color={"textSecondary"}
          variant="p"
        >
          See the Realtime Pakistan and Worldwide
        </Typography>

        <Typography className={styles.heading} variant="h3">
          COVID-19 Situation!
        </Typography>

        <Box py="1.5rem">
          <Typography variant="body2">
            The coronavirus, or COVID-19, is inciting panic for a number of
            reasons. It's a new virus, meaning no one has immunity.It is highly
            aren't completely sure as to how it behaves since they have very
            contagious, meaning it spreads fast. Its novelty means that
            scientists little history to go on.
          </Typography>
        </Box>

        <Box display="inline" mr="1rem">
          <Button m={12} variant="contained" color="primary">
            Pakistan Details
          </Button>
        </Box>
        <Box display="inline">
          <Button variant="outlined" color="secondary">
            International Details
          </Button>
        </Box>
      </Grid>

      <Grid item lg={6} md={6} sm={12} xs={12}>
        <Box style={{ maxWidth: "400px" }}>
          <img
            style={{ maxWidth: "100%", height: "auto" }}
            src="/images/map.png"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Introduction;

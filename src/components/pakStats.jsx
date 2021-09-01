import React, { useContext } from "react";
import { makeStyles, Typography, Box, Grid } from "@material-ui/core";
import PakCard from "./pakCard";
import { StatsContext } from "./context/statisticsCtx";
import { useEffect } from "react";

const useStyles = makeStyles({
  heading: {
    fontWeight: "bold !important",
    marginBottom: "2rem",
  },
});

const PakStats = () => {
  const styles = useStyles();
  const stats = useContext(StatsContext);

  console.log(stats);

  return (
    <Box mb={12}>
      <Typography variant="h5" className={styles.heading}>
        Pakistan Statistics
      </Typography>
      <Grid container justifyContent="space-between">
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <PakCard
            mainColor="#d5f4f6"
            secondaryColor="#7fe5d8"
            hover="#abe9ed"
            title="CONFIRMED CASES"
            count={stats.infected}
            lastDay={stats.lastDayInfected}
            image="/images/diagnosed.png"
          />
        </Grid>

        <Grid item lg={2} md={4} sm={6} xs={12}>
          <PakCard
            mainColor="#ffe5e4"
            secondaryColor="#f9d3d2"
            hover="#ffb4b1"
            title="DEATHS"
            count={stats.deceased}
            lastDay={stats.lastDayDeceased}
            image="/images/deaths.png"
          />
        </Grid>

        <Grid item lg={2} md={4} sm={6} xs={12}>
          <PakCard
            mainColor="#e0f3df"
            secondaryColor="#bee7bd"
            hover="#bce5ba"
            title="RECOVERED"
            count={stats.recovered}
            lastDay={stats.lastDayRecovered}
            image="/images/recovered.png"
          />
        </Grid>

        <Grid item lg={2} md={6} sm={6} xs={12}>
          <PakCard
            mainColor="#ddf0f8"
            secondaryColor="#a9dcf1"
            hover="#b3ddef"
            title="TOTAL TESTS"
            count={stats.tested}
            lastDay={stats.lastDayTested}
            image="/images/active.png"
          />
        </Grid>

        <Grid item lg={2} md={6} sm={6} xs={12}>
          <PakCard
            mainColor="#FBF2E9"
            secondaryColor="#f5dfc8"
            hover="#f3d9be"
            title="CRITICAL CASES"
            count={stats.critical}
            lastDay={stats.lastDayCritical}
            image="/images/critical.png"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default PakStats;

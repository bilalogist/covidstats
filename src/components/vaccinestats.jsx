import { Grid, Card, Typography, Box } from "@material-ui/core";
import styles from "../styles/stats.module.css";
import StatCard from "./statcard";
const VaccineStats = () => {
  return (
    <>
      <Typography variant="h5" className={styles.heading}>
        Vaccine Statistics
      </Typography>
      <Grid container justifyContent="center">
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <StatCard
            title="First Dost"
            count={41477587}
            lastDay={831226}
            color="blue"
          />
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <StatCard
            title="Fully Vaccinated"
            count={16171867}
            lastDay={494123}
            color="green"
          />
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <StatCard
            title="Total Doses Administered"
            count={53314628}
            lastDay={1266215}
            color="red"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default VaccineStats;

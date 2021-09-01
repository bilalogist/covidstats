import React from "react";
import { makeStyles, Typography, Box, Grid } from "@material-ui/core";
import ProvinceCard from "./provinceCard";

const useStyles = makeStyles({
  heading: {
    fontWeight: "bold !important",
    marginBottom: "2rem",
  },
});

const ProvinceStats = () => {
  const styles = useStyles();

  return (
    <Box mb={12}>
      <Typography variant="h5" className={styles.heading}>
        Province Statistics
      </Typography>
      <Grid container justifyContent="space-between" spacing="2">
        <Grid item lg={2} md={2} sm={4} xs={6}>
          <ProvinceCard name="Sindh" count={431636} color="#7D92BB" />
        </Grid>
        <Grid item lg={2} md={2} sm={4} xs={6}>
          <ProvinceCard name="KPK" count={431636} color="#DC3545" />
        </Grid>
        <Grid item lg={2} md={2} sm={4} xs={6}>
          <ProvinceCard name="Punjab" count={431636} color="#42B15B" />
        </Grid>
        <Grid item lg={2} md={2} sm={4} xs={6}>
          <ProvinceCard name="ISLAMABAD" count={431636} color="#007BFF" />
        </Grid>
        <Grid item lg={2} md={2} sm={4} xs={6}>
          <ProvinceCard name="BALOCHISTAN" count={431636} color="#FFC108" />
        </Grid>
        <Grid item lg={2} md={2} sm={4} xs={6}>
          <ProvinceCard name="AJK/GB" count={431636} color="#17A4C2" />
        </Grid>
      </Grid>
    </Box>
  );
};
export default ProvinceStats;

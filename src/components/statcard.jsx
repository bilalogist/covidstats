import {
  Grid,
  Card,
  Typography,
  Box,
  CardContent,
  makeStyles,
} from "@material-ui/core";

const colors = {
  blue: "#0DBDEF",
  green: "#86DF88",
  red: "#C87ACD",
};

const StatCard = (props) => {
  const useStyle = makeStyles({
    infected: {
      color: colors[props.color],
      fontWeight: "bold",
    },
    divider: {
      width: "80%",
      marginTop: "4px",
      marginBottom: "4px",
      borderTop: "1px solid #ddd",
      paddingTop: "12px",
    },
    lastDay: {
      color: "#484864",
      fontWeight: 600,
    },
    card: {
      border: "none",
      boxShadow: "none",
      borderRight: "1px solid #e9e9e9",
    },
  })();

  return (
    <Box mb="1rem">
      <Card className={useStyle.card}>
        <CardContent>
          <Grid container justifyContent="space-between">
            <Grid item lg={8} md={6} sm={6}>
              <Typography variant="h6">{props.title}</Typography>
              <Typography variant="h4" className={useStyle.infected}>
                {new Intl.NumberFormat().format(props.count)}
              </Typography>
              <div className={useStyle.divider}>
                <Typography
                  variant="subtitle"
                  color="textSecondary"
                  className={useStyle.lastDay}
                >
                  LAST 24 HOURS: {new Intl.NumberFormat().format(props.lastDay)}
                </Typography>
              </div>
            </Grid>
            <Grid item lg={4} md={4} sm={4}>
              <img src={`/images/${props.color}.png`} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default StatCard;

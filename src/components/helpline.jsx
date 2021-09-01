import {Typography,Grid} from '@material-ui/core'
import style from '../styles/helpline.module.css'
const Helpline=()=>{
    return <Grid container className={style.helpline}  direction="row" justifyContent="center" >
        <Typography variant="body1"  className={style.text}>
            Dial {process.env.REACT_APP_HELPLINE} health helpline
        </Typography>
       
    </Grid>
}
export default Helpline;
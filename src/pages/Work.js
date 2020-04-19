import React from 'react';
import Grid from '@material-ui/core/Grid';
// import withStyles from '@material-ui/styles/withStyles';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    image: {
        width:'430px',
        height:'200px'
        // paddingTop:'10px'
    },
    grid1: {
        border: '1px solid black',

        height:'350px',
        borderRadius: '5px',
        fontSize: '1rem',
    color: 'black',
    fontWeight: 'bold',
    margin:'90px'
    },
    profileAlign : {
        display:'flex'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
    // content: {
    //     height:'280px'
    // }
});

const Work = (props) => {
    const {profileInfo, classes} = props;
    const skills = profileInfo && profileInfo.projectImage && 
                profileInfo.projectImage.map((image)=> {
                    return (
                        <Grid 
                            className={classes.paper} 
                            item xs={6}
                            > 
                            <div className={classes.grid1}>
                                <img 
                                className={classes.image} 
                                src={image.fields.file.url} alt="Profile No found"></img>
                                <div>
                                {image.fields.description}
                                </div>
                            </div>
                        </Grid>
                    )
                });
    return (
        <div>
             <Grid container spacing={5}>
                {skills}
                </Grid>
        </div>
    );
}

export default withStyles(styles)(Work);
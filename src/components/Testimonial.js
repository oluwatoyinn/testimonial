import React, { Fragment, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
    picture: {
      '& > *': {
        margin: theme.spacing(1),
        width: '50ch',
        margin:'7px'
      },
    },
    name: {
        '& > *': {
          margin: theme.spacing(1),
          width: '24ch',
        },
      },
  }));

const Testimonial =() => {
    const classes = useStyles();
    // const [value, setValue] = React.useState('vendor');
    const initialState ={
        picture:'',
        lName:'',
        fName:'',
        message:'',
        value:'vendor',
        city:''
    }
    const [monial, setMonial ] = useState (initialState)
    const [modal, setModal ] = useState(false)
    
    const handleChange = (event) => {
      setMonial(event.target.value);
    };

    const handleSubmit =(e, props)=>{
        e.preventDefault()
        console.log("form submitted");
    }

    return (
        <Fragment>
            <div className='section-center'>
                <div className="section">
                <h3>Share you amazing story!</h3>
                <form  className={classes.picture} noValidate autoComplete="off" >
                    <TextField 
                        label="Upload your picture" 
                        type="file" value={monial.picture}  
                        variant="outlined" 
                        onChange={handleChange}
                    /> 
                    <TextField 
                        className="name" 
                        name="fName" 
                        variant="outlined"  
                        value={monial.fName} 
                        label="First Name" 
                        onChange={handleChange}
                    />
                    <TextField 
                        variant="outlined" 
                        name="lNmae" 
                        label="Last Name" 
                        value={monial.lName} 
                        onChange={handleChange}
                    />
                    <TextField 
                        id="standard-multiline-static" 
                        name="message" value={monial.message} 
                        label="Share your story" 
                        multiline rows={2} 
                        variant="outlined"
                        onChange={handleChange} 
                        />
                    <FormControl component="fieldset">
                    <FormLabel component="legend">What do you want to interact with vasiti as</FormLabel>
                    <RadioGroup aria-label="customer" name="customer1" value={monial.value} onChange={handleChange}>
                        <FormControlLabel value="customer" control={<Radio />} label="Customer"></FormControlLabel>
                        <FormControlLabel value="vendor" control={<Radio />} label="Vendor" />
                    </RadioGroup>
                    </FormControl>
                    <TextField variant="outlined" value={monial.city} label="City or Higher Institution(For Students)" />
                    <Button variant="contained" color="secondary" onSubmit={handleSubmit} >
                        Share your story
                    </Button>
                </form> 
                </div>
               
            </div>
        </Fragment>
    )
}

export default Testimonial

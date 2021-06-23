import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';

const PlantDetails = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(!open);
    console.log(props)
  };

  const backgroundStyle = {
    backgroundImage: `url(${props.plant.Image})`
  }

  return (
    <div>
      <button color="primary" onClick={handleToggle}>
        Details
      </button>
      <Dialog onClose={handleToggle} className="dialog" open={open}>
        <div className="image" style={backgroundStyle}>
          <h3>Common Name:</h3> 
          <h1>{props.plant.Common}</h1> 
        </div>
        <DialogContent dividers>
          <Typography gutterBottom>
          <h4>Scientific Name: {props.plant.Scientific}</h4> 
          </Typography>
          <Typography gutterBottom>
          <h4>Family Name: {props.plant.Family}</h4> 
          </Typography>
          <Typography gutterBottom>
          <h4>Water:</h4> 
          <p>{props.plant.Water}</p>
          </Typography>
          <Typography gutterBottom>
          <h4>Soil:</h4> 
          <p>{props.plant.Soil}</p>
          </Typography>
          <Typography gutterBottom>
          <h4>Light:</h4> 
          <p>{props.plant.Light}</p>
          </Typography>
          <Typography gutterBottom>
          <h4>Fertilize:</h4> 
          <p>{props.plant.Fertilization}</p>
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default PlantDetails

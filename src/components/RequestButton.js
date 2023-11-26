import React from "react";
import "./RequestButton.css";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Padding } from "@mui/icons-material";
import { Button } from "@mui/material";
import Login from  './Login';

export default function RequestButton(props) {
   
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    
    <>
    <div className="button" onClick={handleClickOpen}>
      <button >{props.text}</button>
    </div>
    <div open={open} onClose={handleClose} className='dialog'>
        <DialogContent>
          <DialogContentText>
           Request Early Access
          </DialogContentText>
          <Login/>
        </DialogContent>
        
      </div>
  </>
  );
}

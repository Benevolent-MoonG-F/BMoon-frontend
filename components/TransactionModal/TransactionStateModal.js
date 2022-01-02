import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import styles from './index.module.css'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  ":active":{
    border: 'none'
  }
  
};

export default function TransactionStateModal({txstate,modal,setModal}) {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={modal}
        onClose={() => setModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
        <Box sx={style}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {txstate === 'loading' ? (<CircularProgress size="6rem" />) : txstate === 'success' ? ( <CheckCircleOutlineIcon sx={{fontSize: '100px', color: 'green'}} />): txstate === 'failed' ? (<HighlightOffIcon sx={{fontSize: '100px', color: 'red'}} />) : null} 
           
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {txstate === 'loading' ? 'Waiting for Confirmation' : txstate === 'success' ? 'Transaction Successful' : txstate === 'failed' ? 'Transaction Failed' : ''}
            </Typography>
          </Box>
          {txstate === 'loading' ? null : (<Box sx={{marginTop: '30px', width: '100%'}}>
            <Button onClick={() => setModal(false)} className={styles.closebtn} sx={{bgcolor: '#142237ec', width: '100%', padding: '10px', color: '#fff', ":hover": {
              backgroundColor: '#142237ec'
            } }}>Close</Button>
          </Box>)}
        </Box>
      </Modal>
    </div>
  );
}

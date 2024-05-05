import { Modal, Box, Button, Typography } from '@mui/material';
import React from 'react';


const style = {

    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export default function CardAbout(){

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box sx={{mt: '8px'}}>
            <Typography sx={{ fontSize: '13px', fontWeight: 'bold', color:'#212121' }}>
                About Company:
            </Typography>
            <Typography sx={{ fontSize: '11px', fontWeight: 'bold', color:'#000' }} >
                About us
            </Typography>
            <Typography sx={{ fontSize: '14px', color:'#000', height: '170px', overflow: 'hidden'}} >
                <div>
                    This is a sample job and you must have displayed it to understand that its 
                    not just some random lorem ipsum text but something which was manually written. 
                    Oh well, if random text is what you were looking for then here it is: Lorem Ipsum 
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                    the industry's
                    Oh well, if random text is what you were looking for then here it is: Lorem Ipsum 
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                    the industry's
                </div>
            </Typography>

            <div style={{display:'flex',justifyContent:'center', alignItems:'flex-end', height: '50px', background: 'linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, .6))', position: 'relative', bottom: '45px'}}>
                <Button onClick={handleOpen} sx={{fontSize: '13px', color:'blue'}}>View Job</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography sx={{ fontSize: '13px', fontWeight: 'bold', color:'#212121' }}>
                            About Company:
                        </Typography>
                        <Typography sx={{ fontSize: '11px', fontWeight: 'bold', color:'#000' }} >
                            About us
                        </Typography>
                        <Typography sx={{ fontSize: '11px', color:'#000' }} >
                            This is a sample job and you must have displayed it to understand that its 
                            not just some random lorem ipsum text but something which was manually written. 
                            Oh well, if random text is what you were looking for then here it is: Lorem Ipsum 
                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took 
                            a galley of type and scrambled it to make a type specimen book. It has survived not 
                            only five centuries, but also the leap into electronic typesetting, remaining essentially 
                            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                            Lorem Ipsum passages and now in this assignment.
                        </Typography>
                    </Box>
                </Modal>
            </div>
                            
        </Box>
    )
}
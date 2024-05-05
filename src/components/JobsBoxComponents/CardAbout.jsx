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


export default function CardAbout({jd}){

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
                    {jd.jobDetailsFromCompany}
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
                            {jd.jobDetailsFromCompany}
                        </Typography>
                    </Box>
                </Modal>
            </div>
                            
        </Box>
    )
}
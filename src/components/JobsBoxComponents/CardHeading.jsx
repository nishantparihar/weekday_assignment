import { Avatar, Box, CardHeader, Typography } from '@mui/material';


export default function CardHeading(){
    return (
        <Box sx={{display: 'flex', justifyContent: 'left', gap: '10px', alignItems: 'center'}}>
            <Box sx={{marginBottom: '10px'}}>
                <Avatar
                    alt="companyLogo"
                    variant="square"
                    src="https://logo.clearbit.com/dropbox.com"
                    sx={{ width: 30, height: 40 }}
                />
            </Box>
            <Box>
                <Typography sx={{ fontSize: '13px', fontWeight: 'bold', color:'#9A8F8B' }}>
                    companyName
                </Typography>
                <Typography sx={{ fontSize: '15px', color:'#000' }}>
                    jobRole
                </Typography>
                <Typography sx={{ fontSize: '11px', fontWeight: 'bold', color:'#000' }} >
                    Location
                </Typography>                
            </Box>
        </Box>       
    )
}
import { Box, Typography } from "@mui/material"



export default function CardExperience({jd}){

    return (
        <Box sx={{mt: '-30px'}}>
            <Typography sx={{ fontSize: '12px', fontWeight: 'bold', color:'#9A8F8B' }}>
                Minimum Experince
            </Typography>
            <Typography sx={{ fontSize: '14px', color:'#212121' }}>
            {jd.minExp ? jd.minExp: 0} Years
            </Typography>              
        </Box>
    )

}
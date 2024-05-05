import { Avatar, Box, CardHeader, Typography } from '@mui/material';


export default function CardHeading({jd}){

    function titleCase(str) {
        return str.toLowerCase().split(' ').map(function(word) {
          return word.replace(word[0], word[0].toUpperCase());
        }).join(' ');
      }

    return (
        <Box sx={{display: 'flex', justifyContent: 'left', gap: '10px', alignItems: 'center'}}>
            <Box sx={{marginBottom: '10px'}}>
                <Avatar
                    alt="companyLogo"
                    variant="square"
                    src={jd.logoUrl}
                    sx={{ width: 'auto', height: 40 }}
                />
            </Box>
            <Box>
                <Typography sx={{ fontSize: '13px', fontWeight: 'bold', color:'#9A8F8B' }}>
                    {jd.companyName}
                </Typography>
                <Typography sx={{ fontSize: '15px', color:'#000' }}>
                    {titleCase(jd.jobRole)}
                </Typography>
                <Typography sx={{ fontSize: '11px', fontWeight: 'bold', color:'#000' }} >
                    {titleCase(jd.location)}
                </Typography>                
            </Box>
        </Box>       
    )
}
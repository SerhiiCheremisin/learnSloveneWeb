import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { CommonContainer } from '../utils/styles/commonStyles';


const Loader = ():JSX.Element => {
return(
   <CommonContainer sx={{marginTop: 50}}>
    <Box sx={{ display: 'flex' }}>
     <CircularProgress />
    </Box>
   </CommonContainer> 
)
}

export default Loader;
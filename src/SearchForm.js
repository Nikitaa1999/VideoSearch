//import {TextField} from '@mui/material/TextField';
import { useState } from 'react';
import TextField from '@mui/material/TextField';

function SearchForm({title, setTitle}){

   // const [title,setTitle]=useState('')
  return ( 
    <>
    <TextField label="Title" variant="outlined" gutterBottom
      sx={{
        mb:1
      }}
      value={title}
      onChange={e=> {
        setTitle(e.target.value)
        console.log(e.target.value)
//         let searchString="https://content-xflix-backend.azurewebsites.net/v1/videos"
//         if(e.target.value){
//           searchString=`https://content-xflix-backend.azurewebsites.net/v1/videos?title=${e.target.value}`
//         }
//         let timerId= setTimeout(()=>{
//         axios.get(searchString)
//        .then((data)=>{
//    // console.log(data.data.videos)

//    setVideos(data.data.videos);
//   })
//        },500 );
//        setDebounceTimer(timerId)
        
      }}
    />
    </>
  )
}

export default SearchForm;
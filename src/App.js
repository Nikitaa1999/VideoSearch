import Grid from '@mui/material/Grid';
import * as React from 'react';
import VideoCard from './VideoCard';
import axios from 'axios';
import {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import SearchForm from './SearchForm';

//https://content-xflix-backend.azurewebsites.net/v1/videos 
function App() {
const [videos,setVideos]=useState([])
const [debounceTimer, setDebounceTimer]= useState(null)
const [title,setTitle]=useState('')

useEffect(()=>{
  axios.get('https://content-xflix-backend.azurewebsites.net/v1/videos')
  .then((data)=>{
   // console.log(data.data.videos)

   setVideos(data.data.videos);
  })
},[])

useEffect(()=>{
  console.log("New timer", debounceTimer);

  return () => {
    console.log("Clear the old Time", debounceTimer)
    clearTimeout(debounceTimer);
  }
}, [debounceTimer])

useEffect(()=>{
  console.log('Title updated')
},[title])

  return (
    <>
    {/* <SearchForm title={title} setTitle={setTitle}/> */}
    <TextField label="Title" variant="outlined" gutterBottom
      sx={{
        mb:1
      }}

      onChange={e=> {
        console.log(e.target.value)
        let searchString="https://content-xflix-backend.azurewebsites.net/v1/videos"
        if(e.target.value){
          searchString=`https://content-xflix-backend.azurewebsites.net/v1/videos?title=${e.target.value}`
        }
        let timerId= setTimeout(()=>{
        axios.get(searchString)
       .then((data)=>{
   // console.log(data.data.videos)

   setVideos(data.data.videos);
  })
       },500 );
       setDebounceTimer(timerId)
        
      }}
    />
    <Grid container spacing={2}>
    {
      videos.map((video) => {
        return(
        <Grid key={video.id} item xs={12} sm={6} lg={3}>
          
          <VideoCard 
            imageSrc={video.previewImage}
            genre={video.genre}
            title={video.title}
            releaseDate={video.releaseDate}
          />
        </Grid>
    ) } )}
        {/* <Grid item xs={12} sm={6} lg={3}> <VideoCard /></Grid>
        <Grid item xs={12} sm={6} lg={3}> <VideoCard /></Grid>
        <Grid item xs={12} sm={6} lg={3}> <VideoCard /></Grid> */}
    </Grid>
    </>
  );
}

export default App;

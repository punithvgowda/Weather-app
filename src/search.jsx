import "./search.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Search';
import { useState } from 'react';


function Search({updateinfo}){
    
     
        const[city,setCity]=useState(" ");          
        const api_url="https://api.openweathermap.org/data/2.5/weather";
        const api_key="7a7d9b180f70e0a3e92007a04d6837a3";
        let getinfo=async ()=>{
            let response=await fetch(`${api_url}?q=${city}&appid=${api_key}&units=metric`);
            console.log(response);
            let jsonresponse= await response.json();
        
            let result={
                city:city,
                temp:jsonresponse.main.temp,
                maxtemp:jsonresponse.main.temp_max,
                 mintemp:jsonresponse.main.temp_min,
                 description:jsonresponse.weather[0].description,
                 feelslike:jsonresponse.main.feels_like
                 };
                 console.log(result);
                 return result;
        }
    
 
    let handlesubmit=async(event)=>
        {
    event.preventDefault();
        setCity(" ");
        getinfo();
        let info =await getinfo();

        await updateinfo(info);

        
    }

    function searchinfo(event)
    {
      
        setCity(event.target.value);
    }
    return(
        
        <>
        <div className='search'>
          <h1>Wheather app by Punith v Gowda</h1>
       <form>
        <TextField id="outlined-basic" label="City Name" variant="outlined" required  value={city} onChange={searchinfo}/>
        <br></br>
        <br></br>
          <Button  onClick={handlesubmit} type='submit'   variant="contained" endIcon={<SendIcon />}>
        Search
      </Button>
       </form>
       </div>
       </>
    )
}
export default Search;
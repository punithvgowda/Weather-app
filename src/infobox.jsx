import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infobox.css"

function Infobox({info}){
    
    return(
        <>
        <h1>Weather Of The <b>{info.city}</b></h1>
        <div className="infobox">
            

            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://media.istockphoto.com/id/1382384282/photo/bangalore-or-bengaluru.jpg?s=612x612&w=0&k=20&c=6pxwL3JxNV2B_NZSLMZLhrSLqAbyCPlGuSZYKImpjKQ="
      />
  
      <CardContent>
         <Typography gutterBottom variant="h5" component="div">
       {info.city}</Typography>
        <Typography gutterBottom variant="h5" component="div">
       {info.description}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
       <b>Temperature:</b>{info.temp}
        </Typography>
         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
       <b>Max-Temperature:</b>{info.maxtemp}
        </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
       <b>Min-Temperature:</b>{info.mintemp}
        </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
       <b>Humidity:</b>{info.feelslike}
        </Typography>
      </CardContent>
 

    </Card>

        </div>
        </>
    )
}
export default Infobox;
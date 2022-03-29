import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function ContactUsForm() {
  return (
    <div>
      <Card style={{maxWidth:450,margin:"0 auto",padding:"20px 5px"}}>
        <CardContent>
            <Typography gutterBottom variant="h5">Contact Us</Typography>

          
            <Typography   variant="subtitle2">Location: Lorem, ipsum | Call: +91 98xxxxxx09 | Email: lorem@ipsum.com</Typography>
           
            
            <form>
          <Grid container spacing={1}>
            <Grid xs={12}  item>
              <TextField label="Name" placeholder="Enter your name" fullWidth />
            </Grid>
            <Grid xs={12} item>
              <TextField type="email" label="Email" placeholder="Enter your email" fullWidth />
            </Grid>
            <Grid xs={12} item>
              <TextField label="Message" multiline rows={4} placeholder="Enter your message" fullWidth />
            </Grid>
            <Grid xs={12} item>
              <Button type="submit" variant="contained" color="primary" fullWidth> Submit</Button>
            </Grid>
          </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

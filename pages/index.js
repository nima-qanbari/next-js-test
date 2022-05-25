import styles from "../styles/Home.module.css";
import axios from "axios";
import Link from "next/link";
import {
  Card,
  Button,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  card: {
   margin: "1rem",
    width: '350px',
  }
})) 
export default function Home({ products }) {
  const classes = useStyles()

  const clickHandler = () => {

  }
  return (
    <div className={classes.container}>
      {products.map((item) => {
        return (
          <Card className={classes.card} key={item.id} >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title.rendered}
              </Typography>
            </CardContent>
            <CardActions>
             <Link href={`/post/${item.id}`} >
             <Button color="primary" variant="contained" component="a">
                ادامه مطلب
              </Button>
             </Link>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const response = await axios.get(
    "https://www.tehranservic.com/wp-json/wp/v2/posts"
  );
  return {
    props: {
      products: response.data,
    },
  };
}

import axios from "axios";
import Link from "next/link";
import {
  Card,
  Button,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";

import { QueryClient, useQuery, dehydrate } from "react-query";

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


const getPost = async () => {
  const response = await axios.get('https://www.tehranservic.com/wp-json/wp/v2/posts')
   return response.data
 }
export default function Home() {
  const classes = useStyles()

  const {isLoading, error, data, isFetching} = useQuery("post", getPost)

  return (
    <div className={classes.container}>
      {data.map((item) => {
        return (
          <Card className={classes.card} key={item.id} >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title.rendered}
              </Typography>
            </CardContent>
            <CardActions>
             <Link href={`/react-query/${item.id}`} >
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
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('post', getPost)
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

import { useRouter } from "next/router";
import axios from "axios";
import React from "react";

import {useQuery, QueryClient, dehydrate } from "react-query";

import { Card, CardContent, Typography } from "@mui/material";

const getPost = async (id) => {
 const response = await axios.get(`https://www.tehranservic.com/wp-json/wp/v2/posts/${id}`)
  return response.data
}

const Product = (props) => {

  console.log(props.dehydratedState);
  const router = useRouter();
  const { pId } = router.query;
  const { isLoading, error, data, isFetching } = useQuery("posts",() => getPost(pId));

  return (
    <div>
      {isLoading ? (
        <h1>loading...</h1> 
      ) : error ? (
        <h1>somthing went wrong</h1>
      ) : (
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.title.rendered}
            </Typography>
            {/* <Typography
              variant="body2"
              color="text.secondary"
              dangerouslySetInnerHTML={{ __html: data.content.rendered }}
            ></Typography> */}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const {params} = ctx
  const {pId} = params


  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('posts',() => getPost(pId))
  return {
    props: {
     dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Product;

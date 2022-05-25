import { useRouter } from "next/router";
import axios from "axios";
import React from "react";
import { useQuery } from "../../src/hooks/useQuery";

import { Card, CardContent, Typography } from "@mui/material";

const Product = () => {
  const router = useRouter();
  const { pId } = router.query;
  const api = () => {
    return axios
      .get(`https://www.tehranservic.com/wp-json/wp/v2/posts/${pId}`)
      .then((res) => res.data);
  };
  const { data: product, loading, error } = useQuery(api);
  console.log(product, loading);
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : error ? (
        <h1>somthing went wrong</h1>
      ) : (
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title.rendered}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              dangerouslySetInnerHTML={{ __html: product.content.rendered }}
            ></Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export async function getServerSideProps(ctx) {
  // const { params } = ctx;
  // const response = await axios.get(
  //   `https://www.tehranservic.com/wp-json/wp/v2/posts/${params.pId}`
  // );
  return {
    props: {
      // product: response.data,
    },
  };
}

export default Product;

import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Grid } from "@mui/material";

const data = [
  {
    id: 1,
    img: "/images/product1.png",
    name: "Men shirt and pants",
    rate: 4.5,
    price: "$38.00",
  },
  {
    id: 2,
    img: "/images/product1.png",
    name: "Men shirt and pants",
    rate: 4.5,
    price: "$38.00",
  },
  {
    id: 3,
    img: "/images/product1.png",
    name: "Men shirt and pants",
    rate: 4.5,
    price: "$38.00",
  },
  {
    id: 4,
    img: "/images/product1.png",
    name: "Men shirt and pants",
    rate: 4.5,
    price: "$38.00",
  },
  {
    id: 5,
    img: "/images/product1.png",
    name: "Men shirt and pants",
    rate: 4.5,
    price: "$38.00",
  },
  {
    id: 6,
    img: "/images/product1.png",
    name: "Men shirt and pants",
    rate: 4.5,
    price: "$38.00",
  },
  {
    id: 7,
    img: "/images/product1.png",
    name: "Men shirt and pants",
    rate: 4.5,
    price: "$38.00",
  },
  {
    id: 8,
    img: "/images/product1.png",
    name: "Men shirt and pants",
    rate: 4.5,
    price: "$38.00",
  },
  {
    id: 9,
    img: "/images/product1.png",
    name: "Men shirt and pants",
    rate: 4.5,
    price: "$38.00",
  },
  {
    id: 10,
    img: "/images/product1.png",
    name: "Men shirt and pants",
    rate: 4.5,
    price: "$38.00",
  },
];

const ProductsCards = () => {
  return (
    <div>
      <Grid container spacing={{ xs: 2 }}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} md={6} lg={4}>
            <ProductCard
              key={item.id}
              img={item.img}
              name={item.name}
              rate={item.rate}
              price={item.price}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductsCards;

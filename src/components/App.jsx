import { useState } from "react";

import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import { Skeleton } from "@mui/material";

import Header from "./Header";
import Search from "./Search";
import Basket from "./Basket";
import Snack from "./Snack";
import Filter from "./Filter";

import { goods } from "../data/goods";
import GoodsItem from "./GoodsItem";

const categories = ["all", "books", "video", "stickers"];

const App = () => {
  const [order, setOrder] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [products, setProducts] = useState(goods);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isSnackOpen, setSnackOpen] = useState(false);

  const handleChange = (e) => {
    if (!e.target.value) {
      setProducts(goods);
      setSearch("");
      return;
    }

    setSearch(e.target.value);
    setProducts(
      products.filter((good) =>
        good.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const addToOrder = (goodsItem) => {
    let quantity = 1;

    const indexInOrder = order.findIndex((item) => item.id === goodsItem.id);

    if (indexInOrder > -1) {
      quantity = order[indexInOrder].quantity + 1;

      setOrder(
        order.map((item) => {
          if (item.id !== goodsItem.id) return item;

          return {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity,
          };
        })
      );
    } else {
      setOrder([
        ...order,
        {
          id: goodsItem.id,
          name: goodsItem.name,
          price: goodsItem.price,
          quantity,
        },
      ]);
    }
    setSnackOpen(true);
  };

  const removeFromOrder = (goodsItem) => {
    setOrder(order.filter((item) => item.id !== goodsItem));
  };

  return (
    <>
      <Header handleCart={() => setCartOpen(true)} orderLen={order.length} />
      <Container sx={{ mt: "1rem" }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-around",
            margin: 0,
          }}
        >
          <Search value={search} onChange={handleChange} />
          <Filter
            value={category}
            onClickCategory={(category) => setCategory(category)}
            categories={categories}
          />
        </Container>
        <Grid container spacing={1}>
          {products ? (
            products
              .filter((product) =>
                category === "all" ? product : product.category === category
              )
              .map((good, id) => (
                <GoodsItem {...good} key={`_${id}`} setOrder={addToOrder} />
              ))
          ) : (
            <Skeleton
              variant="rect"
              animation="wave"
              width={350}
              height={500}
            />
          )}
        </Grid>
      </Container>
      <Basket
        removeFromOrder={removeFromOrder}
        order={order}
        cartOpen={isCartOpen}
        closeCart={() => setCartOpen(false)}
      />
      <Snack isOpen={isSnackOpen} handleClose={() => setSnackOpen(false)} />
    </>
  );
};

export default App;

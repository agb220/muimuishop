import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const GoodsItem = (props) => {
  const { name, price, poster, setOrder } = props;

  return (
    <div>
      <Card
        sx={{
          height: "100%",
          position: "relative",
          width: 350,
          margin: 1,
        }}
      >
        <CardMedia
          image={poster}
          alt={name}
          title={name}
          sx={{
            height: 350,
          }}
        />
        <CardContent
          sx={{
            padding: 1,
            margin: 1,
          }}
        >
          <Typography variant="h6" component="h3">
            {name}
          </Typography>
          <Typography variant="body1">Ціна: {price} грн.</Typography>
        </CardContent>
        <CardActions
          sx={{
            mt: 2,
          }}
        >
          <Button
            variant="text"
            sx={{
              position: "absolute",
              bottom: 0,
            }}
            onClick={() =>
              setOrder({
                id: props.id,
                name: props.name,
                price: props.price,
              })
            }
          >
            Купити
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default GoodsItem;

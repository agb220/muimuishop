import { Close } from "@mui/icons-material";
import { IconButton, ListItem, Typography } from "@mui/material";

const BasketItem = ({ removeFromOrder, name, id, price, quantity }) => {
  return (
    <ListItem>
      <Typography variant="body1">
        {name} {price}грн x{quantity}
      </Typography>

      <IconButton onClick={() => removeFromOrder(id)}>
        <Close />
      </IconButton>
    </ListItem>
  );
};

export default BasketItem;

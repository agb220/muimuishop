import React from "react";
import { Alert, Snackbar } from "@mui/material";

function Snack({ isOpen, handleClose = Function.prototype }) {
  return (
    <Snackbar open={isOpen} onClose={handleClose} autoHideDuration={3000}>
      <Alert severity="success">The item is added to the basket</Alert>
    </Snackbar>
  );
}

export default Snack;

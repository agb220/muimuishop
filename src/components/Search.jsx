import { TextField } from "@mui/material";

const Search = (props) => {
  const { onChange, value } = props;

  return (
    <TextField
      variant="standard"
      label="search"
      fullWidth
      sx={{
        mb: "1rem",
        width: 500,
      }}
      type="search"
      value={value}
      onChange={onChange}
    />
  );
};

export default Search;

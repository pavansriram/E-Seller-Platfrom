import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Card, CardContent, Stack } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import Alert from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

export default function AddProduct(props) {
  let sellerId = 2;
  const [alertOpen, setAlertOpen] = React.useState(false);
  let defaultValues = {
    sellerId: 0,
    productName: "",
    brand: "",
    title: "",
    category: "A",
    subCategory: "B",
    description: "",
    price: "",
    quantity: "",
    discountId: "",
    dimensions: "",
    numberOfOrders: 0,
  };

  if (!props) {
    defaultValues = [...props];
  }
  const [values, setValues] = React.useState(defaultValues);
  const [errors, setErrors] = React.useState({
    productName: "",
    brand: "",
    title: "",
    description: "",
    price: "",
    quantity: "",
    discountId: "",
    dimensions: "",
  });

  const categories = ["A", "B", "C", "D", "E"];
  const subCategories = ["A", "B", "C", "D", "E"];

  const handleChange = (event) => {
    setValues({ ...values, [event.target.id]: event.target.value });
  };

  // handle error for duplicate products
  const handleAdd = async () => {
    // values.sellerId = sellerId++;
    // values.numberOfOrders = 0;
    // await axios.post("http://localhost:3306/seller/addProduct", values).then((res) => {
    //   if (res.data.status === "success") {
    //     setAlertOpen(true);
    //     setValues(defaultValues);
    //   } else {
    //     setAlertOpen(true);
    //   }
    // });

    // console.log(values);
    let newErrors = {
      productName: "",
      brand: "",
      title: "",
      description: "",
      price: "",
      quantity: "",
      // if discount Id is added check if it is present in discounts table, else print error
      discountId: "",
      dimensions: "",
    };

    let flag = true;
    if (values.productName === "") {
      newErrors["productName"] = "error";
      flag = false;
    }

    if (values.brand === "") {
      newErrors["brand"] = "error";
      flag = false;
    }

    if (values.title === "") {
      newErrors["title"] = "error";
      flag = false;
    }

    if (values.price === "" || values.price[0] === "-") {
      newErrors["price"] = "error";
      flag = false;
    }

    if (values.quantity === "" || !/^\d+$/.test(values.quantity)) {
      newErrors["quantity"] = "error";
      flag = false;
    }

    setErrors(newErrors);
    if(flag === true){
      values.sellerId = sellerId++;
      values.numberOfOrders = 0;
      await axios.post("http://localhost:3306/seller/addProduct", values).then((res) => {
        if (res.data.status === "success") {
          setAlertOpen(true);
          setValues(defaultValues);
        } else {
          setAlertOpen(true);
        }
      });
      setAlertOpen(true);
    }
  };

  return (
    <Box sx={{ justifyContent: "center", mt: 3, ml: 15, mr: 15 }}>
      <Collapse in={alertOpen}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setAlertOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
          severity="success"
          color="info"
        >
          Product Added Successfully...
        </Alert>
      </Collapse>
      <Card>
        <CardContent>
          <FormControl fullWidth sx={{ mb: 2 }} variant="standard">
            <InputLabel>Product Name</InputLabel>
            <Input
              id="productName"
              error={errors.productName}
              value={values.productName}
              onChange={handleChange}
              // startAdornment={<InputAdornment position="start"></InputAdornment>}
            />
          </FormControl>

          <FormControl fullWidth sx={{ mb: 2 }} variant="standard">
            <InputLabel>Brand</InputLabel>
            <Input
              id="brand"
              error={errors.brand}
              value={values.brand}
              onChange={handleChange}
              // startAdornment={<InputAdornment position="start"></InputAdornment>}
            />
          </FormControl>

          <FormControl fullWidth sx={{ mb: 2 }} variant="standard">
            <InputLabel>Title</InputLabel>
            <Input
              id="title"
              error={errors.title}
              value={values.title}
              onChange={handleChange}
              // startAdornment={<InputAdornment position="start"></InputAdornment>}
            />
          </FormControl>

          <Stack direction="row">
            <TextField
              id="category"
              select
              sx={{ m: 1, mt: 2 }}
              fullWidth
              error={errors.category}
              label="Select Category"
              value={values.category}
              onChange={handleChange}
              //   helperText="Please select your currency"
            >
              {categories.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              sx={{ m: 1, ml: 2, mt: 2 }}
              id="subCategory"
              select
              fullWidth
              error={errors.subCategory}
              label="Select Sub Category"
              value={values.subCategory}
              onChange={handleChange}
              //   helperText="Please select your currency"
            >
              {subCategories.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Stack>

          <Stack direction="row">
            <TextField
              label="Price"
              id="price"
              sx={{ m: 1, mt: 2 }}
              fullWidth
              error={errors.price}
              type="number"
              value={values.price}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">&#x20B9;</InputAdornment>
                ),
              }}
              variant="standard"
            />

            <TextField
              label="Quantity"
              id="quantity"
              sx={{ m: 1, mt: 2 }}
              type="number"
              fullWidth
              error={errors.quantity}
              value={values.quantity}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              variant="standard"
            />
          </Stack>

          <Stack direction="row">
            <TextField
              label="Discount ID"
              id="discountId"
              sx={{ m: 1, mt: 2 }}
              fullWidth
              error={errors.discountId}
              type="text"
              value={values.discountId}
              onChange={handleChange}
              variant="standard"
            />

            <TextField
              label="Dimensions"
              id="dimensions"
              sx={{ m: 1, mt: 2 }}
              type="text"
              fullWidth
              error={errors.dimensions}
              value={values.dimensions}
              onChange={handleChange}
              variant="standard"
            />
          </Stack>

          <TextField
            id="description"
            label="Description"
            sx={{ ml: 1, mr: 1, mt: 2, whiteSpace: "pre-line" }}
            fullWidth
            multiline
            error={errors.description}
            rows={4}
            value={values.description}
            onChange={handleChange}
            // defaultValue=""
          />
        </CardContent>
      </Card>

      <Stack sx={{ mt: 1 }} justifyContent="center" direction="row" spacing={2}>
        <Button variant="contained" color="primary" onClick={handleAdd}>
          ADD
        </Button>
      </Stack>
    </Box>
  );
}

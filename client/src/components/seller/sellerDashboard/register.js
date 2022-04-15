import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import Alert from "@mui/material/Alert";
import Snackbar from '@mui/material/Snackbar';

const theme = createTheme();

export default function Register(props) {
    // sign in successfull snackbar at bottom
    const [snackOpen, setSnackOpen] = React.useState(false);

    const handleSnackClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setSnackOpen(false);
    };
  
  let defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phoneNumber: "",
    companyName: "",
    password: "",
  };

  // if (!props) {
  //   defaultValues = [...props];
  // }

  const [values, setValues] = React.useState(defaultValues);
  const [errors, setErrors] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    // sellerId: "",
    phoneNumber: "",
    companyName: "",
    password: "",
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.id]: event.target.value });
  };

  // generate unique seller id
  const handleAdd = () => {
    console.log(values);
    let newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      // sellerId: "",
      phoneNumber: "",
      companyName: "",
      password: "",
    };

    if (values.firstName === "") {
      newErrors["firstName"] = "error";
    }

    if (values.lastName === "") {
      newErrors["lastName"] = "error";
    }

    if (values.email === "") {
      newErrors["email"] = "error";
    }

    if (values.address === "") {
      newErrors["address"] = "error";
    }

    if (values.phoneNumber === "" || values.phoneNumber.length !== 10) {
      newErrors["phoneNumber"] = "error";
    }

    if (values.companyName === "") {
      newErrors["companyName"] = "error";
    }

    if (values.password.length < 7) {
      newErrors["password"] = "error";
    }

    setErrors(newErrors);
    setSnackOpen(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  id="firstName"
                  label="First Name"
                  error={errors.firstName}
                  value={values.firstName}
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  id="lastName"
                  label="Last Name"
                  error={errors.lastName}
                  value={values.lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  id="email"
                  label="Email Address"
                  error={errors.email}
                  value={values.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Password"
                  type="password"
                  id="password"
                  error={errors.password}
                  value={values.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  id="companyName"
                  label="Company Name"
                  error={errors.companyName}
                  value={values.companyName}
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  id="phoneNumber"
                  label="Phone Number"
                  error={errors.phoneNumber}
                  value={values.phoneNumber}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  id="address"
                  label="Address"
                  error={errors.address}
                  value={values.address}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            <Button
              // type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleAdd}
            >
              Register
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
            <Snackbar
            open={snackOpen}
            autoHideDuration={6000}
            onClose={handleSnackClose}
          >
            <Alert
              onClose={handleSnackClose}
              severity="info"
              sx={{ width: "100%" }}
            >
              You are registered successfully...!
            </Alert>
          </Snackbar>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
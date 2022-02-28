import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import React, { useState } from "react";

import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import useStyles from "./styles";
import { login } from "../../../api";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SignIn = () => {
  const classes = useStyles();

  const [AuthData, setAuthData] = useState({
    emailIdOrUsername: '',
    password: ''
  })

  const handleAuthChange = (e) => {
    setAuthData (prevData => ({...prevData, [e.target.name]: e.target.value}));
  }

  const handleAuthSubmit = async (e) => {
    e.preventDefault();

    let response = await login(AuthData);
    console.log(response);
  }

  // const vertical = "bottom",
  // horizontal = "left";

  return (
    <Container component="main" maxWidth="xs">
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
        // anchorOrigin={{ vertical, horizontal }}
        // open={successOpen}
        // autoHideDuration={6000}
        // onClose={handleSuccessClose}
        >
          <Alert
            // onClose={handleSuccessClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            This is a success message!
          </Alert>
        </Snackbar>
        <Snackbar
        // anchorOrigin={{ vertical, horizontal }}
        // open={errorOpen}
        // autoHideDuration={6000}
        // onClose={handleErrorClose}
        >
          <Alert
            // onClose={handleErrorClose}
            severity="error"
            sx={{ width: "100%" }}
          >
            This is a error message!
          </Alert>
        </Snackbar>
      </Stack>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography variant="h5">Login</Typography>
        <form
          className={classes.form}
          onSubmit = {handleAuthSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="email"
                label="Email-Id"
                variant="filled"
                value={AuthData.emailIdOrUsername}
                onChange={handleAuthChange}
                required
                fullWidth
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                label="Password"
                variant="filled"
                value={AuthData.password}
                onChange={handleAuthChange}
                required
                fullWidth
                type="password"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default SignIn;

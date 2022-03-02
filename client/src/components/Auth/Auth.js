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
import React from "react";

import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import useStyles from "./styles";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Auth = ({
  isSignIn,
  AuthData,
  handleAuthChange,
  handleAuthSubmit,
  switchMode,
  successOpen,
  handleSuccessClose,
  errorOpen,
  handleErrorClose,
  handleForgotPassword,
  handleCompanySubmit
}) => {
  const classes = useStyles();

  const vertical = "bottom",
    horizontal = "left";

  return (
    <Container component="main" maxWidth="xs">
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={successOpen}
          autoHideDuration={6000}
          onClose={handleSuccessClose}
        >
          <Alert
            onClose={handleSuccessClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            This is a success message!
          </Alert>
        </Snackbar>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={errorOpen}
          autoHideDuration={6000}
          onClose={handleErrorClose}
        >
          <Alert
            onClose={handleErrorClose}
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
        <Typography variant="h5">{isSignIn ? "Sign In" : "Sign Up"}</Typography>
        <form className={classes.form} onSubmit={(isSignIn) ? handleCompanySubmit : handleAuthSubmit}>
          <Grid container spacing={2}>
            {!isSignIn && (
              <>
                <Grid item xs={6}>
                  <TextField
                    name="firstName"
                    label="First Name"
                    variant="filled"
                    value={AuthData.firstName}
                    onChange={handleAuthChange}
                    required
                    autoFocus
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name="lastName"
                    label="Last Name"
                    variant="filled"
                    value={AuthData.lastName}
                    onChange={handleAuthChange}
                  />
                </Grid>
              </>
            )}
            <Grid item xs={12}>
              <TextField
                name="email"
                label="Email-Id"
                variant="filled"
                value={AuthData.email}
                onChange={handleAuthChange}
                required
                fullWidth
                type="email"
              />
            </Grid>
            {!isSignIn && (
              <Grid item xs={12}>
                <TextField
                  name="contactNo"
                  label="Contact Number"
                  variant="filled"
                  value={AuthData.contactNo}
                  onChange={handleAuthChange}
                  required
                  fullWidth
                />
              </Grid>
            )}
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
            {!isSignIn && (
              <Grid item xs={12}>
                <TextField
                  name="confirmPassword"
                  label="Re-enter Password"
                  variant="filled"
                  value={AuthData.confirmPassword}
                  onChange={handleAuthChange}
                  required
                  fullWidth
                  type="password"
                />
              </Grid>
            )}
            {isSignIn && (
              <Grid container justifyContent="flex-end">
                <Grid item id="forget">
                  <Button  onClick={handleForgotPassword}>forgot password ?</Button>
                </Grid>
              </Grid>
            )}
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                {!isSignIn ? "Next" : "Sign In"}
              </Button>
            </Grid>
          </Grid>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {!isSignIn
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;

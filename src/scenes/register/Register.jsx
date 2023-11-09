import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const defaultTheme = createTheme();


const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            toast.warning('Hãy nhập tên');
        }
        if (email === '' || email === null) {
            result = false;
            toast.warning('Hãy nhập email');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Hãy nhập mật khẩu');
        }
        if (rePassword !== password ) {
            result = false;
            toast.warning("Mật khẩu nhập lại không khớp");
        }
        return result;
    }

    const proceedRegister = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        if (validate()) {
          console.log({
            username: data.get("username"),
            email: data.get("email"),
            password: data.get("password"),
          });
          navigate('/login');
          toast.success("Đăng ký tài khoản thành công");
        }   
      };
    

    const navigate = useNavigate();
    return (
      <ThemeProvider theme={defaultTheme}>
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
            <Typography variant="h4" fontWeight="Bold" color="primary">
              Fish Auction
            </Typography>
            <Box
              component="form"
              onSubmit={proceedRegister}
              noValidate
              sx={{ mt: 1 }}
            >
               <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="User Name"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="rePassword"
                label="Confirm Password"
                type="password"
                id="rePassword"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Đăng ký
              </Button>
             
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    );
};

export default Register;
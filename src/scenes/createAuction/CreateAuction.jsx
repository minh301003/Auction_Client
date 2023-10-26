import { Box, TextField, Button, Grid } from "@mui/material";
import { DateField } from "@mui/x-date-pickers";
import Header from "../../components/Header";
import { ToastContainer } from "react-toastify";
import { useState, useRef } from "react";
import { addDays } from "date-fns";
import dayjs from "dayjs";
import { toast } from "react-toastify";


const CreateAuction = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [startingBid, setStartingBid] = useState("");
  const [dueDate, setDueDate] = useState("");
  //Date Format
  const [dueDateError, setDueDateError] = useState("");
  const currentDate = new Date();
  const minDate = currentDate;
  const maxDate = addDays(currentDate, 30);
  const dateObj = new Date(minDate);
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  const dateObj1 = new Date(maxDate);
  const year1 = dateObj1.getFullYear();
  const month1 = String(dateObj1.getMonth() + 1).padStart(2, "0");
  const day1 = String(dateObj1.getDate()).padStart(2, "0");
  const formattedDate1 = `${year1}-${month1}-${day1}`;

  //Handle create auction
  const handleCreateAuction = (e) => {
    e.preventDefault();
    const selectedDueDate = dayjs(dueDate, "DD-MM-YYYY");
    if (selectedDueDate.isBefore(dayjs(formattedDate)) || selectedDueDate.isAfter(dayjs(formattedDate1))) {
      setDueDateError("Thời hạn đấu giá phải nằm trong khoảng 30 ngày !"); 
      toast.warning(dueDateError);
    } else {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("startingBid", startingBid);
        formData.append("dueDate", dueDate);
        if (imageFile) {
          formData.append("imageFile", imageFile);
        }
        //console log form data
        for (const [key, value] of formData.entries()) {
            console.log(key, value);
        }
        toast.success("Đăng bán đấu giá sản phẩm thành công!");
    }    
  };

  return (
    <Box m="20px">
      <ToastContainer theme="colored" position="top-center"></ToastContainer>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Đăng bán đấu giá"
          subtitle="Đăng tải thông tin của sản phẩm đấu giá"
        />
      </Box>
      <Box component="form"  sx={{ mt: 1 }}>
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item xs={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Tên sản phẩm"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              autoFocus
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="description"
              label="Mô tả"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              autoComplete="description"
              autoFocus
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="startingBid"
              label="Mức giá ban đầu"
              type="number"
              InputProps={{
                inputProps: {
                  min: 10000,
                  max: 10000000,
                  step: 10000,
                },
              }}
              id="startingBid"
              value={startingBid}
              onChange={(e) => setStartingBid(e.target.value)}
              autoComplete="startingBid"
              autoFocus
            />
          </Grid>
          <Grid item xs={6}>
            <DateField
              margin="normal"
              required
              fullWidth
              name="dueDate"
              id="dueDate"
              label="Thời hạn đấu giá"
              minDate={dayjs(formattedDate)}
              maxDate={dayjs(formattedDate1)}
              value={dueDate}
              onChange={(newValue) => setDueDate(newValue)}
              autoFocus
              format="DD-MM-YYYY"
              autoComplete="dueDate"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="imageFile"
              type="file"
              id="imageFile"
              InputProps={{
                accept: ".jpg, .jpeg, .png",
              }}
              onChange={(e) => setImageFile(e.target.files[0])}
              autoFocus
            ></TextField>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Button
            variant="contained"
            onClick={handleCreateAuction}
            size="large"
            sx={{ mt: 3 }}
          >
            Đăng bán
          </Button>
        </Grid>
      </Box>
    </Box>
  );
};

export default CreateAuction;

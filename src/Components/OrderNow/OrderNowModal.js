import {
  Box,
  Button,
  IconButton,
  Modal,
  Typography,
  makeStyles,
} from "@material-ui/core";
import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  mdal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
};

export default function OrderModal({ show, setShow }) {
  console.log(show)
  // const [open, setOpen] = React.useState(false);
// setOpen(show)
// console.log(open)
  const handleClose = () => setShow(false);
  // const handleClose = () =>{
  //   show=false
  // };

  return (
    <div>
      <Modal
        open={show}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={style.mdal}
      >
        <Box>
          <IconButton
            // sx={{ position: "absolute", top: "50", left: "" }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";

interface IDetailModalProps {
  buttonTitle: string;
  children: JSX.Element;
  className?: string;
  modalHeading?: string;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "#475668",
  border: "2px solid #000",
  borderRadius: 10,
  boxShadow: 24,
  p: 4,
  height: "90vh",
  overflowY: "auto",
  maxHeight: "90vh",
};

export const DetailModal: React.FC<IDetailModalProps> = ({
  modalHeading,
  buttonTitle,
  children,
  className,
}: IDetailModalProps): JSX.Element => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={className}>
      <button
        className="rounded-full bg-cyan-600 text-white px-8 py-2 mx-auto"
        onClick={handleOpen}
      >
        {buttonTitle}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalHeading}
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {children}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

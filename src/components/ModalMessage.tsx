import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

interface Props {
  openMessage: boolean;
}

const ModalMessage: React.FC<Props> = ({ openMessage }) => {
  return (
    <div>
      <Dialog open={openMessage}>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Sorry, you're not allowed to delete loader while running...
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ModalMessage;

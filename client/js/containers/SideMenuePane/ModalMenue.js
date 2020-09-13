import React from 'react';
import Modal from '@material-ui/core/Modal';
import CropSys from '../CropImg/CropSys';

import IconButton from '@material-ui/core/IconButton';
import ImageIcon from '@material-ui/icons/Image';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


export default function ModalMenue() {
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className="modalPaper" style={modalStyle}>
      <div id="simple-modal-title">
        <h2>Add picture for recipe</h2>
      </div>
      <CropSys/>
    </div>
  );

  return (
    <div>
      <div className="addImgButtonSetting" type="button" onClick={handleOpen}>
        <div className="addImgButton">
            <IconButton aria-label="addimg">
                <ImageIcon />
            </IconButton>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Slide from '@material-ui/core/Slide'
import Button from '@material-ui/core/Button'



const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" {...props} ref={ref}/>
))

class ImgDialog extends React.Component {
  state = {
    open: false,
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    return (
      <div>
        <Dialog
          // fullScreen
          open={!!this.props.img}
          onClose={this.props.onClose}
          TransitionComponent={Transition}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              onClick={this.props.onClose}
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>
            <div className="croppedText">
              Cropped image
            </div>
            <Button
              className="cropedAddButtonSetting"
              variant="contained"
            >
              Add to Recipe
            </Button>
          </Toolbar>
          <div>
            <img className="croppedImg" src={this.props.img} alt="Cropped" />
          </div>
        </Dialog>
      </div>
    )
  }
}
export default ImgDialog

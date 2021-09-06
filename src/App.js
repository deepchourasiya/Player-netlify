// import logo from "./logo.svg";
// import "./App.css";
// import ReactPlayer from "react-player";

// function App() {
//   return (
//     <div className="App">
//       <h1>Video Player</h1>
//       <ReactPlayer
//         url="https://www.youtube.com/watch?v=mOUU8IEFoWo"
//         controls
//         // width="100%"
//         // height="100%"
//         className="playerStyle"
//         playing
//         onError={(err) => console.log("Error", err)}
//       />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import ReactPlayer from "react-player";
import "./App.css";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function App() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        {/* <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </DialogTitle> */}
        {/* <DialogContent dividers> */}
        <div>
          {/* <Card className="videoPlayer"> */}
            {/* <CardActionArea className="videoPlayerCardArea"> */}
              <ReactPlayer
                url="https://www.youtube.com/watch?v=mOUU8IEFoWo&modestbranding=1&showinfo=0"
                controls
                width="100%"
                height="100%"
                modestbranding="1"
                className="playerStyle"
                playing
                onError={(err) => console.log("Error", err)}
              />
            {/* </CardActionArea> */}
          {/* </Card> */}
        </div>
        {/* </DialogContent> */}
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}

export default App;

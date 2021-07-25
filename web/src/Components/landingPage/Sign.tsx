import React from 'react'
import style from './Sign.module.css'
import GoogleButton from 'react-google-button'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import Slide from '@material-ui/core/Slide';

// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
// });

function Sign() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <span style={{ marginTop: "5px", marginBottom: "0px" }} onClick={handleClickOpen}>
                Sign in
            </span>
            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        <img src="https://images.railyatri.in/ry_images_prod/icclose-1566199076.png" alt="" />
                    </Button>
                </DialogActions>
                <div style={{ padding: "0px 45px 35px 45px" }}>
                    <h3 className={style.heading}>Sign In</h3>

                    <DialogContentText>
                        <p className={style.p}>Sign in to claim wallet rewards!</p>
                    </DialogContentText>

                    <DialogContentText>
                        <GoogleButton label="Sing In" onClick={() => (console.log("hello"))} />
                    </DialogContentText>

                    <input type="number" placeholder="Mobile Number" className={style.mobile} /><br />
                    <button className={style.OTPbtn}>Generate OTP</button>
                </div>
            </Dialog>
        </div>
    )
}

export default Sign

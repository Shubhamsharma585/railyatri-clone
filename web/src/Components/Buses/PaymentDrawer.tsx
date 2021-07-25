import React, {useState} from 'react';
import { Drawer, makeStyles } from '@material-ui/core';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import Styles from "./PaymentDrawer.module.css"
import Paid from "./Paid"


interface IHamburgerDrawerProps {
    open: boolean;
    handleDrawerClose: any;
    boardingPoint: any;
    dropingPoint: any;
    boardingTime: any;
    seatId: any;
    seatFare: any;
}

export const PaymentDrawer = ({
    open, 
    handleDrawerClose,
    boardingPoint,
    dropingPoint,
    boardingTime,
    seatId,
    seatFare
}: IHamburgerDrawerProps) => {

    const classes = useStyles();


    

    return (
        <Container>
            <Drawer
                className={classes.drawer}
                variant="temporary"
                anchor="right"
                open={open}
                onClose={handleDrawerClose}
                classes={{
                paper: classes.drawerPaper,
                }}
            >
                <CloseIcon className={`${classes.closeIcon} ${classes.drawerClose}`} 
                            onClick={handleDrawerClose} />

              <div className={Styles.main}>
                  <div className={Styles.main1}>
                  <p>Passenger Name</p>
                 <input type="text" name="" id="" className={Styles.passenger}/>

                 <p>Passenger Address</p>
                 <input type="text" name="" id="" className={Styles.address}/>

                 <p>Boarding Point</p>
                 <p className={Styles.f}>{boardingPoint}</p>
                 <p>Droping Point</p>
                 <p className={Styles.f}>{dropingPoint}</p>
                 <p>Boarding Time</p>
                 <p className={Styles.f}>{boardingTime}</p>
                 <p>SeatId</p>
                 <p className={Styles.f}>{seatId}</p>
                 <p>Seat Fare</p>
                 <p className={Styles.f}>{seatFare}</p>
                
                 
                
                     <Paid/>
                  </div>
                 
              </div>



            </Drawer>
        </Container>
    )
};


const Container = styled.div`

`;

const drawerWidth = '70%';

const useStyles = makeStyles(theme=>({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        position: 'relative',
    },
    drawerPaper: {
        width: drawerWidth,
        padding: theme.spacing(7,0, 4),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    drawerIcon: {
        fontSize: '2rem',
    },
    drawerClose: {
        position: 'absolute',
        right: theme.spacing(2),
        top: theme.spacing(2),
        fontSize: '1.5rem'
    },
    closeIcon: {
        color: '#000',
        fontSize: '2rem',
        marginLeft: '10%',
        cursor: 'pointer'
    },
}));
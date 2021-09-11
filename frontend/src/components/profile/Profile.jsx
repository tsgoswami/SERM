import React, { useState } from 'react'
import { Grid, CardContent, Typography, Card, Button, Chip } from '@material-ui/core'
import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import EditProfile from '../edit-profile/EditProfile';

const Profile = () => {
    let userInfo = useSelector((state => state.userInfo.user));

    const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);
    const [currentData, setCurrentData] = useState({})
   

    const handleEdit = () => {
        setOpenConfirmationDialog(true);
        setCurrentData(userInfo);
    }

    const useStyles = makeStyles((theme) => ({
        profilePic: {
            width: '20%',
            borderRadius: '50%',
        },
        editPicButton: {
            margin: '10px 0px',
        },
        chips: {
            margin: '15px 5px',
        }
    }));

    const classes = useStyles();

    return (
        <div>
            <div>
                <Card >
                    <CardContent>
                        <Grid container>
                            <Grid item xs={12}>
                                <Grid container justifyContent='center'>
                                    <Grid item xs={8}>
                                        <Grid container justifyContent='center'>
                                            <img src={userInfo.picURL} className={classes.profilePic} alt='profile' />
                                        </Grid>
                                        <Grid container justifyContent='center'>
                                            <Typography variant='h4'>{userInfo.name}</Typography>
                                        </Grid>
                                        <Grid container justifyContent='center'>
                                            <Typography variant='body2'>{userInfo.bio}</Typography>
                                        </Grid>
                                        <Grid container justifyContent='center'>
                                            {userInfo && userInfo.techStack && userInfo.techStack.map((stack) => (
                                                <Chip className={classes.chips} label={stack} />
                                            ))}
                                        </Grid>
                                        <Grid container justifyContent='center'>
                                            <Button className={classes.editPicButton} variant='contained' color="primary" onClick={handleEdit}><EditIcon />Edit</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
                <EditProfile
                    SetOpen={openConfirmationDialog}
                    handleClose={() => setOpenConfirmationDialog(false)}
                    data={currentData}
                    title="Edit Profile"
                    confirmButtonColorSecondary={false}
                />
            </div>
        </div>
    )
}

export default Profile

import React from 'react';
import { Avatar, Box, Button, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  profileInfo: {
    marginTop: theme.spacing(2),
  },
  editButton: {
    marginTop: theme.spacing(2),
  },
}));

const Profile = () => {
  const classes = useStyles();
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <Box textAlign="center">
      <Avatar className={classes.avatar} src="/path/to/avatar.jpg" alt="Profile Picture" />
      <Typography variant="h5" component="h1" className={classes.profileInfo}>
       ID: {currentUser.id}
      </Typography>
      <Typography variant="h5" component="h1" className={classes.profileInfo}>
       Username: {currentUser.username}
      </Typography>
      <Typography variant="h5" component="h1" className={classes.profileInfo}>
        Email:{currentUser.email}
      </Typography>
      <Button variant="contained" color="primary" className={classes.editButton}>
        Edit Profile
      </Button>
    </Box>
  );
};

export default Profile;
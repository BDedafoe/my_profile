import React from 'react';
import { Link, Tooltip, IconButton, Zoom } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Resume from '../settings/resume.json';


const useStyles = makeStyles((theme) => ({
  socialIcons: {
    position: 'fixed',
    bottom: theme.spacing(30),
    left: theme.spacing(6),
  },
  iconButton: {
    height: '2.5rem',
    width: '2.5rem',
    display: 'flex',
    marginBottom: theme.spacing(3),
    color: 'rgb(254, 129, 227)',
  },
  icon: {
    fontSize: '1.1em',
  },
  

}));

export const SocialIcons = () => {
  const classes = useStyles();

  const socialItems = Resume.basics.profiles.map((socialItem) => (
    <Link
      href={socialItem.url}
      key={socialItem.network.toLowerCase()}
      target='_blank'
      rel='noopener noreferrer'
      underline='none'
      color='inherit'
    >
      <Tooltip
        title={socialItem.username}
        placement='right'
        TransitionComponent={Zoom}
      >
        <IconButton
          color='inherit'
          aria-label={socialItem.network}
          className={classes.iconButton}
        >
          <i className={`${classes.icon} ${socialItem.x_icon}`}></i>
        </IconButton>
      </Tooltip>
    </Link>
  ));

  return <div className={classes.socialIcons}>{socialItems}</div>;
};
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LanguageSwitcher from '../languageSwitcher';

export default function Navbar() {

  return (
      <AppBar position="static">
        <Toolbar className="d-flex justify-content-between">
          <Typography variant="h6">
            Next Boilerplate
          </Typography>
          <LanguageSwitcher />
        </Toolbar>
      </AppBar>
  );
}
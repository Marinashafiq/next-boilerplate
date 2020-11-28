import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LanguageSwitcher from '../languageSwitcher';
import { Router } from '../../i18n';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  const lang = router.asPath.split("/")[1];

  return (
      <AppBar position="static">
        <Toolbar className="d-flex justify-content-between">
          <Typography variant="h6" onClick={()=> router.push(`/${lang}`)} style={{cursor:"pointer"}}>
            Next Boilerplate
          </Typography>
          <LanguageSwitcher color="text-white"/>
        </Toolbar>
      </AppBar>
  );
}
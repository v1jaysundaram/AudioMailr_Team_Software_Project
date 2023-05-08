import React from 'react';
import Button from "@mui/material/Button";
import api from '../../api/index';

function GoogleIcon() {
  return (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
      alt="Google G Logo"
      width="60" 
      height="60"
    />
  );
}

function OutlookIcon() {
  return (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg"
      alt="Outlook Logo"
      width="60" 
      height="60"
    />
  );
}

const SignInForm = () => {

  const GoogleLoginButton = () => {
    const handleGoogleLogin = async () => {
      try {
        const response = await api.getGoogleAuthUrl({ authtype: 'gmail' });
        const url = response.data.url;
        if (url) {
          window.location.href = url;
        } else {
          console.log('Error fetching Google authentication URL');
        }
      } catch (error) {
        console.error('Error fetching Google authentication URL:', error);
      }
    };
  
    return (
      <Button
        variant="contained"
        startIcon={<GoogleIcon />}
        onClick={handleGoogleLogin}
        sx={{ backgroundColor: 'lightgray' }}
      ></Button>
    );
  };

  const OutlookLoginButton = () => {
    const handleOutlookLogin = async () => {
      try {
        const response = await api.getOutlookAuthUrl({ authtype: 'outlook' });
        const url = response.data.url;
        if (url) {
          window.location.href = url;
        } else {
          console.log('Error fetching Outlook authentication URL');
        }
      } catch (error) {
        console.error('Error fetching Outlook authentication URL:', error);
      }
    };
  
    return (
      <Button
        variant="contained"
        startIcon={<OutlookIcon />}
        onClick={handleOutlookLogin}
        sx={{ backgroundColor: 'lightgray' }}
      ></Button>
    );
  };
  
  return (
    <div>
      <form>
        <h2>Sign in with Provider Accounts</h2>
        <div className="provider-icons">
                <GoogleLoginButton 
                  cookiePolicy={"single_host_origin"}            
                />                
                <OutlookLoginButton
                  cookiePolicy={"single_host_origin"}     
                />
        </div>
      </form>
    </div>


  );
};

export default SignInForm;

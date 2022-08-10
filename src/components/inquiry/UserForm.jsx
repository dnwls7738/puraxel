import React from "react";
import FormUserDetails from "./FormUserDetails";
import FormTextDetails from "./FormTextDetails";
import Success from "./Success";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const steps = ["정보 입력", "문의 내용 입력", "전달 완료"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <FormUserDetails />;
    case 1:
      return <FormTextDetails />;
    case 2:
      return <Success />;
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

function UserForm() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1, background: "rgba(85, 87, 111, 1)" }}
                  fullWidth
                >
                  {activeStep === steps.length - 1 ? "문의 신청" : "다음"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </React.Fragment>
      </Container>
    </ThemeProvider>
  );
}

export default UserForm;

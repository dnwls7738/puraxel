import React from "react";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid #efefef`,
  borderRadius: "4px",
  boxShadow: "0px 4.46774px 11.1693px rgba(169, 121, 124, 0.1)",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
  ({ theme }) => ({
    backgroundColor: (theme.palette.mode = "#fffff"),

    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  })
);

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function MeItem({ headKR, headEN, expain }) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      <div className="ModeExplain">
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography
              sx={{
                fontFamily: "Pretendard",
                padding: "0 0 0 0",
              }}
            >
              <span style={{ fontSize: "16px", color: "#55576F" }}>
                {headEN}
                <em
                  style={{
                    fontSize: "12px",
                    paddingLeft: "10px",
                    color: "#7E818D",
                  }}
                >
                  {headKR}
                </em>
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontSize: "12px",
                fontFamily: "Pretendard",
                marginBottom: 2,
              }}
            >
              {expain}
            </Typography>
          </AccordionDetails>
          <AccordionDetails
            sx={{ padding: "10px 0 10px 10px", bgcolor: "#F2F3F6" }}
          >
            <Link to="">
              <Typography
                sx={{
                  fontSize: "12px",
                  fontFamily: "Pretendard",
                }}
              >
                <span style={{ fontSize: "12px", color: "#55576F" }}>
                  프락셔널 레이저 기술
                  <em
                    style={{
                      fontSize: "10px",
                      paddingLeft: "10px",
                      color: "#7E818D",
                    }}
                  >
                    자세히 보기 &gt;
                  </em>
                </span>
              </Typography>
            </Link>
          </AccordionDetails>
        </Accordion>

        <div className="contMain"></div>
      </div>
    </>
  );
}

export default MeItem;

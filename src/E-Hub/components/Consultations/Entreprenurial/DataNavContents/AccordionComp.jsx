// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
// import MuiAccordion from "@mui/material/Accordion";
// import MuiAccordionSummary from "@mui/material/AccordionSummary";
// import MuiAccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";

// const Accordion = styled((props) => (
//   <MuiAccordion disableGutters elevation={0} square {...props} />
// ))(({ theme }) => ({
//   border: `1px solid ${theme.palette.divider}`,
//   "&:not(:last-child)": {
//     borderBottom: 0,
//   },
//   "&:before": {
//     display: "none",
//   },
//   width: "70%",
//   margin: "0 auto",
// }));

// const AccordionSummary = styled((props) => (
//   <MuiAccordionSummary
//     expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
//     {...props}
//   />
// ))(({ theme }) => ({
//   backgroundColor:
//     theme.palette.mode === "dark"
//       ? "rgba(255, 255, 255, .05)"
//       : "rgba(0, 0, 0, .03)",
//   flexDirection: "row-reverse",
//   "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
//     transform: "rotate(90deg)",
//   },
//   "& .MuiAccordionSummary-content": {
//     marginLeft: theme.spacing(1),
//   },
// }));

// const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
//   padding: theme.spacing(2),
//   borderTop: "1px solid rgba(0, 0, 0, .125)",
// }));

// export default function CustomizedAccordions() {
//   const [expanded, setExpanded] = React.useState("panel1");

//   const handleChange = (panel) => (event, newExpanded) => {
//     setExpanded(newExpanded ? panel : false);
//   };

//   return (
//     <div>
//       <Accordion
//         sx={{ borderRadius: "10px" }}
//         expanded={expanded === "panel1"}
//         onChange={handleChange("panel1")}
//       >
//         <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
//           <Typography>Introduction to Data Science</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <h4>Data Visualization</h4>
//           <li>Working with charts, filters, and slicers</li>

//           <h4>Python for Data science</h4>
//           <ul style={{ marginLeft: "1rem", fontSize: '14px' }}>
//             <li> Interactive vs scripting mode.</li>
//             <li>
//               Working with primitive data types (variables, strings, integers,
//               etc.)
//             </li>
//             <li> Working with conditional statements, lists, and loops.</li>
//             <li>
//               Creating and working with functions, comparisons, and
//               dictionaries.
//             </li>
//             <li>Importing data using NumPy and pandas.</li>
//             <li>Working with data frames.</li>
//           </ul>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion
//         expanded={expanded === "panel2"}
//         onChange={handleChange("panel2")}
//       >
//         <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
//           <Typography>Data Science Intermediate</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <h4>Preparing data for modeling</h4>
//           <ul style={{ marginLeft: "1rem" }}>
//             <li> Introduction to sci-kit learn library in python</li>
//             <li>Defining features and labels</li>
//             <li>Train/test split</li>
//             <li>Encoding categorical features</li>
//           </ul>
//           <h4>Advanced regression</h4>
//           <ul style={{ marginLeft: "1rem" }}>
//             <li> Overview of regression</li>
//             <li> Linear regression models</li>
//             <li>Train models and make predictions</li>
//             <li> Regularization techniques</li>
//             <li> K nearest neighbors</li>
//             <li> decision trees</li>
//             <li> Random forest</li>
//             <li> Support vector machines.</li>
//             <li>Optimizing models by tuning</li>
//             <li>Grid search techniques</li>
//             <li>Hyperparameters</li>
           
//           </ul>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion
//         sx={{ borderRadius: "10px" }}
//         expanded={expanded === "panel3"}
//         onChange={handleChange("panel3")}
//       >
//         <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
//           <Typography>Advance Data Science</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <h4>Advanced classification</h4>
//           <ul style={{ marginLeft: "1rem" }}>
//             <li>Logistic regression.</li>
//             <li>Build and train logistic models in python.</li>
//             <li>
//               Test model output (confusion matrix and classification report)
//             </li>
//             <li>Tokenization of texts.</li>
//             <li> Stop words and removing them.</li>
//             <li>Emmatization of words.</li>
//             <li>Bag of words</li>
//             <li>Sentiment analysis. .</li>
//           </ul>
//           <h4>Hard and hierarchical clustering.</h4>
//           <ul style={{ marginLeft: "1rem" }}>
//             <li> Various forms of clustering.</li>
//             <li> K means clustering.</li>
//             <li>Hierarchical clustering.</li>
//             <li> Gaussian mixture models.</li>
//             <li> Labeling data using cluster output.</li>
//           </ul>
//           <h4>Unsupervised learning</h4>
//           <ul style={{ marginLeft: "1rem" }}>
//             <li> Measure of product similarity.</li>
//             <li> Content and collaborative-based filtering.</li>
//             <li> Recommender system and its evaluation</li>
//             <li> Dimensionality reduction.</li>
//             <li> K nearest neighbors</li>
//             <li> Principal component analysis.</li>
//             <li>  Linear discriminant analysis.
// </li>
//             <li> Interpreting selected features and transfer learning.
// .</li>
//             <li>optimizing models by tuning</li>
//             <li>grid search techniques</li>
//             <li>hyperparameters</li>
//             <li>hyperparameters</li>
//           </ul>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   );
// }

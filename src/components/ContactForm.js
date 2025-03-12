// import React, { useState } from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   TextField,
//   Button,
//   Grid,
//   Paper,
//   IconButton,
//   styled,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";
// import PhoneIcon from "@mui/icons-material/Phone";
// import EmailIcon from "@mui/icons-material/Email";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import TelegramIcon from "@mui/icons-material/Telegram";
// import round from "../assets/Rectangle 38.png";
// import bg_image from "../assets/6b34e67b0df781c2360c9feac86ac5a5-Photoroom.png";

// const StyledPaper = styled(Paper)(({ theme }) => ({
//   borderRadius: 24,
//   overflow: "hidden",
//   boxShadow: theme.shadows[10],
// }));

// const GradientBox = styled(Box)(({ theme }) => ({
//   background: "linear-gradient(135deg, #f6f7ff 0%, #f0e7ff 100%)",
//   position: "relative",
//   height: "100%",
//   padding: theme.spacing(6),
//   "&::before": {
//     content: '""',
//     position: "absolute",
//     bottom: -100,
//     left: -100,
//     width: 300,
//     height: 300,
//     borderRadius: "50%",
//     background: "linear-gradient(135deg, #40E0D0 0%, #6B46C1 100%)",
//     opacity: 0.1,
//   },
// }));

// const ContactForm = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     contactNumber: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <Box
//       sx={{
//         // minHeight: "100vh",
//         // // bgcolor: "grey.900",
//         // backgroundImage: '',
//         // py: 4,
//         // display: "flex",
//         // alignItems: "center",
//         height: "100%", // Full viewport height
//         width: "100%", // Full viewport width
//         // backgroundImage: `url('${bg_image}')`, // Background image URL
//         backgroundImage: `url("${bg_image}")`,  // Use double quotes inside template literal
// offsetRotate: true, //
//         backgroundSize: "cover", // Cover the entire page
//         backgroundPosition: "center", // Center the image
//         backgroundRepeat: "no-repeat", // No repetition
//         bgcolor:"#0F172A",
//         // backgroundBlendMode: "multiply", // Blend the background with the content

//       }}
//     >
//       <Container maxWidth="lg">
//         <StyledPaper>
//           <Grid container>
//             {/* Left Section */}
//             <Grid item xs={12} md={6}>
//               <GradientBox>
//                 <Typography
//                   variant="h3"
//                   component="h1"
//                   gutterBottom
//                   sx={{ fontWeight: "bold" }}
//                 >
//                   Lets Get in{" "}
//                   <Box component="span" sx={{ color: "primary.main" }}>
//                     Touch!
//                   </Box>
//                 </Typography>

//                 <Typography
//                   variant="body1"
//                   sx={{ color: "text.secondary", mb: 3 }}
//                 >
//                   Have a question or need technical support? Reach out to our
//                   team via email, phone, or the contact form below. We're here
//                   to help you innovate and solve challenges with cutting-edge
//                   solutions.
//                 </Typography>

//                 <Typography
//                   variant="subtitle1"
//                   sx={{ color: "primary.main", fontWeight: 500 }}
//                 >
//                   Nice hearing from you!
//                 </Typography>

//                 <Box
//                   sx={{
//                     mt: 6,
//                     width: 200,
//                     height: 200,
//                     position: "relative",
//                     display: { xs: "none", md: "block" },
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       width: "100%",
//                       height: "100%",
//                       borderRadius: "50%",
//                     //   background:
//                     //     "linear-gradient(135deg, #40E0D0 0%, #6B46C1 100%)",
//                       backgroundImage: `"${round}"`,
//                       backgroundRepeat: "no-repeat",
//                       backgroundSize: "cover",
//                     }}
//                   />
//                 </Box>
//               </GradientBox>
//             </Grid>

//             {/* Right Section */}
//             <Grid item xs={12} md={6}>
//               <Box sx={{ p: 6 }}>
//                 <form onSubmit={handleSubmit}>
//                   <Grid container spacing={3}>
//                     <Grid item xs={12}>
//                       <TextField
//                         fullWidth
//                         label="Full Name"
//                         name="fullName"
//                         value={formData.fullName}
//                         onChange={handleChange}
//                         variant="outlined"
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         fullWidth
//                         label="Email"
//                         name="email"
//                         type="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         variant="outlined"
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         fullWidth
//                         label="Contact Number"
//                         name="contactNumber"
//                         value={formData.contactNumber}
//                         onChange={handleChange}
//                         variant="outlined"
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         fullWidth
//                         label="Message"
//                         name="message"
//                         multiline
//                         rows={4}
//                         value={formData.message}
//                         onChange={handleChange}
//                         variant="outlined"
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <Button
//                         fullWidth
//                         variant="contained"
//                         color="primary"
//                         size="large"
//                         type="submit"
//                         sx={{ borderRadius: 2 }}
//                       >
//                         Submit
//                       </Button>
//                     </Grid>
//                   </Grid>
//                 </form>

//                 <Box sx={{ mt: 6 }}>
//                   <Typography
//                     variant="h6"
//                     gutterBottom
//                     sx={{ fontWeight: "bold" }}
//                     color="black"
//                   >
//                     Head Office:
//                   </Typography>
//                   <Box
//                     sx={{ display: "flex", flexDirection: "column", gap: 2 }}
//                   >
//                     <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                       <PhoneIcon color="primary" />
//                       <Typography color="black">+94 70 322 7937</Typography>
//                     </Box>
//                     <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                       <EmailIcon color="primary" />
//                       <Typography color="black">info.lunovate@gmail.com</Typography>
//                     </Box>
//                     <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                       <LocationOnIcon color="secondary" />
//                       <Typography color="black">Wata mawatha, Nugeogda, LK</Typography>
//                     </Box>
//                   </Box>

//                   <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
//                     <IconButton color="primary">
//                       <FacebookIcon />
//                     </IconButton>
//                     <IconButton color="primary">
//                       <WhatsAppIcon />
//                     </IconButton>
//                     <IconButton color="primary">
//                       <TelegramIcon />
//                     </IconButton>
//                   </Box>
//                 </Box>
//               </Box>
//             </Grid>
//           </Grid>
//         </StyledPaper>
//       </Container>
//     </Box>
//   );
// };

// export default ContactForm;

// import React, { useState } from "react";
// import {
//   Box,
//   TextField,
//   Button,
//   Typography,
//   Container,
//   Grid,
//   IconButton,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import TelegramIcon from "@mui/icons-material/Telegram";
// import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
// import EmailIcon from "@mui/icons-material/Email";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import { styles } from "../styles/styles";
// import round from "../assets/Rectangle 38.png";
// import bg_image from "../assets/6b34e67b0df781c2360c9feac86ac5a5-Photoroom.png";
// import lunovate_design from "../assets/LUNOVATE_Design.png";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     contactNumber: "",
//     message: "",
//   });

//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     // Add form submission logic here
//   };

//   return (
//     <Container maxWidth="xl" sx={styles.mainContainer}>
//       {/* Top brands section */}
//       <Box sx={styles.brandsContainer}>
//         <img
//           src="/path-to-samsung-logo.png"
//           alt="Samsung"
//           style={styles.brandLogo}
//         />
//         <img
//           src="/path-to-microsoft-logo.png"
//           alt="Microsoft"
//           style={styles.brandLogo}
//         />
//         <img
//           src="/path-to-google-logo.png"
//           alt="Google"
//           style={styles.brandLogo}
//         />
//         <img
//           src="/path-to-slack-logo.png"
//           alt="Slack"
//           style={styles.brandLogo}
//         />
//         <img src="/path-to-lg-logo.png" alt="LG" style={styles.brandLogo} />
//         <img src="/path-to-sony-logo.png" alt="Sony" style={styles.brandLogo} />
//       </Box>

//       {/* Main content */}
//       <Box sx={styles.contentContainer} >
//         {/* <img src={bg_image} alt="bg" sx={styles.bgImage}/> */}
//         <Grid container spacing={2}>
//           {/* Left side with text and logo */}
//           <Grid item xs={12} md={6} sx={styles.leftSection}>
//             <Box sx={styles.textSection}>
//               <Typography variant="h3" component="h1" sx={styles.heading}>
//                 Lets Get in <span style={styles.touchHighlight}>Touch!</span>
//               </Typography>
//               <Typography variant="body1" sx={styles.subtext}>
//                 Have a question or need technical support? Reach out to our team
//                 via email, phone, or the contact form below. We're here to help
//                 you innovate and solve challenges with cutting-edge solutions.
//               </Typography>
//               <Typography variant="body1" sx={styles.nicehearing}>
//                 Nice hearing from you!
//               </Typography>
//             </Box>

//             {/* <Box sx={styles.logoContainer}>
//               <Box
//                 component="img"
//                 src={round}
//                 alt="Company Logo"
//                 sx={styles.logo}
//               >
//                 <Box
//                 component="img"
//                   src={lunovate_design}
//                   alt="Sony"
//                   style={styles.Logo_2}
//                 />
//               </Box>
//             </Box> */}
//             <Box sx={styles.logoContainer}>
//               {/* Main background circle */}
//               <Box
//                 component="img"
//                 src={round}
//                 alt="Company Logo"
//                 sx={styles.logo}
//               />

//               {/* Logo overlay - positioned absolutely */}
//               <Box
//                 component="img"
//                 src={lunovate_design}
//                 alt="Company Logo"
//                 style={styles.Logo_2}
//                 sx={{
//                   position: "absolute",
//                   top: "50%",
//                   left: "50%",
//                   transform: "translate(-50%, -50%)",
//                   zIndex: 2,
//                 }}
//               />
//             </Box>

//             <Box sx={styles.socialIcons}>
//               <IconButton aria-label="Facebook" sx={styles.socialIcon}>
//                 <FacebookIcon />
//               </IconButton>
//               <IconButton aria-label="WhatsApp" sx={styles.socialIcon}>
//                 <WhatsAppIcon />
//               </IconButton>
//               <IconButton aria-label="Telegram" sx={styles.socialIcon}>
//                 <TelegramIcon />
//               </IconButton>
//             </Box>
//           </Grid>

//           {/* Right side with form */}
//           <Grid item xs={12} md={6} sx={styles.rightSection}>
//             <Box component="form" onSubmit={handleSubmit} sx={styles.form}>
//               <Box sx={styles.formFields}>
//                 <Typography variant="body1" sx={styles.label}>
//                   Full Name:
//                 </Typography>
//                 <TextField
//                   fullWidth
//                   name="fullName"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   variant="outlined"
//                   sx={styles.input}
//                 />

//                 <Typography variant="body1" sx={styles.label}>
//                   Email:
//                 </Typography>
//                 <TextField
//                   fullWidth
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   variant="outlined"
//                   sx={styles.input}
//                 />

//                 <Typography variant="body1" sx={styles.label}>
//                   Contact Number:
//                 </Typography>
//                 <TextField
//                   fullWidth
//                   name="contactNumber"
//                   value={formData.contactNumber}
//                   onChange={handleChange}
//                   variant="outlined"
//                   sx={styles.input}
//                 />

//                 <Typography variant="body1" sx={styles.label}>
//                   Message:
//                 </Typography>
//                 <TextField
//                   fullWidth
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   variant="outlined"
//                   multiline
//                   rows={4}
//                   sx={styles.input}
//                 />

//                 <Button
//                   type="submit"
//                   variant="contained"
//                   sx={styles.submitButton}
//                 >
//                   Submit
//                 </Button>
//               </Box>
//             </Box>

//             {/* Contact information */}
//             <Box sx={styles.contactInfoContainer}>
//               <Typography variant="h6" sx={styles.contactInfoHeading}>
//                 Head Office:
//               </Typography>

//               <Box sx={styles.contactDetail}>
//                 <LocalPhoneIcon sx={styles.contactIcon} />
//                 <Typography variant="body2">+94 70 322 7937</Typography>
//               </Box>

//               <Box sx={styles.contactDetail}>
//                 <EmailIcon sx={styles.contactIcon} />
//                 <Typography variant="body2">info.lunovate@gmail.com</Typography>
//               </Box>

//               <Box sx={styles.contactDetail}>
//                 <LocationOnIcon sx={styles.contactIcon} />
//                 <Typography variant="body2">
//                   Wata mawatha, Nugegoda, LK
//                 </Typography>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>
//     </Container>
//   );
// };

// export default ContactForm;

import React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import { Facebook, WhatsApp, Telegram } from "@mui/icons-material";
import round from "../assets/Rectangle 38.png";
import bg_image from "../assets/6b34e67b0df781c2360c9feac86ac5a5-Photoroom.png";
import lunovate_design from "../assets/LUNOVATE_Design.png";

const ContactPage = () => {
  return (
    <Box sx={{ backgroundColor: "#0F172A", minHeight: "100vh", p: 2 }}>
      <Container maxWidth="lg" sx={{  overflow: "hidden" }} >
        {/* Header Logos */}
        <Grid container justifyContent="center" spacing={2} sx={{ mb: 3 }}>
          {["Samsung", "Microsoft", "Google", "Slack", "LG", "Sony"].map(
            (brand) => (
              <Grid item key={brand}>
                <Typography sx={{ color: "white", fontWeight: "bold" }}>
                  {brand}
                </Typography>
              </Grid>
            )
          )}
        </Grid>

        <Paper
          elevation={3}
          sx={{
            minHeight:"596px",
            p: 4,
            borderRadius: 2,
            background: "#EBEFFF",
            position: "relative", // Needed for absolute positioning of child elements
            overflow: "hidden",
          }}
        >
          {/* Rotated Image */}
          <Box
            sx={{
              position: "absolute",
              top: "-50%",
            //   left: "50%",
              // Move image to the left
              transform: " rotate(90deg)", // Rotate and center vertically
              zIndex: 0, // Ensure it's behind the form
              overflow: "hidden",
             
            }}
          >
            <img
              src={bg_image}
              alt="bg"
              style={{
                width: "100%", // Adjust size as needed
                height: "auto",
                objectFit: "cover",
                overflow: "hidden",
              }}
            />
          </Box>

          {/* Contact Form */}
          <Grid
            container
            spacing={4}
            alignItems="center"
            sx={{ position: "relative", zIndex: 1, overflow: "hidden" }}
          >
            {/* Left Side Text */}
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight="bold">
                Let’s Get in <span style={{ color: "#6A0DAD" }}>Touch!</span>
              </Typography>
              <Typography variant="body1" sx={{ mt: 1, color: "gray" }}>
                Have a question or need technical support? Reach out to our team
                via email, phone, or the contact form below. We’re here to help
                you innovate and solve challenges with cutting-edge solutions.
              </Typography>
              <Typography
                variant="body2"
                sx={{ mt: 2, fontWeight: "bold", color: "#6A0DAD" }}
              >
                Nice hearing from you!
              </Typography>
            </Grid>

            {/* Right Side Form */}
            <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{  }}>
                   Full Name:
               </Typography>
                 <TextField
                  fullWidth
                  name="fullName"
                //   value={formData.fullName}
                //   onChange={handleChange}
                  variant="outlined"
                //   sx={styles.input}
                />

                <Typography variant="body1" sx={{  }}>
                  Email:
                </Typography>
                <TextField
                  fullWidth
                  name="email"
                //   value={formData.email}
                //   onChange={handleChange}
                  variant="outlined"
                //   sx={styles.input}
                />

                <Typography variant="body1" sx={{  }}>
                  Contact Number:
                </Typography>
                <TextField
                  fullWidth
                  name="contactNumber"
                //   value={formData.contactNumber}
                //   onChange={handleChange}
                  variant="outlined"
                //   sx={styles.input}
                />

                <Typography variant="body1" sx={{  }}>
                  Message:
                </Typography>
                <TextField
                  fullWidth
                  name="message"
                //   value={formData.message}
                //   onChange={handleChange}
                  variant="outlined"
                  multiline
                  rows={4}
                //   sx={styles.input}
                />

              {/* <TextField
                fullWidth
                label="Full Name"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Contact Number"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                sx={{ mb: 2 }}
              /> */}
              <Button
                variant="contained"
                fullWidth
                sx={{ background: "#6A0DAD", color: "white", mt:5 }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Paper>

   

        {/* Footer */}
        <Box
          sx={{
            textAlign: "center",
            color: "white",
            mt: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "right",
          }}
        >
          <Box
            sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 2 }}
          >
            <Facebook sx={{ color: "white" }} />
            <WhatsApp sx={{ color: "white" }} />
            <Telegram sx={{ color: "white" }} />
          </Box>
          <Box
            // sx={{
            //   display: "flex",
            //   alignItems: "center",
            //   justifyContent: "center",
            // }}
          >
            <Typography variant="h6">Head Office:</Typography>
            <Typography variant="body2">📞 +94 70 322 7937</Typography>
            <Typography variant="body2">📧 info.lunovate@gmail.com</Typography>
            <Typography variant="body2">
              📍 Wata mawatha, Nugegoda, LK
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactPage;

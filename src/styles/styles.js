import zIndex from "@mui/material/styles/zIndex";

export const styles = {
  mainContainer: {
    py: 4,
    backgroundImage: "linear-gradient(to bottom right, #0f172a, #1e293b)",
    backgroundSize: "cover",
    minHeight: "100vh",
    color: "white",
    display: "flex",
    flexDirection: "column",
  },

  brandsContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    py: 2,
    mb: 2,
  },

  brandLogo: {
    height: "24px",
    margin: "0 10px",
    filter: "brightness(0) invert(1)",
    opacity: 0.8,
  },

  contentContainer: {
    backgroundColor: "#EBEFFF",
    backdropFilter: "blur(10px)",
    borderRadius: "28px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    padding: { xs: 2, md: 0 },
    flex: 1,
    position: "relative",
    p:10,

 
        // height: "100px",
        // width: "100vw",
        // backgroundImage: `url(}")`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
    
  },

  leftSection: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    p: 4,
    minHeight: "500px",
  },

  rightSection: {
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    display: "flex",
    flexDirection: "column",
    p: 4,
    position: "relative",
  },

  textSection: {
    mb: 2,
    zIndex: 2,
    p:5
  },

  heading: {
    fontWeight: "bold",
    mb: 2,
    fontSize: { xs: "2rem", md: "2.5rem" },
  },

  touchHighlight: {
    color: "#7c3aed",
    fontWeight: "bold",
  },

  subtext: {
    color: "rgba(255, 255, 255, 0.8)",
    mb: 2,
    maxWidth: "80%",
  },

  nicehearing: {
    fontWeight: "bold",
    color: "rgba(255, 255, 255, 0.9)",
  },

  logoContainer: {
    position: "relative",
    mt: "auto",
    mb: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },

  logo: {
    width: "383px",
    height: "383px",
    borderRadius: "50%",
    padding: "10px",
    top:"50%",
    position: "relative",
    transform: "translateY(40%)",
zIndex:2

  },

  socialIcons: {
    display: "flex",
    justifyContent: { xs: "center", md: "flex-start" },
    mt: 2,
    mb: { xs: 4, md: 0 },
  },

  socialIcon: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    margin: "0 8px",
    "&:hover": {
      backgroundColor: "rgba(124, 58, 237, 0.7)",
    },
  },

  form: {
    width: "100%",
    zIndex: 2,
  },

  formFields: {
    "& > *": {
      mb: 2,
    },
  },

  label: {
    mb: 0.5,
    color: "#000000",
  },

  input: {
    backgroundColor: "rgba(255, 255, 255, 0.06)",
    borderRadius: "8px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(255, 255, 255, 0.2)",
      },
      "&:hover fieldset": {
        borderColor: "rgba(255, 255, 255, 0.4)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#7c3aed",
      },
    },
    "& .MuiInputBase-input": {
      color: "white",
    },
  },

  submitButton: {
    backgroundColor: "#7c3aed",
    color: "white",
    borderRadius: "8px",
    padding: "10px 20px",
    fontWeight: "bold",
    textTransform: "none",
    width: "120px",
    "&:hover": {
      backgroundColor: "#6b21a8",
    },
  },

  contactInfoContainer: {
    mt: "auto",
    pt: 4,
  },

  contactInfoHeading: {
    fontWeight: "bold",
    mb: 2,
  },

  contactDetail: {
    display: "flex",
    alignItems: "center",
    mb: 1,
  },

  contactIcon: {
    mr: 1,
    fontSize: "1.2rem",
    color: "rgba(255, 255, 255, 0.7)",
  },

  Logo_2: {
    width: "250px", // Adjust as needed
    height: "auto",
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 2,
  },

  bgImage:{
    // backgroundImage: "url('https://images.unsplash.com/photo-1575407897320-79d9d6009578?ixid=MnwxMjA3fDB8MHxwaG90by1wYWx0fHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    position: "relative",
    zIndex: -1,
  }
};

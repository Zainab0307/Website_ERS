import React,{useState,useEffect} from 'react'
import book from "../assets/images/book.png";
import { useTheme } from "@mui/material/styles";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import TeamMember from "../assets/images/abrar.png";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {
    Box,
    Typography,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
    Divider,
    FormControl,
    FormHelperText,
    TextField,
    ListItemButton,
  } from "@mui/material";
  import * as Yup from "yup";
  import { Formik } from "formik";

function RequestQueryForm() {
    const theme = useTheme();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  return (
    <>
    <Grid container xs={10} className="!mx-auto">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Box className="bg-white shadow-xl pb-6 xl:h-[450px] lg:h-[450px] md:h-full sm:h-full xsm:h-full xxs:h-full xxxs:h-full min-h-full">
                <Box>
                  <img
                    src={book}
                    className="w-full h-full object-cover mb-4"
                    alt="..."
                  />
                </Box>
                <Box className="block text-center px-4">
                  <Typography
                    variant="h6"
                    component={"h6"}
                    gutterBottom
                    className="!text-base !font-[400] !font-[poppins] !text-ersPrimary !mb-4"
                  >
                    Request a Quote
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component={"p"}
                    gutterBottom
                    className="!text-sm !font-[400] !font-[poppins]  !mb-14 !leading-loose !font-poppins"
                  >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et{" "}
                  </Typography>
                  <Button
                    size="medium"
                    type="submit"
                    block
                    className="!w-[150px] !rounded-[50px] !text-base !font-[500] !font-[poppins] ] !bg-red-500 !text-white !capitalize !bg-gradient-to-r from-[#29BCF1] to-[#0F53CE]"
                  >
                    Request
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9} className="relative">
              <Box className="request-form-bg"></Box>
              <Box className="request-form bg-white shadow-xl p-4">
                <Box className="relative h-[70px]">
                  <Box className="arrow-bg-img"></Box>
                </Box>
                <Grid
                  container
                  spacing={4}
                  className="xl:h-[530px] lg:h-[580px] md:h-full sm:h-full xsm:h-full xxs:h-full xxxs:h-full min-h-full px-4"
                >
                  <Grid item xs={12} sm={12} md={6} lg={7}>
                    <Box className="block text-start mb-6">
                      <Typography
                        variant="h6"
                        component={"h6"}
                        className="!text-lg !font-[400] !font-[poppins] "
                      >
                        Want To
                      </Typography>
                      <Typography
                        variant="h6"
                        component={"h6"}
                        gutterBottom
                        className="!text-lg !font-[400] !font-[poppins]  !text-ersPrimary"
                      >
                        Request a Query?
                      </Typography>
                      <Divider className="w-[170px] !border-[1.5px]" />
                    </Box>
                    <Formik
                      initialValues={{
                        email: "",
                        Name: "",
                        Contact: "",
                        Subject: "",
                        Message: "",
                      }}
                      validationSchema={Yup.object().shape({
                        Name: Yup.string()
                          .min(2, "Too Short!")
                          .max(50, "Too Long!")
                          .required("Name is required"),
                        email: Yup.string()
                          .email("Invalid email")
                          .required("Email is Required"),
                        Contact: Yup.string()
                          .min(2, "Too Short!")
                          .max(50, "Too Long!")
                          .required("Contact is required"),
                        Subject: Yup.string().required("Subject is required"),
                        Message: Yup.string().required("Message is required"),
                      })}
                      onSubmit={async (
                        values,
                        { setSubmitting, setErrors, setStatus }
                      ) => {
                        try {
                          setStatus({ success: true });
                          setSubmitting(false);
                        } catch (err) {
                          console.error(err);
                          setStatus({ success: false });
                          setErrors({ submit: err.message });
                          setSubmitting(false);
                        }
                      }}
                    >
                      {({
                        errors,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                        isSubmitting,
                        touched,
                        values,
                      }) => (
                        <form
                          autoComplete="off"
                          noValidate
                          onSubmit={handleSubmit}
                        >
                          <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={6}>
                              <FormControl
                                fullWidth
                                error={Boolean(touched.Name && errors.Name)}
                                sx={{ ...theme.typography.customInput }}
                              >
                                <TextField
                                  fullWidth
                                  placeholder="Name"
                                  margin="normal"
                                  name="Name"
                                  type="text"
                                  value={name}
                                  variant="standard"
                                  autoComplete="new-password"
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  className='!font-[400] !font-poppins !text-base'
                                />
                                {touched.Name && errors.Name && (
                                  <FormHelperText
                                    error
                                    id="standard-weight-helper-text--register"
                                  >
                                    {errors.Name}
                                  </FormHelperText>
                                )}
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                              <FormControl
                                fullWidth
                                error={Boolean(touched.email && errors.email)}
                                sx={{ ...theme.typography.customInput }}
                              >
                                <TextField
                                  fullWidth
                                  placeholder="Email"
                                  margin="normal"
                                  name="email"
                                  type="email"
                                  value={email}
                                  variant="standard"
                                  autoComplete="new-password"
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  className='!font-[400] !font-poppins !text-base'
                                />
                                {touched.email && errors.email && (
                                  <FormHelperText
                                    error
                                    id="standard-weight-helper-text--register"
                                  >
                                    {errors.email}
                                  </FormHelperText>
                                )}
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                              <FormControl
                                fullWidth
                                error={Boolean(
                                  touched.Contact && errors.Contact
                                )}
                                sx={{ ...theme.typography.customInput }}
                              >
                                <TextField
                                  fullWidth
                                  placeholder="Contact"
                                  margin="normal"
                                  name="contact"
                                  type="number"
                                  value={contact}
                                  className='!font-[400] !font-poppins !text-base'
                                  variant="standard"
                                  autoComplete="new-password"
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                />
                                {touched.Contact && errors.Contact && (
                                  <FormHelperText
                                    error
                                    id="standard-weight-helper-text--register"
                                  >
                                    {errors.Contact}
                                  </FormHelperText>
                                )}
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                              <FormControl
                                fullWidth
                                error={Boolean(
                                  touched.Subject && errors.Subject
                                )}
                                sx={{ ...theme.typography.customInput }}
                              >
                                <TextField
                                  fullWidth
                                  placeholder="Subject"
                                  margin="normal"
                                  name="subject"
                                  type="text"
                                  value={subject}
                                  variant="standard"
                                  autoComplete="new-password"
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  className='!font-[400] !font-poppins !text-base'
                                />
                                {touched.Subject && errors.Subject && (
                                  <FormHelperText
                                    error
                                    id="standard-weight-helper-text--register"
                                  >
                                    {errors.Subject}
                                  </FormHelperText>
                                )}
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                              <FormControl
                                fullWidth
                                error={Boolean(
                                  touched.Message && errors.Message
                                )}
                                sx={{ ...theme.typography.customInput }}
                              >
                                <TextareaAutosize
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  margin="normal"
                                  value={message}
                                  name="message"
                                  maxRows={5}
                                  minRows={5}
                                  className="w-full text-sm !font-[400] !font-poppins !text-base' font-normal leading-normal p-3 border-b border-solid border-slate-300 hover:border-gray-500  focus:border-black-500 bg-white focus-visible:outline-0"
                                  aria-label="empty textarea"
                                  placeholder="Message"
                                
                                />
                                {touched.Message && errors.Message && (
                                  <FormHelperText
                                    error
                                    id="standard-weight-helper-text--register"
                                  >
                                    {errors.Message}
                                  </FormHelperText>
                                )}
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                              <Box sx={{ mt: 2, textAlign: "start" }}>
                                <Button
                                  size="large"
                                  type="submit"
                                  className="xl:!w-[50%] lg:!w-[50%] md:!w-[50%] sm:!w-full xsm:!w-full xxs:!w-full xxxs:!w-full !rounded-[50px] !text-base !font-[500] !font-[poppins]  !bg-red-500 !text-white !capitalize !bg-gradient-to-r from-[#29BCF1] to-[#0F53CE]"
                                >
                                  Send Message
                                </Button>
                              </Box>
                            </Grid>
                          </Grid>
                        </form>
                      )}
                    </Formik>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={5}>
                    <Box className="grid place-content-center	text-center">
                      <Typography
                        variant="h6"
                        component={"h6"}
                        className="!text-lg !font-[400] text-center !font-[poppins] "
                      >
                        Talk To Our
                      </Typography>
                      <Typography
                        variant="h6"
                        component={"h6"}
                        gutterBottom
                        className="!text-xl !font-[poppins] !tracking-wide text-center !font-[500] !text-ersPrimary"
                      >
                        Sales Team!
                      </Typography>
                    </Box>

                    <Box className="container-img-box">
                      <div className="container-inner ">
                        <div className="circle "></div>
                        <img
                          className="mask-img mask-img-one"
                          src={TeamMember}
                          alt="..."
                        />
                      </div>
                    </Box>
                    <Box className="text-center -mt-[2.5rem]">
                      <Typography
                        variant="h5"
                        component={"h5"}
                        className=" !text-xl !font-[600] !font-[poppins]  text-black"
                      >
                        John Doe
                      </Typography>
                      <Typography
                        variant="h6"
                        component={"h6"}
                        gutterBottom
                        className="!text-base !font-[500] !font-[poppins]  text-ersPrimary"
                      >
                        Head Of Sales
                      </Typography>
                    </Box>
                    <Box className="text-center">
                      <List className="flex items-center !mb-2">
                        <ListItemButton className="!justify-center !bg-inherit !rounded-[10px] !w-[25px]">
                          <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            to="https://www.linkedin.com/company/erstech/mycompany/"
                          >
                            <FaLinkedin size={30} color="#1360D2" />
                          </Link>
                        </ListItemButton>
                        <ListItemButton
                          onClick={() =>
                            (window.location = "mailto:info@erstech.org")
                          }
                          className="!justify-center !bg-inherit !rounded-[10px] !w-[25px]"
                        >
                          <Box className="bg-[#1360D2] rounded-[5px] p-[2px]">
                            <IoIosMail size={23} color="#fff" />
                          </Box>
                        </ListItemButton>
                        <ListItemButton className="!justify-center !bg-inherit !rounded-[10px] !w-[25px]">
                          <FaSquarePhone size={30} color="#1360D2" />
                        </ListItemButton>
                      </List>
                      <Typography
                        variant="subtitle1"
                        component={"p"}
                        gutterBottom
                        className="!text-sm !font-[400] !font-[poppins]  !text-start !font-poppins"
                      >
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
    </>
  )
}

export default RequestQueryForm
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import contactAnimation from "../animation/contact.json";
import { Box, Button, Stack, TextField } from "@mui/material";
import Header from "../Components/Header";
import doneAnimation from "../animation/done.json";

const Contact = () => {
  const [state, handleSubmit] = useForm("myyroalv");

  return (
    <Box>
      <Header
        title={"Contact us"}
        subTitle="Contact us for more information and Get notified when I publish
        something new."
      />
         {state.succeeded && (
            <p
              className="flex"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
              <Lottie
                loop={false}
                style={{ height: 37 }}
                animationData={doneAnimation}
              />
              Your message has been sent successfully 👌
            </p>
          )}
      <Stack sx={{ gap: 4, width: "900 px" }} direction={"row"}>
        <Box
          onSubmit={handleSubmit}
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
          noValidate
          autoComplete="off"
        >
          <Stack sx={{ gap: 4 }} direction={"column"}>
            <TextField
              sx={{ flex: 1 }}
              label="Email Address:"
              autoComplete="on"
              required
              type="email"
              name="email"
              id="email"
              size="small"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <TextField
              sx={{ flex: 1 }}
              label="Your message:"
              name="messagee"
              required
              multiline
              maxRows={8}
              rows={8}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </Stack>
          <Box>
            <Button
              type="submit"
              sx={{ textTransform: "capitalize" }}
              variant="outlined"
              disabled={state.submitting}
            >
              {state.submitting ? "Submitting ..." : "Submit"}
            </Button>
         
          </Box>
        </Box>

        <Box>
          <Lottie style={{ height: 355 }} animationData={contactAnimation} />
        </Box>
      </Stack>
    </Box>
  );
};
export default Contact;

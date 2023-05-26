import Airtable from "airtable";

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  "appPIG0MObCnbq9fM"
);
const table = base("Reports");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      await table.create({
        Name: name,
        Email: email,
        Message: message,
        Status: "Todo",
      });
      res
        .status(200)
        .json({ message: "We have received your report. Thank you!" });
    } catch (error) {
      res.status(500).json({
        message:
          "Failed to submit report. Please try again or contact me at sojinsamuel2001@gmail.com. Thank you!",
      });
    }
  }
}

import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST" && !req.body) {
    res.status(400);
    return;
  }

  try {
    const data = JSON.parse(req.body);
    // Get the content from the API
    const output = await axios({
      method: "POST",
      url: "https://devcore02.cimet.io/v1/plan-list",
      headers: {
        "Content-Type": "application/json",
        "Api-key": process.env.API_KEY,
        "auth-token": data.token
      },
      data: JSON.stringify({
        session_id: process.env.SESSION_ID
      })
    });

    const result = output.data;
    res.status(200).json(result.data);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

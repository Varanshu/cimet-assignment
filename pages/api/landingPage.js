import { tokenExpiration } from "../../utils/tokenExtaction";
import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") return;

  try {
    // get token from the API
    const tokenDetails = await tokenExpiration(req, res);

    //create a custom error for no token and expiration
    if (!tokenDetails.token || !tokenDetails.expiration) {
      throw new CustomError("token and data error");
    }

    // Get the content from the API
    const output = await axios({
      method: "POST",
      url: "https://devcore02.cimet.io/v1/plan-list",
      headers: {
        "Content-Type": "application/json",
        "Api-key": process.env.API_KEY,
        "auth-token": tokenDetails.token
      },
      data: JSON.stringify({
        session_id: process.env.SESSION_ID
      })
    });

    const result = output.data;

    res.status(200).json({
      expiration: tokenDetails.expiration,
      ...result
    });
  } catch (error) {
    if (error instanceof CustomError) {
      res.status(400).send("token and data error");
    } else {
      res.status(400).send(error.message);
    }
  }
}

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

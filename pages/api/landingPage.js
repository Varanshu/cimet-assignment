import { tokenExpiration } from "../../utils/tokenExtaction";
import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") return;

  const tokenDetails = await tokenExpiration(req, res);

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

  // console.log("output", output.data);

  res.status(200).json({
    expiration: tokenDetails.expiration,
    ...result
  });
}

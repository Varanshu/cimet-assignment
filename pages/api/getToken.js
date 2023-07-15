import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") return;

  try {
    const output = await axios({
      method: "POST",
      url: "https://devcore02.cimet.io/v1/generate-token",
      headers: {
        "Api-key": process.env.API_KEY
      }
    });

    res.status(200).json({
      token: output.data.data.token,
      expiration: new Date(output.data.data.token_expire_time)
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

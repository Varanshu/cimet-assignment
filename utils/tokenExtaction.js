import axios from "axios";

let token = "";
let expiration = new Date();

const tokenExport = () => {
  return {
    token,
    expiration
  };
};

const tokenExpiration = async (req, res) => {
  if (expiration > new Date()) {
    return tokenExport();
  } else {
    await extractToken();
    return tokenExport();
  }
};

const extractToken = async () => {
  var myHeaders = new Headers();
  myHeaders.append("Api-key", process.env.API_KEY);

  const output = await axios({
    method: "POST",
    url: "https://devcore02.cimet.io/v1/generate-token",
    headers: {
      "Api-key": "4NKQ3-815C2-8T5Q2-16318-55301"
    }
  });

  token = output.data.data.token || "";
  expiration = new Date(output.data.data.token_expire_time);
};

export { tokenExpiration };

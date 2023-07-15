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
  if (expiration && expiration > new Date()) {
    return tokenExport();
  } else {
    await extractToken();
    return tokenExport();
  }
};

const extractToken = async () => {
  var myHeaders = new Headers();
  myHeaders.append("Api-key", process.env.API_KEY);
  try {
    const output = await axios({
      method: "POST",
      url: "https://devcore02.cimet.io/v1/generate-token",
      headers: {
        "Api-key": process.env.API_KEY
      }
    });

    token = output.data.data.token || "";
    expiration = new Date(output.data.data.token_expire_time);
  } catch (error) {
    token = null;
    expiration = null;
  }
};

export { tokenExpiration };

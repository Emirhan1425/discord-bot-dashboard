const config = {
    "ownerID": "672011717550800896", //kendi IDınızı yazınız
    "admins": ["672011717550800896"],
    "support": ["672011717550800896"],
    "token": "MTE0ODQxOTQzNTU4NjE0MjM0OA.GHnM6M.t1usOzEleTCZAt-eyW25do0tW4rnoME0yPSi9I", //botunuzun tokenini yazınız
    "dashboard" : {
      "oauthSecret": "u5noWNhglABmy2b5UQqxVmuc1SMwaBlb", //botunuzun secretini yazınız
      "callbackURL": `https://dash.emirsibot.org/callback`, //site URLnizi yazınız /callback kısmını silmeyiniz!
      "sessionSecret": "", //kalsın
      "domain": "https://dash.emirsibot.org/", //site URLnizi yazınız!
          "port": process.env.PORT
    }
  };
  
  module.exports = config;

const config = {
    "ownerID": "672011717550800896", //kendi IDınızı yazınız
    "admins": ["672011717550800896"],
    "support": ["672011717550800896"],
    "token": "MTE0ODQxOTQzNTU4NjE0MjM0OA.GNmaEh.uFqXsPKsg5pi0fdM2E0ArzRBuVqUvWJdmcOM3w", //botunuzun tokenini yazınız
    "dashboard" : {
      "oauthSecret": "y_MsSgYAnlnhKjRAm7SWShVubIAHW3xQ", //botunuzun secretini yazınız
      "callbackURL": `https://dash.emirsibot.org/callback`, //site URLnizi yazınız /callback kısmını silmeyiniz!
      "sessionSecret": "", //kalsın
      "domain": "https://dash.emirsibot.org/", //site URLnizi yazınız!
          "port": process.env.PORT
    }
  };
  
  module.exports = config;

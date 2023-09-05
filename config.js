const config = {
    "ownerID": "672011717550800896", //kendi IDınızı yazınız
    "admins": ["672011717550800896"],
    "support": ["672011717550800896"],
    "token": "MTE0NzAwMTYwNTY0MDY5MTc1Mg.Gq5NIQ.0lhu9wWGuVOf5gHNJ6eNIkrTwMqghw5U3U-HwI", //botunuzun tokenini yazınız
    "dashboard" : {
      "oauthSecret": "z0z9tD6skQbdwLhS-SXE0k95BK9Kwdgn", //botunuzun secretini yazınız
      "callbackURL": `https://dash.EmirsiBOT.org/callback`, //site URLnizi yazınız /callback kısmını silmeyiniz!
      "sessionSecret": "", //kalsın
      "domain": "https://dash.EmirsiBOT.org/", //site URLnizi yazınız!
          "port": process.env.PORT
    }
  };
  
  module.exports = config;

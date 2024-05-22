const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html>

  <head>
    <title>WoW Private Server Registration</title>
  </head>

<style>
	section {font-family:verdana; font-size:250%; text-align:center; margin-top:15%;}
    div {width:200px;
    margin:auto;
    }

    label, input {
    font-family:verdana;
    display: block;
    }

label {
    margin-bottom: 10px;
    }
    input {
        margin-bottom:10px;
    }
  </style>

  <body>
    <section>
      WoW Private Server Registration
    </section><br><br><br>
    <div>

      <form>
    <label for="username">Username:</label>
    	<input type="text" name="Username" required minlength="2">
    

    <label for="password">Password:</label>
    	<input type="text"  name="password" required minlength="2">
   

  	<input type="submit" value="Register">
    </form>
    </div>
  </body>

</html>
`

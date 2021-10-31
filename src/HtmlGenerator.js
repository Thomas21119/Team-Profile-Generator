// html used with team being the card location

class HtmlGenerator {
  template = (team) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./reset.css" />
        <link rel="stylesheet" href="./css.css" />
        <title>Team Profile Generator</title>
      </head>
      <body>
        <header>
          <h1>Team Profile Generator</h1>
          <h6>By Thomas Wittwer</h6>
        </header>
        <main class="teamCards">
            ${team}
        </main>
      </body>
    </html>`;
  };
}
module.exports = HtmlGenerator;

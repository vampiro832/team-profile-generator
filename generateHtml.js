function generateHTML(teamMembers) {

    const cards = teamMembers.map(member => {
        const { name, id, email } = member;

        let specialInfo = '';
        let role = ''
        if (member.getRole() === "Manager") {
            specialInfo = `Office Number: ${member.getOfficeNumber()}`;
            role = "Manager"
        } else if (member.getRole() === "Engineer") {
            specialInfo = `GitHub: <a href="https://github.com/${member.getGithub()}" target="_blank">${member.getGithub()}</a>`;
            role = "Engineer"
        } else if (member.getRole() === "Intern") {
            specialInfo = `School: ${member.getSchool()}`;
            role = "Intern"
        }

        return `
        <div class="card">
          <div class="card-header">
          <h2>Name: ${name}</h2>
          <h3>role:${role}</h3>
          </div>
          <div class="card-body">
          <li class="list-group-item">ID:${id}</li>
          <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
          <li class="list-group-item">Github:${specialInfo}</li>
          </div>
        </div>
      `;
    });

        return `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Team Roster</title>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="./style.css">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        </head>
        <body>
          <header>
            <h1>Team Roster</h1>
          </header>
          <main>
            ${cards.join('')}
          </main>
        </body>
      </html>
    `;
}
module.exports = generateHTML
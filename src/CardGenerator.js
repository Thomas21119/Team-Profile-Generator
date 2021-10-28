class Generator {
  managerGenerator = (team) => {
    return `
<div class="card">
  <div class="cardHeader">
    <h2> ${team.name} </h2>
    <h3> Manager </h3>
  </div>
  <div class="cardBody">
    <ul>
      <li> <span> ID: </span> ${team.id} </li>
      <li> <span> Email: </span> <a href="mailto:${team.email}">${team.email}</a> </li>
      <li> <span> Office Number: </span> ${team.officeNumber} </li>
    </ul>
  </div>
</div>`;
  };

  engineerGenerator = (team) => {
    return `
<div class="card">
    <div class="cardHeader">
    <h2> ${team.name} </h2>
    <h3> Engineer </h3>
    </div>
    <div class="cardBody">
    <ul>
        <li> <span> ID: </span> ${team.id} </li>
        <li> <span> Email: </span> <a href="mailto:${team.email}">${team.email}</a> </li>
        <li> <span> Github: </span> <a target="_blank" href="https://github.com/${team.github}">${team.github}</a> </li>
    </ul>
    </div>
</div>`;
  };

  internGenerator = (team) => {
    return `
<div class="card">
    <div class="cardHeader">
    <h2> ${team.name} </h2>
    <h3> Intern </h3>
    </div>
    <div class="cardBody">
    <ul>
        <li> <span> ID: </span> ${team.id} </li>
        <li> <span> Email: </span> <a href="mailto:${team.email}">${team.email}</a> </li>
        <li> <span> School: </span> ${team.school} </li>
    </ul>
    </div>
</div>`;
  };
}

module.exports = Generator;

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
      <li> ID: ${team.id} </li>
      <li> Email: ${team.email} </li>
      <li> Office Number: ${team.officeNumber} </li>
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
        <li> ID: ${team.id} </li>
        <li> Email: ${team.email} </li>
        <li> Office Number: ${team.officeNumber} </li>
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
        <li> ID: ${team.id} </li>
        <li> Email: ${team.email} </li>
        <li> Office Number: ${team.officeNumber} </li>
    </ul>
    </div>
</div>`;
  };
}

module.exports = Generator;

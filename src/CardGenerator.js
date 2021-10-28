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
      <li> <span> Email: </span> ${team.email} </li>
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
        <li> <span> Email: </span> ${team.email} </li>
        <li> <span> Office Number: </span> ${team.officeNumber} </li>
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
        <li> <span> Email: </span> ${team.email} </li>
        <li> <span> Office Number: </span> ${team.officeNumber} </li>
    </ul>
    </div>
</div>`;
  };
}

module.exports = Generator;

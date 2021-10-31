// card generator

// team.name puts inputed name into location
// team.email puts inputed email into location
// team.officeNumber puts inputed phone number into location
// team.github puts inputed github user into location
// team.school puts inputed school into location

class Generator {
  // manager card
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

  // engineer card
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

  // intern card
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

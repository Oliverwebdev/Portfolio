fetch("skills.json")
  .then((response) => response.json())
  .then((data) => {
    const skillsList = document.getElementById("skills-list");

    // Iteriere über das Array in Schritten von 2, da jede Kategorie mit einem Titel gefolgt von einem Array von Skills kommt
    for (let i = 1; i < data.length; i += 2) {
      data[i].forEach((skill) => {
        const listItem = document.createElement("li");
        const icon = document.createElement("i");

        // Füge die Klassen hinzu
        icon.className = `icon ${skill.icon}`;
        icon.style.color = skill.color; // Setze die Farbe basierend auf den Daten aus der JSON-Datei

        const skillName = document.createTextNode(skill.name);

        listItem.appendChild(icon);
        listItem.appendChild(skillName);
        skillsList.appendChild(listItem);
      });
    }
  })
  .catch((error) => console.error("Error fetching skills:", error));


// ANFANG CODE
// // Lade die Skills aus der JSON-Datei und erzeuge zufällig fallende Icons
// fetch("skills.json")
//   .then((response) => response.json())
//   .then((data) => {
//     const skillsSection = document.querySelector(".skills-section");
//     const skillsList = document.getElementById("skills-list");

//     data.skills.forEach((skill) => {
//       const icon = document.createElement("i");
//       icon.classList.add("fab", skill.iconClass); // 'iconClass' ist der Name des Icon-Attributs in der JSON-Datei

//       // Zufällige Position und Animation der Icons
//       const top = Math.random() * window.innerHeight; // Zufällige Vertikalposition
//       const left = Math.random() * window.innerWidth; // Zufällige Horizontalposition
//       const duration = Math.random() * 3 + 2; // Zufällige Animationsdauer zwischen 2 und 5 Sekunden

//       icon.style.top = `${top}px`;
//       icon.style.left = `${left}px`;
//       icon.style.animation = `fall ${duration}s linear infinite`;

//       skillsSection.appendChild(icon);
//     });
//   })
//   .catch((error) => console.error("Error fetching skills:", error));

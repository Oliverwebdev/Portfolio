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
// Funktion, um die "starred" Repositories eines Benutzers abzurufen
async function getStarredRepos() {
  const username = 'Oliverwebdev'; // Dein GitHub-Benutzername
  const response = await fetch(`https://api.github.com/users/${username}/starred`);
  const data = await response.json();
  return data;
}

async function displayStarredRepos() {
  const starredList = document.getElementById('starred-list');
  const starredRepos = await getStarredRepos();

  starredRepos.forEach(repo => {
      const repoElement = document.createElement('div');
      repoElement.innerHTML = `
          <h3>${repo.name}</h3>
          <p>${repo.description || 'No description available'}</p>
          <a href="${repo.html_url}" target="_blank">View on GitHub</a>
          <hr>
      `;
      starredList.appendChild(repoElement);
  });
}

window.onload = displayStarredRepos;


// mit api

// const accessToken = "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";

// fetch("https://api.github.com/user/starred", {
//   headers: {
//     Authorization: `token ${accessToken}`,
//   },
// })
//   .then((response) => response.json())
//   .then((starredRepos) => {
//     const projectsList = document.createElement("div");
//     projectsList.classList.add("card-list");

//     let cardsInRow = 0;
//     let cardRow = document.createElement("div");
//     cardRow.classList.add("card-row");

//     starredRepos.forEach((repo) => {
//       const card = document.createElement("div");
//       card.classList.add("card");

//       const projectName = document.createElement("h3");
//       projectName.textContent = repo.name;

//       const projectDescription = document.createElement("p");
//       projectDescription.textContent =
//         repo.description || "No description available";

//       const projectLink = document.createElement("a");
//       projectLink.href = repo.html_url;
//       projectLink.textContent = "View on GitHub";
//       projectLink.setAttribute("target", "_blank");

//       card.appendChild(projectName);
//       card.appendChild(projectDescription);
//       card.appendChild(projectLink);

//       cardRow.appendChild(card);
//       cardsInRow++;

//       if (cardsInRow % 3 === 0) {
//         projectsList.appendChild(cardRow);
//         cardRow = document.createElement("div");
//         cardRow.classList.add("card-row");
//       }
//     });

//     if (cardRow.childNodes.length > 0) {
//       projectsList.appendChild(cardRow);
//     }

//     document.body.appendChild(projectsList);
//   })
//   .catch((error) => console.error(error));

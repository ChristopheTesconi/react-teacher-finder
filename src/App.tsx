import "./styles/reset.css";
import "./styles/global.css";
import React from "react";
import { data, languages, specialties } from "./data";
import MonComposant from "./MonComposant";

// Fonction pour mettre à jour l'affichage en fonction des sélections de l'utilisateur
const update = (
  h1: any,
  languageSelect: any,
  specialtySelect: any,
  ul: any
) => {
  // Calcul du nombre de formateurs en fonction des sélections de l'utilisateur
  const nbFormateurs = data.reduce(
    (accumulator, teacher) =>
      teacher.language === languageSelect.value &&
      teacher.specialty === specialtySelect.value
        ? accumulator + 1
        : accumulator,
    0
  );
  // Mise à jour du contenu du titre avec le nombre de formateurs trouvés
  h1.textContent = `${nbFormateurs} ${
    nbFormateurs === 1 ? "formateur trouvé" : "formateurs trouvés"
  }`;

  // Génération des éléments de liste correspondant aux enseignants sélectionnés
  ul.innerHTML = "";
  data
    .filter(
      (teacher) =>
        teacher.language === languageSelect.value &&
        teacher.specialty === specialtySelect.value
    )
    .forEach((teacher, key) => {
      const li = document.createElement("li");
      li.innerHTML = `${teacher.name} <span>${teacher.language}</span> <span>${teacher.specialty}</span>`;
      // Ajoute un délai d'animation pour chaque élément de liste
      li.style.animationDelay = `${key / 3}s`;
      // Ajoute l'élément de liste à la liste non ordonnée
      ul.append(li);
    });
};
//On va créer un composant(une fonction)
const App: React.FC = () => {
  const handleChange = (): void => {
    const h1 = document.querySelector("h1");
    const ul = document.querySelector("ul");
    const selects = document.querySelectorAll("select");
    update(h1, selects[0], selects[1], ul);
  };

  setTimeout(handleChange, 1500);

  return (
    //La balise vide sert à englober mes éléments
    <>
      <MonComposant />
      <div>
        <select name="" id="" onChange={handleChange}>
          {languages.map((language, key) => (
            <option value={language} key={key}>
              {language}
            </option>
          ))}
        </select>
        <select name="" id="" onChange={handleChange}>
          {specialties.map((specialties, key) => (
            <option value={specialties} key={key}>
              {specialties}
            </option>
          ))}
        </select>
      </div>
      <h1></h1>
      <ul>{}</ul>
    </>
  );
};

export default App;

// Définition de l'interface Teacher pour représenter la structure des enseignants
interface Teacher {
  name: string;
  language: string;
  specialty: string;
}

//Ici, l'export sert à pouvoir importer mon data de n'importe où dans le code
// Déclaration de la variable data qui contient un tableau d'enseignants (Teacher[])
export const data: Teacher[] = [
  {
    name: "Benjamin B.",
    language: "PHP",
    specialty: "Symfony",
  },
  {
    name: "Benjamin N.",
    language: "JavaScript",
    specialty: "Data",
  },
  {
    name: "Benoit",
    language: "JavaScript",
    specialty: "Data",
  },
  {
    name: "Cécile",
    language: "PHP",
    specialty: "React",
  },
  {
    name: "Fabien",
    language: "JavaScript",
    specialty: "React",
  },
  {
    name: "Jean-Baptiste",
    language: "PHP",
    specialty: "Symfony",
  },
  {
    name: "Jean-Christophe",
    language: "PHP",
    specialty: "Symfony",
  },
  {
    name: "Luko",
    language: "JavaScript",
    specialty: "React",
  },
  {
    name: "Quentin",
    language: "JavaScript",
    specialty: "React",
  },
  {
    name: "Solène",
    language: "PHP",
    specialty: "React",
  },
  {
    name: "Yann",
    language: "Python",
    specialty: "Django",
  },
];

export const languages: string[] = // Langages enseignés par les enseignants (réduit à une liste unique)
  data.reduce((accumulator: string[], teacher) => {
    // Vérifie si le langage du professeur est déjà présent dans l'accumulateur
    if (!accumulator.includes(teacher.language)) {
      // Si le langage n'est pas déjà présent, l'ajoute à l'accumulateur
      accumulator.push(teacher.language);
    }
    // Retourne l'accumulateur pour la prochaine itération
    return accumulator;
  }, []);
export const specialties: string[] = data.reduce(
  (accumulator: string[], teacher) => {
    // Vérifie si la spécialité du professeur est déjà présente dans l'accumulateur
    if (!accumulator.includes(teacher.specialty)) {
      // Si la spécialité n'est pas déjà présente, l'ajoute à l'accumulateur
      accumulator.push(teacher.specialty);
    }
    // Retourne l'accumulateur pour la prochaine itération
    return accumulator;
  },
  []
);

export default {
  data,
  languages,
  specialties,
};

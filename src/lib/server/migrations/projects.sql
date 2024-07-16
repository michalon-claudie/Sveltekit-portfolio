CREATE TABLE projects (
  id INT  PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  date VARCHAR(100),
  stack VARCHAR(255),
  description TEXT,
  img VARCHAR(255),
  cover VARCHAR(255),
  link VARCHAR(255),
  githubLink VARCHAR(255)
);
INSERT INTO projects (
  id ,
  title ,
  date ,
  stack ,
  description ,
  img ,
  cover ,
  link ,
  githubLink
) VALUES (
     "0",
      "Booki",
       "Juin 2023",
       "[HTML, CSS]",
       "Site de location type Booking crée en HTML et CSS.",
      "./src/lib/assets/booki2.webp",
      "./src/lib/assets/booki.webp",
      "https://michalon-claudie.github.io/BOOKI/",
      "https://github.com/michalon-claudie/BOOKI"
);

INSERT INTO projects (
  id ,
  title ,
  date ,
  stack ,
  description ,
  img ,
  cover ,
  githubLink
) VALUES (
   "3",
    "Sophie Bluel",
     "Septembre 2023",
     "[JavaScript]",
     "Création d'une site pour une photographe en JS",
     "./src/lib/assets/sophieBluel.webp",
      "./src/lib/assets/sophieBluel.webp",
      "https://github.com/michalon-claudie/Project_6"
),(
    "4",
     "Menu Maker by Qwenta",
     "Octobre 2023",
     "[Outils de veille, gestion de projet, choix des technos]",
      "Planification et gestion d'un projet",
       "./src/lib/assets/Qwenta.webp",
      "./src/lib/assets/Qwenta.webp",
       "https://github.com/michalon-claudie/projetQwenta"
),(
     "5",
      "Kasa",
     "Octobre 2023",
     "[React, Yarn]",
       "Site de location immobilière en React",
     "./src/lib/assets/kasa.webp",
       "./src/lib/assets/kasa.webp",
     "https://github.com/michalon-claudie/Projet_8OC"
),(
   "6",
    "Nina Carducci",
     "Novembre 2023",
    "[SEO, Performance,Lighthouse/Wave]",
     "optimisation d'un site de photographe",
      "./src/lib/assets/carducci.webp",
      "./src/lib/assets/carducci.webp",
       "https://github.com/michalon-claudie/NinaCarducciProject9"
),(
     "7",
     "77Events",
     "Janvier 2024",
     "[Tests unitaires, Yarn Test,React]",
       "Debogage d'un site évenementiel",
      "./src/lib/assets/77Events.webp",
      "./src/lib/assets/77Events.webp",
       "https://github.com/michalon-claudie/724EVENTS-Projet10OC"
),(
    "8",
    "Argent Bank",
    "Février 2024",
    "[React, Redux]",
     "Création d'un site bancaire sécurisé",
    "./src/lib/assets/argentBank.webp",
     "./src/lib/assets/argentBank.webp",
     "https://github.com/michalon-claudie/ArgentBank-website"
),(
     "9",
     "Portfolio-fin de formation",
     "Mars 2024",
     " [React]",
      "Création de mon portfolio",
      "./src/lib/assets/argentBank.webp",
       "./src/lib/assets/argentBank.webp",
      "https://github.com/michalon-claudie/PORTFOLIO"
);
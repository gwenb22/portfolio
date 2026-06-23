import logoTH from '../assets/images/terra-hominis/logo-th.png';

// Félines-Minervois Images
import felinesHero from '../assets/projects/felines-minervois/hero.png';
import felinesHero2 from '../assets/projects/felines-minervois/hero2.png';
import felinesImg1 from '../assets/projects/felines-minervois/img-1.png';
import felinesImg2 from '../assets/projects/felines-minervois/img-2.png';
import felinesImg3 from '../assets/projects/felines-minervois/img-3.png';
import felinesLogoAnim from '../assets/projects/felines-minervois/logo-anim.mp4';

// Hackathon 2025 Images
import hackathonHero from '../assets/projects/hackathon-2025/hero.png';
import hackathonImg1 from '../assets/projects/hackathon-2025/img1.png';
import hackathonVideo from '../assets/projects/hackathon-2025/img3.mp4';

// Kimiyo Images
import kimiyoHero from '../assets/projects/kimiyo/hero.png';
import kimiyoImg1 from '../assets/projects/kimiyo/img1.png';
import kimiyoImg2 from '../assets/projects/kimiyo/img2.png';
import kimiyoImg3 from '../assets/projects/kimiyo/img3.png';

// Casa del Gusto Images
import casaHero from '../assets/projects/casa-del-gusto/hero.png';
import casaImg1 from '../assets/projects/casa-del-gusto/img1.png';
import casaImg2 from '../assets/projects/casa-del-gusto/img2.png';
import casaImg3 from '../assets/projects/casa-del-gusto/img3.png';
import casaImg4 from '../assets/projects/casa-del-gusto/img4.png';
import casaImg5 from '../assets/projects/casa-del-gusto/img5.png';
import casaImg6 from '../assets/projects/casa-del-gusto/img6.png';

export const profile = {
  name: "Gwenaëlle Besson",
  role: "Freelance Communication & Création",
  tagline: "Communication. Création. Digital.",
  location: "Béziers, France",
  email: "gwenaellebesson.pro@gmail.com",
  phone: "06 95 72 27 62",
  social: {
    linkedin: "https://www.linkedin.com/in/gwenaellebesson",
    instagram: "https://www.instagram.com/gwenaelle.besson/"
  },
  bio: [
    "Professionnelle freelance en communication, ayant fini ma formation en Métiers du Multimédia et de l'Internet, j'accompagne les marques, entreprises et associations dans leur communication globale avec créativité et rigueur.",
    "Passionnée par le numérique, j'allie stratégie, créativité et technique pour donner vie à des projets porteurs de sens.",
    "Mon objectif : comprendre le besoin, structurer la réponse et la concrétiser avec efficacité."
  ],
  forces: [
    "Esprit d'équipe et autonomie",
    "Relation client",
    "Capacité à travailler sous pression",
    "Polyvalence en communication & création",
  ]
};

export const skills = [
  {
    category: "Création & Design",
    items: ["Identité visuelle", "Direction artistique", "Storytelling visuel", "Print & Web"]
  },
  {
    category: "Communication & Stratégie",
    items: ["Stratégie digitale", "Ton éditorial", "Rédaction de contenus", "Valorisation de marque"]
  },
  {
    category: "Digital & Web",
    items: ["Bases développement", "UX / UI Design", "Parcours utilisateur", "Logique produit"]
  },
  {
    category: "IA & Outils",
    items: ["Organisation & Gestion", "Content Strategy", "Automatisation", "Analyse de données"]
  },
];

export const projects = [
 /* {
    id: "entrepreneuriat",
    title: "Entrepreneuriat",
    subtitle: "Lancement d'Entreprise",
    category: "Gestion & Stratégie",
    color: "bg-[#fdc64d]", // Yellow/Orange
    year: "2025",
    tags: ["Gestion", "Client", "Autonomie"],
    heroTag: "Projet Personnel",
    context: "Forte de ma formation en communication digitale, j’ai lancé mon entreprise afin de travailler sur des projets réels, confronter mes compétences aux besoins du terrain et développer une approche professionnelle complète.",
    objectives: [
      "Accompagner des marques, commerces et projets dans leur communication digitale",
      "Proposer des solutions concrètes, adaptées et efficaces",
      "Allier stratégie, créativité et outils numériques"
    ],
    role: "Fondatrice & Freelance",
    missions: [
      "Gestion globale des projets (brief, conception, livrables)",
      "Relation client et compréhension des besoins",
      "Création de contenus et supports de communication",
      "Mise en place d’outils digitaux et IA pour optimiser l’organisation"
    ],
    mobilizedSkills: ["Stratégie de communication", "Création de contenus", "Organisation", "Autonomie", "Outils IA"],
    results: [
      "Projets concrets menés avec des clients réels",
      "Développement d’une posture professionnelle et entrepreneuriale",
      "Vision globale et structurée de la communication"
    ]
  },*/
  /*{
    id: "cave-gabi",
    title: "La Cave de Gabi",
    subtitle: "Accompagnement IA",
    category: "Outils IA & Conseil",
    color: "bg-[#e0b0ff]", // Light Purple
    year: "Client",
    tags: ["IA", "Automatisation", "Conseil"],
    heroTag: "Projet Client",
    context: "La Cave de Gabi est un caviste indépendant souhaitant structurer sa communication et optimiser son organisation interne.",
    objectives: [
      "Gagner du temps dans la gestion quotidienne",
      "Structurer la stratégie de contenu",
      "Mettre en place des outils simples et efficaces"
    ],
    role: "Consultante Digitale",
    missions: [
      "Audit des besoins en communication et organisation",
      "Mise en place d’outils IA (gestion du temps, organisation fichiers, stratégie éditoriale)",
      "Analyse et visualisation de données",
      "Accompagnement et conseil"
    ],
    mobilizedSkills: ["Outils IA", "Organisation", "Stratégie digitale", "Conseil", "Automatisation"],
    results: [
      "Meilleure organisation interne",
      "Vision claire de la stratégie de contenu",
      "Gain de temps au quotidien"
    ]
  },*/
  {
    id: "terra-hominis",
    title: "Terra Hominis",
    subtitle: "Communication Digitale",
    category: "Communication",
    color: "bg-[#7CB342]", // Vine Green for Terra Hominis
    image: logoTH, // Added image property
    year: "Stage 2025",
    tags: ["Rédaction", "Storytelling", "Vin"],
    heroTag: "Stage & CDD",
    context: "Terra Hominis est une entreprise spécialisée dans le financement participatif viticole. J’ai intégré l’équipe dans le cadre de mon stage de fin d'études, ensuite prolongé par un CDD, pour valoriser les projets, vignerons et associés.",
    objectives: [
      "Humaniser la communication de la marque",
      "Mettre en avant les événements, rencontres et valeurs de Terra Hominis",
      "Produire des contenus éditoriaux engageants"
    ],
    role: "Chargée de Communication (Stage & CDD)",
    missions: [
      "Rédaction d’articles et d’actualités",
      "Définition et application d’un ton éditorial narratif et chaleureux",
      "Valorisation des acteurs humains du projet (vignerons, associés)",
      "Participation à la stratégie de contenu"
    ],
    mobilizedSkills: ["Rédaction", "Storytelling", "Stratégie éditoriale", "Communication de marque"],
    results: [
      "Contenus plus humains et engageants",
      "Renforcement de l’identité éditoriale de la marque",
      "Expérience professionnelle structurante (Stage puis CDD)"
    ],

  },
  {
    id: "hackathon-2025",
    title: "Groupe Com",
    subtitle: "Coordination",
    category: "Gestion de Projet",
    color: "bg-ecomm-yellow", // Gestion = Yellow
    image: hackathonHero,
    year: "Hackathon 24-25",
    tags: ["Leadership", "Management", "Coordination"],
    heroTag: "Chef de Groupe",
    context: "Hackathon avec un fort enjeu de temps et de coordination d’équipe.",
    objectives: [
      "Mener le projet à terme dans un temps limité",
      "Assurer la cohérence globale",
      "Valoriser les compétences de chaque membre de l’équipe"
    ],
    role: "Cheffe de Groupe",
    missions: [
      "Coordination et encadrement de l’équipe",
      "Répartition des tâches et gestion des priorités",
      "Suivi de l’avancement du projet",
      "Gestion de la cérémonie de cloture"
    ],
    mobilizedSkills: ["Leadership", "Gestion de projet", "Communication", "Prise de décision"],
    results: [
      "Projet livré dans les délais",
      "Expérience forte en management et coordination",
      "Amélioration des compétences en gestion de projet"
    ],
    gallery: [
      {
        src: hackathonImg1,
        caption: "Logo du projet",
        isLarge: true
      },
      {
        src: hackathonVideo,
        caption: "Animation des prix",
        isLarge: true,
        isVideo: true
      }
    ]
  },
  {
    id: "felines-minervois",
    title: "Félines-Minervois",
    subtitle: "Communication Territoriale",
    category: "Stratégie & Design",
    color: "bg-design-cyan", // Design = Blue
    image: felinesHero, // Hero image for detail page
    cardImage: felinesHero2, // Image for project card
    year: "Marathon MMI 24-25",
    tags: ["Stratégie", "Territoire", "Design"],
    heroTag: "Grand Prix 🏆",
    context: "Dans le cadre du Marathon MMI 2024–2025, nous avons travaillé pour la commune de Félines-Minervois sur un projet de communication territoriale. Le projet a été mené en équipe, dans un temps limité, avec des enjeux réels pour la collectivité.",
    objectives: [
      "Valoriser l’identité et les atouts de la commune",
      "Proposer une communication claire, attractive et cohérente",
      "Répondre à une commande réelle dans un cadre intensif"
    ],
    role: "Co-conception & Design",
    missions: [
      "Participation à la réflexion stratégique et créative",
      "Conception de supports de communication",
      "Travail collaboratif et coordination avec l’équipe",
      "Contribution à la cohérence globale du projet"
    ],
    mobilizedSkills: ["Communication territoriale", "Stratégie", "Création graphique", "Travail en équipe", "Gestion du temps"],
    results: [
      "Projet récompensé par le Grand Prix du Marathon MMI 2024–2025",
      "Proposition jugée pertinente, cohérente et impactante",
      "Expérience valorisante dans un contexte compétitif et professionnalisant"
    ],
    gallery: [
      {
        src: felinesImg1,
        caption: "Création d'une charte graphique"
      },
      {
        src: felinesImg2,
        caption: "Couleurs utilisées"
      },
      {
        src: felinesImg3,
        caption: "Déclinaisons"
      },
      {
        src: felinesLogoAnim,
        caption: "Animation du logo",
        isLarge: true
      }
    ]
  },
  {
    id: "kimiyo",
    title: "Kimiyo",
    subtitle: "Jeu de Société",
    category: "Game Design",
    color: "bg-motion-orange", // Jeu = Orange
    image: kimiyoHero,
    year: "Hackathon 23-24",
    tags: ["Illustration", "Game Design", "Vidéo"],
    heroTag: "Hackathon",
    context: "Dans le cadre d’un hackathon, nous avons travaillé pour Kimiyo sur la conception d'un jeu de société original.",
    objectives: [
      "Imaginer des concepts ludiques et cohérents",
      "Créer un univers graphique attractif",
      "Présenter le projet de manière claire et engageante"
    ],
    role: "Co-concepteur & Graphiste",
    missions: [
      "Co-conception d'un jeu de société",
      "Création des visuels et de l’univers graphique",
      "Réalisation de la vidéo de présentation"
    ],
    mobilizedSkills: ["Créativité", "Design graphique", "Audiovisuel", "Travail en équipe"],
    results: [
      "Un concept de jeu finalisé",
      "Présentation claire et professionnelle du projet"
    ],
    gallery: [
      {
        src: kimiyoImg1,
        caption: "Règles du jeu",
        isLarge: false
      },
      {
        src: kimiyoImg2,
        caption: "Cartes",
        isLarge: false
      },
      {
        src: kimiyoImg3,
        caption: "Plateau de jeu",
        isLarge: false
      }
    ]
  },
  {
    id: "casa-del-gusto",
    title: "La Casa del Gusto",
    subtitle: "Refonte Identité",
    category: "Design Graphique",
    color: "bg-ux-pink", // Design = Pink
    image: casaHero,
    year: "Marathon MMI 23-24",
    tags: ["Identité", "Print", "Teamwork"],
    heroTag: "Projet Académique",
    context: "Dans le cadre du Marathon MMI, nous avons travaillé pour une pizzeria réelle : La Casa del Gusto, avec pour objectif une refonte complète de son identité visuelle.",
    objectives: [
      "Moderniser l’image de la marque",
      "Proposer plusieurs pistes créatives",
      "Respecter l’ADN existant tout en le renouvelant"
    ],
    role: "Designer Graphique",
    missions: [
      "Conception graphique",
      "Recherche créative et direction artistique",
      "Travail à partir de l’existant et création from scratch",
      "Travail en équipe sous contrainte de temps"
    ],
    mobilizedSkills: ["Identité visuelle", "Direction artistique", "Travail en équipe", "Créativité"],
    results: [
      "3 identités graphiques complètes proposées",
      "Projet livré dans un temps très contraint",
      "Expérience intense et professionnalisante"
    ],
    gallery: [
      {
        src: casaImg1,
        caption: "Charte Graphique - Première Proposition",
        isLarge: false
      },
      {
        src: casaImg2,
        caption: "Charte Graphique - Deuxième Proposition",
        isLarge: false
      },
      {
        src: casaImg3,
        caption: "Charte Graphique - Troisième Proposition",
        isLarge: false
      },
      {
        src: casaImg4,
        caption: "Carton de pizza - Première Proposition",
        isLarge: false
      },
      {
        src: casaImg5,
        caption: "Carton de pizza - Deuxième Proposition",
        isLarge: false
      },
      {
        src: casaImg6,
        caption: "Carton de pizza - Troisième Proposition",
        isLarge: false
      }
    ]
  }
];

export const experiences = [
  {
    id: "freelance",
    role: "Communication & Design",
    company: "Freelance",
    period: "Sept 2025 - Présent",
    description: "Gestion de projets clients, relationnel, livrables (Logos, Sites Web, Supports de com). Approche orientée solutions.",
    tags: ["Autonomie", "Gestion Client"],
    theme: { text: "text-design-cyan", border: "border-design-cyan", hover: "hover:border-design-cyan" }
  },
  {
    id: "terra-hominis",
    role: "Chargée de com (Stage/CDD)",
    company: "Terra Hominis",
    period: "Avril - Août 2025",
    description: "Réalisation de posts RS, articles de blog, newsletters. Gestion CRM, segmentation prospects. Organisation d'événements et création de visuels. Maintenance et refonte pages web.",
    tags: ["Com 360", "CRM", "Web"],
    theme: { text: "text-marketing-red", border: "border-marketing-red", hover: "hover:border-marketing-red" }
  },
  {
    id: "felines",
    role: "Graphiste",
    company: "Félines-Minervois",
    period: "Février 2025",
    description: "Création de la charte graphique et conception de flyers pour la commune.",
    tags: ["Graphisme", "Identité Visuelle", "Print"],
    theme: { text: "text-ux-pink", border: "border-ux-pink", hover: "hover:border-ux-pink" }
  },
  {
    id: "kimiyo",
    role: "Hackathon - Grand Prix",
    company: "Kimiyo",
    period: "Mars 2024",
    description: "Produire les designs de jeux de société et monter une vidéo de présentation.",
    tags: ["Game Design", "Vidéo", "Team"],
    theme: { text: "text-motion-orange", border: "border-motion-orange", hover: "hover:border-motion-orange" }
  },
  {
    id: "casa-del-gusto",
    role: "Marathon MMI",
    company: "La Casa del Gusto",
    period: "Janv 2024",
    description: "Refonte de logo et production de la charte graphique.",
    tags: ["Branding", "Identité"],
    theme: { text: "text-ux-pink", border: "border-ux-pink", hover: "hover:border-ux-pink" }
  }
];

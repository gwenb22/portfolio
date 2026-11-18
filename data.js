// Source unique des contenus de la maquette v3.
// Textes repris de src/data/content.js (site en production) et des maquettes v2.
window.SITE = {
  email: "contact@gwenaellebesson.fr",
  linkedin: "https://www.linkedin.com/in/gwenaellebesson",
  instagram: "https://www.instagram.com/gwenaelle.besson/",

  // Présent dans content.js mais affiché nulle part sur le site actuel.
  skills: [
    { title: "Création & design", items: ["Identité visuelle", "Direction artistique", "Storytelling visuel", "Print & web"] },
    { title: "Communication & stratégie", items: ["Stratégie digitale", "Ton éditorial", "Rédaction de contenus", "Valorisation de marque"] },
    { title: "Digital & web", items: ["Bases développement", "UX / UI design", "Parcours utilisateur", "Logique produit"] },
    { title: "IA & outils", items: ["Organisation & gestion", "Content strategy", "Automatisation", "Analyse de données"] }
  ],

  types: [
    { id: "all", label: "Tous" },
    { id: "pro", label: "Expérience pro" },
    { id: "hackathon", label: "Hackathon" },
    { id: "marathon", label: "Marathon MMI" }
  ],

  projects: [
    {
      id: "cave-de-gabi", title: "La Cave de Gabi", subtitle: "Communication globale",
      category: "Communication & web", type: "pro", color: "cream", year: "2026", when: "Stage MMI3",
      stamp: "Stage de fin d'études · 2026", prize: false,
      img: "assets/cave-de-gabi.jpg", alt: "Logo La Cave de Gabi",
      desc: "Identité de marque, réseaux sociaux, newsletters et application de gestion pour un caviste itinérant.",
      short: "Marque, contenus et outil de gestion pour un caviste itinérant.",
      role: "Chargée de communication (stage de fin d'études)",
      skills: ["Direction artistique", "Réseaux sociaux", "Emailing (Brevo)", "WordPress / WooCommerce", "Développement web (Laravel)"],
      context: "La Cave de Gabi est un caviste itinérant, créé en 2024, qui livre par tournées et vend en salons. Freelance pour l'entreprise depuis septembre 2025, j'y ai effectué mon stage de fin d'études en 2026 pour passer d'une communication ponctuelle à une stratégie globale.",
      objectives: ["Donner à la marque une identité visuelle cohérente", "Lancer et structurer sa présence digitale : réseaux sociaux, newsletters, site", "Centraliser ventes, marges et tournées dans un outil de gestion sur mesure"],
      missions: ["Création de la direction artistique : typographies, style photo, éléments graphiques", "Flyers recto-verso et kakemono pour les salons", "Lancement des réseaux sociaux (Instagram, Facebook, LinkedIn) et calendrier éditorial", "Newsletters sur Brevo : format type, segmentation, relances et suivi des résultats", "Mise à jour du site WordPress / WooCommerce : produits, millésimes, photos, référencement", "Conception d'une application web de gestion : commandes, marges, factures et tournées"],
      results: ["40 à 60 % de taux d'ouverture en moyenne sur les newsletters", "Une identité de marque complète, déclinée en flyers et en kakemono", "Un outil de gestion en ligne qui centralise ventes, marges et tournées, à la place des fichiers Excel"],
      gallery: []
    },
    {
      id: "terra-hominis", title: "Terra Hominis", subtitle: "Communication digitale",
      category: "Communication", type: "pro", color: "green", year: "2025", when: "Stage MMI2",
      stamp: "Stage & CDD · 2025", prize: false,
      img: "assets/terra-hominis.png", alt: "Logo Terra Hominis, créateur de vignobles en copropriété",
      desc: "Articles, newsletters, réseaux sociaux et événements pour un acteur du financement participatif viticole.",
      short: "Contenus et événements pour un acteur du financement viticole.",
      role: "Assistante com & événementiel (stage & CDD)",
      skills: ["Rédaction", "Storytelling", "Stratégie éditoriale", "Communication de marque"],
      context: "Terra Hominis est spécialisée dans le financement participatif viticole. D'avril à août 2025, j'y ai été assistante communication et événementiel, d'abord en stage de 2e année, puis en CDD.",
      objectives: ["Humaniser la communication de la marque", "Mettre en avant les événements, rencontres et valeurs de Terra Hominis", "Produire des contenus éditoriaux engageants"],
      missions: ["Rédaction d'articles et d'actualités", "Définition et application d'un ton éditorial narratif et chaleureux", "Valorisation des acteurs humains du projet (vignerons, associés)", "Participation à la stratégie de contenu"],
      results: ["Un ton éditorial narratif et chaleureux", "Les vignerons et les associés mis en avant", "Un stage de 2e année prolongé en CDD (avril – août 2025)"],
      gallery: []
    },
    {
      id: "hackathon-2025", title: "Groupe Com", subtitle: "Coordination",
      category: "Gestion de projet", type: "hackathon", color: "yellow", year: "24-25", when: "Hackathon 24-25",
      stamp: "Cheffe de groupe · Hackathon 24-25", prize: false,
      img: "assets/groupe-com.png", alt: "Visuel du Hackathon 24-25",
      desc: "Pilotage d'un groupe de 8 étudiants pour la communication de l'événement.",
      role: "Cheffe de groupe",
      skills: ["Leadership", "Gestion de projet", "Communication", "Prise de décision"],
      context: "En mars 2025, l'IUT de Béziers organise la 6e édition de son Hackathon de l'Entrepreneuriat, sur le thème « Transition écologique & développement soutenable ». J'ai dirigé le groupe communication : 8 étudiants chargés de couvrir l'événement pendant 5 jours, jusqu'à la cérémonie de clôture au Palais des congrès.",
      objectives: ["Mener le projet à terme dans un temps limité", "Assurer la cohérence globale", "Valoriser les compétences de chaque membre de l'équipe"],
      missions: ["Coordination et encadrement de l'équipe", "Répartition des tâches et gestion des priorités", "Suivi de l'avancement du projet", "Gestion de la cérémonie de clôture"],
      results: ["Un événement couvert de bout en bout en 5 jours", "Une équipe de 8 étudiants coordonnée, tâches réparties et avancement suivi", "Une cérémonie de clôture organisée au Palais des congrès"],
      gallery: [
        { src: "assets/groupe-com-insta-1.jpg", caption: "Instagram – photos du Hackathon 24-25", asis: true },
        { src: "assets/groupe-com-insta-2.jpg", caption: "Instagram – publication du Hackathon de l'Entrepreneuriat", asis: true },
        { src: "assets/groupe-com-1.jpg", caption: "Logo du projet" },
        { src: "assets/groupe-com-prix.mp4", caption: "Animation des prix", video: true }
      ]
    },
    {
      id: "felines-minervois", title: "Félines-Minervois", subtitle: "Communication territoriale",
      category: "Stratégie & design", type: "marathon", color: "cyan", year: "24-25", when: "Marathon MMI 24-25",
      stamp: "Grand Prix · Marathon MMI 24-25", prize: true,
      img: "assets/felines.png", alt: "Logo Félines-Minervois",
      desc: "Création de la charte graphique et conception de flyers pour la commune.",
      role: "Co-conception & design",
      skills: ["Communication territoriale", "Stratégie", "Création graphique", "Travail en équipe", "Gestion du temps"],
      context: "En février 2025, lors du Marathon MMI 24-25 de l'IUT de Béziers, notre équipe a répondu à une commande réelle : créer l'identité visuelle et les supports de communication de la commune de Félines-Minervois, en un temps limité.",
      objectives: ["Valoriser l'identité et les atouts de la commune", "Proposer une communication claire, attractive et cohérente", "Répondre à une commande réelle dans un cadre intensif"],
      missions: ["Participation à la réflexion stratégique et créative", "Conception de supports de communication", "Travail collaboratif et coordination avec l'équipe", "Contribution à la cohérence globale du projet"],
      results: ["Grand Prix du Marathon MMI 24-25", "Une identité visuelle complète : charte graphique, déclinaisons et logo animé", "Des flyers pour la commune, conçus en équipe dans un temps limité"],
      gallery: [
        { src: "assets/felines-1.jpg", caption: "Création d'une charte graphique" },
        { src: "assets/felines-2.jpg", caption: "Couleurs utilisées" },
        { src: "assets/felines-3.jpg", caption: "Déclinaisons" },
        { src: "assets/felines-anim.mp4", caption: "Animation du logo", video: true }
      ]
    },
    {
      id: "kimiyo", title: "Kimiyo", subtitle: "Jeu de société",
      category: "Game design", type: "hackathon", color: "orange", year: "23-24", when: "Hackathon 23-24",
      stamp: "Grand Prix · Hackathon 23-24", prize: true,
      img: "assets/kimiyo.png", alt: "Logo Kimiyo",
      desc: "Design de jeux de société et montage d'une vidéo de présentation.",
      role: "Co-conceptrice & graphiste",
      skills: ["Créativité", "Design graphique", "Audiovisuel", "Travail en équipe"],
      context: "En mars 2024, lors du Hackathon 23-24 de l'IUT de Béziers, notre équipe a imaginé pour Kimiyo un jeu de société original pour sensibiliser à la protection des littoraux.",
      objectives: ["Imaginer des concepts ludiques et cohérents", "Créer un univers graphique attractif", "Présenter le projet de manière claire et engageante"],
      missions: ["Co-conception d'un jeu de société", "Création des visuels et de l'univers graphique", "Réalisation de la vidéo de présentation"],
      results: ["Grand Prix du Hackathon 23-24", "Un jeu de société complet : règles, cartes et plateau", "Une vidéo de présentation pour valoriser le projet"],
      gallery: [
        { src: "assets/kimiyo-1.jpg", caption: "Règles du jeu" },
        { src: "assets/kimiyo-2.jpg", caption: "Cartes" },
        { src: "assets/kimiyo-3.jpg", caption: "Plateau de jeu" }
      ]
    },
    {
      id: "casa-del-gusto", title: "La Casa del Gusto", subtitle: "Refonte d'identité",
      category: "Design graphique", type: "marathon", color: "pink", year: "23-24", when: "Marathon MMI 23-24",
      stamp: "Marathon MMI 23-24", prize: false,
      img: "assets/casa.png", alt: "Logo La Casa del Gusto",
      desc: "Refonte du logo et production de la charte graphique.",
      role: "Designer graphique",
      skills: ["Identité visuelle", "Direction artistique", "Travail en équipe", "Créativité"],
      context: "En janvier 2024, lors du Marathon MMI 23-24 de l'IUT de Béziers, notre équipe a repensé l'identité visuelle de La Casa del Gusto, une pizzeria réelle, en partant de l'existant pour le moderniser sans perdre son ADN.",
      objectives: ["Moderniser l'image de la marque", "Proposer plusieurs pistes créatives", "Respecter l'ADN existant tout en le renouvelant"],
      missions: ["Conception graphique", "Recherche créative et direction artistique", "Travail à partir de l'existant et création from scratch", "Travail en équipe sous contrainte de temps"],
      results: ["3 identités visuelles complètes proposées : logo et charte graphique", "Des pistes créatives variées, de l'évolution de l'existant à la création from scratch", "Un projet mené en équipe et livré dans le temps imparti du marathon"],
      gallery: [
        { src: "assets/casa-1.jpg", caption: "Charte graphique – première proposition" },
        { src: "assets/casa-2.jpg", caption: "Charte graphique – deuxième proposition" },
        { src: "assets/casa-3.jpg", caption: "Charte graphique – troisième proposition" },
        { src: "assets/casa-4.jpg", caption: "Carton de pizza – première proposition" },
        { src: "assets/casa-5.jpg", caption: "Carton de pizza – deuxième proposition" },
        { src: "assets/casa-6.jpg", caption: "Carton de pizza – troisième proposition" }
      ]
    }
  ]
};

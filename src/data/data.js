export const HeaderContent=[
    {
        id:0,
        title:'PIERRE HERVELIN',
        subtitle:'PROFIL'
    },
    {
        id:1,
        title:'PAYANGAR',
        subtitle:'PROFIL'
    }
]

export const ParagraphContent=[
    {
        id:0,
        content:"Passionné par la création depuis toujours, aujourd'hui je dirais qu'elle régit mon existence. Un grand axe de cette passion est dédié à la musique, avec 9 ans de saxophone, 3 ans de piano et 2 ans et demi de beatmaking."
    },
    {
        id:1,
        content:"Mon esprit logique et créatif me permet de me sentir autant développeur back-end que front-end. J'ai découvert le domaine de l'informatique et plus spécialement celui de la programmation lors de la création de mes premiers robots. C'est pourquoi, après l'obtention d'un DUT informatique j'entre dans une licence professionnelle en développement web et objet connecté."
    }
]

export const CompetenceContent=[
    {
        id:0,
        title:'DEVELOPPEMENT FRONT-END',
        skills:[
            'HTML',
            'CSS',
            'Javascript',
            'Reactjs'
        ]
    },
    {
        id:1,
        title:'DEVELOPPEMENT BACK-END',
        skills:[
            'Nodejs',
            'PHP',
            'Mysql',
            'Python',
            'Java'
        ]
    }
]

export const ProjetContent=[
    {
        id:0,
        title:'Projet Poulets',
        skills:[
            'Mysql',
            'Nodejs',
            'Docker'
        ],
        description:"Une application qui permettrait d'enregistrer la température des camions transportant des poulets d'une entreprise fictive jusqu'à un entrepot. Avec l'ajout d'un formulaire rempli par le conducteur à chaque dépots/retrait.",
        state:'En développement',
        seeMore:'Voir github du projet',
        link:'https://github.com/ophelie-rochefeuille/Docker_LPDW',
        imgsrc:'../assets/img/projet0.jpg'
    },
    {
        id:1,
        title:'Fight Club',
        skills:[
            'JavaScript',
            'HTML/CSS'
        ],
        description:"Crée un labyrinthe aléatoirement et y place deux robots se déplaçant aléatoirement, jusqu'à trouver son prochain. Une fois trouvé, ils se combattent, avec possibilité d'IA différente comme une IA de fuite ou une IA furtive.",
        state:'En développement',
        seeMore:'Voir github du projet',
        link:'https://github.com/PierreHervelin/labyrinthe',
        imgsrc:'../assets/img/projet1.jpg'
    },
    {
        id:2,
        title:'Interface WEB de visualisation de paramètre de vol',
        skills:[
            'JavaScript',
            'HTML/CSS',
            'Matlab'
        ],
        description:"Projet réalisé lors de mon stage de fin de DUT au BEA (bureau d'enquête et d'analyse pour la sécurité de l'aviation civile). Cette interface permet de créer, à partir d'un logiciel créé en interne (LEA, sous matlab), une planche composé d'un ou plusieurs graphes eux même composés d'un ou plusieurs paramètre de vol. Cette interface communique avec LEA via le protocole Websocket et récupère ainsi tous les paramètres de vol d'un projet.",
        state:'Projet fini',
        seeMore:'Voir plus',
        link:'/Beaproject',
        imgsrc:'../assets/img/projet2.jpg'
    }
]
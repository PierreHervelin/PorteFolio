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
    },
    {
        id:2,
        content:"N'ayant plus accès à ce projet, il m'est impossible de présenter le code. Cependant, voici à quoi il ressemblait et ses fonctionnalités."
    },
    {
        id:3,
        content:"L'objectif de ce projet était la réalisation pas à pas d'un prototype de test,faisant aussi office d'étude de faisabilité. Ce prototype devait permettre aux enquêteurs spécialisés du département Technique d'utiliser une visualisation web des paramètres de vol produits par LEA (logiciel créé en interne sous matlab permettant le décodage et l'affichage de paramètres de vol), pour décider si une refonte web était un choix viable ou pas."
    },
    {
        id:4,
        content:"Ce prototype n'avait pas initialement vocation à être conservé. Finalement, cette interface sera mise en pré production au BEA à l'automne pour être testée par les utilisateurs."
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
        imgsrc:'projet0'
    },
    {
        id:1,
        title:'Jeu du labyrinthe',
        skills:[
            'JavaScript',
            'HTML/CSS'
        ],
        description:"Crée un labyrinthe aléatoirement et y place deux robots se déplaçant aléatoirement, jusqu'à trouver son prochain. Une fois trouvé, ils se combattent, avec possibilité d'IA différente comme une IA de fuite ou une IA furtive.",
        state:'En développement',
        seeMore:'Voir github du projet',
        link:'https://github.com/PierreHervelin/labyrinthe',
        imgsrc:'projet1'
    },
    {
        id:2,
        title:'Interface WEB de visualisation de paramètre de vol',
        skills:[
            'JavaScript',
            'Plotly.js',
            'HTML/CSS',
            'Matlab'
        ],
        description:"Projet réalisé lors de mon stage de fin de DUT au BEA (bureau d'enquête et d'analyse pour la sécurité de l'aviation civile). Cette interface permet de créer, à partir d'un logiciel créé en interne (LEA, sous matlab), une planche composé d'un ou plusieurs graphes eux même composés d'un ou plusieurs paramètre de vol. Cette interface communique avec LEA via le protocole Websocket et récupère ainsi tous les paramètres de vol d'un projet.",
        state:'Projet fini',
        seeMore:'Voir plus',
        link:'/projectbea',
        imgsrc:'projet2'
    }
]
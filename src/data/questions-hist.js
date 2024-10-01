const questionsHist = [
    // Existing questions...
    {
        text: "Какво изучава науката история?",
        options: [
            { id: 0, text: "миналото на човечеството", isCorrect: true },
            { id: 1, text: "развитието на растенията", isCorrect: false },
            { id: 2, text: "движението на планетите", isCorrect: false },
            { id: 3, text: "появата на континентите", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "Кой е паметникът от изображението?",
        options: [
            { id: 0, text: "Колизеумът в Рим", isCorrect: true },
            { id: 1, text: "Партенонът", isCorrect: false },
            { id: 2, text: "Египетските пирамиди", isCorrect: false },
            { id: 3, text: "Айфеловата кула", isCorrect: false }
        ],
        imageUrl: "https://cdn.pixabay.com/photo/2020/04/06/09/36/rome-5008963_640.jpg"
    },
    {
        text: "Кой е първият народ в историята, който вярва в един Бог?",
        options: [
            { id: 0, text: "римляни", isCorrect: false },
            { id: 1, text: "шумери", isCorrect: false },
            { id: 2, text: "евреи", isCorrect: true },
            { id: 3, text: "елини", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "Кой е паметникът от изображението?",
        options: [
            { id: 0, text: "Колизеумът в Рим", isCorrect: false },
            { id: 1, text: "Партенонът", isCorrect: false },
            { id: 2, text: "Египетските пирамиди", isCorrect: true },
            { id: 3, text: "Айфеловата кула", isCorrect: false }
        ],
        imageUrl: "https://miro.medium.com/v2/da:true/resize:fit:1200/0*HTIjmy_g7zt6I3bD"
    },
    {
        text: "Коя азбука произлиза от гръцката?",
        options: [
            { id: 0, text: "египетската", isCorrect: false },
            { id: 1, text: "латинската", isCorrect: true },
            { id: 2, text: "тракийската", isCorrect: false },
            { id: 3, text: "шумерската", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "Кой е паметникът от изображението?",
        options: [
            { id: 0, text: "Колизеумът в Рим", isCorrect: false },
            { id: 1, text: "Партенонът", isCorrect: false },
            { id: 2, text: "Египетските пирамиди", isCorrect: false },
            { id: 3, text: "Античният театър в Пловдив", isCorrect: true }
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Bulgaria_Bulgaria-0785_-_Roman_Theatre_of_Philippopolis_%287432772486%29.jpg/1920px-Bulgaria_Bulgaria-0785_-_Roman_Theatre_of_Philippopolis_%287432772486%29.jpg"
    },
    {
        text: "Кое твърдение за Олимпийските игри в Древна Елада е вярно?",
        options: [
            { id: 0, text: "Те са игри на олимпийските богове, описани в митовете.", isCorrect: false },
            { id: 1, text: "Те предизвикват раздори между елинските полиси.", isCorrect: false },
            { id: 2, text: "Те подсилват чувството за единство на елините.", isCorrect: true },
            { id: 3, text: "В тях участват всички антични народи.", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "Кое тракийско съкровище е представено на изображението?",
        options: [
            { id: 0, text: "Варненското", isCorrect: false },
            { id: 1, text: "Панагюрското", isCorrect: false },
            { id: 2, text: "Вълчитрънското", isCorrect: true },
            { id: 3, text: "Рогозенското", isCorrect: false }
        ],
        imageUrl: "https://www.thracians.net/images/slider/images/1.jpg"
    },
    {
        text: "Как се нарича управление, при което гражданите участват при вземането на решения и съществува разделение между изпълнителната, съдебната и законодателната власт?",
        options: [
            { id: 0, text: "демокрация", isCorrect: true },
            { id: 1, text: "олигархия", isCorrect: false },
            { id: 2, text: "еволюция", isCorrect: false },
            { id: 3, text: "колонизация", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "Кое твърдение е вярно според информацията от картата на Античния свят?",
        options: [
            { id: 0, text: "В началото на ІІ в. Римската империя се разпростира върху два континента.", isCorrect: true },
            { id: 1, text: "Цивилизацията на Древна Елада възниква на Апенинския полуостров.", isCorrect: false },
            { id: 2, text: "Средиземно море свързва цивилизациите на Древен Египет, Елада и Рим.", isCorrect: false },
            { id: 3, text: "Месопотамия е разположена в Предна Азия, между реките Нил и Ефрат.", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "Кои римски провинции били създадени в днешните български земи?",
        options: [
            { id: 0, text: "Мизия и Далмация", isCorrect: false },
            { id: 1, text: "Македония и Галия", isCorrect: false },
            { id: 2, text: "Испания и Тракия", isCorrect: false },
            { id: 3, text: "Тракия и Мизия", isCorrect: true },
        ], imageUrl: null
    },
    {
        text: "Кое твърдение за проповедите на Исус Христос е вярно?",
        options: [
            { id: 0, text: "Бог чува молитвите само на евреите, защото те са неговият богоизбран народ.", isCorrect: false },
            { id: 1, text: "Всички хора, без разлика от произход, народност и пол, са равни пред Бога.", isCorrect: true },
            { id: 2, text: "Хората трябва да се прекланят пред императорите за техните велики дела.", isCorrect: false },
            { id: 3, text: "Бог не съди човек по добрите му дела, а по това колко богат и известен е той.", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "Краят на Античната епоха настъпва с:",
        options: [
            { id: 0, text: "проповедите на Исус Христос", isCorrect: false },
            { id: 1, text: "завладяването на тракийските земи от римляните", isCorrect: false },
            { id: 2, text: "разделянето на Римската империя на Източна и Западна", isCorrect: false },
            { id: 3, text: "свалянето от трона на последния император на Западната Римска империя", isCorrect: true },
        ], imageUrl: null
    },
    {
        text: "Кое е най-голямото по размери българско съкровище?",
        options: [
            { id: 0, text: "Варненското", isCorrect: false },
            { id: 1, text: "Панагюрското", isCorrect: false },
            { id: 2, text: "Вълчитрънското", isCorrect: false },
            { id: 3, text: "Рогозенското", isCorrect: true },
        ], imageUrl: null
    },
    {
        text: "Кое от посочените твърдения за Древен Египет е вярно?",
        options: [
            { id: 0, text: "Египтяните използват йероглифното писмо", isCorrect: true },
            { id: 1, text: "Обединението на Горен и Долен Египет е през V хил. пр. Хр.", isCorrect: false },
            { id: 2, text: "Елините слагат край на самостоятелното съществуване на Египет", isCorrect: false },
            { id: 3, text: "Пирамидите са дворци на фараоните", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "В Месопотамия за върховен бог се почита:",
        options: [
            { id: 0, text: "Сет", isCorrect: false },
            { id: 1, text: "Мардук", isCorrect: true },
            { id: 2, text: "Амон-Ра", isCorrect: false },
            { id: 3, text: "Яхве", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "Едни от първите писани закони са създадени от:",
        options: [
            { id: 0, text: "Рамзес II", isCorrect: false },
            { id: 1, text: "Менес", isCorrect: false },
            { id: 2, text: "Хамурапи", isCorrect: true },
            { id: 3, text: "Хеопс", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "Чие дело са Висящите градини на Семирамида?",
        options: [
            { id: 0, text: "на шумерите", isCorrect: false },
            { id: 1, text: "на вавилонците", isCorrect: true },
            { id: 2, text: "на египтяните", isCorrect: false },
            { id: 3, text: "на финикийците", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "Каква е целта на напоителните съоръжения в Древен Египет?",
        options: [
            { id: 0, text: "да задържат и отвеждат водата към нивите", isCorrect: true },
            { id: 1, text: "да служат за празненства на водните богове", isCorrect: false },
            { id: 2, text: "да съхраняват водата за дълго време", isCorrect: false },
            { id: 3, text: "да предпазват обработваемата земя", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "Защо фараон Аменхотеп IV е наричан 'еретик'?",
        options: [
            { id: 0, text: "защото провежда религиозна реформа, като налага вярата в един бог", isCorrect: true },
            { id: 1, text: "защото забранява почитането на бог Озирис", isCorrect: false },
            { id: 2, text: "защото забранява мумифицирането на фараоните", isCorrect: false },
            { id: 3, text: "защото забранява изграждането на дворци и пирамиди", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "При кой владетел Нововавилонското царство достига военна и културна мощ?",
        options: [
            { id: 0, text: "Саргон", isCorrect: false },
            { id: 1, text: "Кир II", isCorrect: false },
            { id: 2, text: "Дарий I", isCorrect: false },
            { id: 3, text: "Навуходоносор II", isCorrect: true },
        ], imageUrl: null
    },
    {
        text: "Едно от седемте чудеса на древния свят - Висящите градини на Семирамида, са построени в:",
        options: [
            { id: 0, text: "Вавилон", isCorrect: true },
            { id: 1, text: "Ниневия", isCorrect: false },
            { id: 2, text: "Мемфис", isCorrect: false },
            { id: 3, text: "Тива", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "В религията на елините, персите, шумерите и асирийците общото е:",
        options: [
            { id: 0, text: "политеизъм", isCorrect: true },
            { id: 1, text: "тотеизъм", isCorrect: false },
            { id: 2, text: "орфизъм", isCorrect: false },
            { id: 3, text: "монотеизъм", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "Народното събрание в Атина било:",
        options: [
            { id: 0, text: "Ареопаг", isCorrect: false },
            { id: 1, text: "Еклесия", isCorrect: true },
            { id: 2, text: "Герусия", isCorrect: false },
            { id: 3, text: "Буле", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "През 490 г.пр.Хр. цар Дарий I започнал война срещу Елада. Кой век съответства на тази година?",
        options: [
            { id: 0, text: "VI в. пр. Хр.", isCorrect: false },
            { id: 1, text: "V в. пр. Хр.", isCorrect: true },
            { id: 2, text: "IV в. пр. Хр.", isCorrect: false },
            { id: 3, text: "III в. пр. Хр.", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "Коя е богинята на мъдростта в Древна Елада?",
        options: [
            { id: 0, text: "Афродита", isCorrect: false },
            { id: 1, text: "Атина", isCorrect: true },
            { id: 2, text: "Хера", isCorrect: false },
            { id: 3, text: "Артемида", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "Полисът се отнася за:",
        options: [
            { id: 0, text: "град-държава", isCorrect: true },
            { id: 1, text: "религиозен храм", isCorrect: false },
            { id: 2, text: "военен лагер", isCorrect: false },
            { id: 3, text: "пазар", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "В древна Месопотамия най-рано се настанили и създали градове:",
        options: [
            { id: 0, text: "шумерите", isCorrect: false },
            { id: 1, text: "вавилонците", isCorrect: false },
            { id: 2, text: "асирийците", isCorrect: false },
            { id: 3, text: "персите", isCorrect: true },
        ], imageUrl: null
    },
    {
        text: "Коя група от населението на елинските полиси НЕ била свободна?",
        options: [
            { id: 0, text: "метеките", isCorrect: false },
            { id: 1, text: "гражданите", isCorrect: false },
            { id: 2, text: "робите", isCorrect: true },
            { id: 3, text: "съюзниците", isCorrect: false },
        ], imageUrl: null
    },
    {
        "text": "Кой е показан на скулптурата -бог на плодородието, лозарството, гроздобера, виното, веселието и театъра?",
        "options": [
            { "id": 0, "text": "Зевс", "isCorrect": false },
            { "id": 1, "text": "Хадес", "isCorrect": false },
            { "id": 2, "text": "Аполон", "isCorrect": false },
            { "id": 3, "text": "Дионис", "isCorrect": true }
        ],
        "imageUrl": 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Dionysos_Louvre_Ma87_n2.jpg/800px-Dionysos_Louvre_Ma87_n2.jpg'
    },
    {
        "text": "За кой древногръцки бог се отнася описанието: Той бил мрачният и тайствен брат на Зевс и управлявал Подземното царство, където бродели сенките на умрелите. Вратата на царството охранявало свирепото триглаво куче Цербер.",
        "options": [
            { "id": 0, "text": "Хадес", "isCorrect": true },
            { "id": 1, "text": "Аполон", "isCorrect": false },
            { "id": 2, "text": "Хефест", "isCorrect": false },
            { "id": 3, "text": "Хор", "isCorrect": false }
        ],
        "imageUrl": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7G3lkXKITRRqOd0z2WlOy_P0bV39FJtX-ZA&s'
    },
    {
        "text": "Кой е древногръцкият бог, който е цар на небето и поразяващата мълния?",
        "options": [
            { "id": 0, "text": "Аполон", "isCorrect": false },
            { "id": 1, "text": "Зевс", "isCorrect": true },
            { "id": 2, "text": "Хефест", "isCorrect": false },
            { "id": 3, "text": "Хермес", "isCorrect": false }
        ],
        "imageUrl": 'https://atlas-content-cdn.pixelsquid.com/stock-images/zeus-statue-J38ZP23-600.jpg'
    },
    {
        "text": "Героят Язон е известен с.....",
        "options": [
            { "id": 0, "text": "Убиването на Немейския лъв", "isCorrect": false },
            { "id": 1, "text": "Взимането на Златното руно", "isCorrect": true },
            { "id": 2, "text": "Победата над Минотавъра", "isCorrect": false },
            { "id": 3, "text": "Ослепяването на Полифем", "isCorrect": false }
        ],
        "imageUrl": 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Jason_Golden_Fleece_Altemps_Inv8647.jpg/1024px-Jason_Golden_Fleece_Altemps_Inv8647.jpg'
    },
    {
        "text": "Кой е древногръцкият бог на войната?",
        "options": [
            { "id": 0, "text": "Дионис", "isCorrect": false },
            { "id": 1, "text": "Аполон", "isCorrect": false },
            { "id": 2, "text": "Хефест", "isCorrect": false },
            { "id": 3, "text": "Арес", "isCorrect": true }
        ],
        "imageUrl": 'https://upload.wikimedia.org/wikipedia/commons/a/a1/%CE%9F_%CE%86%CF%81%CE%B7%CF%82_%28Borghese-%CE%9B%CE%BF%CF%8D%CE%B2%CF%81%CE%BF%CF%85%29.jpg'
    },

    {
        "text": "Коя е древногръцката богиня на домашното огнище?",
        "options": [
            { "id": 0, "text": "Афродита", "isCorrect": false },
            { "id": 1, "text": "Хера", "isCorrect": false },
            { "id": 2, "text": "Хестия", "isCorrect": true },
            { "id": 3, "text": "Атина", "isCorrect": false }
        ],
        "imageUrl": 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Hestia_-_Wellesley_College_-_DSC09634.JPG/1200px-Hestia_-_Wellesley_College_-_DSC09634.JPG'
    },
    {
        "text": "Коя богинята на мъдростта, занаятите и военните стратегии...?",
        "options": [
            { "id": 0, "text": "Деметра", "isCorrect": false },
            { "id": 1, "text": "Афродита", "isCorrect": false },
            { "id": 2, "text": "Артемида", "isCorrect": false },
            { "id": 3, "text": "Атина", "isCorrect": true }
        ],
        "imageUrl": 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Athena_Varvakeion_-_MANA_-_Fidias.jpg'
    }
];

export default questionsHist;

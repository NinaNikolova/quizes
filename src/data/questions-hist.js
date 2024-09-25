const questionsHist = [
    // Existing questions...
    {
        text: "Какво изучава науката история?",
        options: [
            { id: 0, text: "миналото на човечеството", isCorrect: true },
            { id: 1, text: "развитието на растенията", isCorrect: false },
            { id: 2, text: "движението на планетите", isCorrect: false },
            { id: 3, text: "появата на континентите", isCorrect: false },
        ],
    },
    {
        text: "Кой е първият народ в историята, който вярва в един Бог?",
        options: [
            { id: 0, text: "римляни", isCorrect: false },
            { id: 1, text: "шумери", isCorrect: false },
            { id: 2, text: "евреи", isCorrect: true },
            { id: 3, text: "елини", isCorrect: false },
        ],
    },
    {
        text: "Коя азбука произлиза от гръцката?",
        options: [
            { id: 0, text: "египетската", isCorrect: false },
            { id: 1, text: "латинската", isCorrect: true },
            { id: 2, text: "тракийската", isCorrect: false },
            { id: 3, text: "шумерската", isCorrect: false },
        ],
    },
    {
        text: "Кое твърдение за Олимпийските игри в Древна Елада е вярно?",
        options: [
            { id: 0, text: "Те са игри на олимпийските богове, описани в митовете.", isCorrect: false },
            { id: 1, text: "Те предизвикват раздори между елинските полиси.", isCorrect: false },
            { id: 2, text: "Те подсилват чувството за единство на елините.", isCorrect: true },
            { id: 3, text: "В тях участват всички антични народи.", isCorrect: false },
        ],
    },
    {
        text: "Как се нарича управление, при което гражданите участват при вземането на решения и съществува разделение между изпълнителната, съдебната и законодателната власт?",
        options: [
            { id: 0, text: "демокрация", isCorrect: true },
            { id: 1, text: "олигархия", isCorrect: false },
            { id: 2, text: "еволюция", isCorrect: false },
            { id: 3, text: "колонизация", isCorrect: false },
        ],
    },
    {
        text: "Кое твърдение е вярно според информацията от картата на Античния свят?",
        options: [
            { id: 0, text: "В началото на ІІ в. Римската империя се разпростира върху два континента.", isCorrect: true },
            { id: 1, text: "Цивилизацията на Древна Елада възниква на Апенинския полуостров.", isCorrect: false },
            { id: 2, text: "Средиземно море свързва цивилизациите на Древен Египет, Елада и Рим.", isCorrect: false },
            { id: 3, text: "Месопотамия е разположена в Предна Азия, между реките Нил и Ефрат.", isCorrect: false },
        ],
    },
    {
        text: "Кои римски провинции били създадени в днешните български земи?",
        options: [
            { id: 0, text: "Мизия и Далмация", isCorrect: false },
            { id: 1, text: "Македония и Галия", isCorrect: false },
            { id: 2, text: "Испания и Тракия", isCorrect: false },
            { id: 3, text: "Тракия и Мизия", isCorrect: true },
        ],
    },
    {
        text: "Кое твърдение за проповедите на Исус Христос е вярно?",
        options: [
            { id: 0, text: "Бог чува молитвите само на евреите, защото те са неговият богоизбран народ.", isCorrect: false },
            { id: 1, text: "Всички хора, без разлика от произход, народност и пол, са равни пред Бога.", isCorrect: true },
            { id: 2, text: "Хората трябва да се прекланят пред императорите за техните велики дела.", isCorrect: false },
            { id: 3, text: "Бог не съди човек по добрите му дела, а по това колко богат и известен е той.", isCorrect: false },
        ],
    },
    {
        text: "Краят на Античната епоха настъпва с:",
        options: [
            { id: 0, text: "проповедите на Исус Христос", isCorrect: false },
            { id: 1, text: "завладяването на тракийските земи от римляните", isCorrect: false },
            { id: 2, text: "разделянето на Римската империя на Източна и Западна", isCorrect: false },
            { id: 3, text: "свалянето от трона на последния император на Западната Римска империя", isCorrect: true },
        ],
    },
    {
        text: "Кое е най-голямото по размери българско съкровище?",
        options: [
            { id: 0, text: "Варненското", isCorrect: false },
            { id: 1, text: "Панагюрското", isCorrect: false },
            { id: 2, text: "Вълчитрънското", isCorrect: false },
            { id: 3, text: "Рогозенското", isCorrect: true },
        ],
    },
    {
        text: "Кое от посочените твърдения за Древен Египет е вярно?",
        options: [
            { id: 0, text: "Египтяните използват йероглифното писмо", isCorrect: true },
            { id: 1, text: "Обединението на Горен и Долен Египет е през V хил. пр. Хр.", isCorrect: false },
            { id: 2, text: "Елините слагат край на самостоятелното съществуване на Египет", isCorrect: false },
            { id: 3, text: "Пирамидите са дворци на фараоните", isCorrect: false },
        ],
    },
    {
        text: "В Месопотамия за върховен бог се почита:",
        options: [
            { id: 0, text: "Сет", isCorrect: false },
            { id: 1, text: "Мардук", isCorrect: true },
            { id: 2, text: "Амон-Ра", isCorrect: false },
            { id: 3, text: "Яхве", isCorrect: false },
        ],
    },
    {
        text: "Едни от първите писани закони са създадени от:",
        options: [
            { id: 0, text: "Рамзес II", isCorrect: false },
            { id: 1, text: "Менес", isCorrect: false },
            { id: 2, text: "Хамурапи", isCorrect: true },
            { id: 3, text: "Хеопс", isCorrect: false },
        ],
    },
    {
        text: "Чие дело са Висящите градини на Семирамида?",
        options: [
            { id: 0, text: "на шумерите", isCorrect: false },
            { id: 1, text: "на вавилонците", isCorrect: true },
            { id: 2, text: "на египтяните", isCorrect: false },
            { id: 3, text: "на финикийците", isCorrect: false },
        ],
    },
    {
        text: "Каква е целта на напоителните съоръжения в Древен Египет?",
        options: [
            { id: 0, text: "да задържат и отвеждат водата към нивите", isCorrect: true },
            { id: 1, text: "да служат за празненства на водните богове", isCorrect: false },
            { id: 2, text: "да съхраняват водата за дълго време", isCorrect: false },
            { id: 3, text: "да предпазват обработваемата земя", isCorrect: false },
        ],
    },
    {
        text: "Защо фараон Аменхотеп IV е наричан 'еретик'?",
        options: [
            { id: 0, text: "защото провежда религиозна реформа, като налага вярата в един бог", isCorrect: true },
            { id: 1, text: "защото забранява почитането на бог Озирис", isCorrect: false },
            { id: 2, text: "защото забранява мумифицирането на фараоните", isCorrect: false },
            { id: 3, text: "защото забранява изграждането на дворци и пирамиди", isCorrect: false },
        ],
    },
    {
        text: "При кой владетел Нововавилонското царство достига военна и културна мощ?",
        options: [
            { id: 0, text: "Саргон", isCorrect: false },
            { id: 1, text: "Кир II", isCorrect: false },
            { id: 2, text: "Дарий I", isCorrect: false },
            { id: 3, text: "Навуходоносор II", isCorrect: true },
        ],
    },
    {
        text: "Едно от седемте чудеса на древния свят - Висящите градини на Семирамида, са построени в:",
        options: [
            { id: 0, text: "Вавилон", isCorrect: true },
            { id: 1, text: "Ниневия", isCorrect: false },
            { id: 2, text: "Мемфис", isCorrect: false },
            { id: 3, text: "Тива", isCorrect: false },
        ],
    },
    {
        text: "В религията на елините, персите, шумерите и асирийците общото е:",
        options: [
            { id: 0, text: "политеизъм", isCorrect: true },
            { id: 1, text: "тотеизъм", isCorrect: false },
            { id: 2, text: "орфизъм", isCorrect: false },
            { id: 3, text: "монотеизъм", isCorrect: false },
        ],
    },
    {
        text: "Народното събрание в Атина било:",
        options: [
            { id: 0, text: "Ареопаг", isCorrect: false },
            { id: 1, text: "Еклесия", isCorrect: true },
            { id: 2, text: "Герусия", isCorrect: false },
            { id: 3, text: "Буле", isCorrect: false },
        ],
    },
    {
        text: "През 490 г.пр.Хр. цар Дарий I започнал война срещу Елада. Кой век съответства на тази година?",
        options: [
            { id: 0, text: "VI в. пр. Хр.", isCorrect: false },
            { id: 1, text: "V в. пр. Хр.", isCorrect: true },
            { id: 2, text: "IV в. пр. Хр.", isCorrect: false },
            { id: 3, text: "III в. пр. Хр.", isCorrect: false },
        ],
    },
    {
        text: "Коя е богинята на мъдростта в Древна Елада?",
        options: [
            { id: 0, text: "Афродита", isCorrect: false },
            { id: 1, text: "Атина", isCorrect: true },
            { id: 2, text: "Хера", isCorrect: false },
            { id: 3, text: "Артемида", isCorrect: false },
        ],
    },
    {
        text: "Полисът се отнася за:",
        options: [
            { id: 0, text: "град-държава", isCorrect: true },
            { id: 1, text: "религиозен храм", isCorrect: false },
            { id: 2, text: "военен лагер", isCorrect: false },
            { id: 3, text: "пазар", isCorrect: false },
        ],
    },
    {
        text: "В древна Месопотамия най-рано се настанили и създали градове:",
        options: [
            { id: 0, text: "шумерите", isCorrect: false },
            { id: 1, text: "вавилонците", isCorrect: false },
            { id: 2, text: "асирийците", isCorrect: false },
            { id: 3, text: "персите", isCorrect: true },
        ],
    },
    {
        text: "Коя група от населението на елинските полиси НЕ била свободна?",
        options: [
            { id: 0, text: "метеките", isCorrect: false },
            { id: 1, text: "гражданите", isCorrect: false },
            { id: 2, text: "робите", isCorrect: true },
            { id: 3, text: "съюзниците", isCorrect: false },
        ],
    }
];

export default questionsHist;

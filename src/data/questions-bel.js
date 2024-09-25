const questionsBel = [
    {
        text: "На кой ред думите са синоними?",
        options: [
            { id: 0, text: "пестелив, щедър", isCorrect: false },
            { id: 1, text: "гневен, яростен", isCorrect: true },
            { id: 2, text: "малък, огромен", isCorrect: false },
            { id: 3, text: "умен, отзивчив", isCorrect: false },
        ],
    },
    {
        text: "На кой ред думите са антоними?",
        options: [
            { id: 0, text: "спокоен, уравновесен", isCorrect: false },
            { id: 1, text: "замислен, вглъбен", isCorrect: false },
            { id: 2, text: "сърцат, сърдечен", isCorrect: false },
            { id: 3, text: "смел, малодушен", isCorrect: true },
        ],
    },
    {
        text: "Коя от думите е сродна на думата водя?",
        options: [
            { id: 0, text: "предводител", isCorrect: true },
            { id: 1, text: "водоем", isCorrect: false },
            { id: 2, text: "наводнение", isCorrect: false },
            { id: 3, text: "воднист", isCorrect: false },
        ],
    },
    {
        text: "В кое изречение е употребена глаголна форма за минало свършено време?",
        options: [
            { id: 0, text: "Всички се молеха за хубаво време.", isCorrect: false },
            { id: 1, text: "На разсъмване тръгнаха към върха.", isCorrect: true },
            { id: 2, text: "Туристите търсеха свободни стаи.", isCorrect: false },
            { id: 3, text: "Всички свиреха с въодушевление.", isCorrect: false },
        ],
    },
    {
        text: "В кое изречение е употребена глаголна форма за минало несвършено време?",
        options: [
            { id: 0, text: "Той сигурно няма да дойде на концерта.", isCorrect: false },
            { id: 1, text: "Тя разхождаше кученцето в градинката.", isCorrect: true },
            { id: 2, text: "Всяко лято през юли заминаваме на море.", isCorrect: false },
            { id: 3, text: "Случката разсмя всички мои приятели.", isCorrect: false },
        ],
    },
    {
        text: "В кое от изреченията е употребена глаголна форма за бъдеще време?",
        options: [
            { id: 0, text: "Утре сутрин отивам на зъболекар.", isCorrect: false },
            { id: 1, text: "Няма да дойдат на тренировката.", isCorrect: true },
            { id: 2, text: "Делегацията пристига довечера.", isCorrect: false },
            { id: 3, text: "След малко тръгвам към гарата.", isCorrect: false },
        ],
    },
    {
        text: "На кой ред думата е НЕПРАВИЛНО написана?",
        options: [
            { id: 0, text: "вързвам", isCorrect: true },
            { id: 1, text: "дърпам", isCorrect: false },
            { id: 2, text: "бъркам", isCorrect: false },
            { id: 3, text: "мърдам", isCorrect: false },
        ],
    },
    {
        text: "В кое изречение думата път е подлог?",
        options: [
            { id: 0, text: "След малко излязохме на тесен коларски път.", isCorrect: false },
            { id: 1, text: "Между дърветата видяхме тесен коларски път.", isCorrect: false },
            { id: 2, text: "Пред очите ни се белееше тесен коларски път.", isCorrect: true },
            { id: 3, text: "Вървяхме почти част по тесния коларски път.", isCorrect: false },
        ],
    },
    {
        text: "В кое изречение има определение?",
        options: [
            { id: 0, text: "Вървяхме бавно покрай брега.", isCorrect: false },
            { id: 1, text: "Стигнахме до брега на морето.", isCorrect: true },
            { id: 2, text: "Брегът се губеше зад скалата.", isCorrect: false },
            { id: 3, text: "Слънцето огряваше брега.", isCorrect: false },
        ],
    },
    {
        text: "В кое изречение е допусната грешка при членуване?",
        options: [
            { id: 0, text: "Най-добрият състезател получи специална награда.", isCorrect: false },
            { id: 1, text: "Нашият отбор се гордее със своя най-добър състезател.", isCorrect: false },
            { id: 2, text: "Това е най-добрия състезател от нашия отбор.", isCorrect: true },
            { id: 3, text: "За нашия отбор е чест да има такъв добър състезател.", isCorrect: false },
        ],
    },
    {
        text: "В кое изречение е употребено минало свършено деятелно причастие?",
        options: [
            { id: 0, text: "Девойката пеела чудна песен.", isCorrect: false },
            { id: 1, text: "Момчето мечтаело да стане моряк.", isCorrect: false },
            { id: 2, text: " Звездата светнала над планината.", isCorrect: true },
            { id: 3, text: "По цял ден мислел за нея.", isCorrect: false },
        ],
    },
    {
        text: "На кой ред думата е НЕПРАВИЛНО написана?",
        options: [
            { id: 0, text: "малак", isCorrect: true },
            { id: 1, text: "къдрав", isCorrect: false },
            { id: 2, text: "гъвкав", isCorrect: true },
            { id: 3, text: "казал", isCorrect: false },
        ],
    },
    {
        text: "На кой ред думата е НЕПРАВИЛНО написана?",
        options: [
            { id: 0, text: "влязъл", isCorrect: false },
            { id: 1, text: "здание", isCorrect: false },
            { id: 2, text: "могъл", isCorrect: false },
            { id: 3, text: "покойте", isCorrect: true },
        ],
    },
    {
        text: "На кой ред думата е НЕПРАВИЛНО написана?",
        options: [
            { id: 0, text: "искренност", isCorrect: true },
            { id: 1, text: "здание", isCorrect: false },
            { id: 2, text: "очакваше", isCorrect: false },
            { id: 3, text: "истината", isCorrect: false },
        ],
    },
    {
        text: "В коя от думите има правописна грешка?",
        options: [
            { id: 0, text: "далечен", isCorrect: false },
            { id: 1, text: "патека", isCorrect: true },
            { id: 2, text: "мълча", isCorrect: false },
            { id: 3, text: "гадая", isCorrect: false },
        ],
    },
    {
        text: "В коя от думите има правописна грешка?",
        options: [
            { id: 0, text: "глухарче", isCorrect: false },
            { id: 1, text: "другар", isCorrect: false },
            { id: 2, text: "смотен", isCorrect: true },
            { id: 3, text: "изморен", isCorrect: false },
        ],
    },
    {
        text: "В коя от думите има правописна грешка?",
        options: [
            { id: 0, text: "убида", isCorrect: true },
            { id: 1, text: "упреквам", isCorrect: false },
            { id: 2, text: "умножавам", isCorrect: false },
            { id: 3, text: "умора", isCorrect: false },
        ],
    },
    {
        text: "В коя от думите има правописна грешка?",
        options: [
            { id: 0, text: "потоп", isCorrect: false },
            { id: 1, text: "чорап", isCorrect: false },
            { id: 2, text: "сироп", isCorrect: false },
            { id: 3, text: "корап", isCorrect: true },
        ],
    },
    {
        text: "Коя от думите е съществително име?",
        options: [
            { id: 0, text: "цвете", isCorrect: true },
            { id: 1, text: "цветен", isCorrect: false },
            { id: 2, text: "оцветявам", isCorrect: false },
            { id: 3, text: "цветно", isCorrect: false },
        ],
    },
    {
        text: "Коя от думите е прилагателно име?",
        options: [
            { id: 0, text: "украсявам", isCorrect: false },
            { id: 1, text: "красота", isCorrect: false },
            { id: 2, text: "красив", isCorrect: true },
            { id: 3, text: "красавица", isCorrect: false },
        ],
    },
    {
        text: "Коя от думите е глагол?",
        options: [
            { id: 0, text: "бегач", isCorrect: false },
            { id: 1, text: "бягане", isCorrect: false },
            { id: 2, text: "беглец", isCorrect: false },
            { id: 3, text: "бягам", isCorrect: true },
        ],
    },
    {
        text: "Коя от думите е числително редно име?",
        options: [
            { id: 0, text: "първенец", isCorrect: false },
            { id: 1, text: "първи", isCorrect: true },
            { id: 2, text: "първенство", isCorrect: false },
            { id: 3, text: "един", isCorrect: false },
        ],
    },
    {
        text: "В кое от изреченията думата бързо е наречие?",
        options: [
            { id: 0, text: "Това дете е бързо.", isCorrect: false },
            { id: 1, text: "То тича бързо.", isCorrect: true },
            { id: 2, text: "В гората шумоли бързо поточе.", isCorrect: false },
            { id: 3, text: "Той има най-бързото куче.", isCorrect: false },
        ],
    },
    {
        text: "Коя от думите НЕ е синоним на останалите?",
        options: [
            { id: 0, text: "храбър", isCorrect: false },
            { id: 1, text: "смел", isCorrect: false },
            { id: 2, text: "добър", isCorrect: true },
            { id: 3, text: "безстрашен", isCorrect: false },
        ],
    },
    {
        text: "Коя от думите е без представка?",
        options: [
            { id: 0, text: "слънце", isCorrect: true },
            { id: 1, text: "сграда", isCorrect: false },
            { id: 2, text: "свързвам", isCorrect: false },
            { id: 3, text: "сбор", isCorrect: false },
        ],
    },
    {
        text: "Коя от думите е без наставка?",
        options: [
            { id: 0, text: "бързовар", isCorrect: false },
            { id: 1, text: "комар", isCorrect: true },
            { id: 2, text: "млекар", isCorrect: false },
            { id: 3, text: "гайдар", isCorrect: false },
        ],
    },
    {
        text: "В кой ред глаголът пея е в минало свършено време?",
        options: [
            { id: 0, text: "пея", isCorrect: false },
            { id: 1, text: "ще пея", isCorrect: false },
            { id: 2, text: "пях", isCorrect: true },
            { id: 3, text: "пеех", isCorrect: false },
        ],
    },
    {
        text: "В кой ред глаголът играя е в минало несвършено време?",
        options: [
            { id: 0, text: "играят", isCorrect: false },
            { id: 1, text: "ще играя", isCorrect: false },
            { id: 2, text: "играх", isCorrect: false },
            { id: 3, text: "играех", isCorrect: true },
        ],
    },
];

export default questionsBel;

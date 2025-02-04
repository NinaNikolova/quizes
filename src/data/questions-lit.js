const questionsLit = [
    // Existing questions...
    {
        text: "В кой от отговорите празникът и религиозната общност, която го отбелязва, НЕ са свързани правилно?",
        options: [
            { id: 0, text: "Великден – юдейска", isCorrect: true },
            { id: 1, text: "Гергьовден – християнска", isCorrect: false },
            { id: 2, text: "Пасха (Песах) – юдейска", isCorrect: false },
            { id: 3, text: "Курбан байрам – мюсюлманска", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "Защо младият принц Ром от „Легенда за рома“ е обречен на самота?",
        options: [
            { id: 0, text: "защото е непокорен и своенравен", isCorrect: false },
            { id: 1, text: "защото е преследван от зла сила", isCorrect: false },
            { id: 2, text: "защото от боговете му е отредено да стои далеч от хората", isCorrect: true },
            { id: 3, text: "защото родителите му са го проклели", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "За кое от изучените в 5. клас произведения се отнася изречението: „Доброто е въплътено в девойката, която има вълшебна „животворна сила“, и в разумния й баща, който събира хората и така възниква щастливият град на благоденствието“?",
        options: [
            { id: 0, text: "„Троица братя града градяха“", isCorrect: false },
            { id: 1, text: "„Главатарят, който искал да плени месечината“", isCorrect: true },
            { id: 2, text: "„Златното момиче“", isCorrect: false },
            { id: 3, text: "„Тримата братя и златната ябълка“", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "От коя от изучените в 5. клас творби е откъсът: „Аз дето бях завел по-напред едното, там заведох сетне и другото. И както сторих с едното, тъй и с другото. Пък къде са ходили, какво са правили и как е станала тази работа, колкото знаеш ти, толкова и аз!“?",
        options: [
            { id: 0, text: "„Господ и дяволът правят света“", isCorrect: false },
            { id: 1, text: "„Похитителят на мълнии“", isCorrect: false },
            { id: 2, text: "„Котаракът наставник, или Котаракът в чизми“", isCorrect: false },
            { id: 3, text: "„Златното момиче“", isCorrect: true },
        ], imageUrl: null
    },
    {
        text: "В кой от редовете произведение и автор НЕ са свързани правилно?",
        options: [
            { id: 0, text: "„Грозното патенце“ – Ханс Кристиан Андерсен", isCorrect: false },
            { id: 1, text: "„Котаракът наставник, или Котаракът в чизми“ – Ангел Каралийчев", isCorrect: true },
            { id: 2, text: "„Похитителят на мълнии“ – Рик Риърдън", isCorrect: false },
            { id: 3, text: "„Хайдути“ – Христо Ботев", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "В кой от редовете герой и произведение НЕ са свързани правилно?",
        options: [
            { id: 0, text: "Сатаната – „Господ и дяволът правят света“", isCorrect: false },
            { id: 1, text: "царица Дай – „Легенда за рома“", isCorrect: false },
            { id: 2, text: "Струна – „Троица братя града градяха“", isCorrect: false },
            { id: 3, text: " Хадес – „Похитителят на мълнии“", isCorrect: true },
        ], imageUrl: null
    },
    {
        text: "Коя от думите НЕ е с представка?",
        options: [
            { id: 0, text: "надарен", isCorrect: false },
            { id: 1, text: "натурален", isCorrect: true },
            { id: 2, text: "нанос", isCorrect: false },
            { id: 3, text: "намокрям", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "В кой от отговорите има глагол в минало несвършено време?",
        options: [
            { id: 0, text: "чел", isCorrect: false },
            { id: 1, text: "четене", isCorrect: false },
            { id: 2, text: "четях", isCorrect: true },
            { id: 3, text: "четох", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "Коя от думите се мени по род?",
        options: [
            { id: 0, text: "нелеп", isCorrect: true },
            { id: 1, text: "прилеп", isCorrect: false },
            { id: 2, text: "налеп", isCorrect: false },
            { id: 3, text: "череп", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "В кой от отговорите думите са антоними?",
        options: [
            { id: 0, text: "приказлив – мълчалив", isCorrect: true },
            { id: 1, text: "умен – разумен", isCorrect: false },
            { id: 2, text: "добър – добродетел", isCorrect: false },
            { id: 3, text: "полегат – наклонен", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "Кой от редовете много ясно НЕ съдържа синоними?",
        options: [
            { id: 0, text: "приказлив – мълчалив", isCorrect: true },
            { id: 1, text: "умен – разумен", isCorrect: false },
            { id: 2, text: "добър – добродетел", isCorrect: false },
            { id: 3, text: "полегат – равен", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "В коя от думите е допусната правописна грешка?",
        options: [
            { id: 0, text: "бухъл", isCorrect: true },
            { id: 1, text: "мухъл", isCorrect: false },
            { id: 2, text: "кокал", isCorrect: false },
            { id: 3, text: "пумпал", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "В коя от думите е допусната правописна грешка?",
        options: [
            { id: 0, text: "оглушавам", isCorrect: false },
            { id: 1, text: "огладнявам", isCorrect: false },
            { id: 2, text: "огасявам", isCorrect: true },
            { id: 3, text: "ограничавам", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "В кое от изреченията късно НЕ е наречие?",
        options: [
            { id: 0, text: "Всички документи са прегледани късно в понеделник.", isCorrect: false },
            { id: 1, text: "Обаждаш се твърде късно, за да мога да ти помогна.", isCorrect: false },
            { id: 2, text: "Легнах си късно и сега ми се спи.", isCorrect: false },
            { id: 3, text: "Понякога децата плашат майките си с късно проговаряне.", isCorrect: true },
        ], imageUrl: null
    },

    {
        text: "В кой от отговорите е допусната правописна грешка?",
        options: [
            { id: 0, text: "уточнявам", isCorrect: false },
            { id: 1, text: "утешавам", isCorrect: false },
            { id: 2, text: "ухапвам", isCorrect: false },
            { id: 3, text: "ухладнявам", isCorrect: true },
        ], imageUrl: null
    },
    {
        text: "В кое от изреченията е използвано обобщително местоимение?",
        options: [
            { id: 0, text: "Защо на компютъра ми се отварят всякакви рекламни сайтове, без да натискам нищо?", isCorrect: true },
            { id: 1, text: "През лятото отборът няма да продаде централния си нападател при никакви обстоятелства.", isCorrect: false },
            { id: 2, text: "Понякога, загледани в бъдещето, пропускаме малките неща, които изграждат света ни.", isCorrect: false },
            { id: 3, text: "Шикоку е порода кучета, чийто произход може да се проследи до Китай.", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "В кой от отговорите има само причастия?",
        options: [
            { id: 0, text: "преплетен, нахален, предплатен", isCorrect: false },
            { id: 1, text: "сребърен, затревен, неукрепен", isCorrect: false },
            { id: 2, text: "закупен, изтеглен, изчистен", isCorrect: true },
            { id: 3, text: "ненаситен, кулинарен, опростен", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "В кой от отговорите всички думи съдържат променливо Я?",
        options: [
            { id: 0, text: "седенки, смелост, крайбрежие", isCorrect: false },
            { id: 1, text: "летовник, спрени, хлебен", isCorrect: true },
            { id: 2, text: "белота, двеста, невеста", isCorrect: false },
            { id: 3, text: "треска, слепец, ленивец", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "Кое от изреченията е сложно съчинено?",
        options: [
            { id: 0, text: "Рисуването винаги му доставяше истинско удоволствие.", isCorrect: false },
            { id: 1, text: "Ще почистя дъската, когато ми намериш гъба.", isCorrect: false },
            { id: 2, text: "Прескачайки оградата, малкият палавник скъса панталона си.", isCorrect: false },
            { id: 3, text: "Погледна нагоре, но не видя нищо и се успокои.", isCorrect: true },
        ], imageUrl: null
    },
    {
        text: "В кое от изреченията е допусната грешка при членуването?",
        options: [
            { id: 0, text: "Книгите са неговият пътеводител из миналото.", isCorrect: false },
            { id: 1, text: "Тя счупи нокътя си с пръстена, с който си играеше.", isCorrect: false },
            { id: 2, text: "Младежът следеше огъня, избухнал на тавана.", isCorrect: false },
            { id: 3, text: "Преразказа беше предаден преди края на часа.", isCorrect: true },
        ], imageUrl: null
    },
    {
        text: "Кой от изброените мотиви се появява в края на стихотворението „Отечество любезно, как хубаво си ти!“?",
        options: [
            { id: 0, text: "мотивът за живота в града, противопоставен на живота сред природата", isCorrect: false },
            { id: 1, text: "мотивът за края на човешкия живот, сравнен с вечността на природата", isCorrect: false },
            { id: 2, text: "мотивът за бедността и несправедливото страдание", isCorrect: false },
            { id: 3, text: "мотивът за лишените от сетива хора, които не оценяват хубостта на родината", isCorrect: true },
        ], imageUrl: null
    },
    {
        text: "Кой български революционер запява песента „Къде си, вярна ти любов народна“ в края на представлението на „Многострадална Геновева“?",
        options: [
            { id: 0, text: "Левски", isCorrect: false },
            { id: 1, text: "Ботев", isCorrect: false },
            { id: 2, text: "Каблешков", isCorrect: true },
            { id: 3, text: "Бенковски", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "Отбележете какъв вид характеристика на литературен герой НЕ съществува.",
        options: [
            { id: 0, text: "изобразителна", isCorrect: true },
            { id: 1, text: "чрез постъпки и действия", isCorrect: false },
            { id: 2, text: "портретна", isCorrect: false },
            { id: 3, text: "речева", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "Коя от изброените творби е стихотворение?",
        options: [
            { id: 0, text: "„Братчетата на Гаврош“", isCorrect: true },
            { id: 1, text: "„Принцът и просякът“", isCorrect: false },
            { id: 2, text: "„Серафим“", isCorrect: false },
            { id: 3, text: "„Малкият принц“", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "За кое произведениe се отнася изречението: „В центъра на творбата е майсторството на народния разказвач и певец, чието изкуство е в състояние да завладее душите на хората, да ги накара да мислят за живота си, да променят решенията си“?",
        options: [
            { id: 0, text: "„Представлението“ („Под игото“)", isCorrect: false },
            { id: 1, text: "„Художник“", isCorrect: false },
            { id: 2, text: "„Косачи“", isCorrect: true },
            { id: 3, text: "„Бъчва със знания“ („Моето семейство и други животни“)", isCorrect: false },
        ], imageUrl: null
    },

    {
        text: "В кой от редовете произведение и автор са свързани правилно?",
        options: [
            { id: 0, text: "„Принцът и просякът“ – Антоан дьо Сент-Екзюпери", isCorrect: false },
            { id: 1, text: "„Художник“ – Веселин Ханчев", isCorrect: true },
            { id: 2, text: "„Урок по география“ („Автобиография“) – Марк Твен", isCorrect: false },
            { id: 3, text: "„Хубава си, моя горо“ – Иван Вазов", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "В кой от редовете герой и произведение са свързани правилно?",
        options: [
            { id: 0, text: "Павлина – „Представлението“ („Под игото“)", isCorrect: false },
            { id: 1, text: "Живко – „Косачи“", isCorrect: false },
            { id: 2, text: "Едуард – „Принцът и просякът“", isCorrect: true },
            { id: 3, text: "Дамянчо Григорът – „Серафим“", isCorrect: false },
        ], imageUrl: null
    },
];

export default questionsLit;

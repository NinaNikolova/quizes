const questionsChp = [
    {
        text: "От крана на чешма падат капки вода. Как се движат те?",
        options: [
            { id: 0, text: "трептят", isCorrect: false },
            { id: 1, text: "въртят се", isCorrect: false },
            { id: 2, text: "криволинейно", isCorrect: false },
            { id: 3, text: "праволинейно", isCorrect: true },
        ],
    },
    {
        text: "Ако карате велосипед по хоризонтален път и престанете да въртите педалите, движението се забавя, защото:",
        options: [
            { id: 0, text: "действат сили на триене", isCorrect: true },
            { id: 1, text: "не действат никакви сили", isCorrect: false },
            { id: 2, text: "действат сили на земно притегляне", isCorrect: false },
            { id: 3, text: "не действат сили на земно притегляне", isCorrect: false },
        ],
    },
    {
        text: "Върху стоманено парче ламарина са поставени железен пирон и стъклено топче. Какво ще се наблюдава, ако доближите до тях магнит?",
        options: [
            { id: 0, text: "Магнитът ще привлече всички тела.", isCorrect: false },
            { id: 1, text: "Магнитът ще привлече само железния пирон.", isCorrect: false },
            { id: 2, text: "Магнитът ще привлече само стоманената ламарина.", isCorrect: false },
            { id: 3, text: "Магнитът ще привлече железния пирон и стоманената ламарина.", isCorrect: true },
        ],
    },
    {
        text: "В съд с вода са пуснати две дървени клечки и три железни пирончета. Колко тела ще плават на повърхността на водата?",
        options: [
            { id: 0, text: "0", isCorrect: false },
            { id: 1, text: "2", isCorrect: true },
            { id: 2, text: "3", isCorrect: false },
            { id: 3, text: "5", isCorrect: false },
        ],
    },
    {
        text: "Електричната енергия НЕ може да се превърне в:",
        options: [
            { id: 0, text: "топлинна енергия", isCorrect: false },
            { id: 1, text: "светлинна енергия", isCorrect: false },
            { id: 2, text: "енергия на горивата", isCorrect: true },
            { id: 3, text: "енергия на движението", isCorrect: false },
        ],
    },
    {
        text: "Кое твърдение НЕ е вярно?",
        options: [
            { id: 0, text: "Свойствата на веществата се променят при промяна на условията.", isCorrect: false },
            { id: 1, text: "Физичните свойства са свързани с промяна на веществата.", isCorrect: true },
            { id: 2, text: "Веществата имат постоянен състав.", isCorrect: false },
            { id: 3, text: "Свойствата на веществата зависят от състава и строежа им.", isCorrect: false },
        ],
    },
    {
        text: "Кое е вярното твърдение? Смесите:",
        options: [
            { id: 0, text: "не се срещат в природата", isCorrect: false },
            { id: 1, text: "могат да бъдат в твърдо, течно и газообразно състояние", isCorrect: true },
            { id: 2, text: "между въздух и вода са винаги еднородни", isCorrect: false },
            { id: 3, text: "не могат да променят свойствата си", isCorrect: false },
        ],
    },
    {
        text: "Коя от изброените съставни части на въздуха НЕ е постоянна?",
        options: [
            { id: 0, text: "азот", isCorrect: false },
            { id: 1, text: "аргон", isCorrect: false },
            { id: 2, text: "кислород", isCorrect: false },
            { id: 3, text: "въглероден диоксид", isCorrect: true },
        ],
    },
    {
        text: "Кое е вярното твърдение? Водата:",
        options: [
            { id: 0, text: "не е добър разтворител", isCorrect: false },
            { id: 1, text: "е добър проводник на топлина", isCorrect: false },
            { id: 2, text: "съдържа водород, кислород и азот", isCorrect: false },
            { id: 3, text: "лесно преминава от едно състояние в друго", isCorrect: true },
        ],
    },
    {
        text: "Кое е вярното твърдение?",
        options: [
            { id: 0, text: "Веществата имат постоянен състав, а смесите имат променлив състав.", isCorrect: true },
            { id: 1, text: "Веществата имат променлив състав, а смесите имат постоянен състав.", isCorrect: false },
            { id: 2, text: "Веществата и смесите имат постоянен състав.", isCorrect: false },
            { id: 3, text: "Веществата и смесите имат променлив състав.", isCorrect: false },
        ],
    },
    {
        text: "За кой процес се отнасят следващите характеристики? Извършва се във всички организми. Свързан е с обмяната на вещества между организма и околната среда. Доставя градивен материал на клетките.",
        options: [
            { id: 0, text: "дишане", isCorrect: false },
            { id: 1, text: "дифузия", isCorrect: false },
            { id: 2, text: "хранене", isCorrect: true },
            { id: 3, text: "отделяне", isCorrect: false },
        ],
    },
    {
        text: "Какво е общото между всички жизнени процеси?",
        options: [
            { id: 0, text: "Протичат само в неживата природа.", isCorrect: false },
            { id: 1, text: "Протичат в живите организми.", isCorrect: true },
            { id: 2, text: "Доставят енергия на клетките.", isCorrect: false },
            { id: 3, text: "Освобождават клетките от непотребни вещества.", isCorrect: false },
        ],
    },
    {
        text: "Ледена висулка се откъсва от покрива на сграда и пада надолу към земната повърхност. Какво движение извършва висулката?",
        options: [
            { id: 0, text: "трептене", isCorrect: false },
            { id: 1, text: "праволинейно", isCorrect: true },
            { id: 2, text: "криволинейно", isCorrect: false },
            { id: 3, text: "движи се по окръжност", isCorrect: false },
        ],
    },
    {
        text: "Защо дъждовните капки падат надолу към земята?",
        options: [
            { id: 0, text: "Действат им сили на триене.", isCorrect: false },
            { id: 1, text: "Не им действат никакви сили.", isCorrect: false },
            { id: 2, text: "Действат им сили на земно притегляне.", isCorrect: true },
            { id: 3, text: "Не им действат сили на земно притегляне.", isCorrect: false },
        ],
    },
    {
        text: "Ако в съд с вода се пуснат железен пирон и дървена клечка, ще се наблюдава, че:",
        options: [
            { id: 0, text: "дървената клечка плава, а железният пирон потъва", isCorrect: true },
            { id: 1, text: "железният пирон плава, а дървената клечка потъва", isCorrect: false },
            { id: 2, text: "и двете тела потъват", isCorrect: false },
            { id: 3, text: "и двете тела плават", isCorrect: false },
        ],
    },
    {
        text: "Енергията на слънчевите лъчи се превръща в слънчевите батерии в:",
        options: [
            { id: 0, text: "енергия на вятъра", isCorrect: false },
            { id: 1, text: "енергия на горивата", isCorrect: false },
            { id: 2, text: "енергия на движението", isCorrect: false },
            { id: 3, text: "електрична енергия", isCorrect: true },
        ],
    },
    {
        text: "Кой от посочените примери НЕ е метод за разделяне на смеси?",
        options: [
            { id: 0, text: "нагряване", isCorrect: false },
            { id: 1, text: "филтриране", isCorrect: true },
            { id: 2, text: "изпарение", isCorrect: false },
            { id: 3, text: "утаяване", isCorrect: true },
        ],
    },
    {
        text: "Кое от изброените свойства НЕ е характерно за водните разтвори? Водните разтвори може да:",
        options: [
            { id: 0, text: "са еднородни", isCorrect: false },
            { id: 1, text: "разтварят само други течности", isCorrect: true },
            { id: 2, text: "са наситени и ненаситени", isCorrect: false },
            { id: 3, text: "са разпространени широко в природата", isCorrect: false },
        ],
    },
    {
        text: "Кое от следните вещества е практически неразтворимо?",
        options: [
            { id: 0, text: "готварска сол", isCorrect: false },
            { id: 1, text: "кислород", isCorrect: false },
            { id: 2, text: "варовик", isCorrect: true },
            { id: 3, text: "алкохол", isCorrect: false },
        ],
    },
    {
        text: "Смесите НЕ могат да бъдат:",
        options: [
            { id: 0, text: "еднородни", isCorrect: false },
            { id: 1, text: "разнородни", isCorrect: true },
            { id: 2, text: "нееднородни", isCorrect: false },
            { id: 3, text: "твърди", isCorrect: false },
        ],
    },
    {
        text: "Кое е вярното твърдение?",
        options: [
            { id: 0, text: "Веществата имат променлив състав, а смесите имат постоянен състав.", isCorrect: false },
            { id: 1, text: "Веществата и смесите имат постоянен състав.", isCorrect: false },
            { id: 2, text: "Веществата и смесите имат променлив състав.", isCorrect: false },
            { id: 3, text: "Веществата имат постоянен състав, а смесите имат променлив състав.", isCorrect: true },
        ],
    },
    {
        text: "За кой процес се отнасят следващите характеристики? • Извършва се във всички организми. • Свързан е с обмяната на вещества между организма и околната среда. • Доставя на клетките кислород.",
        options: [
            { id: 0, text: "дишане", isCorrect: true },
            { id: 1, text: "дифузия", isCorrect: false },
            { id: 2, text: "хранене", isCorrect: false },
            { id: 3, text: "отделяне", isCorrect: false },
        ],
    },
    {
        text: "Какво е общото между храненето, дишането и отделянето?",
        options: [
            { id: 0, text: "Доставят енергия на клетките.", isCorrect: false },
            { id: 1, text: "Изнасят от клетките въглероден диоксид.", isCorrect: false },
            { id: 2, text: "Протичат само в неживата природа.", isCorrect: false },
            { id: 3, text: "Протичат във всички живи организми.", isCorrect: true },
        ],
    },
    {
        text: "Определете вярното съответствие.",
        options: [
            { id: 0, text: "гъби – устица", isCorrect: false },
            { id: 1, text: "растения – ларинкс", isCorrect: false },
            { id: 2, text: "животни – стомах", isCorrect: true },
            { id: 3, text: "човек – хриле", isCorrect: false },
        ],
    },
];

export default questionsChp;


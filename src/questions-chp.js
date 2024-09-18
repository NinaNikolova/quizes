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
            { id: 0, text: "нагряване", isCorrect: true },
            { id: 1, text: "филтриране", isCorrect: false },
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
    {
        text: "Какъв път изминава влак за време t = 2 h при движение със скорост v = 100 h km?",
        options: [
            { id: 0, text: "s = 50 km", isCorrect: false },
            { id: 1, text: "s = 102 km", isCorrect: false },
            { id: 2, text: "s = 98 km", isCorrect: false },
            { id: 3, text: "s = 200 km", isCorrect: true },
        ],
    },
    {
        text: "Килограмът е единица за:",
        options: [
            { id: 0, text: "плътност", isCorrect: false },
            { id: 1, text: "маса", isCorrect: true },
            { id: 2, text: "тегло", isCorrect: false },
            { id: 3, text: "налягане", isCorrect: false },
        ],
    },
    {
        text: "Човек със ски потъва по-малко в снега, отколкото когато стъпва с обувки, защото:",
        options: [
            { id: 0, text: "натискът се увеличава", isCorrect: false },
            { id: 1, text: "натискът намалява", isCorrect: false },
            { id: 2, text: "натискът действа върху по-малка площ", isCorrect: false },
            { id: 3, text: "натискът действа върху по-голяма площ", isCorrect: true },
        ],
    },
    {
        text: "За налягането на водата е вярно, че:",
        options: [
            { id: 0, text: "намалява с увеличаване на дълбочината", isCorrect: false },
            { id: 1, text: "е еднакво на всякаква дълбочина", isCorrect: false },
            { id: 2, text: "на дъното на водния басейн е най-голямо", isCorrect: true },
            { id: 3, text: "нараства с намаляване на дълбочината", isCorrect: false },
        ],
    },
    {
        text: "Кой от газовете поддържа горенето?",
        options: [
            { id: 0, text: "водород", isCorrect: false },
            { id: 1, text: "азот", isCorrect: false },
            { id: 2, text: "кислород", isCorrect: true },
            { id: 3, text: "серен диоксид", isCorrect: false },
        ],
    },
    {
        text: "Електричният ток в металните проводници е насочено движение на:",
        options: [
            { id: 0, text: "протони", isCorrect: false },
            { id: 1, text: "електрони", isCorrect: true },
            { id: 2, text: "положителни йони", isCorrect: false },
            { id: 3, text: "отрицателни йони", isCorrect: false },
        ],
    },
    {
        text: "Коя е липсващата дума или израз в изречението: Химичните елементи са съставни части на простите вещества и на ................... .",
        options: [
            { id: 0, text: "електроните", isCorrect: false },
            { id: 1, text: "атомните ядра", isCorrect: false },
            { id: 2, text: "протоните", isCorrect: false },
            { id: 3, text: "химичните съединения", isCorrect: true },
        ],
    },
    {
        text: "Органи за хранене при растенията са:",
        options: [
            { id: 0, text: "стъблото", isCorrect: false },
            { id: 1, text: "цветовете", isCorrect: false },
            { id: 2, text: "корените", isCorrect: false },
            { id: 3, text: "листата", isCorrect: true },
        ],
    },
    {
        text: "Кой от посочените газове е основна причина за парниковия ефект?",
        options: [
            { id: 0, text: "въглероден оксид", isCorrect: false },
            { id: 1, text: "серен диоксид", isCorrect: false },
            { id: 2, text: "въглероден диоксид", isCorrect: true },
            { id: 3, text: "азотни оксиди", isCorrect: false },
        ],
    },
    {
        text: "Кое водно животно диша с бял дроб?",
        options: [
            { id: 0, text: "водна конче", isCorrect: false },
            { id: 1, text: "кит", isCorrect: true },
            { id: 2, text: "мида", isCorrect: false },
            { id: 3, text: "шаран", isCorrect: false },
        ],
    },
    {
        text: "Кое равенство е вярно?",
        options: [
            { id: 0, text: "0,38 л = 38 мл", isCorrect: false },
            { id: 1, text: " 0,016 л = 160 мл", isCorrect: false },
            { id: 2, text: "78 мл = 0,078 л", isCorrect: true },
            { id: 3, text: "1490 мл = 14,9 л", isCorrect: false },
        ],
    },
    {
        text: "Като енергиен източник НЕ се използва:",
        options: [
            { id: 0, text: "течащата вода", isCorrect: false },
            { id: 1, text: "слънцето", isCorrect: false },
            { id: 2, text: "вятърът", isCorrect: false },
            { id: 3, text: "желязната руда", isCorrect: true },
        ],
    },
    {
        text: "Коя от следните промени е химична?",
        options: [
            { id: 0, text: "разширяване на метално топче при нагряване", isCorrect: false },
            { id: 1, text: "кондензация на водни пари", isCorrect: false },
            { id: 2, text: "топене на сняг", isCorrect: false },
            { id: 3, text: "горене на бензин", isCorrect: true },
        ],
    },
    {
        text: "В кой ред са изброени само органи от храносмилателната система?",
        options: [
            { id: 0, text: "стомах, бял дроб", isCorrect: false },
            { id: 1, text: "стомах, тънко черво", isCorrect: true },
            { id: 2, text: "дебело черво, бъбреци", isCorrect: false },
            { id: 3, text: "тънко черво, бъбреци", isCorrect: false },
        ],
    },
    {
        text: "Кое вещество се отделя при процеса фотосинтеза?",
        options: [
            { id: 0, text: "азот", isCorrect: false },
            { id: 1, text: "кислород", isCorrect: true },
            { id: 2, text: "водород", isCorrect: false },
            { id: 3, text: "въглероден диоксид", isCorrect: false },
        ],
    },
    {
        text: "За кой тип размножаване са необходими двама родители?",
        options: [
            { id: 0, text: "пъпкуване", isCorrect: false },
            { id: 1, text: "безполово", isCorrect: false },
            { id: 2, text: "вегетативно", isCorrect: false },
            { id: 3, text: "полово", isCorrect: true },
        ],
    },
    {
        text: "Коя е пропуснатата дума? Във въздуха се съдържат 78% ............, 21% кислород и други примеси.",
        options: [
            { id: 0, text: "азот", isCorrect: true },
            { id: 1, text: "водород", isCorrect: false },
            { id: 2, text: "водни пари", isCorrect: false },
            { id: 3, text: "въглероден диоксид", isCorrect: false },
        ],
    },
];

export default questionsChp;


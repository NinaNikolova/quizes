const questionsKM = [
    {
        text: "Вярно ли е, че типът на файл НЕ може да бъде определен по разширението му?",
        options: [
            { id: 0, text: "Да", isCorrect: false },
            { id: 1, text: "Не", isCorrect: true },
        ], imageUrl: null
    },
    {
        text: "Вярно ли е, че уебстраниците са състоят от уебсайтове?",
        options: [
            { id: 0, text: "Да", isCorrect: false },
            { id: 1, text: "Не", isCorrect: true },
        ], imageUrl: null
    },
    {
        text: "Вярно ли е, че извеждането на видеоинформация се управлява от видеокарта?",
        options: [
            { id: 0, text: "Да", isCorrect: true },
            { id: 1, text: "Не", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "Дадени са файловете zad.snd, zad.png, zad.mp3, zad.xlsx и zad.jpg. Колко от тях са звукови?",
        options: [
            { id: 0, text: "нула", isCorrect: false },
            { id: 1, text: "един", isCorrect: false },
            { id: 2, text: "два", isCorrect: true },
            { id: 3, text: "три", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "Резултатът от изпълнението на един логически оператор може да бъде:",
        options: [
            { id: 0, text: "True", isCorrect: true },
            { id: 1, text: "Save", isCorrect: false },
            { id: 2, text: "False", isCorrect: false },
            { id: 3, text: "Edit", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "Вярно ли е, че в Windows при изтриването на файлове или папки те не се премахват от диска, а само се прехвърлят в специална папка?",
        options: [
            { id: 0, text: "Да", isCorrect: true },
            { id: 1, text: "Не", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "Вярно ли е, че можете да излагате оптичните дискове на пряка слънчева светлина или висока температура без проблеми за съхраняваната върху тях информация?",
        options: [
            { id: 0, text: "Да", isCorrect: false },
            { id: 1, text: "Не", isCorrect: true },
        ], imageUrl: null
    },
    {
        text: "Вярно ли е, че интернет включва различни компютърни мрежи, свързани помежду си чрез специални устройства и софтуер?",
        options: [
            { id: 0, text: "Да", isCorrect: true },
            { id: 1, text: "Не", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "Вярно ли е, че от думата „Задача“ с промяна само на стила се получава думата „Зэадача“?",
        options: [
            { id: 0, text: "Да", isCorrect: false },
            { id: 1, text: "Не", isCorrect: true },
        ], imageUrl: null
    },
    {
        text: "Вярно ли е, че при увеличаване на размера на растерно изображение качеството му се намалява?",
        options: [
            { id: 0, text: "Да", isCorrect: true },
            { id: 1, text: "Не", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "Вярно ли е, че художественото оформление на слайдовете се нарича дизайн?",
        options: [
            { id: 0, text: "Да", isCorrect: true },
            { id: 1, text: "Не", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "Вярно ли е, че собственият блок може да има входни данни – числа, текст или логическа стойност?",
        options: [
            { id: 0, text: "Да", isCorrect: true },
            { id: 1, text: "Не", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "Вярно ли е, че клетката А2 в Excel се намира във втора колона и втори ред?",
        options: [
            { id: 0, text: "Да", isCorrect: false },
            { id: 1, text: "Не", isCorrect: true },
        ], imageUrl: null
    },
    {
        text: "Коя от следните е търсеща машина?",
        options: [
            { id: 0, text: "Google", isCorrect: true },
            { id: 1, text: "PowerPoint", isCorrect: false },
            { id: 2, text: "Windows Media Player", isCorrect: false },
            { id: 3, text: "Snapchat", isCorrect: false },
        ], imageUrl: null
    },

    {
        text: "Изберете най-добрата парола за електронна поща от следните опции.",
        options: [
            { id: 0, text: "elAdres@com2rs#", isCorrect: true },
            { id: 1, text: "pit893", isCorrect: false },
            { id: 2, text: "Piano111", isCorrect: false },
            { id: 3, text: "2525 mimi", isCorrect: false },
        ], imageUrl: null
    },

    {
        text: "Какво трябва да направите, за да форматирате символите едновременно в две клетки в Excel?",
        options: [
            { id: 0, text: "Да ги изтриете", isCorrect: false },
            { id: 1, text: "Да ги маркирате", isCorrect: true },
            { id: 2, text: "Да ги копирате", isCorrect: false },
            { id: 3, text: "Да ги преместите", isCorrect: false },
        ], imageUrl: null
    },

    {
        text: "Коя от посочените програми е предназначена за работа с таблична информация?",
        options: [
            { id: 0, text: "Paint", isCorrect: false },
            { id: 1, text: "Word", isCorrect: false },
            { id: 2, text: "Excel", isCorrect: true },
            { id: 3, text: "Viber", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "Къде въвеждате ключовите думи при търсене на информация в интернет?",
        options: [
            { id: 0, text: "В реда за въвеждане на Excel", isCorrect: false },
            { id: 1, text: "В адресното поле на Excel", isCorrect: false },
            { id: 2, text: "В полето за търсене на търсещата машина", isCorrect: true },
            { id: 3, text: "В работното поле на Word", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "Каква е функцията на браузъра?",
        options: [
            { id: 0, text: "Обработване на звук", isCorrect: false },
            { id: 1, text: "Обработване на графични изображения", isCorrect: false },
            { id: 2, text: "Работа с таблици", isCorrect: false },
            { id: 3, text: "Разглеждане на уебстраници", isCorrect: true },
        ], imageUrl: null
    },
    {
        text: "Кое от устройствата е изходно?",
        options: [
            { "id": 0, text: "Монитор", isCorrect: true },
            { "id": 1, text: "Скенер", isCorrect: false },
            { "id": 2, text: "Джойстик", isCorrect: false },
            { "id": 3, text: "Клавиатура", isCorrect: false }
        ],
        imageUrl: null
    },
    {
        text: "Думата Bold се използва за означаване на:",
        options: [
            { "id": 0, text: "Вида на шрифта", isCorrect: false },
            { "id": 1, text: "Наклон на шрифта", isCorrect: false },
            { "id": 2, text: "Удебеляване на шрифта", isCorrect: true },
            { "id": 3, text: "Размер на шрифта", isCorrect: false }
        ],
        imageUrl: null
    },
    {
        text: "Чрез коя команда се вмъква изображение в презентация?",
        options: [
            { "id": 0, text: "View/Image", isCorrect: false },
            { "id": 1, text: "Insert/Picture", isCorrect: true },
            { "id": 2, text: "File/Open", isCorrect: false },
            { "id": 3, text: "Edit/Picture", isCorrect: false }
        ],
        imageUrl: null
    },
    {
        text: "Посочете кое от следните е функция на операционната система:",
        options: [
            { "id": 0, text: "Обработва графични изображения", isCorrect: false },
            { "id": 1, text: "Обработва аудио файлове", isCorrect: false },
            { "id": 2, text: "Зарежда програмите в оперативната памет на компютъра", isCorrect: true },
            { "id": 3, text: "Нито едно от посочените", isCorrect: false }
        ],
        imageUrl: null
    },
    {
        text: "Интернет е:",
        options: [
            { "id": 0, text: "Световна политическа организация", isCorrect: false },
            { "id": 1, text: "Рекламна агенция", isCorrect: false },
            { "id": 2, text: "Множество от компютърни мрежи, свързани помежду си, които предлагат различни услуги", isCorrect: true },
            { "id": 3, text: "Локална мрежа, в която компютрите поделят свои ресурси", isCorrect: false }
        ],
        imageUrl: null
    },
    {
        text: "При отпечатване на електронна таблица ще се отпечатат:",
        options: [
            { "id": 0, text: "Само диаграмите", isCorrect: false },
            { "id": 1, text: "Само рамките на клетките", isCorrect: false },
            { "id": 2, text: "Само клетките в които има текст", isCorrect: false },
            { "id": 3, text: "Въведените стойности и зададените рамки", isCorrect: true }
        ],
        imageUrl: null
    },
    {
        text: "Какво е разширението на файл с презентация, създадена с MS PowerPoint?",
        options: [
            { "id": 0, text: ".bmp", isCorrect: false },
            { "id": 1, text: ".doc", isCorrect: false },
            { "id": 2, text: ".xls", isCorrect: false },
            { "id": 3, text: ".pptx", isCorrect: true }
        ],
        imageUrl: null
    },
    {
        text: "В клетките на електронна таблица са въведени числа. Тогава формулата =(C4*F4) дава следния резултат:",
        options: [
            { "id": 0, text: "Сумата от съдържанието на клетките C4, D4, E4 и F4", isCorrect: false },
            { "id": 1, text: "Произведението от съдържанията на C4 и F4", isCorrect: true },
            { "id": 2, text: "Текста C4F4", isCorrect: false },
            { "id": 3, text: "Текста C4+F4", isCorrect: false }
        ],
        imageUrl: null
    },
    {
        text: "Какво означава Слайдшоу?",
        options: [
            { "id": 0, text: "Задаване на преходи между слайдовете", isCorrect: false },
            { "id": 1, text: "Разглеждане на презентацията", isCorrect: true },
            { "id": 2, text: "Задаване на анимацията на обектите", isCorrect: false },
            { "id": 3, text: "Проектиране на презентацията", isCorrect: false }
        ],
        imageUrl: null
    },
    {
        text: "При първоначално зареждане, работната книга на MS Excel се състои от:",
        options: [
            { "id": 0, text: "Документ с кръгови диаграми", isCorrect: false },
            { "id": 1, text: "Документ с хистограми", isCorrect: false },
            { "id": 2, text: "Документ с формули", isCorrect: false },
            { "id": 3, text: "Един или няколко празни работни листа", isCorrect: true }
        ],
        imageUrl: null
    },
    {
        text: "Понятието хардуер (hardware) означава:",
        options: [
            { "id": 0, text: "Операционната система", isCorrect: false },
            { "id": 1, text: "Цялата компютърна система", isCorrect: false },
            { "id": 2, text: "Апаратната част на компютъра", isCorrect: true },
            { "id": 3, text: "Програмната част на компютърната система", isCorrect: false }
        ],
        imageUrl: null
    }


];
export default questionsKM;
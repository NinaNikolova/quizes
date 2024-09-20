const questionsKM = [
    {
        text: "Вярно ли е, че типът на файл НЕ може да бъде определен по разширението му?",
        options: [
            { id: 0, text: "Да", isCorrect: false },
            { id: 1, text: "Не", isCorrect: true },
        ],
    },
    {
        text: "Вярно ли е, че уебстраниците са състоят от уебсайтове?",
        options: [
            { id: 0, text: "Да", isCorrect: false },
            { id: 1, text: "Не", isCorrect: true },
        ],
    },
    {
        text: "Вярно ли е, че извеждането на видеоинформация се управлява от видеокарта?",
        options: [
            { id: 0, text: "Да", isCorrect: true },
            { id: 1, text: "Не", isCorrect: false },
        ],
    },
    {
        text: "Дадени са файловете zad.snd, zad.png, zad.mp3, zad.xlsx и zad.jpg. Колко от тях са звукови?",
        options: [
            { id: 0, text: "нула", isCorrect: false },
            { id: 1, text: "един", isCorrect: false },
            { id: 2, text: "два", isCorrect: true },
            { id: 3, text: "три", isCorrect: false },
        ],
    },
    {
        text: "Резултатът от изпълнението на един логически оператор може да бъде:",
        options: [
            { id: 0, text: "True", isCorrect: true },
            { id: 1, text: "Save", isCorrect: false },
            { id: 2, text: "False", isCorrect: false },
            { id: 3, text: "File", isCorrect: false },
        ],
    },
    {
        text: "Вярно ли е, че в Windows при изтриването на файлове или папки те не се премахват от диска, а само се прехвърлят в специална папка?",
        options: [
            { id: 0, text: "Да", isCorrect: true },
            { id: 1, text: "Не", isCorrect: false },
        ],
    },
    {
        text: "Вярно ли е, че можете да излагате оптичните дискове на пряка слънчева светлина или висока температура без проблеми за съхраняваната върху тях информация?",
        options: [
            { id: 0, text: "Да", isCorrect: false },
            { id: 1, text: "Не", isCorrect: true },
        ],
    },
    {
        text: "Вярно ли е, че интернет включва различни компютърни мрежи, свързани помежду си чрез специални устройства и софтуер?",
        options: [
            { id: 0, text: "Да", isCorrect: true },
            { id: 1, text: "Не", isCorrect: false },
        ],
    },
    {
        text: "Вярно ли е, че от думата „Задача“ с промяна само на стила се получава думата „Зэадача“?",
        options: [
            { id: 0, text: "Да", isCorrect: false },
            { id: 1, text: "Не", isCorrect: true },
        ],
    },
    {
        text: "Вярно ли е, че при увеличаване на размера на растерно изображение качеството му се намалява?",
        options: [
            { id: 0, text: "Да", isCorrect: true },
            { id: 1, text: "Не", isCorrect: false },
        ],
    },
    {
        text: "Вярно ли е, че художественото оформление на слайдовете се нарича дизайн?",
        options: [
            { id: 0, text: "Да", isCorrect: true },
            { id: 1, text: "Не", isCorrect: false },
        ],
    },
    {
        text: "Вярно ли е, че собственият блок може да има входни данни – числа, текст или логическа стойност?",
        options: [
            { id: 0, text: "Да", isCorrect: true },
            { id: 1, text: "Не", isCorrect: false },
        ],
    },
    {
        text: "Вярно ли е, че клетката А2 в Excel се намира във втора колона и втори ред?",
        options: [
            { id: 0, text: "Да", isCorrect: false },
            { id: 1, text: "Не", isCorrect: true },
        ],
    },
    {
        text: "Коя от следните е търсеща машина?",
        options: [
            { id: 0, text: "Bing", isCorrect: true },
            { id: 1, text: "PowerPoint", isCorrect: false },
            { id: 2, text: "Windows Media Player", isCorrect: false },
            { id: 3, text: "Snapchat", isCorrect: false },
        ],
    },

    {
        text: "Изберете най-добрата парола за електронна поща от следните опции.",
        options: [
            { id: 0, text: "elAdres@com2rs#", isCorrect: true },
            { id: 1, text: "pit893", isCorrect: false },
            { id: 2, text: "Piano111", isCorrect: false },
            { id: 3, text: "2525 mimi", isCorrect: false },
        ],
    },

    {
        text: "Какво трябва да направите, за да форматирате символите едновременно в две клетки в Excel?",
        options: [
            { id: 0, text: "Да ги изтриете", isCorrect: false },
            { id: 1, text: "Да ги маркирате", isCorrect: true },
            { id: 2, text: "Да ги копирате", isCorrect: false },
            { id: 3, text: "Да ги преместите", isCorrect: false },
        ],
    },

    {
        text: "Коя от посочените програми е предназначена за работа с таблична информация?",
        options: [
            { id: 0, text: "Paint", isCorrect: false },
            { id: 1, text: "Word", isCorrect: false },
            { id: 2, text: "Excel", isCorrect: true },
            { id: 3, text: "Viber", isCorrect: false },
        ],
    },
    {
        text: "Къде въвеждате ключовите думи при търсене на информация в интернет?",
        options: [
            { id: 0, text: "В реда за въвеждане на Excel", isCorrect: false },
            { id: 1, text: "В адресното поле на Excel", isCorrect: false },
            { id: 2, text: "В полето за търсене на търсещата машина", isCorrect: true },
            { id: 3, text: "В работното поле на Word", isCorrect: false },
        ],
    },
    {
        text: "Каква е функцията на браузъра?",
        options: [
            { id: 0, text: "Обработване на звук", isCorrect: false },
            { id: 1, text: "Обработване на графични изображения", isCorrect: false },
            { id: 2, text: "Работа с таблици", isCorrect: false },
            { id: 3, text: "Разглеждане на уебстраници", isCorrect: true },
        ],
    },

];
export default questionsKM;
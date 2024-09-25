const questionsGeo = [
    {
        text: "Вашку да Гама е пътешественик, който открива:",
        options: [
            { id: 0, text: "морски път до Индия", isCorrect: true },
            { id: 1, text: "проток близо до Южна Америка", isCorrect: false },
            { id: 2, text: "Америка", isCorrect: false },
            { id: 3, text: "водопада Виктория", isCorrect: false },
        ],
    },
    {
        text: "В коя посока се движите, ако срещу вас е залязващото слънце?",
        options: [
            { id: 0, text: "изток", isCorrect: false },
            { id: 1, text: "север", isCorrect: false },
            { id: 2, text: "запад", isCorrect: true },
            { id: 3, text: "юг", isCorrect: false },
        ],
    },
    {
        text: "Разстоянието между т. А и т. Б на географската карта е 5 см, а мащабът на картата е 1:5 000 000. Колко е действителното разстояние между т. А и т. Б?",
        options: [
            { id: 0, text: "75 000 km", isCorrect: false },
            { id: 1, text: "250 km", isCorrect: true },
            { id: 2, text: "25 km", isCorrect: false },
            { id: 3, text: "7500 km", isCorrect: false },
        ],
    },
    {
        text: "Коя външна обвивка на Земята обхваща Световния океан и водите на сушата?",
        options: [
            { id: 0, text: "литосферата", isCorrect: false },
            { id: 1, text: "атмосферата", isCorrect: false },
            { id: 2, text: "хидросферата", isCorrect: true },
            { id: 3, text: "педосферата", isCorrect: false },
        ],
    },
    {
        text: "Коя от изброените форми на релефа е резултат от дейността на външните земни сили?",
        options: [
            { id: 0, text: "пещера", isCorrect: true },
            { id: 1, text: "планинска верига", isCorrect: false },
            { id: 2, text: "континент", isCorrect: false },
            { id: 3, text: "обширна равнина", isCorrect: false },
        ],
    },
    {
        text: "Коя форма на релефа е вдлъбната?",
        options: [
            { id: 0, text: "долина", isCorrect: true },
            { id: 1, text: "равнина", isCorrect: false },
            { id: 2, text: "плато", isCorrect: false },
            { id: 3, text: "низина", isCorrect: false },
        ],
    },
    {
        text: "От кое полезно изкопаемо НЕ се произвеждат горива?",
        options: [
            { id: 0, text: "нефт", isCorrect: false },
            { id: 1, text: "природен газ", isCorrect: false },
            { id: 2, text: "черни въглища", isCorrect: false },
            { id: 3, text: "медна руда", isCorrect: true },
        ],
    },
    {
        text: "Най-малко валежи падат:",
        options: [
            { id: 0, text: "на Екватора", isCorrect: false },
            { id: 1, text: "в пустините", isCorrect: true },
            { id: 2, text: "до океаните", isCorrect: false },
            { id: 3, text: "в планините", isCorrect: false },
        ],
    },
    {
        text: "В кой климатичен пояс през цялата година влияят студени и сравнително сухи въздушни маси?",
        options: [
            { id: 0, text: "екваториален", isCorrect: false },
            { id: 1, text: "тропичен", isCorrect: false },
            { id: 2, text: "умерен", isCorrect: false },
            { id: 3, text: "полярен", isCorrect: true },
        ],
    },
    {
        text: "Коя двойка „растение – животно“ е типична за зоната на екваториалните гори?",
        options: [
            { id: 0, text: "палми – орангутан", isCorrect: true },
            { id: 1, text: "сухи храсти – едногърба камила", isCorrect: false },
            { id: 2, text: "лишеи – северен елен", isCorrect: false },
            { id: 3, text: "ела – лос", isCorrect: false },
        ],
    },
    {
        text: "От европеидната раса НЕ са:",
        options: [
            { id: 0, text: "арабите", isCorrect: false },
            { id: 1, text: "ескимосите", isCorrect: true },
            { id: 2, text: "турците", isCorrect: false },
            { id: 3, text: "индийците", isCorrect: false },
        ],
    },
    {
        text: "Коя религия е широко разпространена в Европа, Австралия, Северна и Южна Америка?",
        options: [
            { id: 0, text: "ислямът", isCorrect: false },
            { id: 1, text: "юдаизмът", isCorrect: false },
            { id: 2, text: "будизмът", isCorrect: false },
            { id: 3, text: "християнството", isCorrect: true },
        ],
    },
    {
        text: "Кой извършва първото околосветско пътешествие?",
        options: [
            { id: 0, text: "Христофор Колумб", isCorrect: false },
            { id: 1, text: "Фернандо Магелан", isCorrect: true },
            { id: 2, text: "Васко да Гама", isCorrect: false },
            { id: 3, text: "Джеймс Кук", isCorrect: false },
        ],
    },
    {
        text: "Какви са последиците от въртенето на Земята около оста й?",
        options: [
            { id: 0, text: "Смяна на сезоните", isCorrect: false },
            { id: 2, text: "Изменение на климата", isCorrect: false },
            { id: 1, text: "Смяна на деня и нощта", isCorrect: true },
            { id: 3, text: "Гравитационни аномалии", isCorrect: false },
        ],
    },
    {
        text: "Какво е хидросфера?",
        options: [
            { id: 0, text: "Част от атмосферата", isCorrect: false },
            { id: 2, text: "Земната кора", isCorrect: false },
            { id: 3, text: "Вътрешният слой на Земята", isCorrect: false },
            { id: 1, text: "Водната обвивка на Земята", isCorrect: true },
        ],
    },
    {
        text: "Кое от изброените е климатичен елемент?",
        options: [
            { id: 0, text: "Температура", isCorrect: true },
            { id: 1, text: "Ландшафт", isCorrect: false },
            { id: 2, text: "Пустиня", isCorrect: false },
            { id: 3, text: "Континент", isCorrect: false },
        ],
    },
    {
        text: "За коя природна зона са характерни: високи температури, обилни дъждове, латеритни почви, палми, орхидеи, лиани, колибри, маймуни, слон, ягуар?",
        options: [
            { id: 0, text: "Тропични гори", isCorrect: true },
            { id: 1, text: "Пустиня", isCorrect: false },
            { id: 2, text: "Степ", isCorrect: false },
            { id: 3, text: "Тундра", isCorrect: false },
        ],
    },
    {
        text: "От каква раса е човек със следните външни белези: тъмна, твърда и къдрава коса; тъмни очи; широки ноздри; едри устни; тъмна кожа?",
        options: [
            { id: 2, text: "Негроидна", isCorrect: true },
            { id: 0, text: "Европеидна", isCorrect: false },
            { id: 1, text: "Монголоидна", isCorrect: false },

            { id: 3, text: "Австралоидна", isCorrect: false },
        ],
    },


    {
        text: "Коя е най-дългата река в Африка?",
        options: [
            { id: 0, text: "Конго", isCorrect: false },
            { id: 1, text: "Нигер", isCorrect: false },
            { id: 2, text: "Нил", isCorrect: true },
            { id: 3, text: "Замбези", isCorrect: false },
        ],
    },
    {
        text: "Най-голямата пустиня на Земята е:",
        options: [
            { id: 0, text: "Сахара, в Африка", isCorrect: true },
            { id: 1, text: "Гоби, в Азия", isCorrect: false },
            { id: 2, text: "Антарктическа пустиня", isCorrect: false },
            { id: 3, text: "Арабска пустиня", isCorrect: false },
        ],
    },
    {
        text: "Кои географски координати са на обект, разположен близо до Северния полюс и на изток от Гринуичкия меридиан?",
        options: [
            { id: 0, text: "23° с.г.ш.  90° з.г.д.", isCorrect: false },
            { id: 1, text: "88° с.г.ш.  66° и.г.д.", isCorrect: true },
            { id: 2, text: "5° ю.г.ш. 35° з.г.д.", isCorrect: false },
            { id: 3, text: "90° ю.г.ш. 179° и.г.д.", isCorrect: false },
        ],
    },
    {
        text: "В кой климатичен пояс се сменят екваториални и тропични въздушни маси?",
        options: [
            { id: 0, text: "Екваториален", isCorrect: false },
            { id: 2, text: "Тропичен", isCorrect: false },
            { id: 3, text: "Субтропичен", isCorrect: false },
            { id: 1, text: "Субекваториален", isCorrect: true },
        ],
    },
    {
        text: "Коя дума е пропусната в текста? Природните зони са ивици с различен териториален обхват, редуващи се на север и юг от Екватора, които почти съвпадат с климатичните пояси, а външният им облик се определя в най-голяма степен от:",
        options: [
            { id: 0, text: "Почвите", isCorrect: false },
            { id: 1, text: "Растителността", isCorrect: true },
            { id: 2, text: "Животинския свят", isCorrect: false },
            { id: 3, text: "Водите", isCorrect: false },
        ],
    },
    {
        text: "Отбележете вярнoтo твърдение:",
        options: [
            { id: 0, text: "Броят на населението в света продължава да расте – по-бързо в Африка и Азия и по-бавно в Европа.", isCorrect: true },
            { id: 1, text: "Градът е населено място, в което жителите му се занимават предимно с земеделска дейност.", isCorrect: false },
            { id: 2, text: "Типичен проблем за селата е пренаселеността, а за градовете – обезлюдяването.", isCorrect: false },
            { id: 3, text: "Средната гъстота на населението се изчислява, като се раздели площта на територията на броя на населението.", isCorrect: false },
        ],
    },

    {
        text: "Коя от особеностите на географското положение и границите НЕ е типична само за Африка?",
        options: [
            { id: 0, text: "Граничи с Атлантическия океан и Средиземно море", isCorrect: true },
            { id: 1, text: "Пресича се от Екватора и Гринуичкия меридиан", isCorrect: false },
            { id: 2, text: "Територията е в четирите полукълба", isCorrect: false },
            { id: 3, text: "Пресича се от двете тропични окръжности", isCorrect: false },
        ],
    },
    {
        text: "Коя релефна форма в Африка, разположена близо до Екватора, е с голяма надморска височина?",
        options: [
            { id: 0, text: "Областта Судан", isCorrect: false },
            { id: 1, text: "Заирска котловина", isCorrect: false },
            { id: 2, text: "Килиманджаро", isCorrect: true },
            { id: 3, text: "Сахара", isCorrect: false },
        ],
    },
    {
        text: "Ако сте геолог, къде бихте търсили полезни изкопаеми?",
        options: [
            { id: 0, text: "Диаманти – в Южна Африка", isCorrect: true },
            { id: 1, text: "Фосфорити – в Драконовите планини", isCorrect: false },
            { id: 2, text: "Нефт – в Килиманджаро", isCorrect: false },
            { id: 3, text: "Графит – в Гвинейския залив", isCorrect: false },
        ],
    },
    {
        text: "Кои постоянни ветрове в Африка, които се движат от тропиците към Екватора, са североизточни – сухи и югоизточни – влажни?",
        options: [
            { id: 1, text: "Мусони", isCorrect: false },
            { id: 2, text: "Циклони", isCorrect: false },
            { id: 3, text: "Урагани", isCorrect: false },
            { id: 0, text: "Пасати", isCorrect: true },
        ],
    },

];

export default questionsGeo;

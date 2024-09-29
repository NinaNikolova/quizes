const questionsMat = [
    {
        text: "Кое от числата 7/3, 7/4, 7/7 и 7/8 е най-голямо?",
        options: [
            { id: 0, text: "7/3", isCorrect: true },
            { id: 1, text: "7/4", isCorrect: false },
            { id: 2, text: "7/7", isCorrect: false },
            { id: 3, text: "7/8", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "Кое от числата 5,41; 5,041; 5,401 и 5,0401 е най-малко?",
        options: [
            { id: 0, text: "5,41", isCorrect: false },
            { id: 1, text: "5,041", isCorrect: false },
            { id: 2, text: "5,401", isCorrect: false },
            { id: 3, text: "5,0401", isCorrect: true },
        ], imageUrl: null
    },
    {
        text: "Една книга струва 30% от 240 лева. Колко струва книгата?",
        options: [
            { id: 0, text: "52 лев", isCorrect: false },
            { id: 1, text: "256 лева", isCorrect: false },
            { id: 2, text: "82 лева", isCorrect: false },
            { id: 3, text: "72 лева", isCorrect: true },
        ], imageUrl: null
    },
    {
        text: "Произведението 4/7 * 70 е равно на:",
        options: [
            { id: 0, text: "40", isCorrect: true },
            { id: 1, text: "4/5", isCorrect: false },
            { id: 2, text: "20", isCorrect: false },
            { id: 3, text: "35", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "Лицето на успоредник със страна 15 m и височина към нея 48 dm е:",
        options: [
            { id: 0, text: "720 кв.м", isCorrect: false },
            { id: 1, text: "72 кв.м", isCorrect: true },
            { id: 2, text: "36 кв.м", isCorrect: false },
            { id: 3, text: "7,2 кв.м", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "Ако x% от 48 е 9,6, x е равно на:",
        options: [
            { id: 0, text: "0,2", isCorrect: false },
            { id: 1, text: "2", isCorrect: false },
            { id: 2, text: "20", isCorrect: true },
            { id: 3, text: "200", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "В една кошница има няколко яйца. Ако 0,4 от тях са 4 броя, то яйцата в кошницата са?",
        options: [
            { id: 0, text: "25", isCorrect: false },
            { id: 1, text: "0,4", isCorrect: false },
            { id: 2, text: "3,24", isCorrect: false },
            { id: 3, text: "10", isCorrect: true },
        ], imageUrl: null
    },
    {
        text: "На 2, на 3 и на 5 се дели числото:",
        options: [
            { id: 0, text: "37400", isCorrect: false },
            { id: 1, text: "3452", isCorrect: false },
            { id: 2, text: "12398", isCorrect: false },
            { id: 3, text: "26070", isCorrect: true },
        ], imageUrl: null
    },
    {
        text: "Една от страните на триъгълник с лице 24% по–малко от 120 квадратни сантиметра е 6 см. Височината на триъгълника към тази страна е:",
        options: [
            { id: 0, text: "9 cm", isCorrect: false },
            { id: 1, text: "30,4 cm", isCorrect: true },
            { id: 2, text: "15,6 cm", isCorrect: false },
            { id: 3, text: "23,6 cm", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "Петцифреното число 24*25 се дели на 3, ако цифрата, скрита под *, е:",
        options: [
            { id: 0, text: "0", isCorrect: false },
            { id: 1, text: "3", isCorrect: false },
            { id: 2, text: "4", isCorrect: false },
            { id: 3, text: "5", isCorrect: true },
        ], imageUrl: null
    },
    {
        text: "Лицето на правоъгълен триъгълник е 18 кв.см. Ако един от катетите му е 9 см, то вторият катет е:",
        options: [
            { id: 0, text: "3 см", isCorrect: false },
            { id: 1, text: "4 см", isCorrect: true },
            { id: 2, text: "6 см", isCorrect: false },
            { id: 3, text: "друг отговор", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "Милена си купува блузка с цена от 80 лева. Като редовна клиентка на магазина ѝ правят отстъпка от 20%. Колко струва блузката след намалението?",
        options: [
            { id: 0, text: "94 лева", isCorrect: false },
            { id: 1, text: "56 лева", isCorrect: false },
            { id: 2, text: "64 лева", isCorrect: true },
            { id: 3, text: "друг отговор", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "Цял куб се боядисва с 6 туби боя, всяка от които покрива 2,25 квадратни дециметра. Намерете ръба на куба в дециметри.",
        options: [
            { id: 0, text: "15 дм", isCorrect: false },
            { id: 1, text: "1,5 дм", isCorrect: true },
            { id: 2, text: "2,5 дм", isCorrect: false },
            { id: 3, text: "25 дм", isCorrect: false },
        ], imageUrl: null
    },
    {
        text: "Ако успоредник със страна 8 см и височина към нея 3 см и триъгълник с основа 5 см имат равни лица, то височината към основата на триъгълника е:",
        options: [
            { id: 0, text: "12.6 cm", isCorrect: false },
            { id: 1, text: "8.5 cm", isCorrect: false },
            { id: 2, text: "9.6 cm", isCorrect: true },
            { id: 3, text: "друг отговор", isCorrect: false },
        ], imageUrl: null
    }
];

export default questionsMat;

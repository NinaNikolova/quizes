export const calculateGrade = (percentage) => {
    if (percentage >= 90) {
        return "Отличен(6) 🚀🥳👏";
    } else if (percentage >= 75) {
        return "Много добър(5) 👏";
    } else if (percentage >= 60) {
        return "Добър(4) 👌";
    } else if (percentage >= 45) {
        return "Среден(3) 👀";
    } else {
        return "Слаб(2)🙁";
    }
};
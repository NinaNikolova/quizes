import { handleUserWin2, handleUserWin3, handleUserWin4, handleUserWin5, handleUserWin6 } from '../utils/sounds'
export const calculateGrade = (percentage) => {
    if (percentage >= 90) {
        handleUserWin6();
        return "Отличен(6) 🚀🥳👏";
    } else if (percentage >= 75) {
        handleUserWin5();
        return "Много добър(5) 👏";
    } else if (percentage >= 60) {
        handleUserWin4();
        return "Добър(4) 👌";
    } else if (percentage >= 45) {
        handleUserWin3();
        return "Среден(3) 👀";
    } else {
        handleUserWin2();
        return "Слаб(2)🙁";
    }
};
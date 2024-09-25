import da from "../sounds/da.m4a";
import ne from "../sounds/ne.m4a";
import win from "../sounds/win1.mp3";
import two from "../sounds/two.m4a";
import three from "../sounds/three.m4a";
import four from "../sounds/four.m4a";
import five from "../sounds/five.m4a";
import six from "../sounds/six.m4a";



export const handleUserInteractionDa = () => {
    const audio = new Audio(da);
    audio.volume = 0.3;
    audio.play().catch((error) => {
        console.log('Playback prevented: ', error);
    });
};
export const handleUserInteractionNe = () => {
    const audio = new Audio(ne);
    audio.volume = 0.3;
    audio.play().catch((error) => {
        console.log('Playback prevented: ', error);
    });
};

export const handleUserWin = () => {
    const audio = new Audio(win);
    audio.volume = 0.2;
    audio.play().catch((error) => {
        console.log('Playback prevented: ', error);
    });

};
export const handleUserWin2 = () => {
    const audio = new Audio(two);
    audio.volume = 0.2;
    audio.play().catch((error) => {
        console.log('Playback prevented: ', error);
    });

};
export const handleUserWin3 = () => {
    const audio = new Audio(three);
    audio.volume = 0.2;
    audio.play().catch((error) => {
        console.log('Playback prevented: ', error);
    });

};
export const handleUserWin4 = () => {
    const audio = new Audio(four);
    audio.volume = 0.2;
    audio.play().catch((error) => {
        console.log('Playback prevented: ', error);
    });

};
export const handleUserWin5 = () => {
    const audio = new Audio(five);
    audio.volume = 0.2;
    audio.play().catch((error) => {
        console.log('Playback prevented: ', error);
    });

};
export const handleUserWin6 = () => {
    const audio = new Audio(six);
    audio.volume = 0.2;
    audio.play().catch((error) => {
        console.log('Playback prevented: ', error);
    });

};
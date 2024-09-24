import da from "../da.m4a";
import ne from "../ne.m4a";
import win from "../win.mp3";

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
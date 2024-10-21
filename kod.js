/* edited version of custom skin link from bkc, updated to fix muzzle img */
const customSkinLink = "https://raw.githubusercontent.com/SheriffCarry/KirkaSkins/refs/heads/main/Characters/Kod-texture.png";

/* DONT CHANGE ANYTHING BELOW */

const oldIsArr = Array.isArray;

const muzzleImg = "https://kirka.io/assets/img/__shooting-fire__.effa20af.png";

Array.isArray = (...args) => {

    if (args[0] && args[0].map && args[0].map.image) {
        if (args[0].map.image.width === 64 && args[0].map.image.height === 64 && args[0].map.image.src !== muzzleImg) {
            if (customSkinLink !== '') args[0].map.image.src = customSkinLink;
        }
    }

    return oldIsArr(...args);
}

"use strict";
function isFish(animal) {
    if (typeof animal.swim) {
        return true;
    }
    return false;
}
window.foo = 1;
function getMouse(key) {
    return window.key;
}
const mouse = getMouse("mouse");
mouse.run();
function getRuler(key) {
    return window.key;
}
const ruler = getRuler("ruler");

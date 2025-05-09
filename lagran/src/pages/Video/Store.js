import { createStore, createEvent } from "effector";


export const SetActiveDVR = createEvent();
export const $ActiveTabDVR = createStore('features')
    .on(SetActiveDVR, (_, tab) => tab)


export const SetActiveCam = createEvent();
export const $ActiveTabCam = createStore('features')
    .on(SetActiveCam, (_, tab) => tab)

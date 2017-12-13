export interface TimerStore {
    currentTime:Date;
}

export const initialTimerStore:TimerStore = {
    currentTime: new Date()
};
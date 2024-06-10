import {getSessionStorage, setSessionStorage} from "lkt-session";


const getSessionKey = (uniqueId: string) => {
    return `lkt-tabs.${window.location.host}${window.location.pathname}.${uniqueId}`;
}

export const loadSelectedTabFromSession = (uniqueId: string) => {
    return getSessionStorage(getSessionKey(uniqueId));
}

export const setSelectedTabFromSession = (uniqueId: string, value: string, lifeTime: number): void => {
    setSessionStorage(getSessionKey(uniqueId), value, lifeTime * 60);
}
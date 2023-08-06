import { atom } from 'recoil';

export const loadState = atom({
  key: "loadState",
  default: false
})

export const showSearchPopup = atom({
  key: "showSearchPopup",
  default: false
})

export const showMemberPopup = atom({
  key: "showMemberPopup",
  default: false
})

type CallbackFunction = (result: object) => void;

export const getState = atom({
  key: "getState",
  default: {
    targetUrl: "",
    queryParams: {},
    callback: undefined as CallbackFunction | undefined
  }
})
import { atom, selector } from 'recoil';

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
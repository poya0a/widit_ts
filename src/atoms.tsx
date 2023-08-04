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

export const boxOfficeDailyData = atom({
  key: "boxOfficeDailyData",
  default: {}
})

export const boxOfficeWeeklyData = atom({
  key: "boxOfficeWeeklyData",
  default: {}
})
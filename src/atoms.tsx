import { atom, RecoilState } from "recoil";

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, "0");
const day = String(currentDate.getDate() - 1).padStart(2, "0");
const todayDateString = year + month + day;

const newDate = new Date();
const currentDay = newDate.getDay();
let targetDay = currentDay;
while (targetDay !== 6 && targetDay !== 0) {
  newDate.setDate(newDate.getDate() - 1);
  targetDay = newDate.getDay();
}
const weekendYear = newDate.getFullYear();
const weekendMonth = String(newDate.getMonth() + 1).padStart(2, "0");
const weekendDay = String(newDate.getDate()).padStart(2, "0");
const lastWeekendDateString = weekendYear + weekendMonth + weekendDay;

export const todayState: RecoilState<string> = atom({
  key: "todayState",
  default: todayDateString,
});

export const weekendState: RecoilState<string> = atom({
  key: "weekendState",
  default: lastWeekendDateString,
});

export const loginState: RecoilState<boolean> = atom({
  key: "loginState",
  default: false,
});

export const loadState: RecoilState<boolean> = atom({
  key: "loadState",
  default: false,
});

export const showSearchPopup: RecoilState<boolean> = atom({
  key: "showSearchPopup",
  default: false,
});

export interface MemberPopup {
  openPopup: boolean;
  joinPopup: boolean;
  loginPopup: boolean;
}

export const showMemberPopup: RecoilState<MemberPopup> = atom<MemberPopup>({
  key: "showMemberPopup",
  default: {
    openPopup: false,
    joinPopup: false,
    loginPopup: false,
  },
});

export interface AlertPopup {
  openPopup: boolean;
  message: string;
}

export const showAlertPopup: RecoilState<AlertPopup> = atom<AlertPopup>({
  key: "showAlertPopup",
  default: {
    openPopup: false,
    message: "",
  },
});

export interface BoxOfficeData {
  boxOfficeResult: {
    boxofficeType: string;
    dailyBoxOfficeList?: {
      audiAcc: string;
      audiChange: string;
      audiCnt: string;
      audiInten: string;
      movieCd: string;
      movieNm: string;
      openDt: string;
      rank: string;
      rankInten: string;
      rankOldAndNew: string;
      rnum: string;
      salesAcc: string;
      salesAmt: string;
      salesChange: string;
      salesInten: string;
      salesShare: string;
      scrnCnt: string;
      showCnt: string;
    }[];
    weeklyBoxOfficeList?: {
      audiAcc: string;
      audiChange: string;
      audiCnt: string;
      audiInten: string;
      movieCd: string;
      movieNm: string;
      openDt: string;
      rank: string;
      rankInten: string;
      rankOldAndNew: string;
      rnum: string;
      salesAcc: string;
      salesAmt: string;
      salesChange: string;
      salesInten: string;
      salesShare: string;
      scrnCnt: string;
      showCnt: string;
    }[];
    showRange: string;
  };
}

export const boxOfficeDailyData: RecoilState<BoxOfficeData> =
  atom<BoxOfficeData>({
    key: "boxOfficeDailyData",
    default: {
      boxOfficeResult: {
        boxofficeType: "",
        dailyBoxOfficeList: [
          {
            audiAcc: "",
            audiChange: "",
            audiCnt: "",
            audiInten: "",
            movieCd: "",
            movieNm: "",
            openDt: "",
            rank: "",
            rankInten: "",
            rankOldAndNew: "",
            rnum: "",
            salesAcc: "",
            salesAmt: "",
            salesChange: "",
            salesInten: "",
            salesShare: "",
            scrnCnt: "",
            showCnt: "",
          },
        ],
        showRange: "",
      },
    },
  });

export const boxOfficeWeeklyData: RecoilState<BoxOfficeData> =
  atom<BoxOfficeData>({
    key: "boxOfficeWeeklyData",
    default: {
      boxOfficeResult: {
        boxofficeType: "",
        weeklyBoxOfficeList: [
          {
            audiAcc: "",
            audiChange: "",
            audiCnt: "",
            audiInten: "",
            movieCd: "",
            movieNm: "",
            openDt: "",
            rank: "",
            rankInten: "",
            rankOldAndNew: "",
            rnum: "",
            salesAcc: "",
            salesAmt: "",
            salesChange: "",
            salesInten: "",
            salesShare: "",
            scrnCnt: "",
            showCnt: "",
          },
        ],
        showRange: "",
      },
    },
  });

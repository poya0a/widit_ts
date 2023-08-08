import { atom, RecoilState } from 'recoil';

export const loadState: RecoilState<boolean> = atom({
  key: "loadState",
  default: false
});

export const showSearchPopup: RecoilState<boolean> = atom({
  key: "showSearchPopup",
  default: false
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
    loginPopup: false
  }
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

export const boxOfficeDailyData: RecoilState<BoxOfficeData> = atom<BoxOfficeData>({
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
          showCnt: ""
        },
      ],
      showRange: ""
    }
  }
});

export const boxOfficeWeeklyData: RecoilState<BoxOfficeData> = atom<BoxOfficeData>({
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
          showCnt: ""
        },
      ],
      showRange: ""
    }
  }
});



// type CallbackFunction = (result: object) => void;

// export const getState = atom({
//   key: "getState",
//   default: {
//     targetUrl: "",
//     queryParams: {},
//     callback: undefined as CallbackFunction | undefined
//   }
// })
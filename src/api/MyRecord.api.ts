import Recommend1Image from "../assets/images/MyRecommend-1.jpg";
import Recommend2Image from "../assets/images/MyRecommend-2.jpg"
import Recommend3Image from "../assets/images/MyRecommend-3.jpg"


export interface MyRecordProps {
  id: number;
  time: string;
  text: string;
  kcal: string;
}

export interface RecommendProps {
  id: number;
  imageUrl: string;
  text: string;
  textBody: string;
}


export interface RecordDiaryProps {
  id: number;
  content: string;
  date: string;
}

export const getMyRecordExercises = (): Promise<MyRecordProps[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          id: 1,
          time: "10 min",
          text: "家事全般（立位・軽い）",
          kcal: "26kcal",
        },
        {
          id: 2,
          time: "10 min",
          text: "家事全般（立位・軽い）",
          kcal: "26kcal",
        },
        {
          id: 3,
          time: "10 min",
          text: "家事全般（立位・軽い）",
          kcal: "26kcal",
        },
        {
          id: 4,
          time: "10 min",
          text: "家事全般（立位・軽い）",
          kcal: "26kcal",
        },
        {
          id: 5,
          time: "10 min",
          text: "家事全般（立位・軽い）",
          kcal: "26kcal",
        },
        {
          id: 6,
          time: "10 min",
          text: "家事全般（立位・軽い）",
          kcal: "26kcal",
        },
        {
          id: 7,
          time: "10 min",
          text: "家事全般（立位・軽い）",
          kcal: "26kcal",
        },
        {
          id: 8,
          time: "10 min",
          text: "家事全般（立位・軽い）",
          kcal: "26kcal",
        },
        {
          id: 9,
          time: "10 min",
          text: "家事全般（立位・軽い）",
          kcal: "26kcal",
        },
        {
          id: 10,
          time: "10 min",
          text: "家事全般（立位・軽い）",
          kcal: "26kcal",
        },
      ]);
    }, 0);
  });
};

export const getMyRecordDiary = (): Promise<RecordDiaryProps[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          id: 1,
          content: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
          date: "2021.05.21   23:25",
        },
        {
          id: 2,
          content: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
          date: "2021.05.21   23:25",
        },
        {
          id: 3,
          content: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
          date: "2021.05.21   23:25",
        },
        {
          id: 4,
          content: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
          date: "2021.05.21   23:25",
        },
        {
          id: 5,
          content: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
          date: "2021.05.21   23:25",
        },
        {
          id: 6,
          content: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
          date: "2021.05.21   23:25",
        },
        {
          id: 7,
          content: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
          date: "2021.05.21   23:25",
        },
        {
          id: 8,
          content: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
          date: "2021.05.21   23:25",
        }
      ]);
    }, 0);
  });
};

export const getMyRecommends = (): Promise<RecommendProps[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          id: 1,
          imageUrl: Recommend1Image,
          text: "自分のカラダの記録",
          textBody: "BODY RECORD",
        },
        {
          id: 2,
          imageUrl: Recommend2Image,
          text: "自分の運動の記録",
          textBody: "MY EXERCISE",
        },
        {
          id: 3,
          imageUrl: Recommend3Image,
          text: "自分の日記",
          textBody: "MY DIARY",
        },
      ]);
    }, 0);
  });
};



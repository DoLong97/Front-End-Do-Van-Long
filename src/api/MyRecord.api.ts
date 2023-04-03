export interface MyRecordProps {
  id: number;
  time: string;
  text: string;
  kcal: string;
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


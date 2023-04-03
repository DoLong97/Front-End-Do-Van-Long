
import M01Image from "../assets/images/m01.jpg";
import M02Image from "../assets/images/m02.jpg";
import M03Image from "../assets/images/m03.jpg";
import M04Image from "../assets/images/l01.jpg";
import M05Image from "../assets/images/l02.jpg";
import M06Image from "../assets/images/l03.jpg";
import M07Image from "../assets/images/d01.jpg";
import M08Image from "../assets/images/d02.jpg";


export interface TopPageProps {
  id: number;
  urlImage: string;
  date: string;
}

export const getTopPages = (): Promise<TopPageProps[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          id: 1,
          urlImage: M01Image,
          date: "05.21.Morning"
        },
        {
          id: 2,
          urlImage: M02Image,
          date: "05.21.Lunch"
        },
        {
          id: 3,
          urlImage: M03Image,
          date: "05.21.Dinner"
        },
        {
          id: 4,
          urlImage: M04Image,
          date: "05.21.Snack"
        },
        {
          id: 5,
          urlImage: M05Image,
          date: "05.20.Morning"
        },
        {
          id: 6,
          urlImage: M06Image,
          date: "05.20.Lunch"
        },
        {
          id: 7,
          urlImage: M07Image,
          date: "05.20.Dinner"
        },
        {
          id: 8,
          urlImage: M08Image,
          date: "05.20.Snack"
        },
      ]);
    }, 0);
  });
};

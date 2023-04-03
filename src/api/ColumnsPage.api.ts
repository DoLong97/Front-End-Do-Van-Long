import M01Image from "../assets/images/column-1.jpg";
import M02Image from "../assets/images/column-2.jpg";
import M03Image from "../assets/images/column-3.jpg";
import M04Image from "../assets/images/column-4.jpg";
import M05Image from "../assets/images/column-5.jpg";
import M06Image from "../assets/images/column-6.jpg";
import M07Image from "../assets/images/column-7.jpg";
import M08Image from "../assets/images/column-8.jpg";

export interface ColumnsPageProps {
  id: number;
  urlImage: string;
  title?: string;
  tag?: string;
  date: string;
}

export const getColumnsPages = (): Promise<ColumnsPageProps[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          id: 1,
          urlImage: M01Image,
          title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
          tag: "#魚料理  #和食  #DHA",
          date: "2021.05.17   23:25",
        },
        {
          id: 2,
          urlImage: M02Image,
          title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
          tag: "#魚料理  #和食  #DHA",
          date: "2021.05.17   23:25",
        },
        {
          id: 3,
          urlImage: M03Image,
          title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
          tag: "#魚料理  #和食  #DHA",
          date: "2021.05.17   23:25",
        },
        {
          id: 4,
          urlImage: M04Image,
          title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
          tag: "#魚料理  #和食  #DHA",
          date: "2021.05.17   23:25",
        },
        {
          id: 5,
          urlImage: M05Image,
          title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
          tag: "#魚料理  #和食  #DHA",
          date: "2021.05.17   23:25",
        },
        {
          id: 6,
          urlImage: M06Image,
          title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
          tag: "#魚料理  #和食  #DHA",
          date: "2021.05.17   23:25",
        },
        {
          id: 7,
          urlImage: M07Image,
          title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
          tag: "#魚料理  #和食  #DHA",
          date: "2021.05.17   23:25",
        },
        {
          id: 8,
          urlImage: M08Image,
          title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
          tag: "#魚料理  #和食  #DHA",
          date: "2021.05.17   23:25",
        },
      ]);
    }, 0);
  });
};

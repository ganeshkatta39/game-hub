import useData from "./useData";
import { Gener } from "./useGeners";

export interface Platform {
  id: string;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (selectGenre: Gener | null) =>
  useData<Game>("/games", { params: { genres: selectGenre?.id } }, [
    selectGenre?.id,
  ]);

export default useGames;

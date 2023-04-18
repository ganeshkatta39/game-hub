import geners from "../data/genres";

export interface Gener {
  id: number;
  name: string;
  image_background: string;
}

const useGeners = () => ({ data: geners, isLoading: false, error: null });

export default useGeners;

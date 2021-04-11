import { useState, useEffect } from "react";
import { handleFetchGif } from "../helpers/helpers";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: false,
  });

  useEffect(() => {
    const getGifs = async () => {
      setState(state => {
        return {data: state.data, loading: true}
      });
      const data = await handleFetchGif(category);
      setState(state => {
        return {
          loading: false,
          data
        }
      });
    };
    getGifs();
  }, [category]);

  return state;
};

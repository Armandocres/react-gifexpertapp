import { useState, useEffect } from "react";
import getGifs from "../helpers/getGifs";

const useFecthGifs = ( category ) => {

  const [state, setState] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    getGifs( category )
      .then( imgs => {
        setTimeout(() => {
          setState({
            data: imgs,
            loading: false
          });
        }, 1200)
      });
  }, [category]);

  return state;
};

export default useFecthGifs;
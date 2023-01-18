import { createStore  } from "redux";

import Rootreducer from "../Reducer/Main";

const Store =createStore(
     Rootreducer
)

export default Store;
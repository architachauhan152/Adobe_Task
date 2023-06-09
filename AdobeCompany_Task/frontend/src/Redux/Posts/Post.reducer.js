import { POST_GET_LOADING,POST_GET_SUCESS,POST_GET_ERROR } from "./Post.types";

let initialstate = {
  loading: false,
  error: false,
  PostData: [],
  msg:{}

};

export const PostReducer = (state = initialstate, {type, payload}) => {
  switch (type) {
    case POST_GET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case POST_GET_SUCESS: {
      // console.log(payload)
      return {
        ...state,
        loading: false,
        PostData:payload.Postdata
      };
    }
    case POST_GET_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }
    default:return state
  }
};

import axiosWithAuth from "../../endpoints/AxiosAuth";


export const carpetActions = {
  getCarpets: "GET_CARPETS",
  getSingleCarpet:"GET_SINGLE_CARPET",
};

export const getCarpetsActionCreater =()=>(dispatch)=>{
  axiosWithAuth()
  .get("/carpets/collectionscarpet/"+1)
  .then((res)=>{
    dispatch({
      type: carpetActions.getCarpets,
      payload: res.data
    });
  })
}

export const getSingleCarpetActionCreater =(name)=>(dispatch)=>{
  axiosWithAuth()
  .get("/carpets/download/"+name)
  .then((res)=>{
    dispatch({
      type: carpetActions.getSingleCarpet,
      payload: res.data
    });
  })
}
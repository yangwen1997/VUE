import service from './request'

export const post = (url,data) =>{
  return service({
    url:url,
    method:'post',
    data
  })
};

export const getPersonInfo = (url)=>{
  return service({
    url:url,
    method:'get',
  })
};

import axios from "axios";
// promise对象返回的数据是response.data
export default function ajax(url='',data={},type='GET'){
  return new Promise(function (resolve,reject){
    // 执行ajax请求
    let promise
    if(type==='GET'){
      // url参数
      let dataStr=''
      Object.keys(data).forEach(key=>{
        dataStr+=key+'='+data[key]+'&'
      })
      if (dataStr!==''){
        dataStr=dataStr.substring(0,dataStr.lastIndexOf('&'))
        url+='?'+dataStr
      }
    // 发送get请求
      promise=axios.get(url)
    }else {
      //post请求
      promise=axios.post(url,data)
    }
    // 执行成功或失败
    promise.then(response=>{
      resolve(response.data)  // 返回的是data
    })
      .catch(error=>{
        reject(error)
      })
  })
}

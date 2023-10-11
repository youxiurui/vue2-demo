import axios from 'axios'

export default function ajax(url,type='GET',data={}){
    return new Promise((resolve,reject)=>{
        let promise=void 0
        if(type==='GET'){
            promise=axios.get(url,{
                params:data
            })
        }else{
            promise=axios.post(url,data)
        }
        promise.then(res=>{
            resolve(res.data)
        }).catch(err=>{
            reject(err,'---')
        })
    })
}

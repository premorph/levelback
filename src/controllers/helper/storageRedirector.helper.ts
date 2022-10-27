import {Response} from "express";
import {EventService, ReserveService, UserService} from "../../services";

export async function  storageRedirector(res:Response,data:any):Promise<void>{
    const typeF= data.typeF
    let result
    if(typeF==='user'){
      result =   await new UserService().ChargeProfile(data,res)
    }
    if(typeF==='reserve'){
        result =   await new ReserveService().chargeReservePayMedia(data,res)
    }
    if(typeF==='event'){
        result =   await new EventService().ChargeEventPicture(data,res)
    }
    return result
}
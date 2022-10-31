import { EventService, ReserveService, UserService } from '../../services'

export async function storageRedirector(data: any): Promise<void> {
    const typeF = data.typeF
    let result
    if (typeF === 'user') {
        result = await new UserService().ChargeProfile(data)
    }
    if (typeF === 'reserve') {
        result = await new ReserveService().chargeReservePayMedia(data)
    }
    if (typeF === 'event') {
        result = await new EventService().ChargeEventPicture(data)
    }
    return result
}

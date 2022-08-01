import { CONNECTED } from './constants';


export function adminConnected(connected: any) {
    return {
        type: CONNECTED,
        data: connected
    }
}
namespace gcui {
    export enum EventType { }
    export interface IEvent {
        event: rawevent;
        des: control;//事件投递目标
    }
    export class rawevent {
        sender: control; //事件发送者
        type: EventType;//事件类型
        
    }
}
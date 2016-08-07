namespace gcui {
    export enum EventType { }
    export interface IEvent {
        sender: control; //事件发送者
        type: EventType;//事件类型
    }
}
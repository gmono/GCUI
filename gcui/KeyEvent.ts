namespace gcui {
    export enum EventType { KeyButtonPress=5, KeyButtonRelease=6 }
    export class KeyEvent implements IEvent {
        event: rawevent;
        des: control;//事件投递目标
    }
}
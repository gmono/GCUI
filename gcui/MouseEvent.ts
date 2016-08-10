namespace gcui {
    export enum EventType { MouseButtonPress=1, MouseButtonRelease=2, MouseMove=3, MouseRoll=4 }
    export class MouseEvent implements IEvent {
        event: rawevent;
        des: control;//事件投递目标
    }
}
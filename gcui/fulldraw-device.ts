namespace gcui {
    //默认的绘图设备 基于canvas
    //绘图设备可以有多个 这取决于 surface如何使用它
    export class FulldrawDevice implements IPaintDevice{
        size: size;
        constructor(size: size) {
            this.size = size;
        }
    }
}
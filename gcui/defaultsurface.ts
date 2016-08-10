
namespace gcui {
    ///此类为默认图形基础类 用于划定一块地方用于显示 其保存画布的大小
    //
    export class defaultsurface implements ISurface {
        size: size;//画布本身的高和宽
        dev: IPaintDevice;
        constructor() {
            
        }
        setsize(dsize: size) {
            this.size = dsize;
            this.dev.setsize(dsize);
        }
        //以下为默认surface专有函数
        setdevice(dev: IPaintDevice) {
            this.size = dev.size;
        }
        drawline() {
        }
        drawpoint() {
        }
        drawrect(r: rect) {
        }
        drawtext(pos: position, str: string, col: color) {
            this.dev.drawtext(pos, str, col);
        }
        drawoval(pos: position, r: number) {
        }
        drawround() {
        }
        beginpath() {
        }
        endpath() {
        }
        move() {
        }
        lineto(x: number, y: number) {
        }
        twobsto(cpx: number, cpy: number, x: number, y: number) {
        }//画二次贝塞尔曲线
        thsbsto(cpx1: number, cpy1: number, cpx2: number, cpy2: number, x: number, y: number) {
        }//画三次贝塞尔曲线
        drawpolygon(poses: Array<position>) {
        } //绘制多边形 poses是连续的点集
        getdevice(): IPaintDevice {
            return this.dev;
        }//获得device
    }
}
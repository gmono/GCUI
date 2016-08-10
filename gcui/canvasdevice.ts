namespace gcui {
    //默认的绘图设备 基于canvas
    //绘图设备可以有多个 这取决于 surface如何使用它
    export class CanvasdrawDevice extends HTMLCanvasElement implements IPaintDevice{
        size: size;
        canvas: CanvasRenderingContext2D;
        constructor() {
            super();
            this.canvas =this.getContext("2d");
            if (this.canvas == null) throw new DOMException();
        }

        setsize(dsize: size) {
            this.size = dsize;
            this.height = dsize.height;
            this.width = dsize.width;
            //下面应该还要重绘和重新设置 canvas状态的操作
        }//设置设备的size属性
        drawline(pos1: position, pos2: position, col: color) {
            this.canvas.strokeStyle = col.tostring();
            this.canvas.beginPath();
            this.canvas.moveTo(pos1.x, pos1.y);
            this.canvas.lineTo(pos2.x, pos2.y);
            this.canvas.stroke();
        }
        drawtext(pos: position, text: string, col: color) {
            this.canvas.fillStyle = col.tostring();
            this.canvas.fillText(text, pos.x, pos.y);
            
        }
        drawpoint() {
        }
        drawrect(r: rect) {
        }
        drawoval(pos: position, r: number) {
        }
        drawround() {
        }
        drawpolygon(poses: Array<position>) {
        } //绘制多边形 poses是连续的点集
        draw_twocurve(poses: Array<twobsposes>) {
        }//绘制二次贝塞尔曲线
        draw_thcurve(poses: Array<thsbsposes>) {
        }//绘制三次贝塞尔曲线
        drawpath(data: Array<any>) {
        }//可以是position twobs和thsbs

        seteventcbk(fun: Function) {
        }//设置事件回调 回调格式 function(eventcbk:rawevent):void
    }
}
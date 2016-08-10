namespace gcui {
    //paintdevice是绘图的基础 提供基本的绘图函数
    export interface IPaintDevice {
        size: size;
        setsize(dsize: size);//设置设备的size属性
        drawline(pos1: position, pos2: position,col:color);
        drawpoint(pos: position,col:color);
        drawrect(r: rect);
        drawoval(pos: position, r: number);
        drawround();
        drawpolygon(poses: Array<position>); //绘制多边形 poses是连续的点集
        draw_twocurve(poses: Array<twobsposes>);//绘制二次贝塞尔曲线
        draw_thcurve(poses: Array<thsbsposes>);//绘制三次贝塞尔曲线
        drawpath(data: Array<any>);//可以是position twobs和thsbs
        drawtext(pos: position, text:string,col:color);
        seteventcbk(fun: Function);//设置事件回调 回调格式 function(eventcbk:rawevent):void
    }
}
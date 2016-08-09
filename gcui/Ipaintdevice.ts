namespace gcui {
    //paintdevice是绘图的基础 提供基本的绘图函数
    export interface IPaintDevice {
        setsize(dsize: size);//设置设备的size属性
        drawline();
        drawpoint();
        drawrect(r: rect);
        drawoval(pos: position, r: number);
        drawround();
        drawpolygon(poses: Array<position>); //绘制多边形 poses是连续的点集
        draw_twocurve(poses: Array<twobsposes>);//绘制二次贝塞尔曲线
        draw_thcurve(poses: Array<thsbsposes>);//绘制三次贝塞尔曲线
        drawpath(data:Array<any>);//可以是position twobs和thsbs
    }
}
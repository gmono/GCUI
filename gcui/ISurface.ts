namespace gcui {
    //surface是画布基础类 用于提供一块区域用于绘制
    //至于如何绘制是实现这个接口的类的事情
    export interface ISurface {
        size: size;
        setsize(dsize: size);//设置设备的size属性
        drawline(pos1: position, pos2: position);
        drawpoint(pos: position);
        drawrect(r: rect);
        drawoval(pos: position, r: number);
        drawtext(pos: position, str: string,col:color);
        drawround();
        beginpath();//开始画
        endpath();//结束任意画
        lineto(x: number, y: number);//画线
        move(x: number, y: number);//移动画笔到一个地方
        twobsto(cpx:number,cpy:number,x:number,y:number);//画二次贝塞尔曲线
        thsbsto(cpx1: number, cpy1: number, cpx2: number, cpy2: number, x: number, y: number);//画三次贝塞尔曲线
        drawpolygon(poses: Array<position>); //绘制多边形 poses是连续的点集
        getdevice(): IPaintDevice;//获得device
    }
}
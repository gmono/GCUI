/// <reference path="control.ts" />

namespace gcui {
    //frame是最高层控件 也是事件泵
    //这是基于canvas的frame
    //
    class frame extends control {
        context: CanvasRenderingContext2D
        fsurface: ISurface;
        constructor(cxt: HTMLCanvasElement) {
            super(new FulldrawDevice(new size(cxt.height, cxt.width)));
            this.context = cxt.getContext("2d");
            if (this.context == null) throw new DOMException();
        }

    }
}
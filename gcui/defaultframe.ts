/// <reference path="control.ts" />

namespace gcui {
    //frame是最高层控件 也是事件泵
    //这是基于canvas的frame
    //只接受默认surface
    export class defaultframe extends control {
        fsurface: ISurface;
        constructor(sur: defaultsurface) {
            super();
        }
        draw() {
        }
        eventactive(event: IEvent) {
        }
        throwevent(event: IEvent) {
        }
    }
}
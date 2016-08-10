namespace gcui.defaultconts {
    export abstract class defcontrol extends gcui.control {
        d: CanvasdrawDevice;
        constructor() {
            super();
            var s = new defaultsurface();
            var dev = new CanvasdrawDevice();
            this.d = dev;
            s.setdevice(dev);
            s.setsize(new size(100, 100));//测试代码
        }
        public join(div: HTMLDivElement) {
            div.appendChild(this.d);
        }
        
    }
}
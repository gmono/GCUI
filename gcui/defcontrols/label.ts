namespace gcui.defaultconts {
    export class label<T> extends defcontrol {
        text: string;
        constructor() {
            super();
            this.text = "label";
        }
        draw() {
            var p = new position();
            p.x = 0;
            p.y = 0;

            this.surface.drawtext(p,"测试文本",new color());
        }
        eventactive(ev: gcui.IEvent) {
        }
    }
}
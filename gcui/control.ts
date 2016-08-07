namespace gcui {

    export abstract class control{
        controls: Array<control>; //子控件栈
        poses: Array<position>;//子控件坐标栈 和上面的那个同步
        parent: control;//父控件
        size: size;//控件的尺寸 和画布的尺寸一样 方便访问

        surface: ISurface;//此控件的画布
        constructor(surface: ISurface) {
            this.controls = new Array<control>();
            this.size = surface.size;//方便访问
            this.surface = surface;
        }
        public addcontrol(con: control) {
            if (control == undefined || control == null) {
                return;
            }
            //加入
            this.controls.push(con);
            con.setparent(this);
        }
        //私有的设置父控件的函数 当一个控件拥有或更改父控件 则此函数必须被调用
        private setparent(parent: control) {
            if (control == undefined || control == null) {
                return;
            }
            this.parent = parent;
        }
        //这是控件绘图函数 由上级调用 默认为空
        public abstract draw();
        //这是重绘函数 这个函数里会从自己开始调用下级控件的redraw
        public redraw() {
            this.draw();
            for (var i = this.controls.length - 1; i <= 0; i++) {
                var c = this.controls[i];
                c.redraw();
            }
        }
        //这是遮挡重绘函数 接收一个遮挡矩形 遮挡矩形的坐标系为此控件的坐标系
        //坐标系转换由此控件内部完成
        //子控件通过使用this调用父控件的getchildpos函数实现
        public blockdraw(block:rect) {
        }
        ///这是获取某堆叠位置的子控件在父控件坐标系中坐标的函数
        public getchildpos(conid:number): position{
        }
        //设置某堆叠位置的控件的坐标
        public setchildpos(conid:number) {
        }
        //从对象到堆叠id
        public getchildindex(con: control):number {
        }
        //从堆叠id到对象 比如可以通过0 得到最上层的控件
        public getchildofindex(index: number):control {
        }
        //以下为控件堆叠位置修改函数
        //注意 子控件采用栈式存储 所有索引从小到大 即对的上顺序从上到下
        //子控件位置交换函数
        public swap(one: number, two: number) {
        }
        //激活某个控件
        public active(con: control) {
        }
        //激活处于某个位置的控件
        public activeofindex(con: number) {
        }
        
        //以下为事件上行函数 最终事件将到达frame frame 必须重写这个函数否则会出错
        public throwevent(event: IEvent) {
            this.parent.throwevent(event);
        }
        //以下为事件响应函数
        public abstract eventactive(event: IEvent);
    }
}
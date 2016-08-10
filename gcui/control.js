var gcui;
(function (gcui) {
    var control = (function () {
        function control() {
            this.controls = new Array();
        }
        control.prototype.setsurface = function (surface) {
            this.size = surface.size; //方便访问
            this.surface = surface;
        };
        control.prototype.addcontrol = function (con) {
            if (control == undefined || control == null) {
                return;
            }
            //加入
            this.controls.push(con);
            con.setparent(this);
        };
        //私有的设置父控件的函数 当一个控件拥有或更改父控件 则此函数必须被调用
        control.prototype.setparent = function (parent) {
            if (control == undefined || control == null) {
                return;
            }
            this.parent = parent;
        };
        //这是重绘函数 这个函数里会从自己开始调用下级控件的redraw
        control.prototype.redraw = function () {
            this.draw();
            for (var i = this.controls.length - 1; i <= 0; i++) {
                var c = this.controls[i];
                c.redraw();
            }
        };
        //这是遮挡重绘函数 接收一个遮挡矩形 遮挡矩形的坐标系为此控件的坐标系
        //坐标系转换由此控件内部完成
        //子控件通过使用this调用父控件的getchildpos函数实现
        //此函数为可选实现函数
        control.prototype.blockdraw = function (block) {
        };
        ///这是获取某堆叠位置的子控件在父控件坐标系中坐标的函数
        control.prototype.getchildpos = function (conid) {
            return null;
        };
        //设置某堆叠位置的控件的坐标
        control.prototype.setchildpos = function (conid) {
        };
        //从对象到堆叠id
        control.prototype.getchildindex = function (con) {
            return null;
        };
        //从堆叠id到对象 比如可以通过0 得到最上层的控件
        control.prototype.getchildofindex = function (index) {
            return null;
        };
        //以下为控件堆叠位置修改函数
        //注意 子控件采用栈式存储 所有索引从小到大 即对的上顺序从上到下
        //子控件位置交换函数
        control.prototype.swap = function (one, two) {
        };
        //激活某个控件
        control.prototype.active = function (con) {
        };
        //激活处于某个位置的控件
        control.prototype.activeofindex = function (con) {
        };
        //以下为事件上行函数 最终事件将到达frame frame 必须重写这个函数否则会出错
        control.prototype.throwevent = function (event) {
            this.parent.throwevent(event);
        };
        return control;
    }());
    gcui.control = control;
})(gcui || (gcui = {}));
//# sourceMappingURL=control.js.map
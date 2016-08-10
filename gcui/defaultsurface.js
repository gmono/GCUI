var gcui;
(function (gcui) {
    ///此类为默认图形基础类 用于划定一块地方用于显示 其保存画布的大小
    //
    var defaultsurface = (function () {
        function defaultsurface() {
        }
        defaultsurface.prototype.setsize = function (dsize) {
            this.size = dsize;
            this.dev.setsize(dsize);
        };
        //以下为默认surface专有函数
        defaultsurface.prototype.setdevice = function (dev) {
            this.size = dev.size;
        };
        defaultsurface.prototype.drawline = function () {
        };
        defaultsurface.prototype.drawpoint = function () {
        };
        defaultsurface.prototype.drawrect = function (r) {
        };
        defaultsurface.prototype.drawtext = function (pos, str, col) {
            this.dev.drawtext(pos, str, col);
        };
        defaultsurface.prototype.drawoval = function (pos, r) {
        };
        defaultsurface.prototype.drawround = function () {
        };
        defaultsurface.prototype.beginpath = function () {
        };
        defaultsurface.prototype.endpath = function () {
        };
        defaultsurface.prototype.move = function () {
        };
        defaultsurface.prototype.lineto = function (x, y) {
        };
        defaultsurface.prototype.twobsto = function (cpx, cpy, x, y) {
        }; //画二次贝塞尔曲线
        defaultsurface.prototype.thsbsto = function (cpx1, cpy1, cpx2, cpy2, x, y) {
        }; //画三次贝塞尔曲线
        defaultsurface.prototype.drawpolygon = function (poses) {
        }; //绘制多边形 poses是连续的点集
        defaultsurface.prototype.getdevice = function () {
            return this.dev;
        }; //获得device
        return defaultsurface;
    }());
    gcui.defaultsurface = defaultsurface;
})(gcui || (gcui = {}));
//# sourceMappingURL=defaultsurface.js.map
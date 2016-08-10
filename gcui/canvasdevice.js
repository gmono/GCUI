var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var gcui;
(function (gcui) {
    //默认的绘图设备 基于canvas
    //绘图设备可以有多个 这取决于 surface如何使用它
    var CanvasdrawDevice = (function (_super) {
        __extends(CanvasdrawDevice, _super);
        function CanvasdrawDevice() {
            _super.call(this);
            this.canvas = this.getContext("2d");
            if (this.canvas == null)
                throw new DOMException();
        }
        CanvasdrawDevice.prototype.setsize = function (dsize) {
            this.size = dsize;
            this.height = dsize.height;
            this.width = dsize.width;
            //下面应该还要重绘和重新设置 canvas状态的操作
        }; //设置设备的size属性
        CanvasdrawDevice.prototype.drawline = function (pos1, pos2, col) {
            this.canvas.strokeStyle = col.tostring();
            this.canvas.beginPath();
            this.canvas.moveTo(pos1.x, pos1.y);
            this.canvas.lineTo(pos2.x, pos2.y);
            this.canvas.stroke();
        };
        CanvasdrawDevice.prototype.drawtext = function (pos, text, col) {
            this.canvas.fillStyle = col.tostring();
            this.canvas.fillText(text, pos.x, pos.y);
        };
        CanvasdrawDevice.prototype.drawpoint = function () {
        };
        CanvasdrawDevice.prototype.drawrect = function (r) {
        };
        CanvasdrawDevice.prototype.drawoval = function (pos, r) {
        };
        CanvasdrawDevice.prototype.drawround = function () {
        };
        CanvasdrawDevice.prototype.drawpolygon = function (poses) {
        }; //绘制多边形 poses是连续的点集
        CanvasdrawDevice.prototype.draw_twocurve = function (poses) {
        }; //绘制二次贝塞尔曲线
        CanvasdrawDevice.prototype.draw_thcurve = function (poses) {
        }; //绘制三次贝塞尔曲线
        CanvasdrawDevice.prototype.drawpath = function (data) {
        }; //可以是position twobs和thsbs
        CanvasdrawDevice.prototype.seteventcbk = function (fun) {
        }; //设置事件回调 回调格式 function(eventcbk:rawevent):void
        return CanvasdrawDevice;
    }(HTMLCanvasElement));
    gcui.CanvasdrawDevice = CanvasdrawDevice;
})(gcui || (gcui = {}));
//# sourceMappingURL=canvasdevice.js.map
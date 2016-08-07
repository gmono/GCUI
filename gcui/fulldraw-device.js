var gcui;
(function (gcui) {
    //默认的绘图设备 基于canvas
    //绘图设备可以有多个 这取决于 surface如何使用它
    var FulldrawDevice = (function () {
        function FulldrawDevice(size) {
            this.size = size;
        }
        return FulldrawDevice;
    }());
    gcui.FulldrawDevice = FulldrawDevice;
})(gcui || (gcui = {}));
//# sourceMappingURL=fulldraw-device.js.map
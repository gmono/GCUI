var gcui;
(function (gcui) {
    ///此类为默认图形基础类 用于划定一块地方用于显示 其保存画布的大小
    //
    var surface = (function () {
        function surface(size) {
            this.size = size;
        }
        return surface;
    }());
    gcui.surface = surface;
})(gcui || (gcui = {}));
//# sourceMappingURL=surface.js.map
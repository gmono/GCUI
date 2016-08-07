var gcui;
(function (gcui) {
    ///此类为默认图形基础类 用于划定一块地方用于显示 其保存画布的大小
    //
    var defaultsurface = (function () {
        function defaultsurface(size) {
            this.size = size;
        }
        return defaultsurface;
    }());
    gcui.defaultsurface = defaultsurface;
})(gcui || (gcui = {}));
//# sourceMappingURL=defaultsurface.js.map
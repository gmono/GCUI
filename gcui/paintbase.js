var gcui;
(function (gcui) {
    var color = (function () {
        function color() {
        }
        //以下是关于对#xxxxxxxx的转换函数
        color.prototype.fromstring = function (str) { };
        color.prototype.tostring = function () {
            return "#FFFFFFFF"; //暂时没有弄好
        };
        return color;
    }());
    gcui.color = color;
})(gcui || (gcui = {}));
//# sourceMappingURL=paintbase.js.map
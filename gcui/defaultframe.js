/// <reference path="control.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var gcui;
(function (gcui) {
    //frame是最高层控件 也是事件泵
    //这是基于canvas的frame
    //只接受默认surface
    var defaultframe = (function (_super) {
        __extends(defaultframe, _super);
        function defaultframe(sur) {
            _super.call(this);
        }
        defaultframe.prototype.draw = function () {
        };
        defaultframe.prototype.eventactive = function (event) {
        };
        defaultframe.prototype.throwevent = function (event) {
        };
        return defaultframe;
    }(gcui.control));
    gcui.defaultframe = defaultframe;
})(gcui || (gcui = {}));
//# sourceMappingURL=defaultframe.js.map
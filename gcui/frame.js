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
    //
    var frame = (function (_super) {
        __extends(frame, _super);
        function frame(cxt) {
            _super.call(this, new gcui.FulldrawDevice(new gcui.size(cxt.height, cxt.width)));
            this.context = cxt.getContext("2d");
            if (this.context == null)
                throw new DOMException();
        }
        return frame;
    }(gcui.control));
})(gcui || (gcui = {}));
//# sourceMappingURL=frame.js.map
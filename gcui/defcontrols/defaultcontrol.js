var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var gcui;
(function (gcui) {
    var defaultconts;
    (function (defaultconts) {
        var defcontrol = (function (_super) {
            __extends(defcontrol, _super);
            function defcontrol() {
                _super.call(this);
                var s = new gcui.defaultsurface();
                var dev = new gcui.CanvasdrawDevice();
                this.d = dev;
                s.setdevice(dev);
                s.setsize(new gcui.size(100, 100)); //测试代码
            }
            defcontrol.prototype.join = function (div) {
                div.appendChild(this.d);
            };
            return defcontrol;
        }(gcui.control));
        defaultconts.defcontrol = defcontrol;
    })(defaultconts = gcui.defaultconts || (gcui.defaultconts = {}));
})(gcui || (gcui = {}));
//# sourceMappingURL=defaultcontrol.js.map
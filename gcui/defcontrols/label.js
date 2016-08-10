var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var gcui;
(function (gcui) {
    var defaultconts;
    (function (defaultconts) {
        var label = (function (_super) {
            __extends(label, _super);
            function label() {
                _super.call(this);
                this.text = "label";
            }
            label.prototype.draw = function () {
                var p = new gcui.position();
                p.x = 0;
                p.y = 0;
                this.surface.drawtext(p, "测试文本", new gcui.color());
            };
            label.prototype.eventactive = function (ev) {
            };
            return label;
        }(defaultconts.defcontrol));
        defaultconts.label = label;
    })(defaultconts = gcui.defaultconts || (gcui.defaultconts = {}));
})(gcui || (gcui = {}));
//# sourceMappingURL=label.js.map
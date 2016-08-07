var gcui;
(function (gcui) {
    (function (EventType) {
        EventType[EventType["MouseButtonPress"] = 0] = "MouseButtonPress";
        EventType[EventType["MouseButtonRelease"] = 1] = "MouseButtonRelease";
        EventType[EventType["MouseMove"] = 2] = "MouseMove";
        EventType[EventType["MouseRoll"] = 3] = "MouseRoll";
    })(gcui.EventType || (gcui.EventType = {}));
    var EventType = gcui.EventType;
    var MouseEvent = (function () {
        function MouseEvent() {
        }
        return MouseEvent;
    }());
    gcui.MouseEvent = MouseEvent;
})(gcui || (gcui = {}));
//# sourceMappingURL=MouseEvent.js.map
var gcui;
(function (gcui) {
    (function (EventType) {
        EventType[EventType["MouseButtonPress"] = 1] = "MouseButtonPress";
        EventType[EventType["MouseButtonRelease"] = 2] = "MouseButtonRelease";
        EventType[EventType["MouseMove"] = 3] = "MouseMove";
        EventType[EventType["MouseRoll"] = 4] = "MouseRoll";
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
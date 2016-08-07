var gcui;
(function (gcui) {
    (function (EventType) {
        EventType[EventType["KeyButtonPress"] = 0] = "KeyButtonPress";
        EventType[EventType["KeyButtonRelease"] = 1] = "KeyButtonRelease";
    })(gcui.EventType || (gcui.EventType = {}));
    var EventType = gcui.EventType;
    var KeyEvent = (function () {
        function KeyEvent() {
        }
        return KeyEvent;
    }());
    gcui.KeyEvent = KeyEvent;
})(gcui || (gcui = {}));
//# sourceMappingURL=KeyEvent.js.map
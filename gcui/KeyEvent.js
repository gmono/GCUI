var gcui;
(function (gcui) {
    (function (EventType) {
        EventType[EventType["KeyButtonPress"] = 5] = "KeyButtonPress";
        EventType[EventType["KeyButtonRelease"] = 6] = "KeyButtonRelease";
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
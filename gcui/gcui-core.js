var gcui;
(function (gcui) {
    var root = (function () {
        function root(cxt) {
            this.context = cxt.getContext("2d");
            if (this.context == null)
                throw new DOMException();
        }
        return root;
    }());
})(gcui || (gcui = {}));
//# sourceMappingURL=gcui-core.js.map
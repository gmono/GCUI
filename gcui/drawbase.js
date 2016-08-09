var gcui;
(function (gcui) {
    var position = (function () {
        function position() {
        }
        return position;
    }());
    gcui.position = position;
    var size = (function () {
        function size(h, w) {
            this.height = h;
            this.width = w;
        }
        return size;
    }());
    gcui.size = size;
    //以下为矩形的不同形式 单向转换
    var rect = (function () {
        function rect() {
        }
        rect.prototype.torectx2 = function () {
            var ret = new rectx2();
            ret.lefttop = this.pos;
            var temp = new position();
            temp.x = this.pos.x + this.size.width;
            temp.y = this.pos.y + this.size.height;
            return ret;
        };
        return rect;
    }());
    gcui.rect = rect;
    var rectx2 = (function () {
        function rectx2() {
        }
        rectx2.prototype.torect = function () {
            var ret = new rect();
            ret.pos = this.lefttop;
            ret.size = new size(0, 0);
            ret.size.width = this.rightdown.x - this.lefttop.x;
            ret.size.height = this.rightdown.y - this.rightdown.y;
            return ret;
        };
        rectx2.prototype.torectx4 = function () {
            var ret = new rectx4();
            ret.lefttop = ret.leftdown = this.lefttop;
            ret.rightdown = ret.righttop = this.rightdown;
            ret.leftdown.y = this.rightdown.y;
            ret.righttop.y = this.lefttop.y;
            return ret;
        };
        return rectx2;
    }());
    gcui.rectx2 = rectx2;
    var rectx4 = (function () {
        function rectx4() {
        }
        rectx4.prototype.torectx2 = function () {
            var ret = new rectx2();
            ret.lefttop = this.lefttop;
            ret.rightdown = this.rightdown;
            return ret;
        };
        return rectx4;
    }());
    gcui.rectx4 = rectx4;
    var twobsposes = (function () {
        function twobsposes() {
        }
        return twobsposes;
    }());
    gcui.twobsposes = twobsposes;
    var thsbsposes = (function () {
        function thsbsposes() {
        }
        return thsbsposes;
    }());
    gcui.thsbsposes = thsbsposes;
})(gcui || (gcui = {}));
//# sourceMappingURL=drawbase.js.map
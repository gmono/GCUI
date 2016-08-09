namespace gcui {
    export class position {
        public x: number;
        public y: number;
    }
    export class size {
        constructor(h: number, w: number) {
            this.height = h;
            this.width = w;
        }
        public height: number;
        public width: number;
    }

    //以下为矩形的不同形式 单向转换
    export class rect {
        public pos: position;
        public size: size;
        public torectx2(): rectx2 {
            var ret = new rectx2();
            ret.lefttop = this.pos;
            var temp = new position();
            temp.x = this.pos.x + this.size.width;
            temp.y = this.pos.y + this.size.height;
            return ret;
        }
    }
    export class rectx2 {
        public lefttop: position;
        public rightdown: position;

        public torect(): rect {
            var ret = new rect();
            ret.pos = this.lefttop;
            ret.size = new size(0,0);
            ret.size.width = this.rightdown.x - this.lefttop.x;
            ret.size.height = this.rightdown.y - this.rightdown.y;
            return ret;
        }
        public torectx4(): rectx4 {
            var ret = new rectx4();
            ret.lefttop = ret.leftdown = this.lefttop;
            ret.rightdown = ret.righttop = this.rightdown;
            ret.leftdown.y = this.rightdown.y;
            ret.righttop.y = this.lefttop.y;
            return ret;
        }
    }
    export class rectx4 {
        public lefttop: position;
        public righttop: position;
        public leftdown: position;
        public rightdown: position;
        public torectx2(): rectx2 {
            var ret = new rectx2();
            ret.lefttop = this.lefttop;
            ret.rightdown = this.rightdown;
            return ret;
        }
    }
    export class twobsposes {
        cp: position;
        topos: position;
    }
    export class thsbsposes {
        cp1: position;
        cp2: position;
        topos: position;
    }
}
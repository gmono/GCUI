
namespace gcui {
    ///此类为默认图形基础类 用于划定一块地方用于显示 其保存画布的大小
    //
    export class defaultsurface implements ISurface {
        size: size;//画布本身的高和宽
        constructor(size: size) {
            this.size = size;
        }
    }
}
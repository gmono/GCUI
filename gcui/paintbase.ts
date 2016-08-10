namespace gcui {
    export class color {
        r: number;
        g: number;
        b: number;
        a: number;

        //以下是关于对#xxxxxxxx的转换函数
        fromstring(str: string) { }
        tostring(): string {
            return "#FFFFFFFF";//暂时没有弄好
        }
    }
}
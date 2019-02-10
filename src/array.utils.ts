
export class ArrayUtils {
    static remove(array: any[], value: any): any[]{
        return array.filter(v => v != value);
    }
}
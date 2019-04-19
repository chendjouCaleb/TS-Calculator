
export class ArrayUtils {
    static remove(array: any[], value: any): any[]{
        return array.filter(v => v != value);
    }


    static contains(array: any[], value: any): boolean {
        return array.filter(v => v === value).length > 0;
    }

    
}
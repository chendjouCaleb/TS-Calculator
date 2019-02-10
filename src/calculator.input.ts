import { Subject } from "rxjs";

export class CalculatorInput{
    onValueChange: Subject<string>;
    constructor(public input?: HTMLInputElement){
        if(!input){
            this.input = document.getElementById("calculator-input-field") as HTMLInputElement;
        }
        this.onValueChange = new Subject();
        this.input.addEventListener("keydown", event => {
            this.onValueChange.next(this.value() + event.key);
        })
        
    }

    selectionStart(): number{
        return this.input.selectionStart;
    }

    selectionEnd(){
        return this.input.selectionEnd;
    }

    select(){
        this.input.select();
    }

    setSelectionStart(position: number){
        this.input.setSelectionRange(position, position);
    }

    setSelection(start: number, end: number){
        this.input.setSelectionRange(start, end);
    }

    textBeforeSelection(): string{
        return this.input.value.substring(0, this.selectionStart());
    }

    textAfterSelection(): string{
        return this.input.value.substring(this.selectionEnd());
    }

    value(): string{
        return this.input.value;
    }

    setValue(value: any){
        this.input.value = value;
    }

    addText(value: any){
        this.input.value = this.input.value + value;
    }

    addTextAtPosition(value: any, position: number){
        
    }

    addTextAtCursorPosition(value: any){
        const initialSelectionStart =  this.selectionStart();
        this.setValue(this.textBeforeSelection() + value + this.textAfterSelection());

        this.input.select();
        this.setSelectionStart(initialSelectionStart + value.length);
        this.onValueChange.next(this.value());
    }

    addChangeEventListener(event: any){
        this.input.addEventListener("change", e => console.log("ee"));
    }
}
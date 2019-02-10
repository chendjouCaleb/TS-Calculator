export function addButtonDefaultStyle(button: HTMLElement){
    button.style.borderBottom = " 0px solid #f84444";
    button.style.transitionDuration = ".1s";
}

export function activeButton(button: HTMLElement){
    button.style.borderBottomWidth = "5px";
}

export function blurButton(button: HTMLElement){
    button.style.borderBottomWidth = "0px";
}
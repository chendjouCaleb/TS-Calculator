let store:ContextMenu[] = [];

export class ContextMenu{
    public isActive = false;
    constructor(public target: Element,public  menu: HTMLElement) {
        this.menu.style.display = "none";

        this.target.addEventListener("contextmenu", (e: MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            if(this.isActive){
                this.hide();
                this.show(e)
            }else {
                this.show(e);
            }

        });

        document.addEventListener("click", (e: MouseEvent) => {
            console.log("click")
            if(this.isActive){
               this.hide();
            }
        });
    }

    show(e: MouseEvent) {
        this.menu.style.display = "inline-block";

        let twidth = document.body.getBoundingClientRect().width;
        let width = this.menu.offsetWidth;

        let left = e.clientX;

        if(width + left > twidth){
            left -= width;
        }
        console.log(width)

        setTimeout(() => {
            this.menu.style.transform = "translateY(0)";
            this.menu.style.left = left + "px";
            this.menu.style.top = e.clientY - 17 + "px";
        }, 10);

        this.isActive = true;
    }

    hide() {
        this. isActive = false;
        this.menu.style.transform = "translateY(20)";
        this.menu.style.display = "none"
    }

}
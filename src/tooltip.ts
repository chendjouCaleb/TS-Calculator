export class Tooltip {
    title: string;
    tooltip: HTMLElement;
    public static bind(selector: string){
        document.querySelectorAll(selector).forEach(element => new Tooltip(<HTMLElement>element));
    }

    constructor(private element: HTMLElement) {
        this.title = this.element.getAttribute('title');
        this.element.addEventListener('mouseover', (e) => this.onMouseOver(e));
        this.element.addEventListener('mouseout', () => this.onMouseOut());

    }

    onMouseOver(e:MouseEvent) {
        console.log(e)
        this.tooltip = this.createTooltip();
        this.setStyle();

        let width = this.tooltip.offsetWidth;
        let height = this.tooltip.offsetHeight;

        let left = this.element.offsetWidth / 2 - width / 2 + this.element.getBoundingClientRect().left;
        let top = this.element.getBoundingClientRect().top - height - 15;

        this.tooltip.style.left = e.clientX + 10 + "px";
        this.tooltip.style.top = e.clientY + 80 + "px";


        this.tooltip.style.opacity = "1";
        this.tooltip.style.transform = "translateY(0)"
    }



    onMouseOut() {
        if(this.tooltip){
            document.body.removeChild(this.tooltip);
            this.tooltip = null;
        }
    }

    createTooltip() {
        let tooltip = document.createElement("div");
        tooltip.innerHTML = this.title;

        document.body.appendChild(tooltip);

        return tooltip;
    }

    setStyle(){
        this.tooltip.style.position = "absolute";
        this.tooltip.style.background = "#222";
        this.tooltip.style.padding = "3px 10px";
        this.tooltip.style.fontSize = "0.815em";
        this.tooltip.style.color = "#FFF";
        this.tooltip.style.borderRadius = "3px";
        this.tooltip.style.opacity = "0";
        this.tooltip.style.transform = "translateY(20px)";
        this.tooltip.style.transition = "transform .2s,  opacity .2s"
    }
}
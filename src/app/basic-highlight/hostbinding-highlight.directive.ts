import { Directive, OnInit, HostBinding, HostListener, Input } from '@angular/core'

@Directive({
    selector: '[appHostBindingHighlight]'
})
export class HostBindingHighlightDirective implements OnInit{

    @Input() defaultColor: string = 'transparent'
    @Input() highlightColor: string = 'grey'

    @HostBinding('style.backgroundColor') backgroundColor: string = this.highlightColor;
   

    constructor() {        
    }

    ngOnInit() {
        this.backgroundColor = this.defaultColor
    }
    
    @HostListener('mouseenter') mouseover(eventData: Event) {
        this.backgroundColor = this.highlightColor
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        this.backgroundColor = this.defaultColor
    }
}
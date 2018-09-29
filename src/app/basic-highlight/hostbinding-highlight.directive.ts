import { Directive, OnInit, HostBinding, HostListener, Input } from '@angular/core'

@Directive({
    selector: '[appHostBindingHighlight]'
})
export class HostBindingHighlightDirective implements OnInit{

    // custom property binding;
    @Input() defaultColor: string = 'transparent'
    @Input() highlightColor: string = 'grey'

    // we can assign an alias for the directive input property which can we directive's selector name
    // in this case we can wrap the directive in a [] like [appHostBindingHighlight] on the UI element 
    // and can directly assign the value of input property which we would have assigned to the input
    // property name within the []
    
    // @Input('appHostBindingHighlight') defaultColor: string = 'transparent'

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
import { Directive, ElementRef, OnInit, Renderer, Renderer2, HostListener } from '@angular/core'

@Directive({
    selector: '[appHostlistenerFontColor]'
})
export class HostListenerFontColorDirective implements OnInit{

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {        
    }

    ngOnInit() {        
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
    }
}
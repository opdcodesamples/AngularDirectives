import { Directive, ElementRef, OnInit } from '@angular/core'

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{
    // reference to the element to which the directive is placed on.
    constructor(private elementRef: ElementRef) {
        
    }

    ngOnInit() {
        // accesssing elements directly like this is not a very good practive thorugh
        // this is only for demo purpose.
        this.elementRef.nativeElement.style.backgroundColor = 'green'
    }
}
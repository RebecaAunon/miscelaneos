import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private el: ElementRef ) {
  console.log('Directiva llamada');
  }

@Input('appResaltado') nuevoColor: string;

@HostListener('mouseenter') mouseEntro() {
  //console.log(this.nuevoColor);
  this.resaltar( this.nuevoColor || 'yellow' );
  //this.el.nativeElement.style.backgroundColor = 'yellow';
}
@HostListener('mouseleave') mouseSalio() {
  this.resaltar( null );
 //this.el.nativeElement.style.backgroundColor = null;
}

private resaltar( color: string ) {
  this.el.nativeElement.style.backgroundColor = color;
  }

}

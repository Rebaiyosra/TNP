import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'star'
})
export class StarPipe implements PipeTransform {

  transform(prix:number): string{
    if(prix>70) return prix+'DTN ☆☆☆☆☆';
    else if(prix>35) return prix+'DTN ☆☆☆☆';
    else if(prix>20) return prix+'DTN ☆☆☆';
    else return prix+'DTN';
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'star'
})
export class StarPipe implements PipeTransform {

  transform(nom:string,qt:number): string {
    if(nom.length<30){
    return nom+' ☆☆☆☆☆';}
    else return nom;
  }

}

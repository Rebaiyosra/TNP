import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'art'
})
export class ArtPipe implements PipeTransform {

  transform(value:string, fallback:string) {
    let image :string;
    if(value){
      image= value;
    } else {
      image= fallback;
    }
    return image;
  }

}

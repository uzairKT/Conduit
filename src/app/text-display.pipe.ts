import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textDisplay'
})
export class TextDisplayPipe implements PipeTransform {

  transform(text: string | undefined , len :number): string {
    if (text != null  ){
      if(text.length>len){return text.substring(0, len-3)+'...';}
      else return text;
      }
    
    return '';
    
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capatailization'
})
export class CapatailizationPipe implements PipeTransform {

  transform(value:string, ...args: any): any {
    let firstCharacter:string = value.substring(0,1);
    let allotherCharacters:string =value.substring(1,value.length);

    let newValue:string=firstCharacter.toUpperCase()+allotherCharacters.toLowerCase();
    return newValue;
  }

}

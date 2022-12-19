import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cnpjMask'
})
export class CnpjMaskPipe implements PipeTransform {

  transform(value: string | number): string {

    let formated = value + '';

    return formated
    .padStart(14, '0')
    .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  }

}

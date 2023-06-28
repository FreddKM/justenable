import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maintenance'
})
export class MaintenancePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

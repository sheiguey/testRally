import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hourpipe',
  standalone: true
})
export class HourPipe implements PipeTransform {
  transform(milliseconds: number): string {
    console.log(typeof(milliseconds))
    const hours = Math.floor(milliseconds / 3600);
    const minutes = Math.floor((milliseconds % 3600) / 60);
    const seconds = Math.floor((milliseconds % 60) );
    const millisecondsPart = milliseconds % 100;
    console.log(seconds)
    return `${hours}h ${minutes}min ${seconds}s ${millisecondsPart}ms`;
  }
}
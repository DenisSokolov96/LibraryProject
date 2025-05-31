import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgUrl'
})
export class ImgUrlPipe implements PipeTransform {

  transform(value: string | null, ...args: unknown[]): string {
    if (!value) return "/assets/imgs/book.png";
    return value;
  }

}

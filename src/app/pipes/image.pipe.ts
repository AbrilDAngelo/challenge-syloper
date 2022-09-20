import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';
const URL = environment.imgPath;
@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {
  transform(
    img: string,
    size: string = 'w500',
    type: string = 'poster'
  ): string {
    if (!img) {
      switch (type) {
        case 'poster':
          return '../../../assets/no-image-banner.png';
        case 'backdrop':
          return '../../../assets/no-backdrop.jpg';
        case 'profile':
          return '../../../assets/no-profile-picture.jpg';
        default:
          return '../../../assets/no-image-banner.png';
      }
    }
    const imgUrl = `${URL}/${size}/${img}`;
    return imgUrl;
  }
}

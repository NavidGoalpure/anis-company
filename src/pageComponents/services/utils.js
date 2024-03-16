import { GRANNY_IMAGES } from '@pageComponents/services/conts';
import { EXTENDED_IMAGES } from '@pageComponents/services/conts';
import { Renovation_IMAGES } from '@pageComponents/services/conts';

export function getImagesArray(galleryName) {
  switch (galleryName) {
    case 'grannyflats':
      return GRANNY_IMAGES;
    case 'extensions-and-additions':
      return EXTENDED_IMAGES;
    default:
      return Renovation_IMAGES;
  }
}

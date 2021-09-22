import { fileUpload } from '../../helpers/fileUpload';

import cloudinary from 'cloudinary';

cloudinary.config({
  cloud_name: 'dd6bjgims',
  api_key: '374644835623528',
  api_secret: '_iXy1L5H-birVp5bd80NQQKEXD8',
  secure: true,
});

describe('Pruebas en fileUpload', () => {
  test('Debe de cargar un archivo y retornar el URL', async () => {
    const resp = await fetch(
      'https://static.vecteezy.com/system/resources/previews/002/862/847/non_2x/orion-constellation-with-beautiful-bright-stars-on-the-background-of-cosmic-sky-illustration-free-vector.jpg'
    );
    const blob = await resp.blob();

    const file = new File([blob], 'foto.png');
    const url = await fileUpload(file);

    expect(typeof url).toBe('string');

    const segments = url.split('/');
    const imageId = segments[segments.length - 1].replace('.jpg', '');

    await cloudinary.v2.api.delete_resources(imageId, {}, () => console.log);
  });

  test('Debe de retornar un error', async () => {
    const file = new File([], 'foto.png');
    const url = await fileUpload(file);

    expect(url).toBe(null);
  });
});

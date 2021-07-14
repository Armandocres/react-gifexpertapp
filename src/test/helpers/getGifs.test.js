import getGifs from "../../helpers/getGifs";



describe('Pruebas con getGif', () => {
  test('Debe traer 5 elementos', async() => {
    const gifs = await getGifs('One Punch');

    expect(gifs.length).toBe(5);
  });

  test('Debe traer Categoria', async() => {
    const gif = await getGifs('');

    expect(gif.length).toBe(0);
  });
});

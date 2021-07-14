import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en el componente GifGrid', () => {
  const title = 'un titulo';
  const url = 'https://localhost/algo.jpg';
  const wrapper = shallow(<GifGridItem  title={title} url={url} />);

  test('Se renderiza componente?', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de tener un parrafo con el titulo', () => {
    const p = wrapper.find('p');
    expect( p.text().trim()).toBe(title);
  });

  test('Debe de obtener la imagen igual al url y alt de los props', () => {
    const img = wrapper.find('img');

    expect( img.prop('src')).toBe( url );
    expect( img.prop('alt')).toBe( title );

  })

  test('Debe tener animate__bounceIn', () => {
    const div = wrapper.find('div');

    expect(div.hasClass('animate__bounceIn')).toBe( true );
  });
});

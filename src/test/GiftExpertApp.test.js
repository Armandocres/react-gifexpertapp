import React from 'react';
import GiftExpertApp from '../GiftExpertApp';
import { shallow } from 'enzyme';

describe('Pruebas en el componentes giftExpertApp', () => {

  test('Prueba del snapchot', () => {
    const wrapper = shallow(<GiftExpertApp />);
    expect(wrapper).toMatchSnapshot();
  })

  test('Debe mostrar la lista de categorias', () => {
    const categories = ['One Punch', 'Dragon Ball'];
    const warapper = shallow(<GiftExpertApp defaultCategories={categories} />);

    expect(warapper).toMatchSnapshot();
    expect(warapper.find('GifGrid').length).toBe(categories.length);

  })

})
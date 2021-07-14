import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Probando Addcategory', () => {
  const setCattegory = jest.fn();
  let wrapper = shallow(<AddCategory  setCategories={setCattegory} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory  setCategories={setCattegory} />);
  });

  test('Snapshot de Addcategory', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola mundo';

    input.simulate('change', { target: { value: value }
    });
  });

  test('No debe de postear la informacion onSubmit', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} } );

    expect(setCattegory).not.toHaveBeenCalled();
  })

  test('Debe llamar al setcategpries y limpiar la caja de texto', () => {
    const value = 'Hola mundo';
    wrapper.find('input').simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault(){} });
    expect(setCattegory).toHaveBeenCalled();
    expect(wrapper.find('input').prop('value')).toBe('');
  })

});
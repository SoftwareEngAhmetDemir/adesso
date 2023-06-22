import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';


test('renders App', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper).toMatchSnapshot();
});
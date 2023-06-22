import { shallow } from 'enzyme';
import Header from '../components/Header';

test('should test Header component', () => {
 const wrapper = shallow(<Header title={''} />);
 expect(wrapper).toMatchSnapshot();
});
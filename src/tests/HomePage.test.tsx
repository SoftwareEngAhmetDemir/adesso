import { shallow } from 'enzyme';
import HomePage from '../components/HomePage';

test('should test HomePage component', () => {
 const wrapper = shallow(<HomePage />);
 expect(wrapper).toMatchSnapshot();
});
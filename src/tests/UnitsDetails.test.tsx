import { shallow } from 'enzyme';
import UnitsDetails from '../components/UnitsDetails';

test('should test UnitsDetails component', () => {
 const wrapper = shallow(<UnitsDetails  />);
 expect(wrapper).toMatchSnapshot();
});
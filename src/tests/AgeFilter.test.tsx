import { shallow } from 'enzyme';
import AgeFilter from '../components/AgeFilter';

test('should test AgeFilter component', () => {
 const wrapper = shallow(<AgeFilter/>);
 expect(wrapper).toMatchSnapshot();
});
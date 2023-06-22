import { shallow } from 'enzyme';
import CostFilter from '../components/CostFilter';

describe('whole CostFilter', () => {
  test('should test CostFilter component', () => {
    const wrapper = shallow(<CostFilter />);
    expect(wrapper).toMatchSnapshot();
  });
});

import { shallow } from 'enzyme';
import UnitsTables from '../components/UnitsTables';
import { BrowserRouter } from 'react-router-dom';

test('should test UnitsTables component', () => {
 const wrapper = shallow( <BrowserRouter><UnitsTables  /></BrowserRouter>);
 expect(wrapper).toMatchSnapshot();
//  const wrapper2 = shallow(<UnitsTables  />);
//  expect(wrapper2).toMatchSnapshot();
});
import { shallow } from 'enzyme';
import Header from '../components/Header';
import FiteredTable from '../components/FiteredTable';

test('should test FilteredTable component', () => {
 const wrapper = shallow(<FiteredTable/>);
 expect(wrapper).toMatchSnapshot();
});
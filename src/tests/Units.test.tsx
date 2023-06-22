import { shallow } from 'enzyme';
import Units from '../components/Units';
import { render, screen } from '@testing-library/react';

test('should test Units component', () => {
 const wrapper = shallow(<Units  />);
 expect(wrapper).toMatchSnapshot();
});

// test('renders learn react link', () => {
//     render(<Units />);
//     const linkElement = screen.getByText(/Units Page/i);
//     expect(linkElement).toBeInTheDocument();
// });


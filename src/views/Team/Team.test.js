import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Team from './Team';

test('should render player details', async () => {
  const { container } = render(
    <MemoryRouter>
      <Team match={{ params: { id: 2 } }} />
    </MemoryRouter>
  );
  await screen.findByText('Stumptown Lumberjacks');
  expect(container).toMatchSnapshot();
});

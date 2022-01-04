import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Player from './Player';

test('should render player details', async () => {
  const { container } = render(
    <MemoryRouter>
      <Player match={{ params: { id: 12 } }} />
    </MemoryRouter>
  );
  await screen.findByText('Betty Grey');
  expect(container).toMatchSnapshot();
});

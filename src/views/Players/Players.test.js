import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Players from './Players';

test('Players should display all players', async () => {
  const { container } = render(
    <MemoryRouter>
      <Players />
    </MemoryRouter>
  );
  await screen.findByText('Bennie Jetts');
  expect(container).toMatchSnapshot();
});

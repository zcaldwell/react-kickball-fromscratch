import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Teams from './Teams';

test('Players should display all players', async () => {
  const { container } = render(
    <MemoryRouter>
      <Teams />
    </MemoryRouter>
  );
  await screen.findByText('Bridge City Sneakers');
  expect(container).toMatchSnapshot();
});

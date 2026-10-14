import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

export function render(url) {
  return renderToString(
    <MemoryRouter initialEntries={[url]}>
      <AppRoutes />
    </MemoryRouter>
  );
}

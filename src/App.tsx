import ErrorBoundary from '@components/ErrorBoundary';
import Loading from '@components/Loading';
import { routes } from '@config/routes';
import { ssgRoutes } from '@config/routes.ssg';
import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import { useRoutes } from 'react-router-dom';
import '@styles/global.scss';

import i18n from './i18n';
import { MessageProvider } from './providers/MessageProvider';

function App({ helmetContext }: { helmetContext?: any }) {
  const isSSG = process.env.isSSG as unknown as boolean;
  const routing = useRoutes(isSSG ? ssgRoutes : routes);

  return (
    <I18nextProvider i18n={i18n}>
      <MessageProvider>
        <HelmetProvider context={helmetContext}>
          <ErrorBoundary>
            {isSSG ? (
              <>{routing}</>
            ) : (
              <Suspense fallback={<Loading />}>{routing}</Suspense>
            )}
          </ErrorBoundary>
        </HelmetProvider>
      </MessageProvider>
    </I18nextProvider>
  );
}

export default App;

import { HeaderComponent } from 'components/HeaderComponent/HeaderComponent';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <>
      <HeaderComponent />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

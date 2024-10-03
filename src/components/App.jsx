import { SharedLayout } from 'pages/Shared/SharedLayout';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage')
);
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const CastList = lazy(() => import('./CastListComponent/CastListComponent'));
const ReviewsList = lazy(() =>
  import('./ReviewListComponent/ReviewListComponent')
);

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />}>
              <Route path=":movieId" element={<MovieDetailsPage />}>
                <Route path="cast" element={<CastList />} />
                <Route path="reviews" element={<ReviewsList />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

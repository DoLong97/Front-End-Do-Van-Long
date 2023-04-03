import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ColumnPage } from '../pages/ColumnPage/ColumnPage';
import { MyPage } from '../pages/MyPage/MyPage';
import { MyRecordPage } from '../pages/MyRecord/MyRecord';

export const HOME_PAGE_PATH = '/';
export const RECORD_PATH = '/record';
export const COLUMN_PATH = '/column';

export const AppRouter: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_PAGE_PATH} element={<MyPage/>}>
          <Route index element={<MyPage />} />
        </Route>
        <Route path={RECORD_PATH} element={<MyRecordPage />} />
        <Route path={COLUMN_PATH} element={<ColumnPage />} />
      </Routes>
    </BrowserRouter>
  );
};

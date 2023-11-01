import { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from '@/routes/routes';

import Sidebar from '@/layouts/Sidebar/sidebar'
import Header from '@/layouts/Header/header'

import styled from '@/app.module.scss'

export default function App() {
  return (
    <Router>
      <div className={styled.wrapper}>
        <Header />
        <main className={styled.main}>
          {/* Для отображения лоудера */}
          <Suspense fallback={<div className={styled.loader}>loading</div>}>
            <Sidebar />
          </Suspense>
          <div className={styled.content}>
            <AppRoutes />
          </div>
        </main>
      </div>
    </Router>
  );
}

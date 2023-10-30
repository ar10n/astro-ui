import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Services } from './pages/Services/Services.tsx';
import { Categories } from './pages/Categories/Categories.tsx';
import { Error } from './pages/Error/Error.tsx';
import { Layout } from './layout/Layout/Layout.tsx';
import { Users } from './pages/Users/Users.tsx';
import { Main } from './pages/Main/Main.tsx';
import { Category } from './components/Category/Category.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Main />
            },
            {
                path: '/categories',
                element: <Categories />,
                children: [
                    {
                        path: '/categories/:id',
                        element: <Category />
                    }
                ]
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/users',
                element: <Users />
            }
        ]
    },
    {
        path: '*',
        element: <Error />
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

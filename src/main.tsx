import ReactDOM from 'react-dom/client'
import 'normalize.css'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const lazyWrap = (factory: () => Promise<any>) => {
  return async () => {
    const page = await factory()
    // https://reactrouter.com/en/main/route/lazy
    return {
      Component: page.default || page.Component,
      ErrorBoundary: page.ErrorBoundary,
      loader: page.loader,
    }
  }
}

const router = createHashRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
  {
    path: '/demo',
    lazy: lazyWrap(() => import('@/pages/Demo')),
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />)

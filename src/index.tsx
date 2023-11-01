import '@/assets/styles/styled.scss'

import { StrictMode } from 'react'
import ReactDom from 'react-dom/client'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { RecoilRoot } from 'recoil'

import App from './app'

const root = ReactDom.createRoot(
  document.getElementById('app') as HTMLElement
)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense:true
    },
  }
})

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </QueryClientProvider>
  </StrictMode>
)
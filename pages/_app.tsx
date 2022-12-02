import type { AppProps } from 'next/app'
import "lib/base.css"
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
  return<RecoilRoot>
    <Component {...pageProps} />
  </RecoilRoot>
}

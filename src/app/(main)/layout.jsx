'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Provider } from "react-redux"
import { store } from "@/lib/store"

export default function SiteLayout({ children }) {
  return (
    <>
      <Header />
      <main>
        <Provider store={store}>
          {children}
        </Provider>
      </main>
      <Footer />
    </>
  )
}
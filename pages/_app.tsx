
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import {
  ClerkProvider,
} from '@clerk/nextjs'

export default function App({ Component, pageProps }: AppProps) {


  return (
    <ClerkProvider>
      <Component {...pageProps} />
    </ClerkProvider>
  )

}

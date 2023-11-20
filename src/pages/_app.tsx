import NavButtons from "@/components/NavButtons"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { useMemo } from "react"
import { QueryClient, QueryClientProvider } from "react-query"

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: true,
          },
        },
      }),
    []
  )

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="h-full w-full pl-8 sm:pl-28">
          <div className="h-[90%] w-full">
            <Component {...pageProps} />
          </div>
          <div className="h-[10%] w-full">
            <NavButtons />
          </div>
        </div>
      </QueryClientProvider>
    </>
  )
}

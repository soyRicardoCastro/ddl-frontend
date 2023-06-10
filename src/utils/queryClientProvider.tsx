"use client";

import { QueryClientProvider as QCProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function QueryClientProvider ({ children }: React.PropsWithChildren) {
  const queryClient = new QueryClient()

  return (
    <QCProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QCProvider>
  );
}
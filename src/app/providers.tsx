// src/app/providers.tsx
"use client";

import { Provider } from "react-redux";
import { PrivyProvider } from "@privy-io/react-auth";
import { store } from "@/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PrivyProvider
        appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID as string}
        config={{
          embeddedWallets: {
            createOnLogin: "all-users",
          },
          appearance: {
            theme: "light",
            accentColor: "#676FFF",
          },
        }}
      >
        {children}
      </PrivyProvider>
    </Provider>
  );
}

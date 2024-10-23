# tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

```

# tailwind.config.ts

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', "cursive"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        "nintendo-red": "var(--nintendo-red)",
        "nintendo-blue": "var(--nintendo-blue)",
        "nintendo-blue-dark": "var(--nintendo-blue-dark)",
        "nintendo-gold": "var(--nintendo-gold)",
        "nintendo-gray": "var(--nintendo-gray)",
        "nintendo-light-gray": "var(--nintendo-light-gray)",
        "nintendo-green": "#00c300",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

```

# postcss.config.mjs

```mjs
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;

```

# package.json

```json
{
  "name": "marvinsworldfrontend",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbo",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@amplitude/analytics-browser": "^2.11.2",
    "@anthropic-ai/sdk": "^0.30.1",
    "@privy-io/react-auth": "^1.81.3",
    "@radix-ui/react-avatar": "^1.1.0",
    "@radix-ui/react-checkbox": "^1.1.1",
    "@radix-ui/react-collapsible": "^1.1.0",
    "@radix-ui/react-dialog": "^1.1.1",
    "@radix-ui/react-dropdown-menu": "^2.1.1",
    "@radix-ui/react-icons": "^1.3.0",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-popover": "^1.1.1",
    "@radix-ui/react-radio-group": "^1.2.0",
    "@radix-ui/react-scroll-area": "^1.1.0",
    "@radix-ui/react-select": "^2.1.1",
    "@radix-ui/react-slider": "^1.2.0",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-switch": "^1.1.0",
    "@radix-ui/react-tabs": "^1.1.0",
    "@radix-ui/react-toast": "^1.2.1",
    "@radix-ui/react-tooltip": "^1.1.2",
    "@reduxjs/toolkit": "^2.2.7",
    "axios": "^1.7.7",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "emoji-picker-react": "^4.12.0",
    "ldrs": "^1.0.2",
    "lucide-react": "^0.438.0",
    "next": "14.2.7",
    "next-themes": "^0.3.0",
    "react": "^18",
    "react-dom": "^18",
    "react-dropzone": "^14.2.10",
    "react-intersection-observer": "^9.13.1",
    "react-redux": "^9.1.2",
    "react-spinners": "^0.14.1",
    "socket.io-client": "^4.8.0",
    "tailwind-merge": "^2.5.2",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "eslint": "^8",
    "eslint-config-next": "14.2.7",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}

```

# next.config.mjs

```mjs
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

```

# next-env.d.ts

```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

```

# components.json

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

# README.md

```md
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```

# .gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env.local
# all env files
.env
.env.production
# every env file except the example
!.env.example

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

```

# .eslintrc.json

```json
{
  "extends": ["next/core-web-vitals", "next/typescript"]
}

```

# public/window.svg

This is a file of the type: SVG Image

# public/vercel.svg

This is a file of the type: SVG Image

# public/next.svg

This is a file of the type: SVG Image

# public/globe.svg

This is a file of the type: SVG Image

# public/file.svg

This is a file of the type: SVG Image

# src/store/index.ts

```ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import serverReducer from "./slices/serverSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    servers: serverReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

```

# src/lib/utils.ts

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { getAccessToken } from "@privy-io/react-auth";

import { User } from "@/lib/types";

export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:4000";

export async function signIn(accessToken: string): Promise<User> {
  const response = await fetch(`${SERVER_URL}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to sign in");
  }

  return response.json();
}

export async function createServer(
  name: string,
  description: string,
  userId: string
): Promise<any> {
  const authToken = await getAccessToken();
  const response = await fetch(`${SERVER_URL}/servers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify({ name, description, userId }),
  });

  if (!response.ok) {
    throw new Error("Failed to create server");
  }

  return await response.json();
}

export const formatTimestamp = (timestamp: string) => {
  const now = new Date();
  const messageDate = new Date(timestamp);
  const diffInSeconds = Math.floor(
    (now.getTime() - messageDate.getTime()) / 1000
  );

  if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
  if (diffInSeconds < 3600)
    return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400)
    return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 604800)
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
  if (diffInSeconds < 2592000)
    return `${Math.floor(diffInSeconds / 604800)} weeks ago`;
  if (diffInSeconds < 31536000)
    return `${Math.floor(diffInSeconds / 2592000)} months ago`;
  return `${Math.floor(diffInSeconds / 31536000)} years ago`;
};

export async function getServers(): Promise<any> {
  const authToken = await getAccessToken();
  const response = await fetch(`${SERVER_URL}/servers`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch servers");
  }

  return response.json();
}

export async function createInvite(
  serverId: string,
  email: string
): Promise<any> {
  const authToken = await getAccessToken();
  const response = await fetch(`${SERVER_URL}/invites/${serverId}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    throw new Error("Failed to create invite");
  }

  return await response.json();
}

```

# src/lib/types.ts

```ts
/* eslint-disable @typescript-eslint/no-explicit-any */
// Common types for both client and server

export interface User {
  id: string; // Use string for UUID
  username: string;
  pfp?: string; // Optional profile picture
  bio?: string; // Optional bio
  created_at: Date;
  updated_at: Date;
  status?: boolean;
  roles?: string[];
}

export interface UrlMetadata {
  type: string;
  url: string;
  title?: string;
  description?: string;
  image?: string;
  siteName?: string;
}

interface HydratedReaction {
  emoji: string;
  count: number;
  users: User[];
}

export interface HydratedMessage extends Omit<Message, "reactions"> {
  reactions: HydratedReaction[];
}
export interface EmojiReaction {
  emoji: string;
  users: any[];
}

export interface Message {
  id: string;
  channel_id: string;
  user: User;
  parent_id?: string; // Add this line
  content: string;
  embeds?: UrlMetadata[];
  reactions: any[];
  created_at: string;
  updated_at: string;
  parent_preview?: any;
}

export interface Announcement {
  id: string; // Use string for UUID
  title: string;
  content: string;
  created_at: Date;
  updated_at: Date;
}

export interface Channel {
  id: string; // Unique identifier for the channel
  server_id: string; // The server to which this channel belongs
  name: string; // Channel name
  is_thread: boolean; // Whether this channel is a thread or not
  parent_channel_id: string | null; // If this is a thread, the parent channel's ID
  created_at: string; // Timestamp of when the channel was created
  updated_at: string; // Timestamp of the last update
  deleted_at: string | null; // Timestamp of when the channel was deleted, if applicable
}

export interface HubItem {
  id: string; // Use string for UUID
  name: string;
  icon: React.ElementType;
  channels: Channel[]; // This can be further typed based on your channel structure
  generalChat: Message[];
  subHubs?: HubItem[]; // Optional nested hubs
  threads?: {
    id: string; // UUID for thread
    title: string;
    messages: Message[];
  }[];
  members: User[]; // Replace members with consistent `users` type
  roles: Role[];
  announcements: Announcement[];
}

export interface Role {
  id: string; // Use string for UUID
  name: string;
  minSubscription: number;
}

export interface Subscription {
  id: string; // Use string for UUID
  name: string;
  price: number;
  benefits: string[];
}

```

# src/hooks/use-toast.ts

```ts
"use client"

// Inspired by react-hot-toast library
import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, "id">

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

export { useToast, toast }

```

# src/components/Loading.tsx

```tsx
import React, { useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm">
      <ClipLoader />
    </div>
  );
}

```

# src/app/providers.tsx

```tsx
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

```

# src/app/page.tsx

```tsx
// src/app/page.tsx

import StoryStreamer from "@/components/StoryComponent";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-nintendo-light-gray dark:bg-nintendo-gray">
      <StoryStreamer />
    </main>
  );
}

```

# src/app/layout.tsx

```tsx
"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import { Providers } from "./providers";
import { useEffect } from "react";
import * as amplitude from "@amplitude/analytics-browser";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import { ThemeToggle } from "@/components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    amplitude.init(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY as string);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Providers>
            <ClientLayout>{children}</ClientLayout>
            <ThemeToggle />
            <Toaster />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}

```

# src/app/globals.css

```css
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --nintendo-red: #e60012;
  --nintendo-blue: #0ab9e6;
  --nintendo-blue-dark: #0091b5;
  --nintendo-gold: #ffcb05;
  --nintendo-gray: #4a4a4a;
  --nintendo-light-gray: #f0f0f0;
}

@layer base {
  body {
    @apply bg-background text-foreground;
  }
}

@layer utilities {
  .bg-nintendo-red { background-color: var(--nintendo-red); }
  .bg-nintendo-blue { background-color: var(--nintendo-blue); }
  .bg-nintendo-blue-dark { background-color: var(--nintendo-blue-dark); }
  .bg-nintendo-gold { background-color: var(--nintendo-gold); }
  .bg-nintendo-gray { background-color: var(--nintendo-gray); }
  .bg-nintendo-light-gray { background-color: var(--nintendo-light-gray); }

  .text-nintendo-red { color: var(--nintendo-red); }
  .text-nintendo-blue { color: var(--nintendo-blue); }
  .text-nintendo-gold { color: var(--nintendo-gold); }
  .text-nintendo-green { color: #00c300; }

  .border-nintendo-red { border-color: var(--nintendo-red); }
  .border-nintendo-blue { border-color: var(--nintendo-blue); }
  .border-nintendo-gold { border-color: var(--nintendo-gold); }
}
```

# src/app/favicon.ico

This is a binary file of the type: Binary

# src/app/ClientLayout.tsx

```tsx
"use client";

import { usePrivy } from "@privy-io/react-auth";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  setUser,
  clearUser,
  setAuthenticated,
  setInviteModalOpen,
} from "@/store/slices/userSlice";
import { signIn } from "@/lib/utils";
import { RootState } from "@/store";
import { Button } from "@/components/ui/button";
import { InvitesModal } from "@/components/InvitesModal";
import { AccountModal } from "@/components/AccountModal";
import { setIsAccountModalOpen } from "@/store/slices/serverSlice";
import { Loading } from "@/components/Loading";
import * as amplitude from "@amplitude/analytics-browser";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { ready, authenticated, user, getAccessToken, login } = usePrivy();
  const dispatch = useDispatch();
  const {
    isInviteModalOpen,
    authenticated: isAuthenticated,
    user: signedInUser,
  } = useSelector((state: RootState) => state.user);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function handleAuth() {
      if (ready) {
        setIsLoading(true);
        if (authenticated && user) {
          try {
            const accessToken = await getAccessToken();
            if (!accessToken) {
              throw new Error("No access token");
            }
            const userData = await signIn(accessToken);
            dispatch(setUser(userData));
            amplitude.setUserId(userData.id);
            dispatch(setAuthenticated(true));
            amplitude.track("User Logged In", { userId: userData.id });
          } catch (error) {
            console.error("Error signing in:", error);
            dispatch(clearUser());
            dispatch(setAuthenticated(false));
          }
        } else {
          dispatch(clearUser());
          dispatch(setAuthenticated(false));
        }
        setIsLoading(false);
      }
    }

    handleAuth();
  }, [ready, authenticated, user]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="relative">
      <div className="fixed top-4 right-4">
        {authenticated ? (
          <Button
            onClick={() => {
              dispatch(setIsAccountModalOpen(true));
              amplitude.track("Open Account Modal", { userId: user?.id });
            }}
          >
            Account
          </Button>
        ) : (
          <Button className="" onClick={login}>
            Login
          </Button>
        )}
      </div>

      {children}
      <AccountModal />
      <InvitesModal
        isOpen={isInviteModalOpen}
        onClose={() => dispatch(setInviteModalOpen(false))}
      />
    </div>
  );
}

```

# src/components/ui/tooltip.tsx

```tsx
"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }

```

# src/components/ui/toaster.tsx

```tsx
"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}

```

# src/components/ui/toast.tsx

```tsx
"use client"

import * as React from "react"
import { Cross2Icon } from "@radix-ui/react-icons"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <Cross2Icon className="h-4 w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold [&+div]:text-xs", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}

```

# src/components/ui/textarea.tsx

```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }

```

# src/components/ui/tabs.tsx

```tsx
"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }

```

# src/components/ui/switch.tsx

```tsx
"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }

```

# src/components/ui/slider.tsx

```tsx
"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }

```

# src/components/ui/skeleton.tsx

```tsx
import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-primary/10", className)}
      {...props}
    />
  )
}

export { Skeleton }

```

# src/components/ui/select.tsx

```tsx
"use client"

import * as React from "react"
import {
  CaretSortIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons"
import * as SelectPrimitive from "@radix-ui/react-select"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <CaretSortIcon className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronUpIcon />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronDownIcon />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <CheckIcon className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}

```

# src/components/ui/scroll-area.tsx

```tsx
"use client"

import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }

```

# src/components/ui/radio-group.tsx

```tsx
"use client"

import * as React from "react"
import { CheckIcon } from "@radix-ui/react-icons"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"

import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <CheckIcon className="h-3.5 w-3.5 fill-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }

```

# src/components/ui/popover.tsx

```tsx
"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverAnchor = PopoverPrimitive.Anchor

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }

```

# src/components/ui/label.tsx

```tsx
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }

```

# src/components/ui/input.tsx

```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }

```

# src/components/ui/dropdown-menu.tsx

```tsx
"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
} from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRightIcon className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <CheckIcon className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <DotFilledIcon className="h-4 w-4 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}

```

# src/components/ui/dialog.tsx

```tsx
"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { Cross2Icon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <Cross2Icon className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}

```

# src/components/ui/collapsible.tsx

```tsx
"use client"

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

const Collapsible = CollapsiblePrimitive.Root

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent

export { Collapsible, CollapsibleTrigger, CollapsibleContent }

```

# src/components/ui/checkbox.tsx

```tsx
"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <CheckIcon className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }

```

# src/components/ui/card.tsx

```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

```

# src/components/ui/button.tsx

```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

```

# src/components/ui/badge.tsx

```tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

```

# src/components/ui/avatar.tsx

```tsx
"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }

```

# src/components/UrlPreview/index.tsx

```tsx
import React from "react";
import { ExternalLink } from "lucide-react";

interface UrlMetadata {
  title?: string;
  description?: string;
  image?: string;
  url: string;
  type: string;
  siteName?: string;
  embedUrl?: string;
  // Add other properties as needed
}

interface UrlPreviewProps {
  metadata: UrlMetadata;
}

export function UrlPreview({ metadata }: UrlPreviewProps) {
  if (metadata.type === "image" && metadata.image) {
    return (
      <div className="p-2 md:w-full w-3/4 max-w-xs rounded-lg mt-2 hover:bg-gray-200 transition-colors">
        <img
          src={metadata.image}
          alt={metadata.title || "Image preview"}
          className="w-full h-auto object-cover rounded-md"
        />
      </div>
    );
  }

  return (
    <div className="bg-gray-100 p-2 md:w-full w-4/5 max-w-sm rounded-lg mt-2 hover:bg-gray-200 transition-colors">
      {metadata.embedUrl ? (
        <div className="sm:block aspect-video w-full">
          <iframe
            src={metadata.embedUrl}
            className="md:w-full w-3/4 h-full rounded-md"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={metadata.title || "Embedded content"}
          ></iframe>
        </div>
      ) : (
        <a
          href={metadata.url}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline block"
        >
          {metadata.image && (
            <img
              src={metadata.image}
              alt={metadata.title || "Link preview"}
              className="w-full h-auto max-h-32 object-cover mb-2 rounded-md"
            />
          )}
          {metadata.title && (
            <h4 className="font-bold text-blue-600 text-sm">
              {metadata.title}
            </h4>
          )}
          {metadata.description && (
            <p className="text-xs text-gray-600 mt-1 line-clamp-2">
              {metadata.description}
            </p>
          )}
          {metadata.siteName && (
            <p className="text-xs text-gray-500 mt-1 flex items-center">
              <ExternalLink size={12} className="mr-1" />
              {metadata.siteName}
            </p>
          )}
        </a>
      )}
    </div>
  );
}

```

# src/components/SubscriptionManagement/index.tsx

```tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Subscription } from "@/lib/types";

interface SubscriptionManagementProps {
  subscriptionOptions: Subscription[];
  globalSubscription: Subscription | null;
  onSubscribe: (subscription: Subscription) => void;
  onCancel: () => void;
}

export function SubscriptionManagement({
  subscriptionOptions,
  globalSubscription,
  onSubscribe,
  onCancel,
}: SubscriptionManagementProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Manage Your Subscriptions</CardTitle>
        <CardDescription>
          Choose a subscription plan or manage your current subscription
        </CardDescription>
      </CardHeader>
      <CardContent>
        {globalSubscription ? (
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">
                Current Subscription: {globalSubscription.name}
              </h3>
              <p>Price: ${globalSubscription.price.toFixed(2)}/month</p>
            </div>
            <div>
              <h4 className="font-medium">Benefits:</h4>
              <ul className="list-disc list-inside">
                {globalSubscription.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
            <Button variant="destructive" onClick={onCancel}>
              Cancel Subscription
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              Choose a Subscription Plan
            </h3>
            {subscriptionOptions.map((option) => (
              <Card key={option.id} className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold">{option.name}</h4>
                    <p>${option.price.toFixed(2)}/month</p>
                  </div>
                  <Button onClick={() => onSubscribe(option)}>Subscribe</Button>
                </div>
                <div className="mt-2">
                  <h5 className="font-medium">Benefits:</h5>
                  <ul className="list-disc list-inside">
                    {option.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

```

# src/components/StoryComponent/index.tsx

```tsx
"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Loader2,
  ChevronLeft,
  ChevronRight,
  Shield,
  Skull,
} from "lucide-react";

interface StoryPart {
  content: string;
  characterStatus: {
    remainingCharacters: string[];
    eliminatedCharacters: string[];
  };
}

interface StreamMessage {
  type: "story" | "status";
  content?: string;
  characterStatus?: {
    remainingCharacters: string[];
    eliminatedCharacters: string[];
  };
}

const StoryStreamer = () => {
  const [storyParts, setStoryParts] = useState<StoryPart[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [lastStatus, setLastStatus] = useState<StoryPart["characterStatus"]>({
    remainingCharacters: [],
    eliminatedCharacters: [],
  });

  const scrollRef = useRef<HTMLDivElement>(null);
  const isAtBottom = useRef(true);

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current && isAtBottom.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      isAtBottom.current = scrollTop + clientHeight >= scrollHeight - 10;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [storyParts, scrollToBottom]);

  const streamStory = async () => {
    setLoading(true);
    setStoryParts([]);
    setError("");
    setIsComplete(false);
    setLastStatus({
      remainingCharacters: [],
      eliminatedCharacters: [],
    });

    const eventSource = new EventSource("http://localhost:4000/story");

    eventSource.onmessage = (event) => {
      if (event.data === "[DONE]") {
        setLoading(false);
        setIsComplete(true);
        eventSource.close();
        return;
      }

      try {
        const message: StreamMessage = JSON.parse(event.data);

        if (message.type === "status" && message.characterStatus) {
          setLastStatus(message.characterStatus);
        } else if (message.type === "story" && message.content) {
          setStoryParts((prev) => [
            ...prev,
            {
              content: message.content!.trim(),
              characterStatus: lastStatus,
            },
          ]);
          scrollToBottom();
        }
      } catch (e) {
        console.error("Error processing message:", e);
      }
    };

    eventSource.onerror = (error) => {
      console.error("EventSource error:", error);
      setError("Failed to load story");
      setLoading(false);
      eventSource.close();
    };

    return () => eventSource.close();
  };
  return (
    <div className="w-full h-screen p-4 font-pixel flex flex-col bg-nintendo-blue-dark dark:bg-nintendo-red">
      <div className="flex-grow bg-nintendo-blue dark:bg-nintendo-red border-4 border-nintendo-gold rounded-lg p-6 shadow-lg transition-colors duration-200 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-4xl text-nintendo-gold dark:text-nintendo-gold text-center flex-grow">
            Marvin&apos;s Adventure
          </h1>
        </div>
        <div className="flex justify-center mb-6">
          <Button
            onClick={streamStory}
            disabled={loading}
            className="bg-nintendo-blue dark:bg-nintendo-red hover:bg-nintendo-blue-dark dark:hover:bg-nintendo-red/90 text-white font-bold py-2 px-4 rounded-full shadow-md transform hover:scale-105 transition-all duration-200"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating Story...
              </>
            ) : (
              "Start New Adventure"
            )}
          </Button>
        </div>

        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

        <div className="flex-grow grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Character Status Sidebar */}
          <div className="md:col-span-1 space-y-4">
            <div className="bg-nintendo-gray dark:bg-nintendo-light-gray border-2 border-nintendo-blue dark:border-nintendo-red rounded-lg p-4 transition-colors duration-200">
              <h3 className="text-lg font-bold text-nintendo-blue dark:text-nintendo-red mb-2">
                Character Status
              </h3>
              {lastStatus && (
                <>
                  <div className="mb-4">
                    <h4 className="font-medium flex items-center gap-2 mb-2 text-nintendo-green">
                      <Shield className="h-4 w-4" />
                      Remaining ({lastStatus.remainingCharacters.length})
                    </h4>
                    <ul className="space-y-1 text-xs">
                      {lastStatus.remainingCharacters.map((char) => (
                        <li key={char} className="text-nintendo-green">
                          {char}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium flex items-center gap-2 mb-2 text-nintendo-red">
                      <Skull className="h-4 w-4" />
                      Eliminated ({lastStatus.eliminatedCharacters.length})
                    </h4>
                    <ul className="space-y-1 text-xs">
                      {lastStatus.eliminatedCharacters.map((char) => (
                        <li
                          key={char}
                          className="text-nintendo-red line-through"
                        >
                          {char}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Story Content */}
          <div className="md:col-span-3 flex flex-col">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex-grow overflow-y-auto bg-white dark:bg-nintendo-blue-dark border-2 border-nintendo-blue dark:border-nintendo-gold rounded-lg p-6 relative transition-colors duration-200"
            >
              {storyParts.map((part, index) => (
                <div
                  key={index}
                  className="mb-4 bg-nintendo-light-gray dark:bg-nintendo-gray border-2 border-nintendo-blue dark:border-nintendo-gold rounded-lg p-4 shadow-md transition-colors duration-200"
                >
                  <p className="text-nintendo-blue dark:text-nintendo-gold text-sm md:text-lg leading-relaxed">
                    {part.content}
                  </p>
                </div>
              ))}
              {loading && (
                <div className="flex items-center justify-center gap-2 mt-4">
                  <span className="text-sm text-nintendo-blue dark:text-nintendo-gold animate-pulse">
                    Loading next part...
                  </span>
                  <Loader2 className="h-4 w-4 animate-spin text-nintendo-blue dark:text-nintendo-gold" />
                </div>
              )}
            </div>

            {isComplete && (
              <div className="mt-4 text-center text-nintendo-gold dark:text-nintendo-red font-bold text-xl">
                The End of Your Adventure!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default StoryStreamer;

```

# src/components/ReplyPreview/index.tsx

```tsx
import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Message } from "@/lib/types";

interface ReplyPreviewProps {
  replyingTo: Message;
  onCancelReply: () => void;
  onClickPreview: (messageId: string) => void;
}

const ReplyPreview: React.FC<ReplyPreviewProps> = ({
  replyingTo,
  onCancelReply,
  onClickPreview,
}) => {
  return (
    <div
      className="flex items-center hover:bg-muted-foreground/10 justify-between bg-muted p-2 rounded-md mb-2"
      onClick={() => onClickPreview(replyingTo.id)}
    >
      <div className="flex items-center space-x-2 overflow-hidden cursor-pointer  p-1 rounded">
        <Avatar className="w-6 h-6 flex-shrink-0">
          <AvatarImage
            src={replyingTo.user.pfp}
            alt={replyingTo.user.username}
          />
          <AvatarFallback>
            {replyingTo.user.username.toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col overflow-hidden">
          <span className="text-sm font-semibold truncate">
            {replyingTo.user.username}
          </span>
          <span className="text-xs text-muted-foreground truncate">
            {replyingTo.content}
          </span>
        </div>
      </div>
      <Button variant="ghost" size="sm" onClick={onCancelReply}>
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ReplyPreview;

```

# src/components/ReactionList/index.tsx

```tsx
import React, { useState, useCallback, useRef } from "react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

interface ReactionProps {
  message: {
    id: string;
    reactions: Record<string, { username: string }[]>;
  };
  handleEmojiClick: (messageId: string, emoji: string) => void;
}

const LONG_PRESS_THRESHOLD = 350; // Time in ms to distinguish between tap and long press

const ReactionList: React.FC<ReactionProps> = ({
  message,
  handleEmojiClick,
}) => {
  const [openPopover, setOpenPopover] = useState<string | null>(null);
  const longPressTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isLongPressRef = useRef<boolean>(false);

  const clearLongPressTimer = useCallback(() => {
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
  }, []);

  const handlePopoverToggle = useCallback((emoji: string) => {
    setOpenPopover((prev) => (prev === emoji ? null : emoji));
  }, []);

  const handleButtonPress = useCallback(
    (emoji: string) => {
      isLongPressRef.current = false;
      longPressTimerRef.current = setTimeout(() => {
        isLongPressRef.current = true;
        handlePopoverToggle(emoji); // Trigger popover on long press
      }, LONG_PRESS_THRESHOLD);
    },
    [handlePopoverToggle]
  );

  const handleButtonRelease = useCallback(
    (emoji: string) => {
      clearLongPressTimer();
      if (!isLongPressRef.current) {
        handleEmojiClick(message.id, emoji); // Trigger emoji reaction on tap
      }
      isLongPressRef.current = false;
    },
    [clearLongPressTimer, handleEmojiClick, message.id]
  );

  return (
    <>
      {message.reactions &&
        Object.entries(message.reactions).map(([emoji, users]) => (
          <Popover
            key={`${message.id}-${emoji}`}
            open={openPopover === emoji}
            onOpenChange={() => handlePopoverToggle(emoji)}
          >
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="text-xs py-0 px-2 h-6 break-words"
                onMouseEnter={() => handlePopoverToggle(emoji)}
                onMouseLeave={() => handlePopoverToggle(emoji)}
                onMouseDown={() => handleButtonPress(emoji)}
                onMouseUp={() => handleButtonRelease(emoji)}
                onTouchStart={(e) => {
                  e.preventDefault();
                  handleButtonPress(emoji);
                }}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  handleButtonRelease(emoji);
                }}
                onTouchCancel={() => {
                  clearLongPressTimer();
                  isLongPressRef.current = false;
                }}
              >
                {emoji} {users.length}
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <p className="text-xs break-words">
                {users.length > 3
                  ? `${users
                      .slice(0, 3)
                      .map((user) => user.username)
                      .join(", ")} and ${users.length - 3} more`
                  : users.map((user) => user.username).join(", ")}{" "}
                reacted
              </p>
            </PopoverContent>
          </Popover>
        ))}
    </>
  );
};

export default ReactionList;

```

# src/components/MembersList/index.tsx

```tsx
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "@/lib/types";
import { Button } from "../ui/button";
import { UserPlus } from "lucide-react";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

interface MembersListProps {
  members: User[];
  onInviteMember: () => void;
}

export function MembersList({ members, onInviteMember }: MembersListProps) {
  const { selectedServer } = useSelector((state: RootState) => state.servers);
  // Sort members by status: online (true) first, offline (false) second
  const sorted_members = [...members].sort((a, b) =>
    a.status === b.status ? 0 : a.status ? -1 : 1
  );

  return sorted_members ? (
    <div className="w-full h-full border p-4">
      <h4 className="font-semibold">{selectedServer?.name} members</h4>
      <ScrollArea className="h-[400px] w-full rounded-none p-2 overflow-y-auto">
        {sorted_members.map((member) => (
          <div key={member.id} className="flex items-center space-x-2 mb-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={member.pfp} alt={member.username} />
              <AvatarFallback>
                {member.username[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm">{member.username}</span>
            <span
              className={`w-2 h-2 rounded-full ${
                member.status ? "bg-green-500" : "bg-gray-500"
              }`}
            ></span>
          </div>
        ))}
      </ScrollArea>
    </div>
  ) : null;
}

```

# src/components/LoginButton/index.tsx

```tsx
import { usePrivy } from "@privy-io/react-auth";
import { Button } from "../ui/button";
import { signIn } from "@/lib/utils";

const LoginButton = () => {
  const { login, user } = usePrivy();

  return (
    <Button className="" onClick={login}>
      Login
    </Button>
  );
};

export default LoginButton;

```

# src/components/InvitesModal/index.tsx

```tsx
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { SERVER_URL } from "@/lib/utils";
import { usePrivy } from "@privy-io/react-auth";

interface Invite {
  id: string;
  serverId: string;
  serverName: string;
  token: string;
}

interface InvitesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InvitesModal({ isOpen, onClose }: InvitesModalProps) {
  const [invites, setInvites] = useState<Invite[]>([]);
  const { getAccessToken } = usePrivy();

  useEffect(() => {
    // Fetch invites from the server
    const fetchInvites = async () => {
      const accessToken = await getAccessToken();
      try {
        const response = await fetch(`${SERVER_URL}/invites`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch invites");
        }
        const data = await response.json();
        setInvites(data);
      } catch (error) {
        // console.log("Error fetching invites:", error);
      }
    };

    if (isOpen) {
      fetchInvites();
    }
  }, [isOpen]);

  const handleAcceptInvite = async (token: string) => {
    try {
      const accessToken = await getAccessToken();
      const response = await fetch(`${SERVER_URL}/invites/accept`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });
      if (!response.ok) {
        throw new Error("Failed to accept invite");
      }
      setInvites(invites.filter((invite) => invite.id !== token));
    } catch (error) {
      console.error("Error accepting invite:", error);
    }
  };

  const handleDeclineInvite = async (token: string) => {
    try {
      const accessToken = await getAccessToken();
      const response = await fetch(`${SERVER_URL}/invites/decline`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });
      if (!response.ok) {
        throw new Error("Failed to decline invite");
      }
      setInvites(invites.filter((invite) => invite.id !== token));
    } catch (error) {
      console.error("Error declining invite:", error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Server Invites</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[300px] w-full">
          {invites.map((invite) => (
            <div
              key={invite.id}
              className="flex justify-between items-center p-2 border-b"
            >
              <span>{invite.serverName}</span>
              <div>
                <Button
                  onClick={() => handleAcceptInvite(invite.token)}
                  className="mr-2"
                >
                  Accept
                </Button>
                <Button
                  onClick={() => handleDeclineInvite(invite.token)}
                  variant="outline"
                >
                  Decline
                </Button>
              </div>
            </div>
          ))}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

```

# src/components/ImageUpload/index.tsx

```tsx
// src/components/ImageUpload/index.tsx
import React, { useState, useRef, useEffect } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface ImageUploadProps {
  currentImage?: string;
  onImageChange: (file: File) => void;
  fallback?: string;
}

export function ImageUpload({
  currentImage,
  onImageChange,
  fallback = "U",
}: ImageUploadProps) {
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(
    currentImage
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      handleNewFile(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      const file = event.dataTransfer.files[0];
      handleNewFile(file);
    }
  };

  const handleNewFile = (file: File) => {
    if (file.type.startsWith("image/")) {
      onImageChange(file);
      // Clean up previous preview URL if it exists
      if (previewUrl && previewUrl !== currentImage) {
        URL.revokeObjectURL(previewUrl);
      }
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      alert("Please upload an image file (including GIFs).");
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center space-y-4"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div
        className="relative w-24 h-24 cursor-pointer"
        onClick={() => fileInputRef.current?.click()}
      >
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Preview"
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          <Avatar className="w-full h-full">
            <AvatarFallback>{fallback}</AvatarFallback>
          </Avatar>
        )}
      </div>
      <Button onClick={() => fileInputRef.current?.click()}>
        {previewUrl ? "Change Image" : "Upload Image"}
      </Button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*,.gif"
        className="hidden"
      />
      <p className="text-sm text-muted-foreground">
        Click or drag and drop to upload an image (including GIFs)
      </p>
    </div>
  );
}

```

# src/components/ThemeToggle/index.tsx

```tsx
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed bottom-4 right-4 rounded-full w-12 h-12 z-50"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

```

# src/components/EmojiPickerWrapper/index.tsx

```tsx
import React, { useState } from "react";
import EmojiPicker, { EmojiClickData, Theme } from "emoji-picker-react";
import { useTheme } from "next-themes";

interface EmojiPickerProps {
  onEmojiSelect: (emoji: string) => void;
}

export const EmojiPickerWrapper: React.FC<EmojiPickerProps> = ({
  onEmojiSelect,
}) => {
  const [isPickerVisible, setIsPickerVisible] = useState(true);
  const theme = useTheme(); // Use theme hook

  const currentTheme = theme.theme === "dark" ? Theme.DARK : Theme.LIGHT;

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    onEmojiSelect(emojiData.emoji);
    setIsPickerVisible(false); // Hide picker after selecting an emoji
  };

  const handlePickerToggle = () => {
    setIsPickerVisible(!isPickerVisible); // Toggle picker visibility
  };

  return (
    <>
      {isPickerVisible && (
        <EmojiPicker
          onEmojiClick={handleEmojiClick}
          autoFocusSearch={false}
          theme={currentTheme} // Adjust theme dynamically
          skinTonesDisabled
          lazyLoadEmojis
          width={300}
          height={400}
        />
      )}
    </>
  );
};

```

# src/components/ChatArea/index.tsx

```tsx
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import {
  ChevronDown,
  CornerDownRight,
  Image,
  MessageSquare,
  Send,
  Smile,
  Trash2,
  X,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Message, User } from "@/lib/types";
import { Socket } from "socket.io-client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UrlPreview } from "@/components/UrlPreview";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ImageUpload } from "../ImageUpload";
import { SERVER_URL, formatTimestamp } from "@/lib/utils";
import { usePrivy } from "@privy-io/react-auth";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { useDropzone } from "react-dropzone";
import { EmojiPickerWrapper } from "../EmojiPickerWrapper";
import { Textarea } from "../ui/textarea";
import { Loading } from "../Loading";
import { toast } from "@/hooks/use-toast";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import * as amplitude from "@amplitude/analytics-browser";
import ReplyPreview from "../ReplyPreview";
import ReactionList from "../ReactionList";

interface ChatAreaProps {
  chats: { [key: string]: Message[] };
  selectedChat: any | null;
  currentUser: User;
  onSendMessage: (message: string) => void;
  socket: Socket | null;
  onLoadMore: () => void;
  hasMoreMessages: boolean;
  setSelectedChat: (chat: any) => void;
  fetchingChat: boolean;
  setChats: (chats: any) => void;
}

export function ChatArea({
  chats,
  selectedChat,
  currentUser,
  onSendMessage,
  socket,
  onLoadMore,
  hasMoreMessages,
  setSelectedChat,
  fetchingChat,
  setChats,
}: ChatAreaProps) {
  const [newMessage, setNewMessage] = useState("");
  const [typingUsers, setTypingUsers] = useState<Set<string>>(new Set());
  const chatScrollRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const { getAccessToken } = usePrivy();
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true);
  const scrollToRef = useRef<HTMLDivElement>(null);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const { selectedServer } = useSelector((state: RootState) => state.servers);
  const { user } = useSelector((state: RootState) => state.user);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadingRef = useRef<HTMLDivElement>(null);
  const [replyingTo, setReplyingTo] = useState<Message | null>(null);
  const [isLatestVisible, setIsLatestVisible] = useState(true);
  const messageRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const scrollToMessage = useCallback((messageId: string) => {
    const messageElement = messageRefs.current[messageId];
    if (messageElement) {
      messageElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

  const scrollToBottom = () => {
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newFiles = acceptedFiles.slice(0, 2 - imageFiles.length);
      setImageFiles((prev) => [...prev, ...newFiles]);
    },
    [imageFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    maxFiles: 2 - imageFiles.length,
    disabled: imageFiles.length >= 2 || isUploading,
  });

  const removeImage = (index: number) => {
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleReaction = (messageId: string, emoji: any) => {
    if (!socket || !currentUser || !selectedChat) return;

    const message = chats[selectedChat.id].find((m) => m.id === messageId);
    if (!message) return;

    let hasReacted = false;

    if (message.reactions) {
      const reaction = message.reactions[emoji] as any;
      if (reaction) {
        hasReacted = reaction.some(
          (reaction: any) => reaction.id === currentUser.id
        );
      }
    }

    if (hasReacted) {
      socket.emit("remove reaction", {
        messageId,
        emoji,
        userId: currentUser.id,
      });
      amplitude.track("Reaction removed", {
        userId: currentUser.id,
        messageId,
        emoji,
      });
    } else {
      socket.emit("add reaction", { messageId, emoji, userId: currentUser.id });
      amplitude.track("Reaction added", {
        userId: currentUser.id,
        messageId,
        emoji,
      });
    }
  };

  const isAdmin = useMemo(() => {
    if (!selectedServer || !user) return false;
    const currentMember = selectedServer.members.find((m) => m.id === user.id);
    if (!currentMember) return false;
    return currentMember?.roles?.some(
      (role: any) => role.permissions === 18446744073709551615
    );
  }, [selectedServer, user]);

  const handleDeleteMessage = async (message: any) => {
    if (!selectedChat || !currentUser) return;

    try {
      const accessToken = await getAccessToken();
      const response = await fetch(
        `${SERVER_URL}/channels/${selectedChat.id}/messages/${message.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete message");
      }

      toast({
        title: "Message deleted successfully",
      });
      amplitude.track("Message deleted", {
        deleter: currentUser.id,
        messageId: message.id,
        channelId: selectedChat.id,
        messageAuthor: message.user.id,
      });
    } catch (error) {
      console.error("Error deleting message:", error);
      toast({
        title: "Failed to delete message",
        variant: "destructive",
      });
    }
  };

  const handleSendMessage = async () => {
    if (
      (newMessage.trim() || imageFiles.length > 0) &&
      selectedChat &&
      currentUser
    ) {
      setIsUploading(true);
      try {
        let embeds = [];

        if (imageFiles.length > 0) {
          const accessToken = await getAccessToken();
          const formData = new FormData();
          imageFiles.forEach((file) => {
            formData.append("images", file);
          });

          const response = await fetch(`${SERVER_URL}/upload`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            body: formData,
          });

          if (!response.ok) {
            throw new Error("Failed to upload images");
          }

          const result = await response.json();
          embeds = result.embeds;
          amplitude.track("Image uploaded", {
            uploader: currentUser.id,
            channelId: selectedChat.id,
            parentId: replyingTo?.id,
          });
        }

        const newMessageObj: any = {
          id: Date.now().toString(),
          channel_id: selectedChat.id,
          user: currentUser,
          content: newMessage.trim(),
          embeds: embeds,
          created_at: new Date(),
          updated_at: new Date(),
          parent_id: replyingTo?.id || null,
        };

        socket?.emit(
          "stop typing",
          selectedChat?.id,
          currentUser.id,
          currentUser.username
        );

        onSendMessage(newMessageObj);
        setNewMessage("");
        setImageFiles([]);
        setReplyingTo(null);
      } catch (error) {
        console.error("Error sending message:", error);
      } finally {
        setIsUploading(false);
      }
    }
  };

  useEffect(() => {
    if (!selectedChat || !socket) return;

    const handleTyping = ({
      userId,
      username,
      isTyping,
    }: {
      userId: string;
      username: string;
      isTyping: boolean;
    }) => {
      setTypingUsers((prev) => {
        const newSet = new Set(prev);
        if (isTyping) {
          newSet.add(username);
        } else {
          newSet.delete(username);
        }
        return newSet;
      });
    };

    socket.on("typing", handleTyping);

    return () => {
      socket.off("typing", handleTyping);
    };
  }, [selectedChat, socket]);

  useEffect(() => {
    if (!socket) return;

    const handleReactionUpdated = (data: {
      messageId: string;
      emoji: string;
      user: User;
      action: "add" | "remove";
    }) => {
      setChats((prevChats: any) => {
        const updatedChats = { ...prevChats };
        Object.keys(updatedChats).forEach((channelId) => {
          if (Array.isArray(updatedChats[channelId])) {
            updatedChats[channelId] = updatedChats[channelId].map(
              (msg: Message) => {
                if (msg.id === data.messageId) {
                  const updatedReactions = { ...msg.reactions };

                  if (data.action === "add") {
                    if (updatedReactions[data.emoji as any]) {
                      updatedReactions[data.emoji as any] = [
                        ...updatedReactions[data.emoji as any],
                        data.user,
                      ];
                    } else {
                      updatedReactions[data.emoji as any] = [data.user];
                    }
                  } else if (data.action === "remove") {
                    if (updatedReactions[data.emoji as any]) {
                      updatedReactions[data.emoji as any] = updatedReactions[
                        data.emoji as any
                      ].filter((user: User) => user.id !== data.user.id);

                      // Remove the emoji key if there are no users left
                      if (updatedReactions[data.emoji as any].length === 0) {
                        delete updatedReactions[data.emoji as any];
                      }
                    }
                  }

                  return { ...msg, reactions: updatedReactions };
                }
                return msg;
              }
            );
          }
        });
        return updatedChats;
      });
    };

    socket.on("reaction updated", handleReactionUpdated);

    return () => {
      socket.off("reaction updated", handleReactionUpdated);
    };
  }, [socket, setChats]);

  const handleTypingStart = () => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    socket?.emit(
      "start typing",
      selectedChat?.id,
      currentUser.id,
      currentUser.username
    );

    typingTimeoutRef.current = setTimeout(() => {
      socket?.emit(
        "stop typing",
        selectedChat?.id,
        currentUser.id,
        currentUser.username
      );
    }, 3000);
  };

  const handleEmojiClick = async (messageId: string, emoji: string) => {
    handleReaction(messageId, emoji);
  };

  const handleLoadMore = useCallback(() => {
    if (hasMoreMessages && !isLoadingMore && !fetchingChat) {
      setIsLoadingMore(true);
      onLoadMore();
    }
  }, [hasMoreMessages, isLoadingMore, onLoadMore, fetchingChat]);

  useEffect(() => {
    setIsLoadingMore(false);
  }, [chats]);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMoreMessages && !isLoadingMore) {
          handleLoadMore();
        }
      },
      { threshold: 0.5 }
    );

    if (loadingRef.current) {
      observerRef.current.observe(loadingRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleLoadMore, hasMoreMessages, isLoadingMore]);

  const renderReplyPreview = (parentPreview: any) => {
    return (
      <div
        className="flex items-center bg-gray-200 text-sm space-x-3 text-muted-foreground bg-muted rounded-md mb-2 cursor-pointer hover:bg-muted-foreground/10"
        onClick={() => scrollToMessage(parentPreview.id)}
      >
        <MessageSquare className="h-4 w-4" />
        <Avatar className="w-4 h-4">
          <AvatarImage
            src={parentPreview.user.pfp}
            alt={parentPreview.user.username}
          />
          <AvatarFallback>
            {parentPreview.user.username.toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <span className="font-semibold text-xs">
          {parentPreview.user.username}
        </span>
        {/* Add text wrapping to the content */}
        <span className="break-words text-xs">{parentPreview.content}</span>
      </div>
    );
  };

  const renderMessage = (message: Message, depth: number = 0) => (
    <div
      key={message.id}
      className="group bg-muted rounded-md p-1.5"
      ref={(el: any) => (messageRefs.current[message.id] = el)}
    >
      {message.parent_preview && renderReplyPreview(message.parent_preview)}

      <div className="flex items-start space-x-3">
        <Avatar className="w-8 h-8 flex-shrink-0">
          <AvatarImage src={message.user.pfp} alt={message.user.username} />
          <AvatarFallback>
            {message.user.username[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="font-semibold md:text-sm break-words">
                {message.user.username}
              </span>
              <span className="text-xs text-muted-foreground break-words">
                {formatTimestamp(message.created_at)}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setReplyingTo(message)}
                className="md:opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <CornerDownRight className="h-4 w-4" />
              </Button>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-6 w-6 p-0 md:opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Smile className="h-3 w-3" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0">
                  <EmojiPickerWrapper
                    onEmojiSelect={(emoji) =>
                      handleEmojiClick(message.id, emoji)
                    }
                  />
                </PopoverContent>
              </Popover>
              {(message.user.id === currentUser.id || isAdmin) && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDeleteMessage(message)}
                  className="md:opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6 p-0"
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              )}
            </div>
          </div>

          {/* Add text wrapping to the message content */}
          <p className="text-xs md: text-sm leading-relaxed break-words">
            {truncateAndLinkify(message.content)}
          </p>
          {message.embeds && (
            <div className="flex flex-col space-y-2 mt-2">
              {message.embeds.map((embed, index) => (
                <UrlPreview key={index} metadata={embed} />
              ))}
            </div>
          )}
          <ReactionList
            message={message as any}
            handleEmojiClick={handleEmojiClick}
          />
        </div>
      </div>
    </div>
  );

  const truncateAndLinkify = (content: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const maxLength = 30;

    return content.split(urlRegex).map((part, index) => {
      if (part.match(urlRegex)) {
        const truncatedUrl =
          part.length > maxLength ? part.slice(0, maxLength) + "..." : part;
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {truncatedUrl}
          </a>
        );
      }
      return part;
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShouldAutoScroll(entry.isIntersecting);
        setIsLatestVisible(entry.isIntersecting);
      },
      {
        root: scrollAreaRef.current,
        threshold: 0.01,
      }
    );

    if (scrollToRef.current) {
      observer.observe(scrollToRef.current);
    }

    return () => {
      if (scrollToRef.current) {
        observer.unobserve(scrollToRef.current);
      }
    };
  }, [chats, selectedChat]);

  useEffect(() => {
    if (shouldAutoScroll && scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chats, selectedChat, shouldAutoScroll]);

  return (
    <div className="flex flex-col w-full h-full bg-background border p-2">
      {selectedChat && <p className="text-center">{selectedChat.name}</p>}
      {!isLatestVisible && (
        <div className="flex flex-row justify-end">
          <Button className="" onClick={scrollToBottom}>
            <ChevronDown className="h-4 w-4 mr-2" />
            Scroll to bottom
          </Button>
        </div>
      )}
      <div className="flex-grow overflow-hidden">
        <ScrollArea
          className="h-full p-4 flex flex-col items-center"
          ref={chatScrollRef}
        >
          {hasMoreMessages && (
            <div ref={loadingRef} className="py-2 flex justify-center" />
          )}
          <div className="space-y-6">
            {selectedChat &&
              chats[selectedChat.id]?.map((message) => renderMessage(message))}
          </div>
          <div ref={scrollToRef} className="h-px" />
        </ScrollArea>
      </div>
      <div className="p-4 border-t">
        {typingUsers.size > 0 && (
          <div className="text-xs text-muted-foreground italic mb-2">
            {Array.from(typingUsers).join(", ")}{" "}
            {typingUsers.size === 1 ? "is" : "are"} typing...
          </div>
        )}
        {replyingTo && (
          <ReplyPreview
            replyingTo={replyingTo}
            onCancelReply={() => setReplyingTo(null)}
            onClickPreview={scrollToMessage}
          />
        )}
        <div className="flex items-end space-x-2">
          <Textarea
            placeholder={
              replyingTo ? "Write your reply..." : "Type your message..."
            }
            value={newMessage}
            onChange={(e) => {
              setNewMessage(e.target.value);
              handleTypingStart();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                if (!isUploading) {
                  handleSendMessage();
                }
              }
            }}
            className="flex-grow min-h-[60px] max-h-[120px] resize-none"
          />
          <div {...getRootProps()} className="relative">
            <input {...getInputProps()} />
            <Button
              size="icon"
              variant="outline"
              className={`h-10 w-10 ${
                isDragActive ? "bg-primary text-primary-foreground" : ""
              }`}
              disabled={imageFiles.length >= 2 || isUploading}
            >
              <Image className="h-4 w-4" />
            </Button>
          </div>
          <Button
            onClick={handleSendMessage}
            size="icon"
            disabled={isUploading}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        {imageFiles.length > 0 && (
          <div className="flex space-x-2 mt-2">
            {imageFiles.map((file, index) => (
              <div key={index} className="relative">
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Selected image ${index + 1}`}
                  className="h-16 w-16 object-cover rounded"
                />
                <Button
                  size="icon"
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-6 w-6"
                  onClick={() => removeImage(index)}
                  disabled={isUploading}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

```

# src/components/AnnouncementAndMembersSection/index.tsx

```tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { HubItem } from "@/lib/types";
import { ScrollArea } from "../ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ChevronDown } from "lucide-react";

interface AnnouncementAndMembersSectionProps {
  selectedHub: HubItem | null;
}

export function AnnouncementAndMembersSection({
  selectedHub,
}: AnnouncementAndMembersSectionProps) {
  const [expandedAnnouncement, setExpandedAnnouncement] = useState<
    string | null
  >(null);

  return (
    <div className="mb-4">
      {selectedHub && (
        <>
          <h4 className="font-semibold mb-2">Announcements</h4>
          <ScrollArea className="h-[100px] w-full rounded-md border p-2">
            {selectedHub.announcements.map((announcement) => (
              <Card key={announcement.id} className="mb-2">
                <CardHeader
                  className="cursor-pointer p-2"
                  onClick={() =>
                    setExpandedAnnouncement(
                      expandedAnnouncement === announcement.id
                        ? null
                        : announcement.id
                    )
                  }
                >
                  <CardTitle className="text-sm flex justify-between items-center">
                    {announcement.title}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedAnnouncement === announcement.id
                          ? "transform rotate-180"
                          : ""
                      }`}
                    />
                  </CardTitle>
                </CardHeader>
                {expandedAnnouncement === announcement.id && (
                  <CardContent className="p-2">
                    <p className="text-sm">{announcement.content}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </ScrollArea>
        </>
      )}
    </div>
  );
}

```

# src/components/AccountModal/index.tsx

```tsx
"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { updateUser, clearUser } from "@/store/slices/userSlice";
import { setIsAccountModalOpen } from "@/store/slices/serverSlice";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./../ui/dialog";

import { SERVER_URL } from "@/lib/utils";
import { usePrivy } from "@privy-io/react-auth";
import { ImageUpload } from "@/components/ImageUpload";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import * as amplitude from "@amplitude/analytics-browser";

export function AccountModal() {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const { isAccountModalOpen } = useSelector(
    (state: RootState) => state.servers
  );
  const { getAccessToken, logout } = usePrivy();

  const [username, setUsername] = useState(user?.username || "");
  const [description, setDescription] = useState(user?.bio || "");
  const [pfp, setPfp] = useState<File | null>(null);

  const handleUpdateAccount = async () => {
    if (!user) return;

    const accessToken = await getAccessToken();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("bio", description);
    if (pfp) {
      formData.append("pfp", pfp);
    }

    try {
      const response = await fetch(`${SERVER_URL}/user`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Failed to update account");
      }

      const updatedUser = await response.json();
      dispatch(updateUser(updatedUser));
      dispatch(setIsAccountModalOpen(false));
    } catch (error) {
      console.error("Error updating account:", error);
    }
  };

  const handleImageChange = (file: File) => {
    setPfp(file);
  };

  const handleLogout = () => {
    if (user) {
      amplitude.track("User Logged Out", { userId: user?.id });
      logout();
      dispatch(clearUser());
      dispatch(setIsAccountModalOpen(false));
    }
  };

  return (
    <Dialog
      open={isAccountModalOpen}
      onOpenChange={(open: any) => dispatch(setIsAccountModalOpen(open))}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Account Settings</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <ImageUpload
            currentImage={user?.pfp}
            onImageChange={handleImageChange}
            fallback={user?.username?.[0] || "U"}
          />
          <Input
            placeholder="Username"
            value={username}
            onChange={(e: any) => setUsername(e.target.value)}
          />
          <Textarea
            placeholder="Description"
            value={description}
            onChange={(e: any) => setDescription(e.target.value)}
          />
          <div className="flex flex-row justify-between ">
            <Button onClick={handleUpdateAccount}>Update Account</Button>
            <Button variant="destructive" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

```

# src/app/fonts/GeistVF.woff

This is a binary file of the type: Binary

# src/app/fonts/GeistMonoVF.woff

This is a binary file of the type: Binary

# src/store/slices/userSlice.ts

```ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/lib/types";

interface UserState {
  user: User | null;
  authenticated: boolean;
  isInviteModalOpen: boolean;
}

const initialState: UserState = {
  user: null,
  authenticated: false,
  isInviteModalOpen: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setInviteModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isInviteModalOpen = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.authenticated = true;
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
    clearUser: (state) => {
      state.user = null;
      state.authenticated = false;
    },
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.authenticated = action.payload;
    },
  },
});

export const {
  setUser,
  updateUser,
  clearUser,
  setAuthenticated,
  setInviteModalOpen,
} = userSlice.actions;
export default userSlice.reducer;

```

# src/store/slices/serverSlice.ts

```ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HubItem, User, Message } from "@/lib/types";

interface ServerState {
  servers: HubItem[];
  isAccountModalOpen: boolean;
  selectedServer: HubItem | null;
  selectedChat: any | null; // Replace `any` with the proper type if you have it
  chats: { [key: string]: Message[] };
}

const initialState: ServerState = {
  servers: [],
  isAccountModalOpen: false,
  selectedServer: null,
  selectedChat: null,
  chats: {},
};

const serverSlice = createSlice({
  name: "servers",
  initialState,
  reducers: {
    setServers: (state, action: PayloadAction<HubItem[]>) => {
      state.servers = action.payload;
      // Set selected server to the first server in the list
      if (action.payload.length > 0) {
        state.selectedServer = action.payload[0];
        // // Set selected chat to the first chat in the selected server
        // if (state.selectedServer?.channels.length > 0) {
        //   state.selectedChat = state.selectedServer.channels[0];
        // }
      }
    },
    setSelectedServer: (state, action: PayloadAction<HubItem | null>) => {
      state.selectedServer = action.payload;
      if (action.payload && action.payload.channels.length > 0) {
        state.selectedChat = action.payload.channels[0];
      } else {
        state.selectedChat = null;
      }
    },
    setSelectedChat: (state, action: PayloadAction<any>) => {
      state.selectedChat = action.payload;
    },
    addServer: (state, action: PayloadAction<HubItem>) => {
      state.servers.push(action.payload);
    },
    updateServer: (state, action: PayloadAction<HubItem>) => {
      const index = state.servers.findIndex(
        (server) => server.id === action.payload.id
      );
      if (index !== -1) {
        state.servers[index] = action.payload;
      }
    },
    removeServer: (state, action: PayloadAction<string>) => {
      state.servers = state.servers.filter(
        (server) => server.id !== action.payload
      );
      // Clear selected server and chat if they were removed
      if (state.selectedServer?.id === action.payload) {
        state.selectedServer = null;
        state.selectedChat = null;
      }
    },
    setIsAccountModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isAccountModalOpen = action.payload;
    },
    addMemberToServer: (
      state,
      action: PayloadAction<{ serverId: string; user: User }>
    ) => {
      const { serverId, user } = action.payload;
      const server = state.servers.find((s) => s.id === serverId);
      if (server) {
        server.members.push(user);
      }
      if (state.selectedServer && state.selectedServer.id === serverId) {
        state.selectedServer.members.push(user);
      }
    },
    setMemberOnlineStatus: (
      state,
      action: PayloadAction<{
        userId: string;
        isOnline: boolean;
      }>
    ) => {
      const { userId, isOnline } = action.payload;
      state.servers.forEach((server) => {
        const member = server.members.find((m) => m.id === userId);
        if (member) {
          member.status = isOnline;
        }
      });
      // Update selected server if the user is online
      if (state.selectedServer) {
        const member = state.selectedServer.members.find(
          (m) => m.id === userId
        );
        if (member) {
          member.status = isOnline;
        }
      }
    },
    setChats: (state, action: PayloadAction<{ [key: string]: Message[] }>) => {
      state.chats = action.payload;
    },
    addChatMessage: (
      state,
      action: PayloadAction<{ channelId: string; message: Message }>
    ) => {
      const { channelId, message } = action.payload;
      if (!state.chats[channelId]) {
        state.chats[channelId] = [];
      }
      state.chats[channelId].push(message);
    },
  },
});

export const {
  setServers,
  addServer,
  updateServer,
  removeServer,
  setIsAccountModalOpen,
  setMemberOnlineStatus,
  setSelectedServer,
  addMemberToServer,
  setSelectedChat,
  setChats,
  addChatMessage,
} = serverSlice.actions;

export default serverSlice.reducer;

```

# src/components/HubNavigation/index.tsx

```tsx
import { useRef, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  MessageSquare,
  Plus,
  Link,
  Infinity,
  AlertCircle,
  Trash2,
} from "lucide-react";
import { HubItem } from "@/lib/types";
import { ScrollArea } from "../ui/scroll-area";
import { Skeleton } from "../ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setSelectedServer } from "@/store/slices/serverSlice";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { usePrivy } from "@privy-io/react-auth";
import { SERVER_URL } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import { Slider } from "../ui/slider";
import { Switch } from "../ui/switch";
import * as amplitude from "@amplitude/analytics-browser";

interface HubNavigationProps {
  hubs: HubItem[];
  onSelectChat: (chat: any) => void;
  onCreateServer: () => void;
  onOpenInvites: () => void;
  selectedChat: any;
  selectedHub: HubItem;
  isLoading: boolean;
}

export function HubNavigation({
  hubs,
  onSelectChat,
  selectedChat,
  selectedHub,
  onCreateServer,
  onOpenInvites,
  isLoading,
}: HubNavigationProps) {
  const { selectedServer } = useSelector((state: RootState) => state.servers);
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [inviteUses, setInviteUses] = useState<number>(1);
  const [noExpiration, setNoExpiration] = useState<boolean>(true);
  const { getAccessToken } = usePrivy();
  const tempInputRef = useRef<HTMLInputElement>(null);
  // Manage state for collapsibles
  const [openHubs, setOpenHubs] = useState<Record<string, boolean>>({});

  const handleSelectHub = (hub: HubItem) => {
    amplitude.track("Server clicked on", {
      serverId: hub.id,
      userId: user?.id,
    });
    dispatch(setSelectedServer(hub));
  };

  const handleDeleteServer = async (serverId: string) => {
    if (
      window.confirm(
        "Are you sure you want to delete this server? This action cannot be undone."
      )
    ) {
      try {
        const response = await fetch(`${SERVER_URL}/servers/${serverId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${await getAccessToken()}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to delete server");
        }

        amplitude.track("Server Deleted", { serverId, userId: user?.id });
        toast({
          title: "Server deleted successfully",
        });
      } catch (error) {
        console.error("Error deleting server:", error);
        toast({
          title: "Failed to delete server",
          variant: "destructive",
        });
      }
    }
  };

  const handleCreateInvite = async (serverId: string) => {
    try {
      const accessToken = await getAccessToken();
      const response = await fetch(`${SERVER_URL}/invites/${serverId}/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          uses: inviteUses === 100 ? 0 : inviteUses, // 0 means unlimited
          expiresAt: noExpiration ? null : undefined, // null means no expiration
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to create invite");
      }

      const data = await response.json();
      const inviteUrl = `${window.location.origin}/invite/${data.token}`;
      amplitude.track("Invite made", { serverId, userId: user?.id });

      // Attempt to use the clipboard API
      try {
        await navigator.clipboard.writeText(inviteUrl);
        toast({
          title: "Created Invite",
          description: "Invite link copied.",
        });
      } catch (clipboardError) {
        console.error("Error writing to clipboard:", clipboardError);

        // Fallback method using a temporary input element
        if (tempInputRef.current) {
          tempInputRef.current.value = inviteUrl;
          tempInputRef.current.select();
          document.execCommand("copy");
          toast({
            title: "Created Invite",
            description: "Invite link copied.",
          });
        } else {
          throw new Error("Fallback method failed");
        }
      }
    } catch (error) {
      console.error("Error creating invite:", error);
      toast({
        title: "Failed to create or copy invite",
        description: "Please try again or copy the link manually.",
        variant: "destructive",
      });
    }
  };

  const isUserAdminInServer = (item: HubItem) => {
    const userMember = item.members?.find((member) => member.id === user?.id);
    return userMember && userMember.roles
      ? userMember?.roles.some((role: any) => {
          return role?.permissions === 18446744073709552000;
        }) || false
      : false;
  };

  const toggleCollapsible = (hubId: string) => {
    setOpenHubs((prevState) => ({
      ...prevState,
      [hubId]: !prevState[hubId],
    }));
  };

  const renderHubStructure = (items: HubItem[], depth = 0) => (
    <>
      {items.map((item) => (
        <div key={item.id} className="flex items-center">
          <Collapsible
            key={item.id}
            open={selectedHub.id === item.id || openHubs[item.id]}
          >
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className={`w-full justify-between pl-${4 + depth * 4}`}
                onClick={() => {
                  handleSelectHub(item);
                  toggleCollapsible(item.id);
                }}
              >
                <span className="flex items-center">
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span className="ml-2">{item.name}</span>
                </span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              {/* Render Channels for the Hub */}
              {item.channels &&
                item.channels.map((channel: any) => (
                  <Button
                    key={channel.id}
                    variant="ghost"
                    className={`w-full justify-start pl-${8 + depth * 4}`}
                    onClick={() => {
                      amplitude.track("Chat clicked on", {
                        chatId: channel.id,
                        userId: user?.id,
                        serverId: item?.id,
                      });
                      onSelectChat(channel);
                    }}
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    {channel.name}
                  </Button>
                ))}

              {/* Render Threads for the Hub */}
              {item.threads &&
                item.threads.map((thread) => (
                  <Button
                    key={thread.id}
                    variant="ghost"
                    className={`w-full justify-start pl-${8 + depth * 4}`}
                    onClick={() => onSelectChat(thread)}
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    {thread.title}
                  </Button>
                ))}

              {item.subHubs && renderHubStructure(item.subHubs, depth + 1)}
            </CollapsibleContent>
          </Collapsible>
          <div className="flex">
            {isUserAdminInServer(item) && (
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Link className="w-4 h-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-4">
                    <h4 className="font-medium">Invite Settings</h4>
                    <div className="flex items-center justify-between">
                      <span>Uses:</span>
                      <div className="flex items-center space-x-2">
                        <Slider
                          value={[inviteUses]}
                          onValueChange={(value) => setInviteUses(value[0])}
                          max={100}
                          step={1}
                          className="w-[100px]"
                        />
                        {inviteUses === 100 ? (
                          <Infinity className="w-4 h-4" />
                        ) : (
                          inviteUses
                        )}
                      </div>
                    </div>
                    <Button
                      onClick={async () => await handleCreateInvite(item.id)}
                      className="w-full"
                    >
                      Generate and Copy Invite
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            )}
            {isUserAdminInServer(item) && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleDeleteServer(item.id)}
              >
                <Trash2 className="w-4 h-4 text-red-500" />
              </Button>
            )}
          </div>
        </div>
      ))}
    </>
  );

  const renderSkeleton = () => (
    <div className="space-y-2">
      {[...Array(5)].map((_, index) => (
        <Skeleton key={index} className="h-8 w-full" />
      ))}
    </div>
  );

  const renderEmptyState = () => (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">No Hubs Available</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          You do not have any servers yet. Create a new server or get an invite
          to get started.
        </p>
        <div className="flex flex-col space-y-2"></div>
      </CardContent>
    </Card>
  );

  return (
    <div className="col-span-1 border rounded-none p-4">
      <input
        ref={tempInputRef}
        type="text"
        className="sr-only"
        aria-hidden="true"
      />
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold">Servers</h3>
      </div>
      <ScrollArea className="h-full">
        {isLoading
          ? renderSkeleton()
          : hubs.length > 0
          ? renderHubStructure(hubs)
          : renderEmptyState()}
      </ScrollArea>
    </div>
  );
}

```


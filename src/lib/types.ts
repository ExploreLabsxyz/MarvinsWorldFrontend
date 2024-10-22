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

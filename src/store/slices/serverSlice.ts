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

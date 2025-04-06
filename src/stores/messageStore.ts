import { create } from 'zustand';

/**
 * 消息数据接口
 */
interface Message {
  id: string;
  title: string;
  content: string;
  likes: number;
  isLiked: boolean;
}

/**
 * 消息状态管理接口
 */
interface MessageState {
  messages: Message[];
  currentMessage: Message | null;
  /**
   * 获取消息列表
   */
  fetchMessages: () => Promise<void>;
  /**
   * 获取消息详情
   * @param id 消息ID
   */
  fetchMessageDetail: (id: string) => Promise<void>;
  /**
   * 处理消息点赞
   * @param id 消息ID
   */
  toggleLike: (id: string) => Promise<void>;
}

/**
 * 消息状态管理store
 */
export const useMessageStore = create<MessageState>((set, get) => ({
  messages: [],
  currentMessage: null,

  fetchMessages: async () => {
    try {
      const response = await fetch('/api/messages');
      const { data } = await response.json();
      set({ messages: data });
    } catch (error) {
      console.error('获取消息列表失败:', error);
    }
  },

  fetchMessageDetail: async (id: string) => {
    try {
      const response = await fetch(`/api/messages/${id}`);
      const { data } = await response.json();
      set({ currentMessage: data });

      // 同步更新列表中的消息状态
      const { messages } = get();
      const updatedMessages = messages.map(msg => 
        msg.id === id ? data : msg
      );
      set({ messages: updatedMessages });
    } catch (error) {
      console.error('获取消息详情失败:', error);
    }
  },

  toggleLike: async (id: string) => {
    try {
      const response = await fetch(`/api/messages/${id}/like`, {
        method: 'POST'
      });
      const { data } = await response.json();

      // 同步更新列表和详情的点赞状态
      const { messages, currentMessage } = get();
      const updatedMessages = messages.map(msg => 
        msg.id === id ? data : msg
      );
      set({ 
        messages: updatedMessages,
        currentMessage: currentMessage?.id === id ? data : currentMessage
      });
    } catch (error) {
      console.error('处理点赞失败:', error);
    }
  }
})); 
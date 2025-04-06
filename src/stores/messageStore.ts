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
  // TODO: 实现消息列表、消息详情和点赞相关的状态管理方法
}

/**
 * 消息状态管理store
 */
export const useMessageStore = create<MessageState>(() => ({
  messages: [],
  currentMessage: null,
})); 
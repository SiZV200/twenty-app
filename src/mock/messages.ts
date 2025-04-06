/**
 * 模拟消息数据
 */
const mockMessages = [
  {
    id: '1',
    title: '关于新产品发布的通知',
    content: '我们很高兴地宣布，新产品将于下月正式发布...',
    likes: 15,
    isLiked: false,
  },
  {
    id: '2',
    title: '团队建设活动预告',
    content: '为增进团队成员间的交流，我们将举办...',
    likes: 8,
    isLiked: false,
  },
  {
    id: '3',
    title: '技术分享会议纪要',
    content: '在今天的技术分享会上，我们讨论了以下主题...',
    likes: 12,
    isLiked: false,
  },
];

/**
 * Mock API处理器
 */
export default {
  // 获取消息列表
  'GET /api/messages': (req: any, res: any) => {
    res.json({
      success: true,
      data: mockMessages,
    });
  },

  // 获取消息详情
  'GET /api/messages/:id': (req: any, res: any) => {
    const { id } = req.params;
    const message = mockMessages.find(m => m.id === id);
    
    if (message) {
      res.json({
        success: true,
        data: message,
      });
    } else {
      res.status(404).json({
        success: false,
        message: '消息不存在',
      });
    }
  },

  // 处理点赞
  'POST /api/messages/:id/like': (req: any, res: any) => {
    const { id } = req.params;
    const message = mockMessages.find(m => m.id === id);
    
    if (message) {
      message.isLiked = !message.isLiked;
      message.likes += message.isLiked ? 1 : -1;
      
      res.json({
        success: true,
        data: message,
      });
    } else {
      res.status(404).json({
        success: false,
        message: '消息不存在',
      });
    }
  },
}; 
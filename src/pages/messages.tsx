import React, { useEffect } from 'react';
import { history } from 'umi';
import { Card, List, Button, Space } from 'antd';
import { LikeOutlined, LikeFilled } from '@ant-design/icons';
import { useMessageStore } from '@/stores/messageStore';

/**
 * 消息列表页面组件
 * @returns {JSX.Element} 消息列表页面
 */
const MessagesPage: React.FC = () => {
  // TODO: 实现以下功能
  // 1. 调用后端API获取消息列表数据
  // 2. 实现点赞功能，确保点赞状态能够跨页面同步
  // 3. 添加页面样式，美化界面（加分项）
  
  // 提示：
  // - 使用 useMessageStore 来管理全局状态
  // - 使用 history.push('/message/${id}') 进行页面跳转
  // - 后端API: GET /api/messages 获取消息列表
  // - 后端API: POST /api/messages/${id}/like 处理点赞

  const { messages, fetchMessages, toggleLike } = useMessageStore();

  useEffect(() => {
    fetchMessages();
  }, []);

  /**
   * 处理消息点赞
   * @param id 消息ID
   */
  const handleLike = (id: string) => {
    toggleLike(id);
  };

  /**
   * 跳转到消息详情页
   * @param id 消息ID
   */
  const handleMessageClick = (id: string) => {
    history.push(`/message/${id}`);
  };

  return (
    <div className="messages-page" style={{ padding: '24px' }}>
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={messages}
        renderItem={(message) => (
          <List.Item>
            <Card
              hoverable
              onClick={() => handleMessageClick(message.id)}
              actions={[
                <Button
                  key="like"
                  type="text"
                  icon={message.isLiked ? <LikeFilled /> : <LikeOutlined />}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLike(message.id);
                  }}
                >
                  {message.likes} 赞
                </Button>
              ]}
            >
              <Card.Meta
                title={message.title}
                description={
                  <div style={{ 
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical'
                  }}>
                    {message.content}
                  </div>
                }
              />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default MessagesPage; 
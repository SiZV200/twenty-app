import React from 'react';
import { history } from 'umi';
import { Card, List, Button, Space } from 'antd';
import { LikeOutlined, LikeFilled } from '@ant-design/icons';
import { useMessageStore } from '@/stores/messageStore';

/**
 * 消息列表页面组件
 */
const MessagesPage: React.FC = () => {
  // 模拟数据，方便开发时查看UI效果
  const mockMessages = [
    {
      id: '1',
      title: '示例消息1',
      content: '这是一条示例消息...',
      likes: 10,
      isLiked: false
    }
  ];

  // TODO: 实现消息列表获取和点赞功能
  const messages = mockMessages;

  const handleLike = (id: string) => {
    // TODO: 实现点赞功能
  };

  const handleMessageClick = (id: string) => {
    // TODO: 实现页面跳转
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
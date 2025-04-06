import React from 'react';
import { useParams, history } from 'umi';
import { Card, Button, Space } from 'antd';
import { LikeOutlined, LikeFilled, ArrowLeftOutlined } from '@ant-design/icons';
import { useMessageStore } from '@/stores/messageStore';

/**
 * 消息详情页面组件
 */
const MessageDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // 模拟数据，方便开发时查看UI效果
  const mockMessage = {
    id: '1',
    title: '示例消息1',
    content: '这是一条示例消息的详细内容...',
    likes: 10,
    isLiked: false
  };

  // TODO: 实现消息详情获取和点赞功能
  const currentMessage = mockMessage;

  const handleLike = () => {
    // TODO: 实现点赞功能
  };

  const handleBack = () => {
    history.push('/');
  };

  if (!currentMessage) {
    return <div>加载中...</div>;
  }

  return (
    <div className="message-detail-page" style={{ padding: '24px' }}>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Button 
          type="link" 
          icon={<ArrowLeftOutlined />}
          onClick={handleBack}
        >
          返回列表
        </Button>
        <Card
          actions={[
            <Button
              key="like"
              type="text"
              icon={currentMessage.isLiked ? <LikeFilled /> : <LikeOutlined />}
              onClick={handleLike}
            >
              {currentMessage.likes} 赞
            </Button>
          ]}
        >
          <Card.Meta
            title={currentMessage.title}
            description={
              <div style={{ whiteSpace: 'pre-wrap' }}>
                {currentMessage.content}
              </div>
            }
          />
        </Card>
      </Space>
    </div>
  );
};

export default MessageDetailPage; 
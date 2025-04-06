import React, { useEffect } from 'react';
import { useParams, history } from 'umi';
import { Card, Button, Space } from 'antd';
import { LikeOutlined, LikeFilled, ArrowLeftOutlined } from '@ant-design/icons';
import { useMessageStore } from '@/stores/messageStore';

/**
 * 消息详情页面组件
 * @returns {JSX.Element} 消息详情页面
 */
const MessageDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // TODO: 实现以下功能
  // 1. 调用后端API获取消息详情
  // 2. 实现点赞功能，确保点赞状态能够跨页面同步
  // 3. 添加页面样式，美化界面（加分项）

  const { currentMessage, fetchMessageDetail, toggleLike } = useMessageStore();

  useEffect(() => {
    if (id) {
      fetchMessageDetail(id);
    }
  }, [id]);

  /**
   * 处理消息点赞
   */
  const handleLike = () => {
    if (id) {
      toggleLike(id);
    }
  };

  /**
   * 返回列表页
   */
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
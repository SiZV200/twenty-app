# 消息管理系统面试题

## 项目说明
这是一个基于React + UmiJS的消息管理系统，包含消息列表和消息详情两个页面。系统已经提供了基础的UI界面和后端Mock接口，需要你来实现核心的业务逻辑。

## 技术栈
- React 18
- UmiJS 4
- Zustand (状态管理)
- Ant Design 5

## 开发环境
```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm run dev
```

## 需求说明
1. **消息列表页面** (`/src/pages/messages.tsx`)
   - 调用API获取消息列表
   - 实现点赞功能
   - 点击消息卡片跳转到详情页

2. **消息详情页面** (`/src/pages/messageDetail.tsx`)
   - 获取并展示消息详情
   - 实现点赞功能
   - 确保与列表页的点赞状态同步

3. **全局状态管理** (`/src/stores/messageStore.ts`)
   - 实现点赞功能
   - 确保列表页和详情页的点赞状态同步

## API说明
所有API都已通过UmiJS的Mock功能实现：

1. 获取消息列表
   ```
   GET /api/messages
   Response: { success: true, data: Message[] }
   ```

2. 获取消息详情
   ```
   GET /api/messages/:id
   Response: { success: true, data: Message }
   ```

3. 点赞/取消点赞
   ```
   POST /api/messages/:id/like
   Response: { success: true, data: Message }
   ```

## 评分标准
1. 基础功能完整性（50%）
   - API调用实现
   - 点赞功能实现
   - 页面导航实现

2. 状态管理（30%）
   - Zustand store的实现质量
   - 状态同步的准确性
   - 代码组织结构

3. 代码质量（20%）
   - TypeScript类型定义
   - 错误处理
   - 代码复用性
   - 代码可读性

4. 加分项
   - UI/UX改进
   - 性能优化
   - 单元测试
   - 额外功能扩展

## 提示
- 仔细阅读各文件中的TODO注释
- 使用TypeScript类型定义
- 注意错误处理
- 可以自由优化UI设计 
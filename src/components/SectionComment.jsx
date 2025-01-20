import React, { useState } from "react";
import { Tree, Input, Button, Tooltip } from "antd";
import { EnterOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const CommentSection = ({ comments }) => {
  const [replyText, setReplyText] = useState("");
  const [activeReplyId, setActiveReplyId] = useState(null);

  const handleReplyClick = (commentId) => {
    setActiveReplyId((prevId) => (prevId === commentId ? null : commentId));
  };

  const handleReplyChange = (e) => {
    setReplyText(e.target.value);
  };

  const handleReplySubmit = (commentId) => {
    console.log(`Reply to comment ID: ${commentId}, Text: ${replyText}`);
    setActiveReplyId(null);
    setReplyText("");
  };

  const renderComments = (comments, level = 0) => {
    return comments.map((comment) => {
      const treeNode = {
        title: (
          <div>
            <strong>{comment.user_display_name}</strong> -{" "}
            <small>
              {new Date(comment.comment_created_at).toLocaleString()}{" "}
              {level == 0 && (
                <Tooltip title="Trả lời">
                  <Button
                    type="link"
                    size="small"
                    icon={<EnterOutlined />}
                    onClick={() => handleReplyClick(comment.comment_id)}
                  />
                </Tooltip>
              )}
            </small>
            <div>{comment.comment_text}</div>
            {activeReplyId === comment.comment_id && (
              <div style={{ marginTop: 10 }}>
                <TextArea
                  rows={2}
                  value={replyText}
                  onChange={handleReplyChange}
                  placeholder="Nhập phản hồi của bạn..."
                />
                <Button
                  type="primary"
                  size="small"
                  style={{ marginTop: 5 }}
                  onClick={() =>
                    handleReplySubmit(comment.comment_id)
                  }
                >
                  Gửi
                </Button>
              </div>
            )}
          </div>
        ),
        key: comment.comment_id.toString(),
        children: renderComments(comment.replies || [],  level + 1) // Đệ quy để hiển thị replies
      };

      return treeNode;
    });
  };

  const treeData = renderComments(comments);

  return <Tree selectable={false} treeData={treeData} defaultExpandAll />;
};

export default CommentSection;

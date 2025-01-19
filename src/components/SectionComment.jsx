import React, { useState } from 'react';
import { Button, Input, List, Tooltip } from 'antd';
import { CommentOutlined, EnterOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const CommentSection = ({ comments }) => {
    const [activeReplyId, setActiveReplyId] = useState(null);
    const [replyText, setReplyText] = useState('');

    const handleReplyClick = (commentId) => {
        setActiveReplyId((prevId) => (prevId === commentId ? null : commentId));
    };

    const handleReplyChange = (e) => {
        setReplyText(e.target.value);
    };

    const handleReplySubmit = (commentId) => {
        handleReplyComment(replyText, commentId)
        setActiveReplyId(null);
        setReplyText('');
    };

    return (
        <div className="comments-list" style={{ marginTop: 20 }}>
            {comments.map((comment) => (
                <div key={comment.comment_id} className="comment-item" style={{ marginBottom: 20 }}>
                    <p>
                        <strong>{comment.user_display_name}</strong>- <small>{new Date(comment.comment_created_at).toLocaleString()}</small>
                        <Tooltip title="Trả lời">
                            <Button
                                type="link"
                                size="small"
                                icon={<EnterOutlined />}
                                onClick={() => handleReplyClick(comment.comment_id)}
                            />
                        </Tooltip>
                    </p>
                    <p>{comment.comment_text}</p>

                    {comment.replies && comment.replies.length > 0 && (
                        <List
                            size="small"
                            bordered
                            dataSource={comment.replies}
                            renderItem={(reply, index) => (<div key={reply.comment_id} style={{ paddingLeft: 20 }}>
                                <p>
                                    <strong>{reply.user_display_name}</strong>- <small>{new Date(reply.comment_created_at).toLocaleString()}</small>
                                </p>
                                <p>{reply.comment_text}</p>
                                {index < comment.replies.length - 1 && (
                                    <hr style={{ marginBottom: '10px', border: '1px solid #e8e8e8' }} />
                                )}
                            </div>
                            )}
                        />
                    )}
                    {activeReplyId === comment.comment_id && (
                        <div style={{ marginTop: 10 }}>
                            <TextArea
                                rows={2}
                                value={replyText}
                                onChange={handleReplyChange}
                            />
                            <Button
                                type="primary"
                                size="small"
                                style={{ marginTop: 5 }}
                                onClick={() => handleReplySubmit(comment.comment_id)}
                            >
                                Gửi
                            </Button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default CommentSection;

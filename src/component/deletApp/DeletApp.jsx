import React from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Popconfirm } from 'antd';
const DeletApp = () => (
  <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    icon={<QuestionCircleOutlined style={{ color: 'red',  }} />}
  >
    <Button style={{width: "200px"}} danger>Delete</Button>
  </Popconfirm>
);
export default DeletApp;
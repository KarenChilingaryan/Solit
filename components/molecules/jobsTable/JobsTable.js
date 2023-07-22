import { memo } from "react";
import { Button, Input, Space, Table, Tag } from "antd";
import { Row } from "../../atoms";

import styles from "./JobsTable.module.scss";

const columns = [
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Department",
    dataIndex: "department",
    key: "department",
  },
  {
    title: "Project",
    dataIndex: "position",
    key: "position",
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
  },
  {
    title: "Apply",
    key: "apply",
    render: (_, record) => (
      <Space size="middle">
        <a>Apply Now</a>
      </Space>
    ),
  },
];

const JobsTable = ({data}) => {
  return (
    <Row className={styles.tableWrapper}>
      <Table
        columns={columns}
        dataSource={data}
        className={styles.table}
        pagination={false}
      />
      ;
    </Row>
  );
};
export default memo(JobsTable);

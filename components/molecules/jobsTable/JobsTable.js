import { memo } from "react";
import { useRouter } from "next/router";
import { Space, Table } from "antd";
import { Row } from "../../atoms";

import styles from "./JobsTable.module.scss";

const JobsTable = ({ data, setOpenData }) => {
  const router = useRouter();

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
      title: "Level",
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
      render: (item, record) => (
        <Space size="middle" onClick={() => setOpenData(item)}>
          <a>Apply Now</a>
        </Space>
      ),
    },
  ];
  return (
    <Row className={styles.tableWrapper}>
      <Table
        onRow={(e) => ({
          onClick: (event) => {
            if (event.target.innerText != "Apply Now")
              router.push(`/careers/${e.slug}`)
          }
        })}
        columns={columns}
        dataSource={data}
        className={styles.table}
        pagination={false}
      />
    </Row>
  );
};
export default memo(JobsTable);

import { memo, useState } from "react";
import { useRouter } from "next/router";
import { Space, Table } from "antd";
import { Row } from "../../atoms";
import ModalWrapper from "../../molecules/Modal/Modal";

import styles from "./JobsTable.module.scss";
import ModalForm from "../modalForm/ModalForm";

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
          onClick: () =>
            router.push(`/careers/${e.current_job_opening_detail}`),
        })}
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

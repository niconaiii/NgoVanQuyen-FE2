import { Button, Image, Popconfirm, Table } from "antd";
import { Link } from "react-router-dom";
import { useCRUDStory } from "../hooks/useCRUDStory";

export function StoryList() {
  const { list, remove } = useCRUDStory();

  const columns = [
    {
      title: "Ten truyen",
      dataIndex: "title",
    },
    {
      title: "Tac gia",
      dataIndex: "author",
    },
    {
      title: "Hinh anh",
      dataIndex: "image",
      render: (src: string) => <Image src={src} height={100} />,
    },
    {
      title: "Ngay phat hanh",
      dataIndex: "createdAt",
      render: (date: string) => new Date(date).toLocaleDateString("vi-VN"),
    },
    {
      title: "Action",
      render: (_: any, record: any) => (
        <>
          <Popconfirm
            title="Xoa truyen"
            description="Ban co chac la xoa ko?"
            okText="Xóa"
            cancelText="Suy nghĩ thêm"
            onConfirm={() => remove(record.id)}
          >
            <Button danger>Xóa</Button>
          </Popconfirm>
          <Link to={`/edit/${record.id}`}>
            <Button>Sửa</Button>
          </Link>
        </>
      ),
    },
  ];
  return (
    <Table columns={columns} dataSource={list} pagination={{ pageSize: 5 }} />
  );
}

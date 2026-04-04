import { Button, Form, Input } from "antd";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useCRUDStory } from "../hooks/useCRUDStory";

interface StoryData {
  title: string;
  author: string;
}

export default function StoryForm() {
  const navigate = useNavigate();
  const { add } = useCRUDStory();

  const onFinish = (data: StoryData) => {
    add(data, {
      onSuccess: () => {
        toast.success("Thêm truyện thành công!");
        navigate("/list");
      },
      onError: () => {
        toast.error("Thêm truyện thất bại!");
      },
    });
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item
        name="title"
        label="Tiêu đề"
        rules={[{ required: true, message: "Vui lòng nhập tiêu đề" }]}
      >
        <Input placeholder="Nhập tiêu đề truyện" />
      </Form.Item>

      <Form.Item
        name="author"
        label="Tác giả"
        rules={[{ required: true, message: "Vui lòng nhập tác giả" }]}
      >
        <Input placeholder="Nhập tên tác giả" />
      </Form.Item>

      <Button htmlType="submit" type="primary">
        Thêm truyện
      </Button>
    </Form>
  );
}

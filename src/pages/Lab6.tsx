import { Button, Form, Input, message } from "antd";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCRUDStory } from "../hooks/useCRUDStory";

export default function EditStory() {
  const { id } = useParams();
  const { list, update } = useCRUDStory();

  const nav = useNavigate();

  const [form] = Form.useForm();

  const story = list?.find((s: any) => s.id === Number(id));

  useEffect(() => {
    if (story) {
      form.setFieldsValue(story);
    }
  }, [story, form]);

  const onFinish = (value: any) => {
    if (id) {
      update(
        { id: Number(id), data: value },
        {
          onSuccess: () => {
            message.success("Cập nhật thành công!");
            nav("/list");
          },
        }
      );
    }
  };
  return (
    <Form onFinish={onFinish} form={form} layout="vertical">
      <Form.Item
        label="Ten truyen"
        name="title"
        rules={[{ required: true, message: "Tiêu đề không được để trống" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Tác giả"
        name="author"
        rules={[{ required: true, message: "Tác giả không được để trống" }]}
      >
        <Input />
      </Form.Item>
      <Button htmlType="submit">
        Submit
      </Button>
    </Form>
  );
}

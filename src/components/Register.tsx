import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Button, Form, Input, message } from "antd";

function Register() {
  const { mutate } = useMutation({
    mutationFn: async (value: any) => {
      return await axios.post("http://localhost:3000/register", value);
    },
    onSuccess: () => {
      message.success("Dang ky thanh cong");
    },
    onError: () => {
      message.error("Dang ky that bai");
    },
  });

  const onFinish = (value: any) => {
    mutate(value);
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Dang ky</h2>
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "vui long nhap ten nguoi dung" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "vui long nhap email" },
            { type: "email", message: "email ko hop le" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "vui long nhap mat khau" }]}
        >
          <Input type="password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Dang ky
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Register;

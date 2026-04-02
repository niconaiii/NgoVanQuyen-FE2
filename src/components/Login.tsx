import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../stores/useAuthStore";
import axios from "axios";
import { Button, Form, Input, message } from "antd";

function Login() {
  const { setUser } = useAuthStore();

  const { mutate } = useMutation({
    mutationFn: async (value: any) => {
      return await axios.post(`http://localhost:3000/login`, value);
    },

    onSuccess: ({ data }) => {
      setUser({
        user: data.user,
        token: data.accessToken,
      });

      message.success("Dang nhap thanh cong");
    },
    onError: () => {
      message.error("Sai email or Password");
    },
  });

  const onFinish = (value: any) => {
    mutate(value);
  };
  return <div>
    <Form onFinish={onFinish}>
        <Form.Item label="Email" name={"email"} rules={[{required: true, message: "Vui long nhap email"}]}>
            <Input />
        </Form.Item>

        <Form.Item label="Password" name={"password"} rules={[{required: true, message: "Vui long nhap mat khau"}]}>
            <Input type="password" />
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit">
                Dang nhap
            </Button>
        </Form.Item>
    </Form>
  </div>;
}

export default Login;

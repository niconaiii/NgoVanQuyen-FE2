import { Toaster } from "react-hot-toast";
import { Link, Route, Routes } from "react-router-dom";
import { InputNumber, Layout, Select } from "antd";
import { Form, Input, Button } from "antd";
import { Table } from "antd";
import StoryForm from "./pages/Lab4";
import { StoryList } from "./pages/Lab5";
import EditStory from "./pages/Lab6";

const { Header, Content, Footer } = Layout;
function App() {
  //
  const onFinish = (values: any) => {
    console.log("onFinish");

    console.log(values);
  };

  const columns = [
    { title: "Họ và tên", dataIndex: "name" },
    { title: "Tuổi", dataIndex: "age" },
    { title: "Môn học", dataIndex: "subject" },
    // {title: "Hinh anh", dataIndex: "image", render: (image: string) => }
  ];

  const data = [
    { key: 1, name: "John", age: 25, subject: "Toan" },
    { key: 2, name: "Ana", age: 20, subject: "Van" },
  ];
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/list" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="#" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="#" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>
        <Layout>
          {/* <Header style={{ color: "white" }}>Header</Header> */}
          <Content style={{ padding: 20 }}>
            <Routes>
              <Route path="/edit/:id" element={<EditStory />} />
            </Routes>
            <br />
            {/* <StoryForm/> */}
            <StoryList />
            {/* <Form layout="vertical" onFinish={onFinish}>
              <Form.Item label="Username" name="username">
                <Input placeholder="username" />
              </Form.Item>
              
              <Form.Item label="password" name="password">
                <Input.Password placeholder="password" />
              </Form.Item>
              <Form.Item label="description" name="description">
                <Input.TextArea placeholder="description" />
              </Form.Item>
              <Form.Item label="price" name="price">
                <InputNumber type="number" placeholder="price" />
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit" type="primary">
                  Submit
                </Button>
              </Form.Item>
            </Form> */}
          </Content>
          <Footer>Footer</Footer>
        </Layout>
        <Table columns={columns} dataSource={data} />
      </div>

      <Toaster />
    </>
  );
}

export default App;

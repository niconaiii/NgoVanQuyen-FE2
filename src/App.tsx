// import { Toaster } from "react-hot-toast";
// import { Link } from "react-router-dom";
// import { Layout } from "antd";
// import { Form, Input, Button } from "antd";
// import { Table } from "antd";

// const { Header, Content, Footer } = Layout;

function App() {
  // const onFinish = (values: any) => {
  //   console.log("onFinish");

  //   console.log(values);
  // };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="h-16 bg-blue-600 text-white flex items-center px-6">
        <div className="text-lg font-semibold">Dashboard</div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-60 bg-white border-r p-4">
          <div className="text-sm font-semibold text-gray-700 mb-3">Menu</div>
          <nav className="space-y-2">
            <p className="w-full text-left px-3 py-2 rounded hover:bg-blue-50">
              Dashboard
            </p>
            <p className="w-full text-left px-3 py-2 rounded hover:bg-blue-50">
              Đăng ký
            </p>
            <p className="w-full text-left px-3 py-2 rounded hover:bg-blue-50">
              Danh sách
            </p>
          </nav>
        </div>

        {/* Content */}
        <main className="flex-1 p-6"></main>
      </div>
      <section className="mb-10">
        {/*Bài 2*/}
        <form className="space-y-4 max-w-md">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              className="w-full rounded border border-gray-300 px-3 py-2"
              placeholder="Nhập tên"
              type="text"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              className="w-full rounded border border-gray-300 px-3 py-2"
              placeholder="Nhập email"
              type="email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              className="w-full rounded border border-gray-300 px-3 py-2"
              placeholder="Nhập password"
              type="password"
            />
          </div>

          <button
            type="button"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </section>

      <section>
        {/* Bài 3 */}
        <div className="overflow-x-auto border rounded bg-white">
          <table className="min-w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-sm font-semibold">Name</th>
                <th className="px-4 py-3 text-sm font-semibold">Email</th>
                <th className="px-4 py-3 text-sm font-semibold">Role</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-3 text-sm">Nguyễn Văn A</td>
                <td className="px-4 py-3 text-sm">a@example.com</td>
                <td className="px-4 py-3 text-sm">User</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3 text-sm">Trần Thị B</td>
                <td className="px-4 py-3 text-sm">b@example.com</td>
                <td className="px-4 py-3 text-sm">Admin</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default App;

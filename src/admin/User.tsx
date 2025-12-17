const User = () => {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">User Management</h2>

      <div className="border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-3">1</td>
              <td className="p-3">Admin</td>
              <td className="p-3">admin@gmail.com</td>
              <td className="p-3">Admin</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default User;

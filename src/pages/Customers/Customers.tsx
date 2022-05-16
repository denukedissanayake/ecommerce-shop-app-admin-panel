import "./customers.css"
import { DataGrid, GridRowsProp, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const rows: GridRowsProp = [
    { id: 1, user: "https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=", firstName: 'Snow', lastName: 'Jon', username: 'johndd', email: 'Jon@gmail.com', status: 'active', transactions: "$1000" },
    { id: 2, user: "https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=",  firstName: 'Snow', lastName: 'Jon', username: 'johndd', email: 'Jon@gmail.com', status: 'active', transactions: "$1000" },
  ];

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 , flex:0.25 },
    {field: 'user', headerName: 'User', width: 120 , flex:0.5 , renderCell: (params) => {
        return (<img className="new-user-image" src={params.row.user} alt="" />
        )}
    },
    { field: 'firstName', headerName: 'First name', width: 120, flex:1 },
    { field: 'lastName', headerName: 'Last name', width: 120, flex:1 },
    { field: 'username', headerName: 'Username', width: 120, flex:1 },
    { field: 'email', headerName: 'Email', width: 120, flex:1 },
    { field: 'status', headerName: 'Status', width: 120 , flex:0.5},
    { field: 'transactions', headerName: 'Transactions', width: 120, flex:1 },
    {field: 'actions', headerName: 'Actions', width: 200, flex:1, renderCell: (params) => {
            return (
            <>
                <button className="user-list-view-button">VIEW</button>
                <button className="user-list-delete-button">DELETE</button>
            </>
        )
    } },
  ];

const Customers = () => {
  return (
      <div className="user-page-container">
            <div className="user-container">
              <span className="new-user-title">Yeahh!!! New Customers (Last 24H)</span>
              <table className="new-user-table">
                  <tr className="new-user-table-item">
                      <td><img className="new-user-image" src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=" alt=""/></td>
                      <td className="new-user-name">John Snow</td>
                      <td className="new-user-username">johns</td>
                      <td className="new-user-email">johns@gmail.com</td>
                      <td><button className="new-user-view-button">View</button></td>
                  </tr>
                  <tr className="new-user-table-item">
                      <td><img className="new-user-image" src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=" alt=""/></td>
                      <td className="new-user-name">John Snow</td>
                      <td className="new-user-username">johns</td>
                      <td className="new-user-email">johns@gmail.com</td>
                      <td><button className="new-user-view-button">View</button></td>
                  </tr>
              </table>
            </div>
            <div className="all-user-table-container">
                <div className="all-user-table">
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={25}
                        checkboxSelection={false}
                        disableSelectionOnClick
                    />
                </div>
            </div>
    </div>
  )
}

export default Customers
import React from 'react'
import Sidebar from '../../../components/Sidebar/Sidebar'

const Admin = () => {
  return (
      <>
          <div className="flex">
            <Sidebar />
            <div className="flex-1 p-5"> {/* Adjust padding as needed */}
                <h1 className="text-2xl font-bold">Admin Management</h1>
                {/* Other content specific to Dashboard */}
            </div>
          </div>
      </>
  )
}

export default Admin
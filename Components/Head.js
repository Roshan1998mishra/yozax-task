import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Pagination from 'react-bootstrap/Pagination';

const DataTable = () => {
  // Sample data for demonstration
  const data = [
    { id: 1, shipify: '177130', date: 12 , status: 'pending', customer: 'ahmed', email: 'ahmed.123@gmai.com', country: 'USA', shiping: 'AUSTRALIA', source: 'Australian post api', ordertype: 'Customer' },
    { id: 1, shipify: '177130', date: 12 , status: 'pending', customer: 'ahmed', email: 'ahmed.123@gmai.com', country: 'USA', shiping: 'AUSTRALIA', source: 'Australian post api', ordertype: 'Customer' },
    { id: 1, shipify: '177130', date: 12 , status: 'pending', customer: 'ahmed', email: 'ahmed.123@gmai.com', country: 'USA', shiping: 'AUSTRALIA', source: 'Australian post api', ordertype: 'Customer' },
    { id: 1, shipify: '177130', date: 12 , status: 'pending', customer: 'ahmed', email: 'ahmed.123@gmai.com', country: 'USA', shiping: 'AUSTRALIA', source: 'Australian post api', ordertype: 'Customer' },
    { id: 1, shipify: '177130', date: 12 , status: 'pending', customer: 'ahmed', email: 'ahmed.123@gmai.com', country: 'USA', shiping: 'AUSTRALIA', source: 'Australian post api', ordertype: 'Customer' },
    { id: 1, shipify: '177130', date: 12 , status: 'pending', customer: 'ahmed', email: 'ahmed.123@gmai.com', country: 'USA', shiping: 'AUSTRALIA', source: 'Australian post api', ordertype: 'Customer' },
    { id: 1, shipify: '177130', date: 12 , status: 'pending', customer: 'ahmed', email: 'ahmed.123@gmai.com', country: 'USA', shiping: 'AUSTRALIA', source: 'Australian post api', ordertype: 'Customer' },
    { id: 1, shipify: '177130', date: 12 , status: 'pending', customer: 'ahmed', email: 'ahmed.123@gmai.com', country: 'USA', shiping: 'AUSTRALIA', source: 'Australian post api', ordertype: 'Customer' },
    { id: 1, shipify: '177130', date: 12 , status: 'pending', customer: 'ahmed', email: 'ahmed.123@gmai.com', country: 'USA', shiping: 'AUSTRALIA', source: 'Australian post api', ordertype: 'Customer' },
    { id: 1, shipify: '177130', date: 12 , status: 'pending', customer: 'ahmed', email: 'ahmed.123@gmai.com', country: 'USA', shiping: 'AUSTRALIA', source: 'Australian post api', ordertype: 'Customer' },
    { id: 1, shipify: '177130', date: 12 , status: 'pending', customer: 'ahmed', email: 'ahmed.123@gmai.com', country: 'USA', shiping: 'AUSTRALIA', source: 'Australian post api', ordertype: 'Customer' },
    { id: 1, shipify: '177130', date: 12 , status: 'pending', customer: 'ahmed', email: 'ahmed.123@gmai.com', country: 'USA', shiping: 'AUSTRALIA', source: 'Australian post api', ordertype: 'Customer' },
    { id: 1, shipify: '177130', date: 12 , status: 'pending', customer: 'ahmed', email: 'ahmed.123@gmai.com', country: 'USA', shiping: 'AUSTRALIA', source: 'Australian post api', ordertype: 'Customer' },
    
    // Add more sample data as needed
  ];
return (
<>
<div className='parent2 p-4 container justify-between	items-center	'>
<div className="overflow-x-auto">


<div className='flex parent3 justify-between items-center	'> 
    <div>
        <p className='font-bold'>Product Summary</p>
    </div>

    <div className='flex gap-4'>
    <div>
       <p className='font-semibold'>Show</p> 
    </div>

    <div className='menu'>
    <Dropdown className='button-bg'>
      <Dropdown.Toggle variant="success" id="dropdown-basic" >
        SELECTE ALL
      </Dropdown.Toggle>


      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Select 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Select 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Select 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    </div>

    <div>
       <button className=' btn btn-primary'>DISPATCH SELECTED</button>
    </div>
   </div>

   <div className='pagination'>
   <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      

      <Pagination.Next />
      <Pagination.Last />
    </Pagination>

   </div>

</div>



      <table className="table-auto w-full">
        <thead>
          <tr className="bg-white text-black">
            <th className="px-4 py-2">
              <input type="checkbox" />
            </th>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">SHIPIFY</th>
            <th className="px-4 py-2">DATE</th>
            <th className="px-4 py-2">STATUS</th>
            <th className="px-4 py-2">CUSTOMER</th>
            <th className="px-4 py-2">EMAIL</th>
            <th className="px-4 py-2">Country</th>
            <th className="px-4 py-2">SHIPPING</th>
            <th className="px-4 py-2">SOURCE</th>
            <th className="px-4 py-2">ORDER TYPE</th>
          </tr>
        </thead>
        <tbody> 
          {data.map((row, index) => ( 
            <tr key={row.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>  
              <td className="border px-4 py-2"> 
                <input type="checkbox" /> 
              </td> 
              <td className="border px-4 py-2">{row.id}</td>
              <td className="border px-4 py-2">{row.shipify}</td>
              <td className="border px-4 py-2">{row.date}</td>
              <td className="border px-4 py-2">{row.status}</td>
              <td className="border px-4 py-2">{row.customer}</td>
              <td className="border px-4 py-2">{row.email}</td>
              <td className="border px-4 py-2">{row.country}</td>
              <td className="border px-4 py-2">{row.shiping}</td>
              <td className="border px-4 py-2">{row.source}</td>
              <td className="border px-4 py-2">{row.ordertype}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

</div>
</>
      );
};

export default DataTable;

import React from 'react';

const Table = ({ datasources }) => {
  return (
    <table className="table">
    <thead>
        <tr>
          <th>Id</th>
          <th>rowId</th>
          <th>columnName</th>
          <th>columnId</th>
          <th>value</th>
          <th>type</th>
          <th>typeOption</th>
          <th>sourceId</th>
          <th>userId</th>
          <th>organisationId</th>
          <th>createdAt</th>
          <th>updatedAt</th>
        </tr>
      </thead>
      <tbody>
      { (datasources.length > 0) ? datasources.map( (datasources, index) => {
           return (
            <tr key={ index }>
              <td>{ datasources.id }</td>
              <td>{ datasources.rowId }</td>
              <td>{ datasources.columnName}</td>
              <td>{ datasources.columnId }</td>
              <td>{ datasources.value }</td>
              <td>{ datasources.type }</td>
              <td>{ datasources.typeOption }</td>
              <td>{ datasources.sourceId }</td>
              <td>{ datasources.userId}</td>
              <td>{ datasources.organisationId }</td>
              <td>{ datasources.createdAt }</td>
              <td>{ datasources.updatedAt }</td>v
            </tr>
          )
         }) : <tr><td colSpan="5">Loading...</td></tr> }
      </tbody>
    </table>
  );
}

export default Table
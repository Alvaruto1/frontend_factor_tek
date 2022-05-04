import React from "react";

export default function Table(props) {
  const { rows, Crud, functions } = props;
  if (rows) {
    let headerTable = rows.length ? Object.keys(rows[0]) : [];
    headerTable = headerTable.filter((key) => key !== "id" && key !== "additional_comments");

    return rows.length ? (
      <table className="table table-hover ">
        <thead>
          <tr>
            <th>#</th>
            {headerTable.map((columnHeader, index) => (
              <th key={index}>{columnHeader}</th>
            ))}
            <th>CRUD</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            return (
              <tr key={index}>
                <td key={index + 1}>{index + 1}</td>
                {headerTable.map((columnHeader, index) => (
                  <td key={index}>
                    {row[columnHeader]}
                  </td>
                ))}
                <td key={index + 2}>
                  <Crud object={row} functions={functions}></Crud>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    ) : (
      <div>No data</div>
    );
  } else {
    return <div>Cargando</div>;
  }
}

import React from "react";

export const Table = (props: any) => (
  <table {...props}>
    {props.tableHeadings?.map((item: string) => (
      <tr>{item}</tr>
    ))}
    <tbody>
      <tr>{}</tr>
    </tbody>
  </table>
);

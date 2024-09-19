import React from 'react';

export const Table = ({ headers, rows }) => (
    <table>
      <thead class="c-darkness">
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} style={{ backgroundColor: cell }} class={cell}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
);

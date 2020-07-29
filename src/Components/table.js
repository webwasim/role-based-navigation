import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./table.css";
const Table = () => {
  return (
    <article className="">
      <Link to="/">Home</Link>
      <section>
        <h1>Responsive Table</h1>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Address 2</th>
              <th>Phone</th>
              <th>Landline</th>
              <th>Gender</th>
              <th>Zip</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mike</td>
              <td>Mayer</td>
              <td>Mike@gg.com</td>
              <td>123 street lan</td>
              <td>apt 2</td>
              <td>2384942243</td>
              <td>2324789987</td>
              <td>Male</td>
              <td>22557</td>
              <td>Fairfax</td>
            </tr>
            <tr>
              <td>Mike</td>
              <td>Mayer</td>
              <td>Mike@gg.com</td>
              <td>123 street lan</td>
              <td>apt 2</td>
              <td>2384942243</td>
              <td>2324789987</td>
              <td>Male</td>
              <td>22557</td>
              <td>Fairfax</td>
            </tr>
            <tr>
              <td>Mike</td>
              <td>Mayer</td>
              <td>Mike@gg.com</td>
              <td>123 street lan</td>
              <td>apt 2</td>
              <td>2384942243</td>
              <td>2324789987</td>
              <td>Male</td>
              <td>22557</td>
              <td>Fairfax</td>
            </tr>
            <tr>
              <td>Mike</td>
              <td>Mayer</td>
              <td>Mike@gg.com</td>
              <td>123 street lan</td>
              <td>apt 2</td>
              <td>2384942243</td>
              <td>2324789987</td>
              <td>Male</td>
              <td>22557</td>
              <td>Fairfax</td>
            </tr>
            <tr>
              <td>Mike</td>
              <td>Mayer</td>
              <td>Mike@gg.com</td>
              <td>123 street lan</td>
              <td>apt 2</td>
              <td>2384942243</td>
              <td>2324789987</td>
              <td>Male</td>
              <td>22557</td>
              <td>Fairfax</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
};

export default Table;

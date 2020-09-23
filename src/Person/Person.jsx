import React, { Fragment } from "react";
import { WithClass } from "../HOC/WithClass";
import AuthContext from "../context/Auth-context";

export default function Person(props) {
  console.log(props);
  return (
    <Fragment>
      <WithClass classes="Person">
        <ul>
          {props.plist.map((x) => {
            return (
              <li key={x.id}>
                {x.id} : {x.name}
                <button onClick={() => props.deleteit(x.id)}>X</button>
                <p>
                  <input
                    type="text"
                    value={x.name}
                    onChange={(e) => props.changeHandler(e, x.id)}
                  />
                </p>
              </li>
            );
          })}
        </ul>
      </WithClass>
    </Fragment>
  );
}

import { useState } from "react";
import "./styles.css";

import { Part1Response } from "./Part1Response";
import { Part2Response } from "./Part2Response";
import { Part3Response } from "./Part3Response";
import { Part4Response } from "./Part4Response";

export default function App() {
  return (
    <div className="App">
      <div className="content">
        <h2>Part 1</h2>
        <p>
          Render a <code>Gauge</code> component that goes from 0 to 100 and
          create an <code>&lt;input type="range"&gt;</code> control that updates
          that gauge's value. The Gauge's center label should show the current
          value of the gauge, sized to fit. See utils.ts for a function to help
          with this.
        </p>

        <Part1Response />

        <h2>Part 2</h2>
        <p>
          Create a new component called <code>CountdownGauge</code> that uses
          the <code>Gauge</code> component. The implementation should meet the
          following requirements:
        </p>
        <ul>
          <li>
            Its value should start at 10 and decrease by 1 every second,
            starting on mount.
          </li>
          <li>
            The gauge's SVG should animate continuously and smoothly from full
            to empty while the countdown is running. Please use{" "}
            <code>requestAnimationFrame</code> for this.
          </li>
          <li>
            The gauge's center label should show the remaining time in hours,
            minutes, and seconds, sized to fit. See utils.ts for functions to
            help with this.
          </li>
        </ul>

        <Part2Response />

        <h2>Part 3</h2>
        <p>
          Update the <code>CountdownGauge</code> component so that, as a user of
          the component, I can set the duration easily.
        </p>
        <ul>
          <li>
            Its props should not include <code>from</code> or <code>to</code>.
          </li>
          <li>
            I should be able to say{" "}
            <code>&lt;CountdownGauge duration=&#123;5000&#125; /&gt;</code>
          </li>
          <li>
            To demonstrate this, create an{" "}
            <code>
              &lt;input type="range" min=&#123;3000&#125; max=&#123;120000&#125;
              /&gt;
            </code>{" "}
            control that sets the duration. The countdown will restart with the
            new duration on every change.
          </li>
        </ul>

        <Part3Response />

        <h2>Part 4</h2>
        <p>
          Add the ability to restart the countdown without changing the
          duration. To demonstrate, create a <code>&lt;button&gt;</code> that
          restarts a <code>CountdownGauge</code> on click. This button should be
          external to the <code>CountdownGauge</code> component. There are a few
          ways to approach this in React. Please pick one that seems best to
          you.
        </p>
        <p>
          For this part, the countdown's duration can be anything. 10 seconds
          would be fine, for example.
        </p>

        <Part4Response />

        <h2>Thank you!</h2>
      </div>
    </div>
  );
}

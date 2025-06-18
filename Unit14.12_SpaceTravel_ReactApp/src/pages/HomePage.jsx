import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="container">
    <h1>🚀 Space Travel</h1>
    <p>
      Welcome to the Space Travel management console. Here you can build new spacecraft,
      view detailed specs, decommission aging vessels, and send them to explore distant
      worlds populated by our colonies.
    </p>
    <nav>
      <ul>
        <li><Link to="/spacecrafts">Manage Spacecraft</Link></li>
        <li><Link to="/planets">View Planets</Link></li>
      </ul>
    </nav>
  </div>
);

export default HomePage;

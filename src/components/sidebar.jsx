import React from 'react';
import { Nav } from 'react-bootstrap';
import logo from '../image/logoputih 1.png'; // Import your logo image

const Sidebar = () => {
  // Inline styles for the hover effect
  const linkStyle = {
    padding: '8px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  };

  const linkHoverStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent box effect
  };

  return (
    <div className="bg-dark text-white sidebar p-3" style={{ height: '100vh', width: '250px' }}>
      {/* Logo Section */}
      <div className="text-center mb-4">
        <img src={logo} alt="Logo" style={{ width: '150px', borderRadius: '8px' }} />
      </div>
      <h4>Admin Dashboard</h4>
      <Nav defaultActiveKey="/home" className="flex-column mt-4">
        {/* Navigation Links with Hover Effect */}
        <Nav.Link
          href="/adminpages"
          className="text-white"
          style={linkStyle}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          Dashboard
        </Nav.Link>
        <Nav.Link
          href="/perumahanadmin"
          className="text-white"
          style={linkStyle}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          Perumahan
        </Nav.Link>
        <Nav.Link
          href="/warisanbudayaadmin"
          className="text-white"
          style={linkStyle}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          Warisan Budaya
        </Nav.Link>
        <Nav.Link
          href="/loginadmin"
          className="text-white"
          style={linkStyle}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          Login
        </Nav.Link>
        <Nav.Link
          href="#settings"
          className="text-white"
          style={linkStyle}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          Settings
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-4">
      <div className="container mx-auto text-center">
        <div className="content">
          <p>
            <strong>BlogSpace - Blogging Platform</strong> by{' '}
            <a href="https://harshanacz.netlify.app" className="text-blue-500 hover:underline">
              Kavindu Harshana - harshanacz
            </a>. The source code is licensed under{' '}
            <a href="http://opensource.org/licenses/mit-license.php" className="text-blue-500 hover:underline">
              MIT
            </a>. 
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

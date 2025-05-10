import React from 'react';
import { Link } from 'react-router-dom';

const navigation = {
  Solutions: [
    { name: 'Design Solutions', path: '/solutions/design-solutions' },
    { name: 'Smart Development', path: '/solutions/smart-development' },
    { name: 'Performance Analytics', path: '/solutions/performance-analytics' },
    { name: 'Security', path: '/solutions/security' },
  ],
  Company: [
    { name: 'About', path: '/company/about' },
    { name: 'Careers', path: '/company/careers' },
    { name: 'Partners', path: '/company/partners' },
    { name: 'Blog', path: '/company/blog' },
  ],
  Legal: [
    { name: 'Terms of Service', path: '/terms-of-service' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
  ],
};

export const FooterNav = () => {
  return (
    <nav className="grid grid-cols-2 sm:grid-cols-3 gap-8">
      {Object.entries(navigation).map(([title, items]) => (
        <div key={title}>
          <h3 className="text-lg font-bold mb-6">{title}</h3>
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="text-slate-400 hover:text-blue-400 transition-colors font-body"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};
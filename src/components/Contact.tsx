import React from 'react';
import '../assets/styles/Contact.scss';
// import emailjs from '@emailjs/browser';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface ContactItem {
  icon: React.ReactNode;
  platform: string;
  handle: string;
  href?: string;
  external?: boolean;
  ariaLabel?: string;
}

const contactItems: ContactItem[] = [
  {
    icon: <PhoneIcon />,
    platform: 'Phone Number',
    handle: '0483 825 042',
    href: 'tel:+61483825042',
  },
  {
    icon: <EmailIcon />,
    platform: 'Email',
    handle: 'minhvu2614.work@gmail.com',
    href: 'mailto:minhvu2614.work@gmail.com',
  },
  {
    icon: <GitHubIcon />,
    platform: 'GitHub',
    handle: 'mikeyvu',
    href: 'https://github.com/mikeyvu',
    external: true,
    ariaLabel: 'GitHub profile: mikeyvu',
  },
  {
    icon: <LinkedInIcon />,
    platform: 'LinkedIn',
    handle: 'Hong Minh Vu',
    href: 'https://www.linkedin.com/in/hong-minh-vu/',
    external: true,
  },
  {
    icon: <LocationOnIcon />,
    platform: 'Location',
    handle: 'Wollongong',
  },
];

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <div className="contact-header">
            <h1>Let&apos;s Connect</h1>
            <small className="contact-hint">&lt;Click the details to contact me or visit my profiles&gt;</small>
          </div>
          <ul className="contact-links">
            {contactItems.map((item) => (
              <li className="contact-link" key={item.platform}>
                <span className="contact-icon">{item.icon}</span>
                <span className="contact-platform">{item.platform}</span>
                <span className="contact-handle">
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noreferrer' : undefined}
                      aria-label={item.ariaLabel}
                    >
                      {item.handle}
                    </a>
                  ) : (
                    item.handle
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
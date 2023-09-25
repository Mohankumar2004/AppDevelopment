import React from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

export default function Contact() {
    const contact = {
        email: 'your@email.com',
        phone: '123-456-7890',
        address: '123 Main St, City, Country',
        socialMedia: {
          facebook: 'https://www.facebook.com/yourpage',
          twitter: 'https://www.twitter.com/yourhandle',
          linkedin: 'https://www.linkedin.com/in/yourprofile',
          instagram: 'https://www.instagram.com/yourhandle',
        },
        supportHours: 'Monday to Friday, 9:00 AM - 5:00 PM (GMT)',
        privacyContactEmail: 'privacy@yourdomain.com',
      };
  return (
    <div>
    <Layout/>
    <div className='privacy1'>
      <h2>Contact Information for Our Virtual Job Fair</h2>
      <p>
        <strong>Email:</strong>{' '}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </p>
      <p>
        <strong>Phone:</strong> {contact.phone}
      </p>
      <p>
        <strong>Mailing Address:</strong> {contact.address}
      </p>
      <p>
        <strong>Social Media:</strong>
      </p>
      <ul>
      <br/>
        <li>
          <a href={contact.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </li>
        <br/>
        <li>
          <a href={contact.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </li>
        <br/>
        <li>
          <a href={contact.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <br/>
        <li>
          <a href={contact.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </li>
      </ul>
      
      <p>
        <strong>Customer Support Hours:</strong> {contact.supportHours}
      </p>
      <p>
        <strong>Privacy Concerns:</strong>{' '}
        <a href={`mailto:${contact.privacyContactEmail}`}>{contact.privacyContactEmail}</a>
      </p>
    </div>
    <Footer/>
    </div>
  )
}

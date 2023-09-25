import React from 'react'
import Layout from '../components/Layout'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
import Footer from '../components/Footer'
function About() {
  return (
    <>
    <Layout />
    <div className='main-wrapper'>
                <div className='welcome-container'>
                    
                </div>
                </div>
                <div className='products1'><p>Welcome to Virtual Job!
                <br/>
                About Us:
                </p>
                <div className='content1'>

                
                <br/>
                At [Your Virtual Job Platform Name], we're dedicated to revolutionizing the way people find remote and virtual employment opportunities. Our mission is to connect job seekers with a diverse range of virtual jobs that empower individuals to work from anywhere in the world. Whether you're a digital nomad seeking flexibility, a stay-at-home parent looking for remote work, or a company in search of top virtual talent, we've got you covered.
                
                What sets us apart:
                
                Diverse Opportunities: We partner with companies from various industries, offering a wide array of virtual job opportunities, including remote full-time positions, freelance gigs, and remote internships.
                User-Friendly Interface: Our platform is designed with simplicity and efficiency in mind, making it easy for job seekers to find the perfect virtual job and for employers to find their ideal remote team members.
                Quality Assurance: We prioritize quality and authenticity. Every job listing is carefully vetted to ensure you're connecting with legitimate opportunities.
                Community and Support: We believe in the power of community. Join our virtual jobseekers' community to share experiences, get advice, and build connections.
                Join us in redefining work and enabling a world where talent knows no boundaries. Whether you're starting your virtual job journey or you're an experienced remote worker, [Your Virtual Job Platform Name] is here to support your aspirations.
                <br/>
                <br/>
                <p>
                Contact Us:
                </p>
                <br/>
                We'd love to hear from you! If you have any questions, suggestions, or need assistance, please don't hesitate to reach out to us. Here's how you can contact us:
                
                Customer Support:
                
                Email: support@yourvirtualjobplatform.com
                Phone: +1 (555) 123-4567
                Business Inquiries:
                
                Email: partnerships@yourvirtualjobplatform.com
                Mailing Address:
                [Your Virtual Job Platform Name]
                123 Virtual Street
                Remoteville, RV 54321
                Virtualand
                
                Social Media:
                
                Facebook: [Your Facebook Page]
                Twitter: @YourTwitterHandle
                LinkedIn: [Your LinkedIn Page]
                Instagram: @YourInstagramHandle
                Connect with us on social media to stay updated on the latest virtual job trends, job listings, and community activities.
                
                Thank you for choosing [Your Virtual Job Platform Name]. We look forward to helping you find the perfect virtual job or talent for your remote team!
             </div>
             </div>
             <Footer/>
    </>
  )
}
export default About

import React from 'react'
import "./FooterStyles.css"

const Footer = () => {
  return (
    <div className="footer">
        <div className="top">
            <div>
                <h1>Medantrik</h1>
                <p>Innovation In HealthCare</p>
            </div>
            <div>
                <a href="https://www.linkedin.com/company/medantrik/?originalSubdomain=in">
                <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href='/'>
                    <i className="fa-brands fa-instagram-square"></i>

                </a>
                <a href='https://www.youtube.com/@medantrik'>
                    <i className="fa-brands fa-youtube-square"></i>

                </a>
                <a href='/'>

                    <i className="fa-brands fa-twitter-square"></i>
                </a>
            </div>
        </div>
        <div className="bottom">
            <div>
                <h4>Project</h4>
                <a href="/product">Products</a>
                <a href="/">Status</a>
                <a href="/">Licence</a>
                <a href="/">All Versions</a>
            </div>
            <div>
                <h4>Community</h4>
                <a href="https://www.linkedin.com/company/medantrik/?originalSubdomain=in">Linkedin</a>
                <a href="/">Issues</a>
                <a href="/">Project</a>
                <a href="/">Twitter</a>
            </div>
            <div>
                <h4>Help</h4>
                <a href="https://drive.google.com/file/d/1mHIGcIsXPCNN24tMewHtfW54IH8l115E/view?usp=sharing">Support</a>
                <a href="/">Troubleshooting</a>
                <a href="/contact">Contact us</a>
            </div>
            <div>
                <h4>Others</h4>
                <a href="/">Term of Service</a>
                <a href="/">Privacy</a>
                <a href="/">Policy</a>
                <a href="/">Licence</a>
            </div>
        </div>
            <p>© All rights reserved</p>
    </div>
  )
}

export default Footer
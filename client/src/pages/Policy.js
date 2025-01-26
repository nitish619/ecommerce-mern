import React from "react";
import Layout from "../components/layout/layout";

const Policy = () => {
    return (
      <Layout title={'Privacy Policy '}>
        <div className="row contactus ">
          <div className="col-md-6 ">
            <img
              src="/images/contactus.jpeg"
              alt="contactus"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-4">
            <ul>
              <li>We collect personal information to process orders and improve your shopping experience.</li>
              <li>Your data is securely stored and never shared without your consent.</li>
              <li>Cookies are used to enhance site functionality; you can manage them via browser settings.</li>
              <li>We may send promotional emails with your consent, and you can opt out at any time.</li>
              <li>Third-party services like payment processors have their own privacy policies.</li>
              <li>You have the right to access, update, or delete your personal information at any time.</li>
            </ul>
          </div>
        </div>
      </Layout>
    );
  };


export default Policy;
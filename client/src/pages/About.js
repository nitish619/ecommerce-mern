import React from "react";
import Layout from "../components/layout/layout";

const About = () => {
    return (
      <Layout title={'About us - FROST'}>
        <div className="row contactus ">
          <div className="col-md-6 ">
            <img
              src="/images/about.jpeg"
              alt="contactus"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-4">
            <p className="text-justify mt-2">
            Welcome to FROST, your trusted destination for high-quality products at unbeatable prices. We are committed to delivering a seamless shopping experience, offering a wide range of items to meet all your needs. Our focus on customer satisfaction means you can shop with confidence, knowing we provide top-notch service and fast, reliable shipping. Whether you're looking for the latest trends or everyday essentials, we've got you covered. Explore our collection today and discover why FROST is the go-to choice for online shoppers. Happy shopping!
            </p>
          </div>
        </div>
      </Layout>
    );
  };


export default About;
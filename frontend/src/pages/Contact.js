import React from "react";

const Contact = () => {
  const socialList = [
    { id: 1, icon: "icon", title: "GitHub", url: "" },
    { id: 2, icon: "icon", title: "LinkedIn", url: "" },
    { id: 3, icon: "icon", title: "Youtube", url: "" },
    { id: 4, icon: "icon", title: "Udemy", url: "" },
  ];
  const renderSocialList = () => {
    return socialList.map((social) => (
      <div className="social" key={social.id}>
        {social.icon}
        <h3>{social.title}</h3>
      </div>
    ));
  };

  return (
    <div>
      <div>Get in touch</div>
      <div id="areas">
        <div id="form"></div>
        <div id="networks">
          <div id="social">{renderSocialList()}</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

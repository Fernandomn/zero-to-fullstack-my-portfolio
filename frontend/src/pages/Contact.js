import React from "react";

const Contact = () => {
  const socialList = [
    {
      id: 1,
      icon: "icon",
      title: "GitHub",
      url: "https://github.com/Fernandomn",
    },
    {
      id: 2,
      icon: "icon",
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/fernando-medeiros-do-nascimento/",
    },
    {
      id: 3,
      icon: "icon",
      title: "Youtube",
      url: "https://www.youtube.com/channel/UCqjeM9Cmz1rHru967lsulmw",
    },
    { id: 4, icon: "icon", title: "Udemy", url: "" },
    { id: 4, icon: "icon", title: "Telegram", url: "https://t.me/ferna_mn" },
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
        <div id="form">
          <form id="contact-form" method="post">
            Name: <input type="text" />
            Email: <input type="email" />
            Message: <textarea rows="5" />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div id="networks">
          <div id="social">{renderSocialList()}</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

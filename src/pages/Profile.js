import React from "react";

export default class Profile extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.$el.classList.add("active");
    });
  }

  render() {
    return (
      <section className="profile" ref={(el) => (this.$el = el)}>
        Profile
      </section>
    );
  }
}

import React from "react";

export default class Register extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.$el.classList.add("active");
    });
  }

  render() {
    return (
      <section className="register" ref={(el) => (this.$el = el)}>
        Register
      </section>
    );
  }
}

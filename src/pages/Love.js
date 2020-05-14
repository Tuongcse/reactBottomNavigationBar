import React from "react";

export default class Love extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.$el.classList.add("active");
    });
  }

  render() {
    return (
      <section className="love" ref={(el) => (this.$el = el)}>
        Love
      </section>
    );
  }
}

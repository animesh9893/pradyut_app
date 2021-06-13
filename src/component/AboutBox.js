import './CSS/aboutBox.css';

function AboutBox() {
  return (
    <div className="aboutBox">
      <div className="Heading">Hello</div>
      <div className="Message">The z-index property specifies the stack order of an element.
    An element with greater stack order is always in front of an element with a lower stack order.
Note: z-index only works on positioned elements (position: absolute, position: relative, position: fixed, or position: sticky) and flex items (elements that are direct children of display:flex elements).</div>
    </div>
  );
}

export default AboutBox;

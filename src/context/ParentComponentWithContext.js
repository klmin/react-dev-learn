import ChildComponentWithContext from "./ChildComponentWithContext";

const ParentComponentWithContext = () => {
  return (
    <div>
      <h2>Parent Component</h2>
      <ChildComponentWithContext />
    </div>
  );
};

export default ParentComponentWithContext;
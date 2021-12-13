import withDraggable from "../hoc/withDraggable";

const ItemDND = ({ item }) => {
  return (
    <>
      <div>&lt;{item.name}</div>
      <div>{item.age}&gt;</div>
    </>
  );
};

export default withDraggable(ItemDND);

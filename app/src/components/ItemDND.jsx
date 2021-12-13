import withDraggable from "../hoc/withDraggable";

const ItemDND = ({ item }) => {
  return (
    <>
      <div style={{marginTop: 35}}>&lt;{item.name}</div>
      <div>{item.age}&gt;</div>
    </>
  );
};

export default withDraggable(ItemDND);

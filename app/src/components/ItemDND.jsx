import withDraggable from "../hoc/withDraggable";

const ItemDND = ({ item, itemStyle }) => {
  return <div style={itemStyle}>{item.name}</div>;
};

export default withDraggable(ItemDND);

import Button from "@material-ui/core/Button";

export default function ButtonComponent ({ content , handleClick }) {
  return <Button variant="contained" color="secondary" onClick={handleClick}>{content}</Button>;
}

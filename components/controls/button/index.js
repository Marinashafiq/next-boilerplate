import Button from "@material-ui/core/Button";

export default function ButtonComponent({ content, handleClick, classes }) {
  return (
    <Button
      variant="contained"
      color="secondary"
      className={classes}
      onClick={handleClick}
    >
      {content}
    </Button>
  );
}

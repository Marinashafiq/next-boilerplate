import Button from "@material-ui/core/Button";

export default function ButtonComponent({
  content,
  handleClick,
  classes,
  type,
}) {
  return (
    <Button
      type={type ? type : "text"}
      variant="contained"
      color="secondary"
      className={classes}
      onClick={handleClick}
    >
      {content}
    </Button>
  );
}

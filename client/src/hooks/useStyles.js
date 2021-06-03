import { makeStyles } from '@material-ui/core/styles';

export default function useStyles(styles) {
  const classes = makeStyles({ ...styles });

  return classes();
}
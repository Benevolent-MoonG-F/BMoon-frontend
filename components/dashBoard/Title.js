import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
export default function Title(props) {
  return (
    <Typography component="h5" variant="h5" gutterBottom >
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node
};

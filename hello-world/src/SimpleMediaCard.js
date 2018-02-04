import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 300,
  },
  media: {
    height: 200,
  },
};

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.item.thumbnailUrl}
          title={props.item.title}
        />
        <CardContent>
          <Typography type="headline" component="h2">
            {props.item.title}
          </Typography>
          <Typography component="p">
            {props.item.subtitle}
          </Typography>
        </CardContent>
        <CardActions>
          <Button target="_blank" size="small" color="primary" href={props.item.sourceUrl}>
            Source
          </Button>
          <Button target="_blank" size="small" color="primary" href={props.item.websiteUrl}>
            Website
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// промапил карты

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export function Information({list}) {
  const classes = useStyles();
  return (
    <>
      {
        list.map(value=> {
        const address = value.address
          return (
            <Card className={classes.root} key = {value.id} variant="outlined">
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  id: {value.id}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  firstName: {value.firstName}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  lastName: {value.lastName}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  phone: {value.phone}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  address: {address.streetAddress} {address.city} {address.state} {address.zip}
                </Typography>
              </CardContent>
            </Card>
          )
        })
      }
    </>
  )
}

// id: 101,
// 		firstName: 'Sue',
// 		lastName: 'Corson',
// 		email: 'DWhalley@in.gov',
// 		phone: '(612)211-6296',
// 		address: {
// 			streetAddress: '9792 Mattis Ct',
// 			city: 'Waukesha',
// 			state: 'WI',
// 			zip: '22178'
// 		},
// 		description: 'et lacus magna dolor...',
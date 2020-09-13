import React from 'react';

import { methodalltexts } from '../../methodSample';


import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export const SentenseList = ({methodsentences}) => {
    return(
        <div>
            <div className="methodSentenceTextPane">
                {methodsentences.map((methodsentence) => (
                    <div className="methodSentenceText" key={methodsentence.id}>
                        <div>
                            <span>{methodsentence.num}. </span>
                            <span>{methodsentence.sentence}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default function ListSample() {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => { setExpanded(!expanded); };

  return (
    <div>
        <div className="showListPane">
            {methodalltexts.map((methodalltext) => (
                <Card className="cardSetting" key={methodalltext.id}>
                    <CardHeader
                        title={methodalltext.methodtitles.title}
                    />
                    <CardMedia
                        className="cardMediaImg"
                        image={require('../../../images/porkjinjer.jpg')}
                        title={methodalltext.methodtitles.title}
                    />
                    <CardContent className="secondrySetting">
                        <Typography variant="body2" color="textSecondary" component="p">
                        {methodalltext.methodtitles.secondarytext}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                        <Typography paragraph>Method</Typography>
                            <SentenseList methodsentences={methodalltext.methodsentences}/>
                        </CardContent>
                    </Collapse>
                </Card>
            ))}
        </div>
    </div>
  );
}

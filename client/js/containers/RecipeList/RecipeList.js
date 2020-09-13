import React from 'react';
import { methodalltexts } from '../../sample/methodSample';

// import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

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

export const MethodFoodstuffList = ({methodFoodstuffs}) => {
    return(
        <div>
            <div>
                {methodFoodstuffs.map((methodFoodstuff) => (
                    <div key={methodFoodstuff.id}>
                        <div>
                            <span>{methodFoodstuff.foodsthuffName} :  </span>
                            <span>{methodFoodstuff.foodstuffAmount} </span>
                            <span>{methodFoodstuff.foodstuffunit}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export const MethodSeasoningList = ({methodSeasonings}) => {
    return(
        <div>
            <div>
                {methodSeasonings.map((methodSeasoning) => (
                    <div key={methodSeasoning.id}>
                        <div>
                            <span>{methodSeasoning.seasoningName} :  </span>
                            <span>{methodSeasoning.seasoningAmount} </span>
                            <span>{methodSeasoning.seasoningUnit}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
                        <div className="methodFoodAndSeasoningText">Foodstuffs and Seasonings</div>
                            <div className="methodFoodAndSeasoningList">
                                <div className="Foodstuffslist">
                                    <MethodFoodstuffList methodFoodstuffs={methodalltext.methodFoodstuffs}/>
                                </div>
                                <div className="Seasoningslist">
                                    <MethodSeasoningList methodSeasonings={methodalltext.methodSeasonings}/>
                                </div>
                            </div>
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

import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Grid} from 'react-flexbox-grid/lib';
import FlatButton from 'material-ui/FlatButton';


export class Home extends Component {
    constructor() {
        super()
        this.state = {
            expanded: false,
        };
    }


handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
};

handleExpand = () => {
    this.setState({expanded: true});
};

handleReduce = () => {
    this.setState({expanded: false});
};

render() {
    return (
            <Grid>
        <Card>
        <CardHeader
    title="Ezell Burke"
    subtitle="CEO"
    avatar="images/ezellAvatar.jpg"
        />
        <CardMedia
    overlay={<CardTitle
            title="thebigNEED"
            subtitle='We know that the internet is the most powerful tool open to everyone today.We must youthe internet and its technologies to bring wealth to everyone, and empower them to kepp and grow it' />}
>
<img src="images/finIndpic.jpg" alt="" />
        </CardMedia>
        <CardTitle title="Join The Platform" subtitle="Financial Freedom the first basic human right" />
        <CardText>
       Straight up and down. The first 1000 members will become owners of this website. We will partner with me to make this site
    </CardText>
    <CardActions>
    <FlatButton label="Action1" />
        <FlatButton label="Action2" />
        </CardActions>
        </Card>
);

</Grid>
);
}
}



const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
        changePage: () => push('/about-us')
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

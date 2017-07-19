import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {Grid} from 'react-flexbox-grid/lib';



const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        overflowY: 'auto',
    },
};

const tilesData = [
    {
        img: 'images/grid-list/00-52-29-429_6401.jpg',
        title: 'You Don\'t know Black',
        author: 'Ezell Burke',
        alt: ''
    },
    {
        img: 'images/grid-list/00-52-29-429_6402.jpg',
        title: 'You Don\'t know Black',
        author: 'Ezell Burke',
        alt: ''
    }
]

const Home = props => (
<Grid fluid>
<div>
<h2 style={{color:'white', textAlign: 'center'}}>Featured Demo</h2>
<GridList
cellHeight={180}
style={styles.gridList}
>
{tilesData.map((tile) => (
<GridTile
    key={tile.img}
    title={tile.title}
    subtitle={<span>by <b>{tile.author}</b></span>}
    actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
>
<img alt='' src={tile.img} />
</GridTile>
))}
</GridList>
</div>
</Grid>
)

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
        changePage: () => push('/about-us')
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

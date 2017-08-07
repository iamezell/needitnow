import React from 'react'
import { Button, Grid, Row, Col, Thumbnail } from 'react-bootstrap';
const thumbnailInstance = (
    <Grid>
        <Row>
            <Col xs={6} md={4}>
                <Thumbnail>
                    <h3>The Platform</h3>
                    <p>You are on it right now. We give half our profits to a pot which gets split to all our members.Simple as that</p>
                </Thumbnail>
            </Col>
        </Row>
    </Grid>
);
export default () => (
    <div>
         {thumbnailInstance}
         <p>Thank you for joining. We are actively building out this site. You can follow the site progress and information on our <a href='https://www.facebook.com/thebigneed/'>facebook</a> and <a href='https://www.youtube.com/channel/UCJqd4FFSLARz1lsSaO-2G5A'>youtube</a> pages</p>
    </div>
)

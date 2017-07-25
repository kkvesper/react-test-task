import './index.less'
import * as React from 'react'
import Header from '../../component/header'
import { Grid, Row, Col } from 'react-flexbox-grid';

// The main layout of the App
//
//  |--------------------|
//  |    fixed header    |
//  |--------------------|
//  |                    |
//  |    route content   |
//  |                    |
//  |--------------------|
//
class App extends React.Component<any, any> {
    render () {
        return <Grid>
            <Row>
                <Col lg md sm xs>
                    <Header location={location.pathname} />
                </Col>
            </Row>

            <Row className='main-content'>
                <Col lg md sm xs>
                    {this.props.children}
                </Col>
            </Row>
        </Grid>
    }
}

export default App

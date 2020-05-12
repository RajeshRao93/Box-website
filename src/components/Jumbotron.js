import React from "react";
import { Jumbotron } from 'react-bootstrap';
import { MDBIcon } from 'mdbreact';

const JumbotronComp = () => {
    return (
        <div className="jumbo" style={{}}>
            <Jumbotron style={{ backgroundImage: 'linear-gradient(45deg, white , #289FA5)', color: '#343a40ba' }}>
                <h1 style={{ fontWeight: '900', fontFamily: 'cursive' }}><MDBIcon far icon="hand-spock" /> <b>Hello!</b></h1>
                <h4 style={{ fontWeight: '900', fontFamily: 'cursive' }}>
                    Welcome to <MDBIcon fab icon="phoenix-framework" /> BOX.
                            <br /><br />
                    Template website for CV / Resume.
                                                        </h4>
            </Jumbotron>
        </div>
    );
}

export default JumbotronComp;

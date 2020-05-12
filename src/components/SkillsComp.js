import React from "react";
import { Card, ProgressBar } from 'react-bootstrap';
import { MDBIcon } from 'mdbreact';
import './SkillsComp.css';

class SkillsComp extends React.Component {

    constructor() {
        super();
        this.state = {
            Name: 'Rajesha Koppa Ramesha'
        };
    }


    render() {
        return (

            <div>
                <div className="skillsfirst">

                    <Card style={{ width: '22rem', height: '20rem', backgroundColor: '#00000000', border: 'solid white', borderWidth: '10px' }} >
                        <Card.Body>
                            <Card.Title><MDBIcon icon="server" /> <b>BACKEND TECHNOLOGIES</b> </Card.Title>
                            <Card.Text style={{ color: 'white' }}>
                                C# .Net <ProgressBar variant="success" animated now={75} /><br />
                                ASP.NET | Web API | WCF Rest <ProgressBar variant="info" animated now={70} /><br />
                                NodeJS | Node Express <ProgressBar variant="warning" animated now={65} /><br />
                                Python <ProgressBar animated now={50} /><br />
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </div>
                <div className="skillssecond">

                    <Card style={{ width: '22rem', height: '20rem', backgroundColor: '#00000000', border: 'solid white', borderWidth: '10px' }} >
                        <Card.Body>
                            <Card.Title><MDBIcon icon="tv" /> <b>FRONTEND TECHNOLOGIES</b> </Card.Title>
                            <Card.Text style={{ color: 'white' }}>
                                HTML | CSS  <ProgressBar variant="success" animated now={80} /><br />
                                JavaScript <ProgressBar variant="info" animated now={80} /><br />
                                React JS<ProgressBar variant="warning" animated now={60} /><br />
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </div>
                <div className="skillsthird">

                    <Card style={{ width: '22rem', height: '20rem', backgroundColor: '#00000000', border: 'solid white', borderWidth: '10px' }} >
                        <Card.Body>
                            <Card.Title><MDBIcon icon="database" /> <b>OTHER TECHNOLOGIES</b> </Card.Title>
                            <Card.Text style={{ color: 'white' }}>
                                SQL | MS SQL | PostgreSQL  <ProgressBar variant="success" animated now={80} /><br />
                                Docker <ProgressBar variant="info" animated now={70} /><br />
                                Microservices<ProgressBar variant="warning" animated now={70} /><br />
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </div>

                <div className="skillsfourth">

                    <Card style={{ width: '72rem', height: '10rem', backgroundColor: '#00000000', border: 'solid white', borderWidth: '10px' }} >
                        <Card.Body>
                            <Card.Title><MDBIcon icon="language" /> <b>LANGUAGES</b> </Card.Title>
                            <Card.Text style={{ color: 'white' }}>
                                <div className='languages'>
                                    <div className='language1'>
                                        Kannada  <ProgressBar variant="success" animated now={100} />
                                    </div>
                                    <div className='language2'>
                                        English  <ProgressBar variant="success" animated now={90} />
                                    </div>
                                    <div className='language3'>
                                        Hindi  <ProgressBar variant="success" animated now={70} />
                                    </div>
                                    <div className='language4'>
                                        German  <ProgressBar variant="success" animated now={20} />
                                    </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </div>
            </div >
        );
    }
}

export default SkillsComp;
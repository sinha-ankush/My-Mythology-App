import React from 'react'

import {

    MDBCard,

    MDBCardTitle,

    MDBCardText,

    MDBCardBody,

    MDBCardHeader,

    MDBCardFooter,

    MDBAccordion, MDBAccordionItem, MDBBtn

} from 'mdb-react-ui-kit';
import { BASE_URL } from '../services/Helper';

function AdminViewCard(props) {

    return (

        <div className='mx-5 my-5'>

            <MDBCard border='black' background='white' shadow='0' className='mb-3'>

                <MDBCardHeader background='transparent' border='black'>

                    {props.story}



                </MDBCardHeader>

                <MDBCardBody className='black'>

                    <MDBCardTitle>{props.ep_number}</MDBCardTitle>

                    <MDBCardText>

                        {props.content}

                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">

                            <MDBBtn className='me-1' color='danger'>

                                Delete

                            </MDBBtn>

                        </div>

                    </MDBCardText>

                </MDBCardBody>

                <MDBCardFooter background='transparent' border='black'>

                    <MDBAccordion flush >

                        <MDBAccordionItem collapseId={1} headerTitle='Items'>

                            {/* <p>

                                <a>

                                    {props.image}

                                </a>

                            </p>



                            <p>

                                <a>

                                    {props.poster}

                                </a>

                            </p> */}

                            <p>

                                <a href={BASE_URL + `/episode/post/file/${props.file}`} target="_blank" rel="noopener noreferrer">
                                    {props.file}

                                </a>

                            </p>

                        </MDBAccordionItem>

                    </MDBAccordion>

                </MDBCardFooter>

            </MDBCard>

        </div>

    )

}



export default AdminViewCard
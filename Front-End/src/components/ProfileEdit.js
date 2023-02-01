import React, { Component } from 'react'
import Select from 'react-select';
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBRadio,
    MDBBtn,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const options = [
    { value: "God1", label: "God's Youth", color: "#00B8D9" },
    { value: "Myths", label: "Myths", color: "#0052CC" },
    { value: "Fest", label: "Festivals", color: "#5243AA" },
    { value: "Historical", label: "Historical", color: "#FF5630" },
    { value: "Faith", label: "Faith", color: "#FF8B00" },
    { value: "Epics", label: "Epics", color: "#FFC400" },
    { value: "Temples", label: "Temples", color: "#36B37E" },
    { value: "Culture", label: "Culture", color: "#00875A" },
    { value: "Characters", label: "Characters", color: "#253858" },
    { value: "Worship", label: "Worship", color: "#666666" },
];

export class ProfileEdit extends Component {
    state = {
        selectedOption: null,
    };
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };
    render() {
        const { selectedOption } = this.state;

        return (
            <div>
                <section class="vh-100 gradient-custom">
                    <div class="container py-5 h-100">
                        <Link to='/user/profile'>
                        <i className='fa fa-arrow-left'></i> Back to Profile
                        </Link>
                        <div class="row justify-content-center align-items-center h-100">
                            <div class="col-12 col-lg-9 col-xl-7">
                                <div class="card shadow-2-strong card-registration" style={{ "border-radius": "15px" }}>
                                    <div class="card-body p-4 p-md-5">
                                        <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Profile</h3>
                                        <form>
                                            <MDBRow className='mb-4'>
                                                <MDBCol>
                                                    <MDBInput size='lg' id='form3Example1' label='Full Name' />
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol>
                                                    <MDBInput size='lg' className='mb-4' type='email' id='form3Example3' label='Email address' />
                                                </MDBCol>
                                                <MDBCol>
                                                    <MDBInput size='lg' className='mb-4' type='text' id='form3Example4' label='Phone Number' />
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol>
                                                    <MDBInput size='lg' className='mb-4' type='text' id='form3Example3' label='Age' />
                                                </MDBCol>
                                                <MDBCol className='my-2 mx-2'>
                                                    <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Male' inline />
                                                    <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Female' inline />
                                                    <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Other' inline />
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow className='mb-4'>
                                                <Select
                                                    isMulti={true}
                                                    value={selectedOption}
                                                    onChange={this.handleChange}
                                                    options={options}
                                                />
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol>
                                                    <MDBInput size='lg' label='Qualification' />
                                                </MDBCol>
                                                <MDBCol>
                                                <MDBBtn size='lg' outline color='dark'>
                                                    Submit
                                                </MDBBtn>
                                                </MDBCol>
                                               
                                            </MDBRow>
            

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        );
    }

}

export default ProfileEdit
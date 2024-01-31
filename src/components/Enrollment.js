import React from 'react';
import { Button, Modal } from 'antd';

class Enrollment extends React.Component {
    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render () {
        return (
            <div id="enrollment" className="block worksBlock">
                <div className="container-fluid">
                    <div className="titleHolder">
                        <h2> Enrollment Process </h2>
                        <p> Enroll in Polyglot Pages by completing our online application, scheduling a tour of our facility, and meeting with our admissions team to discuss your child's educational needs and language learning goals  </p>
                    </div>
                    <div className="contentHolder">
                    <Button type="primary" onClick={this.showModal}> 
                    <i class="fas fa-play"></i>
                    </Button>
                    </div>
                    <Modal 
                        title="Basic Modal" 
                        visible={this.state.visible}
                        onCancel={this.handleCancel}
                        footer={null}
                    >
                        <iframe title="Polygot Pages Preschool" width="100%" height="450" src="https://www.youtube.com/watch?v=lfnQlU-FDSY"></iframe>
                    </Modal>
                </div>
            </div>
        );
    };
};

export default Enrollment;
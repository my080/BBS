'use strict';

import 'core-js/fn/object/assign';
import React from 'react';
const {Modal, Button, Form, FormGroup, Col, FormControl, ControlLabel, Checkbox} = require('react-bootstrap');

const login = (
    <div className="static-modal">
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>用户注册</Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col>
                        <Col sm={10}>
                            <FormControl type="email" placeholder="Email" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col>
                        <Col sm={10}>
                            <FormControl type="email" placeholder="Email" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={10}>
                            <FormControl type="password" placeholder="Password" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={10}>
                            <FormControl type="password" placeholder="Password" />
                        </Col>
                    </FormGroup>

                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button>取消</Button>
                <Button bsStyle="primary">提交</Button>
            </Modal.Footer>

        </Modal.Dialog>
    </div>


);

module.exports = login;


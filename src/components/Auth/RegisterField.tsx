import React from 'react';
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';

interface RegisterFieldProps {
    label: string;
    formFeedBack: string;
    formText: string;
    onChange: {};

}

const RegisterField: React.FC<RegisterFieldProps> = (props) => {
    return (
        <FormGroup>
            <Label>{props.label}</Label>
            <Input />
            <FormFeedback>{props.formFeedBack}</FormFeedback>
            <FormText>{props.formText}</FormText>
        </FormGroup>

    )
}

export default RegisterField;
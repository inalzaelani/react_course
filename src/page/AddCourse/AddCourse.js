import React from "react";
import {Form, Button, ButtonGroup} from "react-bootstrap";

import FormInput from "../../component/FormInput";
import useAddCourse from "./useAddCourse";
import {
    StyledButton,
    StyledButtonReset,
    StyledButtonSubmit,
    StyledContainer,
    StyledForm,
    StyledTitle
} from "./AddCourse.styled";

const FORM_LIST = [
    {id : 'title',label : 'Title',type : 'text',placeholder : 'Enter course title'},
    {id : 'description',label : 'Description',type : 'text',placeholder : 'Enter course description'},
    {id : 'typeId',label : 'Type',type : 'text',placeholder : 'Enter course type'},
    {id : 'courseFile',label : 'Course File',type : 'file',placeholder : 'Enter course file'},
    {id : 'level',label : 'Level',type : 'text',placeholder : 'Enter course level'},
    {id : 'duration',label : 'Duration',type : 'text',placeholder : 'Enter course duration'},
]

const AddCourse = () => {
    const {getter, setter} = useAddCourse();
    return (
        <StyledContainer>
            <StyledTitle>Add Course</StyledTitle>
            <StyledForm>
                {FORM_LIST.map((form) => (
                    <FormInput
                    label = {form.label}
                    type = {form.type}
                    placeholder = {form.placeholder}
                    value = {getter[form.id]}
                    onChange = {setter[form.id]}
                    />
                ))}
                <ButtonGroup>
                    <StyledButtonSubmit type="submit"> Submit </StyledButtonSubmit>
                    <StyledButtonReset type="reset"> Cancel </StyledButtonReset>
                </ButtonGroup>
            </StyledForm>
        </StyledContainer>
    )
}

export default AddCourse;
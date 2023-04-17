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
    {id : 'duration',label : 'Duration',type : 'number',placeholder : 'Enter course duration'},
]


const AddCourse = (props) => {
    const {getter, setter} = useAddCourse();
    const {onNavigate,addCourse} = props

    const handleSubmit = (event) => {
        event.preventDefault();

        const newErrors = {};
        if (!getter.title) {
            alert("Please enter a title");
        }
        else if (!getter.description) {
            alert("Please enter a description")
        }
        else if (!getter.typeId) {
           alert("Please enter a type")
        }
        else if (!getter.level) {
            alert("Please enter a level")
        }
        else if (!getter.duration) {
            alert("Please enter a duration")
        }
        else if (!getter.courseFile) {
            alert("Please enter a course file")
        }

        else{
            const newCourse = {
                title: getter.title,
                description: getter.description,
                type: getter.typeId,
                level: getter.level,
                duration: getter.duration,
                file: getter.courseFile
            };

            addCourse(newCourse);
            onNavigate("course-list");
        }

    };

    return (
        <StyledContainer>
            <StyledTitle>Add Course</StyledTitle>
            <StyledForm onSubmit={handleSubmit}>
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
                    <StyledButtonReset type="reset" onClick={()=>onNavigate("course-list")}> Cancel </StyledButtonReset>
                </ButtonGroup>
            </StyledForm>
        </StyledContainer>
    )
}

export default AddCourse;
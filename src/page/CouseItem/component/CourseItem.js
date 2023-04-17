import React   from "react";
import {Button,ButtonGroup,Col} from "react-bootstrap";
import Styled from "styled-components";
import {StyledListItem} from "./CourseItem.styled";

const CourseItem = (props) => {
    const {title, description,type,level,duration} = props;
    return(
        <StyledListItem>
            <Col>
                <h3>Title :{title}</h3>
                <p>Description :{description}</p>
            </Col>
            <ButtonGroup>
                <Button variant="primary">Edit</Button>
                <Button variant="danger">Delete</Button>
                <Button variant="secondary">Download</Button>
            </ButtonGroup>
        </StyledListItem>
    )
}
export default React.memo(CourseItem)
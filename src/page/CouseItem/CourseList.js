import EmptyList from "../../component/EmptyList";
import CourseItem from "./component/CourseItem";
import Styled from "styled-components";
import {StyledListGroup, StyledTitle} from "./CourseList.styled";
import {Button,Container} from "react-bootstrap";
const ListItem = (props) => {
    const {data} = props
    return(
        <>
            {data.map((course,index)=>{
                return (
                    <StyledListGroup>
                        <CourseItem
                            title={course.title}
                            description = {course.description}
                            key={index}
                        />
                    </StyledListGroup>
                ) }
            )}
        </>
    )
}
const CourseList = (props) => {
    const {courses,onNavigate} = props
    return (
        <Container>
            <Button  onClick={() =>onNavigate("add-course")}>Add Course</Button>
            <StyledTitle>Course List Page</StyledTitle>
            {courses.length > 0 ? <ListItem data={courses} /> : <EmptyList  text = "Data Masih Kosong"/>}
        </Container>
    )
}
export default CourseList
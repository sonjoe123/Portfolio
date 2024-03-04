import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, imgUrl, onClick }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={onClick}>
        <img src={imgUrl} alt={title} style={{ width: '50%', height: '50%' }} />
        <div className="proj-txtx">
          <h4>{title}</h4>
        </div>
      </div>
    </Col>
  )
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Card = ({ title, text, icon }) => {
  return (
    <StyledCard>
      <div className="icon">
        <FontAwesomeIcon icon={icon} size="4x" />
        <h3>{title}</h3>
      </div>
      <p>{text}</p>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  padding: 0.5rem;
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
  }
  h3 {
    margin-left: 1rem;
    background-color: white;
    color: black;
    padding: 1rem;
  }
`;

export default Card;

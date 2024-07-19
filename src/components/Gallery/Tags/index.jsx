import styled from 'styled-components';
import tags from './tags.json';

const StylizedSearchText = styled.h3`
  font-size: 24px;
  color: #d9d9d9;
  margin: 0;
`;

const StylizedTag = styled.button`
  font-size: 24px;
  color: #ffffff;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #c98cf1;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;
  margin-top: 56px;
`;

const Div = styled.div`
  display: flex;
  gap: 24px;
  justify-content: end;
`;

const Tags = () => {
  return (
    <TagsContainer>
      <StylizedSearchText>Search for tags: </StylizedSearchText>
      <Div>
        {tags.map((tag) => (
          <StylizedTag key={tag.id}>{tag.titulo}</StylizedTag>
        ))}
      </Div>
    </TagsContainer>
  );
};

export default Tags;

import styled from 'styled-components';
import tags from './tags.json';

const SearchText = styled.p`
  font-size: 24px;
  color: #d9d9d9;
`;

const Tags = () => {
  return (
    <>
      <SearchText>Search for tags: </SearchText>
      {tags.map((tag) => (
        <button key={tag.id}>{tag.titulo}</button>
      ))}
    </>
  );
};

export default Tags;

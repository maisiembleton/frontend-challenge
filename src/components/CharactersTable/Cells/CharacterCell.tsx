import { Box, Checkbox } from '@mui/material';
import { Character } from '../../../types';
import { StyledCell } from './StyledCell';

export const CharacterCell = ({ character }: { character: Character }) => {
  return (
    <StyledCell component="th" scope="row" sx={{ display: 'flex', alignItems: 'center' }}>
      <Checkbox
        inputProps={{ 'aria-label': 'Character name' }}
        sx={{ marginRight: 1, color: '#217AFF' }}
        name={character.name}
      />
      <Box
        component="img"
        src={character.image}
        alt={character.name}
        sx={{
          width: '40px',
          height: '40px',
          borderRadius: '40px',
          border: '1px solid #217AFF',
          marginRight: 2,
        }}
      />
      {character.name}
    </StyledCell>
  );
};
